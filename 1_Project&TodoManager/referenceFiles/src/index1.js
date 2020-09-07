const tdForm = document.querySelector(".js-toDoForm"),
    tdInput = tdForm.querySelector("input"),
    tdList = document.querySelector(".js-p-list"),
    fList = document.querySelector(".js-f-list");

const TODOS_LS = 'TODOLIST';
const FINISHED_LS = 'FINISHED';
let toDos = [];
let finishedToDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function deleteToDo(e) {
    // console.log(e);
    // console.log(e.target);
    // console.dir(e.target);
    // console.log(e.target.parentNode);
    const btn = e.target;
    const li = btn.parentNode;
    tdList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        // console.log(toDo.id, parseInt(li.id));
        return toDo.id != parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    // console.log(toDos);
    // console.log(cleanToDos);
}
function moveToFinishedToDo(e) {
    deleteToDo(e);
    let btn = e.target;
    const li = btn.parentNode;
    receiveFinished(li, btn);
}

function receiveFinished(li, btn) {
    li.id = `New${finishedToDos.length+1}`;
    btn = li.childNodes[2];
    btn.innerHTML = "&#127761";    
    fList.appendChild(li);
    const newText = li.childNodes[0].innerText;
    console.log(newText)
    const finishedObj = {
        text: newText,
        id: li.id
    };
    finishedToDos.push(finishedObj);
    saveFinished();
}
function paintFinished(text) {
    const li = document.createElement("li");
    const delBtn =document.createElement("button");
    const undoBtn = document.createElement("button");
    const span = document.createElement("span");
    const newFId = finishedToDos.length + 100000;
    delBtn.innerHTML = "&#10060";
    undoBtn.innerHTML = "&#127761";
    span.innerText = text;
    delBtn.addEventListener("click", deleteToDo);
    // undoBtn.addEventListener("click",moveToToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(undoBtn);
    li.id = newFId;
    fList.appendChild(li);
    const finishedObj = {
        text: text,
        id: li.id
    };
    toDos.push(finishedObj);
    saveToDos();
}

function saveFinished() {
    localStorage.setItem(FINISHED_LS,JSON.stringify(finishedToDos));
}

function paintToDo(text) {
    // console.log(text);
    const li = document.createElement("li");
    const delBtn =document.createElement("button");
    const doneBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "&#10060";
    doneBtn.innerHTML = "&#127765";
    span.innerText = text;
    delBtn.addEventListener("click", deleteToDo);
    doneBtn.addEventListener("click", moveToFinishedToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    // const div = document.querySelector(".js-pending");
    // const ul = div.childNodes[3];
    // const ul_li = ul.querySelectorAll("li");
    // let check = [];
    // for(let a = 0; a < ul_li.length; a++) {
    //     check.push(ul_li[a].id);
    // }
    // li.id = check.includes(newId)? newId+a : newId;
    // console.log(check);
    // console.log(ul_li[0]);
    tdList.appendChild(li); 
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
            // console.log(toDo.text);                        
        });
    } else {
        console.log('There is nothing TO DO!');
    }
}
function loadFinished() {
    const finishedToDos = localStorage.getItem(FINISHED_LS);
    if (finishedToDos !== null){
        const parsedFinished = JSON.parse(finishedToDos);
        parsedFinished.forEach(function(finished) {
            paintFinished(finished.text);
        });
    } else {
        console.log('There is nothing DONE....');
    }
}

function handleSubmit(e) {
    e.preventDefault(); // submit 이벤트의 default값은 웹 페이지의 refresh인데, 이를 방지함. 
    const currentValue= tdInput.value;
    paintToDo(currentValue);
    tdInput.value = ""; // 이것을 해줌으로서, 아까 위에서 submit 이벤트의 default값이 사라짐으로 인해, 텍스트 창에 입력한 값이 그대로 잔류하는 것을 방지함.
}

function init() {
    loadToDos();
    loadFinished();
    tdForm.addEventListener("submit",handleSubmit);
}
init();