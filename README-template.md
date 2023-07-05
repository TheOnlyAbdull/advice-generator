# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Advice%20generator.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/TheOnlyAbdull/advice-generator)
- Live Site URL: [Add live site URL here](theonlyabdull.github.io/advice-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Javascript


### What I learned

I learnt how Asyn functions work and how the use the javascript fetch method effectively.


```css
.dice-con img:hover{
    box-shadow: 0 0 5px hsla(150, 100%, 66%, 0.5),0 0 10px hsla(150, 100%, 66%, 0.5),0 0 15px hsla(150, 100%, 66%, 0.5),0 0 20px hsla(150, 100%, 66%, 0.5);
}
```
```js
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
```

## Author

- Website - [Abdullahi Salaudeen](https://www.your-site.com)
- Frontend Mentor - [@theonlyabdull](https://www.frontendmentor.io/profile/theonlyabdull)
- Twitter - [@theonlyabdull](https://www.twitter.com/theonlyabdull)

