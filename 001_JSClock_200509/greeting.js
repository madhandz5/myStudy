const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
    //이벤트 버블링을 막아, 페이지가 새로고침됨을 막는다.
    event.preventDefault ();
    const currentValue = input.value;
    //이름을 입력받으면 form 에 있는 value 값을 이름에 출력한다.
    paintGreeting(currentValue);
    // form 에서 입력받은 이름을 localStorage에 저장한다.
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}

function paintGreeting(text) {

    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // 유저 없음
        askForName();
    } else {
        // 유저 있음
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();