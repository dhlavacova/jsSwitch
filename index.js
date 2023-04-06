
console.log('Hallo')

const birne=document.querySelector('.ausschalten')
const button=document.querySelector('button')
const handleClickButton=()=>
{if(birne.className==='ausschalten'){
    birne.classList.remove('ausschalten')
    birne.classList.add('anschalten')}
    else{birne.classList.remove('anschalten')
    birne.classList.add('ausschalten')}

}

button.addEventListener('click', handleClickButton)