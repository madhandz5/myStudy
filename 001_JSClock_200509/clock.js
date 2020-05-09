const clockContainer = document.querySelector(".js-clock")
,clockTitle = clockContainer.querySelector("h1");

// 시간을 얻어옴
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 삼항연산자, 분, 초가  한자리일때 예쁘지 않아서 분이나 초가 한자리일때는 앞에 0을 더해서 보여준다.
    clockTitle.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 모든 함수를 이곳에서 관리 한다.
function init() {
    getTime();
    setInterval(getTime,1000);
}

init();