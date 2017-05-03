(ns bloqz.core
  (:require [bloqz.logic  :as b]
            [reagent.core :as r]))

(defn move [direction]
  (fn [evt]
    (let [block []
          destination ((offsets direction) block)])))

(def test-blocks (r/atom [{:id 2 :type :vertical   :x 3 :y 0}
                          {:id 1 :type :vertical   :x 0 :y 2}
                          {:id 0 :type :horizontal :x 1 :y 2}
                          {:id 3 :type :horizontal :x 2 :y 3}]))

(defn vertical-block [x y]
  [:div.vertb {:style {:top (* y 50) :left (* x 50)}}
   [:button.move-up "U"]
   [:button.move-down "D"]])

(defn horizontal-block [x y]
  [:div.horb {:style {:top (* y 50) :left (* x 50)}}
   [:button.move-left "L"]
   [:button.move-right "R"]])

(defn main []
  [:div.game
    (for [block @test-blocks]
      (if (= (:type block) :vertical)
        [vertical-block (:x block) (:y block)]
        [horizontal-block (:x block) (:y block)]))])

(r/render [main] (js/document.querySelector "#app"))
