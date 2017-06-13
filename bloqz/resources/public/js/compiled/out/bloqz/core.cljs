(ns bloqz.core
  (:require [bloqz.events    :as evts]
            [bloqz.gamestate :as s]
            [reagent.core    :as r]))

;; Changes the background of the block with the id of 0 to a
;; shade of red. It indicates that it's the important block.
;; bg :: Map -> Int -> Map
(defn bg [style id]
  (if (zero? id)
    (assoc style :background "#F31D2F")
    style))

;; vertical-block :: Atom -> Int -> Int -> Int -> Int -> Hiccup
(defn vertical-block [level x y id size]
  [:div.vertb {:style (bg {:top    (* y 50)
                           :left   (* x 50)
                           :height (* size 50)} id)
               :on-mouseDown #(swap! s/drag assoc :dragging? true)
               :on-mouseMove (evts/drag-block id)
               :on-mouseUp   #(swap! s/drag assoc :dragging? false)}
   [:button.move-up   {:on-click #(evts/attempt-move level :up   id)} "⬆️"]
   [:button.move-down {:on-click #(evts/attempt-move level :down id)} "⬇️"]])

;; horizontal-block :: Atom -> Int -> Int -> Int -> Int -> Hiccup
(defn horizontal-block [level x y id size]
  [:div.horb {:style (bg {:top   (* y 50)
                          :left  (* x 50)
                          :width (* size 50)} id)
              :on-mouseDown #(swap! s/drag assoc :dragging? true)
              :on-mouseMove (evts/drag-block id)
              :on-mouseUp   #(swap! s/drag assoc :dragging? false)}
   [:button.move-left  {:on-click #(evts/attempt-move level :left  id)} "⬅️"]
   [:button.move-right {:on-click #(evts/attempt-move level :right id)} "➡"]])

;; main :: Hiccup
(defn main [level]
  [:div.wrapper
   [:div.ui-state.chalkboard
    [:h2 (str "Puzzle: " (:lvl @s/ui-state)
              " | Moves: " (:moves @s/ui-state))]]
   [:div.game.chalkboard
    (for [{id :id x :x y :y t :type s :size} @level]
      (if (= t :vertical)
        ^{:key id} [vertical-block   level x y id s]
        ^{:key id} [horizontal-block level x y id s]))]])

(r/render [main s/board-level] (js/document.querySelector "#app"))
