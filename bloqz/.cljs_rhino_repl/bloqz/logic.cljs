(ns bloqz.logic
  (:require [clojure.set :refer [intersection]]))

(def winning-position {:x 5 :y 2})
(def winning-position! [5 2])
(def outside-cells
  (mapcat (fn [i] [[-1 i] [i -1] [6 i] [i 6]]) (range 6)))

; Returns a list of x and y coordinates in vector form that
; a certain block occupies in the cartesian plain.
; occupied-cells :: Block -> List List [Int Int]
(defn occupied-cells [{:keys [x y type size] :as block}]
  (->> (range size)
       (map (fn [offset]
              (case type
                :horizontal [(+ x offset) y]
                :vertical   [x (+ y offset)])))))

; Determines if a block can be placed at a certain destination
; by checking for collision inside and boundary-wise.
; can-move? :: Block -> Coords -> List Block -> Boolean
(defn can-move? [block destination blocks]
  (let [to-move (-> block (merge destination) occupied-cells)
        other-blocks (->> blocks
                          (filter #(not= % block))
                          (mapcat occupied-cells))]
    (empty? (intersection (set to-move) (set other-blocks)))))

;; type alias Block :: Map
;;   {:x Int :y Int :type :horizontal|:vertical :id Int :size Int}
;; type alias Coords :: Map
;;   {:x Int :y Int}
