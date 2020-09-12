const inputForm = document.getElementById('inputForm');
let userName = inputForm.inputName;
const outputName = document.getElementById('outputName');
const askNameSection = document.getElementById('askName');
const calendarSection = document.getElementById('calendar');
const title = document.querySelector('head').querySelector('title');
/*
localStorage에 userName이 있는지 확인하는 함수
.getItem() 메서드를 사용하여 key에 해당하는 아이템의 유무에 따라 boolean return
*/
function isName() {
    if(localStorage.getItem('userName')) {
        // console.log(localStorage.getItem('userName'));
        return true;
    } else {
        return false;
    }
}

//input창에서 keydown 이벤트 발생시 호출되는 함수로, enter키가 눌리는 경우를 포착 하여 action
function whatKey(e) {
    const pressedKey = e.keyCode; // console.log(pressedKey);
    if(pressedKey === 13) {
        submitName();
    }
}

/*
input창에서 enter키가 눌렸을 경우 실행되어,
    이름창에 아무런 값도 입력되지 않으면 에러를 호출,
    value가 입력되었을 경우, localStorage에 저장하는 함수
*/
function submitName() {
    const name = userName.value;
    if(!name) {
        alert("please let me know your name");
    } else {
        // console.log(name);
        localStorage.setItem("userName",name);
    }
};

/*
webPage가 load될 때마다 실행되는 함수.
    localStorage에 userName값에 value의 유무에 따라, title과 텍스트 등에 변화를 주는 함수
*/
function init() {
    if(isName()) {
        outputName.innerText = `Hello, ${localStorage.getItem('userName')}`;
        title.innerText = `Hello, ${localStorage.getItem('userName')}`;
        askNameSection.classList.add('hidden');
        askNameSection.classList.remove('visible');
        calendarSection.classList.remove('hidden');    
        calendarSection.classList.add('visible');
    } else {
        outputName.innerText = 'Hello, World';
        title.innerText = 'Hello, World';
        askNameSection.classList.remove('hidden');
        askNameSection.classList.add('visible');
        calendarSection.classList.add('hidden');
        calendarSection.classList.remove('visible');
    }
}
// input창에서 keydown이벤트가 발생할때 마다 눌린 키가 enter인지는 확인하는 함수를 호출
userName.addEventListener('keydown', whatKey);
init();

// The Storage.getItem() method is used to get a data item from storage; in this case, we are testing to see whether the bgcolor item exists; if not, we run populateStorage() to add the existing customization values to the storage. If there are already values there, we run setStyles() to update the page styling with the stored values.

// Note: You could also use Storage.length to test whether the storage object is empty or not.