(ns bloqz.gamestate
  (:require [reagent.core :as r]
            [bloqz.levels :as lv]))

(def ui-state    (r/atom {:lvl   1
                          :moves 0}))
(def board-level (r/atom (first lv/lvl-list)))
