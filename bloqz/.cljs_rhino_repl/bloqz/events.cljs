(ns bloqz.events
  (:require [bloqz.helpers   :as h]
            [bloqz.gamestate :as s]
            [bloqz.logic     :as l]))

(def click-sound (js/Audio. "latch.mp3"))

;; level-cleared :: IO()
(defn level-cleared [which-lv]
  (swap! s/board-level update-in [0 :x] (partial + 2))
  (js/setTimeout
    (fn []
      (js/alert "Level Cleared")
      (swap! s/ui-state update :puzzle inc)
      (swap! s/ui-state assoc  :moves  0))
;      (reset! s/board-level (inc which-lv)))
    700))

;; move-block :: Atom -> Int -> Coords -> Ref Eff()
(defn move-block [level id direction]
  (.play click-sound)
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
        (and valid-move? could-win?) (level-cleared (:lvl @s/ui-state))
        valid-move?                  (move-block level id direction)
        :else                        (js/console.log "Invalid move")))))

;; type alias Coords :: Map
;;   {:x Int :y Int}
