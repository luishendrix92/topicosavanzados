(ns bloqz.logic
  (:require [clojure.set :refer [intersection]]))

(def winning-position {:x 4 :y 2})

; Returns a list of x and y coordinates in vector form that
; a certain block occupies in the cartesian plain.
; occupied-cells :: Block -> List List [Int Int]
(defn occupied-cells [block]
  (let [offset-x (if (= (:type block) :horizontal) 1 0)
        offset-y (if (= (:type block) :vertical) 1 0)]
    [[(:x block) (:y block)]
     [(+ (:x block) offset-x) (+ (:y block) offset-y)]]))

; Determines if a block can be placed at a certain destination
; by checking for collision inside and boundary-wise.
; can-move? :: Block -> Coords -> List Block
(defn can-move? [block destination blocks]
  (let [to-move (-> block (merge destination) occupied-cells)
        other-blocks (->> blocks
                          (filter #(not= % block))
                          (map occupied-cells)
                          (reduce concat))]
    (empty? (intersection (set to-move) (set other-blocks)))))

;; type alias Block :: Map
;;   {:x Int :y Int :type :horizontal|:vertical :id Int}
;; type alias Coords :: Map
;;   {:x Int :y Int}
