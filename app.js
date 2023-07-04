//Selecting DOM element
const dice = document.querySelector('.dice');
const advice = document.querySelector('.advice');
const id = document.querySelector('.advice-id');

dice.addEventListener('click', ()=>{
    getAdvice();
})

const getAdvice = async()=>{
    const res = await fetch(`https://api.adviceslip.com/advice`);
    if(res.status == 404){
        advice.textContent = `Something went wrong check your connection`;
        id.textContent = `----`;
    }
    const data = await res.json();
    advice.textContent = `"${data.slip.advice}"`;
    id.textContent = `${data.slip.id}`;
}
