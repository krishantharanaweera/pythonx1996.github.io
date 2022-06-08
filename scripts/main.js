let imgAttr=document.querySelector('img');

imgAttr.onclick=function(){
    let mySrc=imgAttr.getAttribute('src');

    if(mySrc==='./images/bg.jpg'){
        imgAttr.setAttribute('src','./images/bg2.jpg');
    }else{
        imgAttr.setAttribute('src','./images/bg.jpg');
    }
}

let myBtn=document.querySelector('button');
let myHead=document.querySelector('h1');

function setUsername(){
    let myName=prompt('Please enter your name:');
    localStorage.setItem('name',myName);
    myHead.textContent('Welcome '+myName+' to the university of Vavuniya.');
}

if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storedName=localStorage.getItem('name');
    myHead.textContent('Welcome '+myName+' to University of Vavuniya');
}