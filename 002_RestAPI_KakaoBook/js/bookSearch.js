const RESTAPI_KEY = "KakaoAK 04a4ff3be0ac0a724b4508b9c7ae2d07";
const BOOK_API = "https://dapi.kakao.com/v3/search/book";

function getBook() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", RESTAPI_KEY);
    const URL = "https://dapi.kakao.com/v3/search/book";
    const target = "target=title";
    const query = "query='JAVA'";

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const myRequest = new Request(`${URL}?${target}&${query}`, myInit);

    fetch(myRequest)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
}


function init() {
    getBook();

}

init();