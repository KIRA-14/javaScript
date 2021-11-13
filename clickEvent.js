let p = document.querySelector('p'); 

p.addEventListener('click', 
    (e)=>{ 
        p.textContent= p.textContent.substr(7) === ''
        ? `prodect${1}` 
        : `prodect${Number(p.textContent.substr(7)) + 1}`
    } 
);

let input = document.querySelector('input'); 

input.addEventListener('input',
 (e)=>{ console.log(e.target.value.length) 
    let rest = 60-e.target.value.length
    document.querySelector('span').textContent = rest
    if(e.target.value.length >= 50) {
        input.style.backgroundColor = 'Orange'
    } else {
        input.style.backgroundColor = 'white'
    }
});