(ns perrita.core
  (:require [lib :refer [libfunc]]))

(defn cocoa [x]
  (let [ins (->> 5 (/ 5) (* 43))
        rin (range 1 10)]
    (println
      (str ins " " rin))))

(def pupu [] <=)

(defn droga
  "Moduledoc function"
  [x]
  (* x x))