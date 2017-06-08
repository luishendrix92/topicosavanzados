(ns bloqz.gamestate
  (:require [reagent.core :as r]
            [bloqz.levels :as lv]))

(def CLICK_SOUND (js/Audio. "latch.mp3"))
(def TADA_SOUND (js/Audio. "tada.mp3"))
(def TOTAL_LEVELS 5)
(def VICTORY_DELAY 600)

(def ui-state    (r/atom {:lvl   1
                          :moves 0}))
(def board-level (r/atom (first lv/lvl-list)))
