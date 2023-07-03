//Selecting DOM element
const dice = document.querySelector('.dice');
const advice = document.querySelector('.advice');
const id = document.querySelector('.advice-id');

dice.addEventListener('click', ()=>{
    getAdvice();
})

const getAdvice = async()=>{
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    console.log(data);
    advice.textContent = `"${data.slip.advice}"`;
    id.textContent = `${data.slip.id}`;
}
