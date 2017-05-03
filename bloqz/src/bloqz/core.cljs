(ns bloqz.core
  (:require [bloqz.logic  :refer [winning-position can-move?]]
            [bloqz.helpers :refer [add-points offsets]]
            [reagent.core :as r]))

;; Sample Level 1 | id 0 is the red block
(def sample-level (r/atom [{:id 0 :type :horizontal :x 1 :y 2}
                           {:id 1 :type :horizontal :x 0 :y 3}
                           {:id 2 :type :horizontal :x 2 :y 5}
                           {:id 3 :type :vertical   :x 3 :y 1}
                           {:id 4 :type :vertical   :x 4 :y 1}
                           {:id 5 :type :vertical   :x 2 :y 3}
                           {:id 6 :type :vertical   :x 1 :y 4}]))

(defn next-level []
  (js/alert "Game Won!"))

(defn move-block [id direction]
  (case direction
    :right (swap! sample-level update-in [id :x] inc)
    :left  (swap! sample-level update-in [id :x] dec)
    :up    (swap! sample-level update-in [id :y] dec)
    :down  (swap! sample-level update-in [id :y] inc)))

(defn attempt-move [direction id]
  (fn [evt]
    (let [block       (nth @sample-level id)
          destination (add-points (direction offsets) block)
          valid-move? (can-move? block destination @sample-level)
          could-win?  (and (= (select-keys block [:x :y]) winning-position)
                           (= direction :right)
                           (zero? id))]
      (cond
        (and valid-move? could-win?) (next-level)
        valid-move?                  (move-block id direction)
        :else                        (js/console.log "Invalid move")))))

(defn vertical-block [x y id]
  [:div.vertb {:style {:top (* y 50) :left (* x 50)}}
   [:button.move-up {:on-click (attempt-move :up id)} "U"]
   [:button.move-down {:on-click (attempt-move :down id)} "D"]])

(defn horizontal-block [x y id]
  [:div.horb {:style {:top (* y 50) :left (* x 50)}}
   [:button.move-left {:on-click (attempt-move :left id)} "L"]
   [:button.move-right {:on-click (attempt-move :right id)} "R"]])

(defn main []
  [:div.game
    (for [{id :id x :x y :y t :type} @sample-level]
      (if (= t :vertical)
        ^{:key id} [vertical-block x y id]
        ^{:key id} [horizontal-block x y id]))])

(r/render [main] (js/document.querySelector "#app"))
