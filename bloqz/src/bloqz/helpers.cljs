(ns bloqz.helpers)

(def offsets {:left  {:x -1 :y 0}
              :right {:x 1  :y 0}
              :up    {:x 0  :y -1}
              :down  {:x 0  :y 1}})

(defn add-points [p1 p2]
  {:x (+ (:x p1) (:x p2))
   :y (+ (:y p1) (:y p2))})
