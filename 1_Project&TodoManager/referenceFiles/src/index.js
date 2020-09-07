const tdForm = document.querySelector(".js-toDoForm"),
    tdInput = tdForm.querySelector("input"),
    tdList = document.querySelector(".js-p-list"),
    fList = document.querySelector(".js-f-list"),
    TODOS_LS = 'TODOLIST',
    FINISHED_LS = 'FINISHED';
let toDos = [];
let finishedToDos = [];

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);                  
        });
    } else {
        console.log('There is nothing TO DO!');
    }
}
    function paintToDo(text) {
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
        li.id = newId;
        tdList.appendChild(li); 
        const toDoObj = {
            text: text,
            id: newId
        };
        toDos.push(toDoObj);
        saveToDos();
    }
        function deleteToDo(e) {
            const btn = e.target;
            const li = btn.parentNode;
            tdList.removeChild(li);
            const cleanToDos = toDos.filter(function(toDo){
                return toDo.id != parseInt(li.id);
            });
            toDos = cleanToDos;
            saveToDos();
        }
        function saveToDos() {
            localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
        }
        function moveToFinishedToDo(e) {
            deleteToDo(e);
            let btn = e.target;
            const li = btn.parentNode;
            const movingText = li.childNodes[0].innerText;
            paintFinished(movingText);
            // receiveFinished(li, btn);
        }
        // function receiveFinished(li, btn) {
        //     li.id = `New${finishedToDos.length+1}`;
        //     btn = li.childNodes[2];
        //     btn.innerHTML = "&#127761";
        //     fList.appendChild(li);
        //     const newText = li.childNodes[0].innerText;
        //     const finishedObj = {
        //         text: newText,
        //         id: li.id
        //     };
        //     finishedToDos.push(finishedObj);
        //     saveFinished();
        // }

function loadFinished() {
    const loadedFinishedToDos = localStorage.getItem(FINISHED_LS);
    if (loadedFinishedToDos !== null){
        const parsedFinished = JSON.parse(loadedFinishedToDos);
        parsedFinished.forEach(function(finished) {
            paintFinished(finished.text);
        });
    } else {
        console.log('There is nothing DONE....');
    }
}
    function paintFinished(text) {
        const li = document.createElement("li");
        const f_delBtn =document.createElement("button");
        const undoBtn = document.createElement("button");
        const f_span = document.createElement("span");
        const newFId = `New${finishedToDos.length+1}`;
        f_delBtn.innerHTML = "&#10060";
        undoBtn.innerHTML = "&#127761";
        f_span.innerText = text;
        f_delBtn.addEventListener("click", deleteFinished);
        undoBtn.addEventListener("click", moveToToDo);
        li.appendChild(f_span);
        li.appendChild(f_delBtn);
        li.appendChild(undoBtn);
        li.id = newFId;
        fList.appendChild(li);
        const finishedObj = {
            text: text,
            id: li.id
        };
        finishedToDos.push(finishedObj);
        saveFinished();
    }
        function deleteFinished(e){
            const btn = e.target;
            const li = btn.parentNode;
            fList.removeChild(li);
            const cleanFinishedToDos = finishedToDos.filter(function(finishedToDo){ 
                return finishedToDo.id != li.id;
            });
            console.log(finishedToDos);
            finishedToDos = cleanFinishedToDos;
            console.log(finishedToDos);
            saveFinished();
        }
        function saveFinished() {
            localStorage.setItem(FINISHED_LS,JSON.stringify(finishedToDos));
        }
        function moveToToDo(e) {
            deleteFinished(e);
            let btn = e.target;
            const li = btn.parentNode;
            const movingText = li.childNodes[0].innerText; 
            paintToDo(movingText);
            // receiveToDo(li, btn);
        }
        // function receiveToDo(li, btn) {
        //     li.id = toDos.length+1;
        //     btn = li.childNodes[2];
        //     btn.innerHTML = "&#127765";    
        //     tdList.appendChild(li);
        //     const newText = li.childNodes[0].innerText;
        //     const toDoObj = {
        //         text: newText,
        //         id: li.id
        //     };
        //     toDos.push(toDoObj);
        //     saveToDos();
        // }

function handleSubmit(e) {
    e.preventDefault(); 
    const currentValue= tdInput.value;
    paintToDo(currentValue);
    tdInput.value = "";
}

function init() {
    loadToDos();
    loadFinished();
    tdForm.addEventListener("submit",handleSubmit);
}
init();