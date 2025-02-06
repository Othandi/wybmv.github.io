const messages = [
    "Are you sure?",
    "Are you really sure?",
    "Are you really really sure?",
    "Bubby pleeeaaassseee...",
    "PLEASE THINK ABOUT IT!!",
    "If you say no, I'm dropping out of uni and be sad forever...",
    "I'll be really sad...",
    "I'M FOR REAL!",
    "Ok... fine... I give up :<",
    "Just kidding! Please please please say yes 🥺"
];

let messageIndex = 0;

function handleNoClick(){
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
   yesButton.computedStyleMap.fontSize = '${currentSize * 1.8}px';
   yesButton.computedStyleMap.fontSize = 'scale(1.2';
   setTimeout(() => yesButton.computedStyleMap.transform = "scale(1)", 200);
}

function handleYesClick(){
    window.location.href = "yes_page.html";
}