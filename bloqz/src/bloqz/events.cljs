(ns bloqz.events
  (:require [bloqz.helpers   :as h]
            [bloqz.gamestate :as s]
            [bloqz.levels    :as lv]
            [bloqz.logic     :as l]))

;; load-level :: Int -> Ref Eff()
(defn load-level [to-load]
  (swap! s/ui-state assoc :lvl (inc to-load) :moves 0)
  (reset! s/board-level (nth lv/lvl-list to-load)))

;; level-cleared :: Int -> IO()
(defn level-cleared [which-lv]
  (swap! s/board-level update-in [0 :x] (partial + 2))
  (js/setTimeout
    (fn []
      (.play s/TADA_SOUND)
      (js/alert   (if (= which-lv s/TOTAL_LEVELS)
                    "Congrats, you've won!"
                    "Level Cleared"))
      (load-level (if (= which-lv s/TOTAL_LEVELS) 0 which-lv)))
    s/VICTORY_DELAY))

;; move-block :: Atom -> Int -> Coords -> Ref Eff()
(defn move-block [level id direction]
  (.play s/CLICK_SOUND)
  (swap! s/ui-state update :moves inc)
  (case direction
    :right (swap! level update-in [id :x] inc)
    :left  (swap! level update-in [id :x] dec)
    :up    (swap! level update-in [id :y] dec)
    :down  (swap! level update-in [id :y] inc)))

;; attempt-move :: Atom -> Keyword -> Int -> Ref Eff() | IO()
(defn attempt-move [level direction id]
  (fn [evt]
    (let [block       (nth @level id)
          destination (h/add-points (direction h/offsets) block)
          valid-move? (l/can-move? block destination @level)
          could-win?  (and (= destination l/winning-position)
                           (zero? id))]
      (cond
        could-win?  (level-cleared (:lvl @s/ui-state))
        valid-move? (move-block level id direction)
        :else       (js/console.log "Invalid move")))))

;; type alias Coords :: Map
;;   {:x Int :y Int}
