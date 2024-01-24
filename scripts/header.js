const header = document.querySelector('.header')
const headerBlock = document.querySelector('.header')

headerBlock.addEventListener('mousemove', evt => {
    const style = {style: `
            --move-x: ${(evt.clientX - window.innerWidth/2) * -.006}deg;
            --move-y: ${(evt.clientY - window.innerHeight/2) * -.01}deg;
        `
    }
    Object.assign(header, style)
})