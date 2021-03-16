/*
    1 : text animation for the game title
    2 : show match area after start btn clicked
    3 : game start and the random number will build
    4 : when the checkbutton clicked,the checknumber function check the number to see player win or not

*/ 

// 1
window.addEventListener('load',()=>{
    const gametitle = document.querySelector('.prematch-area h1');
    let gametitletext = gametitle.textContent;
    let gametitlesplit = gametitletext.split('');
    gametitle.textContent = '';
    gametitlesplit.forEach(piece=>{
        if(piece === ' '){
        gametitle.innerHTML += `<span>‎‏‏‎&nbsp;</span>`;
        }
        gametitle.innerHTML += `<span>${piece}</span>`;
    })
    let showpiecetime = setInterval(showpiece,50);
    let pieceindex = 0;
    function showpiece(){
        const allspan = document.querySelectorAll('.prematch-area h1 span')[pieceindex];
        allspan.classList.add('showpiece')
        pieceindex++;
        if(pieceindex === gametitlesplit.length + 2){
            clearInterval(showpiecetime);
            showpiecetime = null;
        }
    }
})

// 2
const startgamebtn = document.querySelector('.prematch-area button');
startgamebtn.addEventListener('click',()=>{
    const prematcharea = document.querySelector('.prematch-area');
    prematcharea.classList.add('hide-pre-match-area');
    const maingamearea = document.querySelector('.maingame-area');
    maingamearea.classList.add('show-main-game-area');
    setTimeout(()=>{
        maingamearea.style.display = 'block';
    },500);
    gamestart()
})

// check number button scale animation when clicked
const checknumberbtn = document.querySelector('.check-numbers-btn');
checknumberbtn.addEventListener('click',(btn)=>{
    checknumbers()
    btn.target.style.transform = 'scale(0.95)';
    setTimeout(()=>{
        btn.target.style.transform = 'scale(1)'
    },200)
})

// 3
const inputnumbers = document.querySelectorAll('.maingame-area input');
function gamestart(){
    for(let i = 0 ; i < inputnumbers.length ; i++){
        let randomnumber = Math.floor(Math.random() * 10);
        inputnumbers[i].validnumber = randomnumber;
    }
}

// 4
let score = 0;
function checknumbers(){
    score = 0;
    for(let i = 0 ; i < inputnumbers.length ; i++){
        if(inputnumbers[i].value == inputnumbers[i].validnumber){
            inputnumbers[i].style.backgroundColor = 'green';
            score++;
        }else if(inputnumbers[i].value < inputnumbers[i].validnumber){
            inputnumbers[i].style.backgroundColor = 'pink';
        }else{
            inputnumbers[i].style.backgroundColor = 'blue';
        }
    }
    if(score === inputnumbers.length){
        setTimeout(()=>{
        alert('YOU WIN')
        },500)
    }
}