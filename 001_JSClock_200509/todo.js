const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target,
        li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        // toDo의 id는 int 이고, li의 id는 String 이다.
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos() {
    //localStorage에는 object로 저장할 수 없고 모두 string으로 저장하기 때문에 JSON으로 변환해서 집어넣는다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li"),
        delBtn = document.createElement("button");
    delBtn.innerText = "Done";
    delBtn.addEventListener("click", deleteToDo)
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // localStorage에 저장된 toDos가 있으면 불러온다.
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);


}

init();