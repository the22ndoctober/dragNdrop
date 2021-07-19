let box = document.querySelectorAll('.block')
box.forEach(block=>{
    block.addEventListener('dragstart', e=>{
        e.preventDefault()
        e.target.classList.toggle('block-disable')
        // console.log('down')      
    })
    block.addEventListener('drop', e=>{
        e.target.classList.toggle('block-disable')
    })
})