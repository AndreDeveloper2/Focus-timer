let darkmode = true
const buttontoggle = document.getElementById('toggle-mode')
const buttonMusicToggle = document.getElementById('music')

buttontoggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')

    const mode = darkmode ? 'dark' : 'light'

    event.currentTarget.querySelector('span').textContent = ` modo ${mode} Ativado`

    darkmode = !darkmode
} )

