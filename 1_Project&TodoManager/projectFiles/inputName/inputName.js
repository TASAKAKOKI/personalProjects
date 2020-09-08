
const inputForm = document.getElementById('inputForm');
// let userName = document.getElementsByName('inputName');
let userName = inputForm.inputName;
const outputName = document.getElementById('outputName');
const askNameSection = document.getElementById('askName');
const calendarSection = document.getElementById('calendar');
const title = document.querySelector('head').querySelector('title');
// const title = head.title;
// console.log(title);
//----------------------------------------------------
//우선 페이지가 로드 되었을 때, localStorage에 userName이 저장되어 있는가 여부에 따라,
//화면 상단에 나타낼 h1태그의 택스트를 정해주는 함수를 만들자.

/*
localStorage에 userName이 있는지 확인하는 함수
/.getItem() 메서드를 사용하여 key에 해당하는 아이템의 유무에 따라 다른 값 return하는 함수 만들기
*/
function isName() {
    if(localStorage.getItem('userName')) {
        // console.log(localStorage.getItem('userName'));
        return true;
    } else {
        return false;
    }
}
function whatKey(e) {
    const pressedKey = e.keyCode; // console.log(pressedKey);
    if(pressedKey === 13) {
        submitName();
    }
}
function submitName() {
    const name = userName.value;
    if(!name) {
        alert("please let me know your name");
    } else {
        // console.log(name);
        localStorage.setItem("userName",name);
    }
};

function init() {
    if(isName()) {
        outputName.innerText = `Hello, ${localStorage.getItem('userName')}`;
        title.innerText = `Hello, ${localStorage.getItem('userName')}`;
        askNameSection.classList.add('hidden');
        calendarSection.classList.remove('hidden');    
    } else {
        outputName.innerText = 'Hello, World';
        title.innerText = 'Hello, World';
        askNameSection.classList.remove('hidden');
        calendarSection.classList.add('hidden');
    }
}
userName.addEventListener('keydown', whatKey);
init();

/*
만약 localStorage에 userName이 없다면, 
*/


// The Storage.getItem() method is used to get a data item from storage; in this case, we are testing to see whether the bgcolor item exists; if not, we run populateStorage() to add the existing customization values to the storage. If there are already values there, we run setStyles() to update the page styling with the stored values.

// Note: You could also use Storage.length to test whether the storage object is empty or not.