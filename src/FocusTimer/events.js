import * as controls from "./elements.js";
import * as actions from "./actions.js"
import { updateDisplay } from "./timer.js";
import state from "./state.js";

export function setMin() {
  controls.minutes.addEventListener('click', (event) =>{
    const actionMin = event.target.dataset.action
    
    if(typeof actions[actionMin] != 'function'){
      return
    }
    actions[actionMin]()
    
  })
}

export function setMinFocus(){
  controls.minutes.addEventListener('focus', () => {
    controls.minutes.textContent = ""

    controls.minutes.onkeypress = (event) =>  /\d/.test(event.key)

    controls.minutes.addEventListener('blur', (event) => {
      let time = event.currentTarget.textContent
      time = time > 60 ? 60 : time

      state.minutes = time
      state.seconds = 0

      updateDisplay()
      controls.minutes.removeAttribute('contenteditable')
    })
  })
}

export function registerClock() {
  controls.clock.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') {
      return
    }
    
    actions[action]()
  })
}

export function registerMusic() {
  controls.music.addEventListener('click', (event) => {
    const actionMusic = event.target.dataset.action

    if(typeof actions[actionMusic] != 'function'){
      return
    }

    actions[actionMusic]()
    })

  }

