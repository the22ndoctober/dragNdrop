let box = document.querySelectorAll('.block')
box.forEach(block=>{
    block.addEventListener('mousedown', ()=>{
        block.classList.toggle('block-disable')
        console.log('down')      
    })
})