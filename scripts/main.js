let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


// console.log(myButton, 1)
// console.log(myHeading, 2)

function setUserName(){
    let myName = prompt('请输入名字');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'bu是' + myName + '的小可爱';
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'bu是' + storedName + '的小可爱';
}

myButton.onclick = function() {
    setUserName();
}


