import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function reset() {
    state.isRunning = document.documentElement.classList.remove('running')
    state.isRunning = false
    timer.updateDisplay()
}

export function setMore() {
    timer.updateDisplay(Number(el.minutes.textContent) + 5)
}

export function setLess() {
    timer.updateDisplay(Number(el.minutes.textContent) - 5)
    
    if(timer.updateDisplay.minutes = 0){
        reset()
        return
    }
}

export function forest() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.forest.play()
        return
    }

    sounds.forest.pause()
}

export function rain() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.rain.play()
        return
    }

    sounds.rain.pause()
}

export function coffe() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.coffe.play()
        return
    }

    sounds.coffe.pause()
}

export function fireplace() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.fireplace.play()
        return
    }

    sounds.fireplace.pause()
}

