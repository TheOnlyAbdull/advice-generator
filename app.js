//Selecting DOM element
const dice = document.querySelector('.dice');
const advice = document.querySelector('.advice');
const id = document.querySelector('.advice-id');

dice.addEventListener('click', ()=>{
    getAdvice();
})


const getAdvice = ()=>{
    fetch(`https://api.adviceslip.com/advice`)
    .then(response =>{
        if (response.ok) {
            return response.json();
        }else{
            throw new Error(`request failed with status : ${response.status}`);
        }
    })
    .then(data => {
        advice.textContent = `"${data.slip.advice}"`;
        id.textContent = `${data.slip.id}`;
    })
    .catch(error => {
        console.error(`error : ${error}`);
    });
}