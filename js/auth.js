
let requestHeaders = {
    method: 'POST',
    body: {
        login: 'admin',
        password: 'password'
    }
}

// let requestBody = {
//     login: 'admin',
//     password: 'password'
// }

// нужно брать куку и отправлять на checkAuth

function checkAuth() {

    let cookieCheck = getCookie('cookie')

    let checkCookie = {
        cookie: cookieCheck
    }


    // # проверка аутентификации
    let checkAuthUrl = 'http://taut.ru/backend/checkAuth.php';

    fetch(checkAuthUrl, {
        method: 'POST',
        //body: JSON.stringify(requestBody)
        body: JSON.stringify(checkCookie)
    })
        .then(response => response.json())
        //.then(commits => alert(commits[0].author.login))
        //.then(data => console.log(data))
        .then(response => {
            console.log(response)
            if (
                response['cookie'] !== null
            ) {
                document.getElementsByClassName('view-cookies')[0].innerHTML = response['cookie'];
            }
            document.getElementsByClassName('view-auth')[0].innerHTML = response['status']
        })
}

// # получение куки из браузера, взял с learn.javascript.ru
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function sendAuth() {


    let authUrl = 'http://taut.ru/backend/setAuth.php';

    // не берутся данные из формы в 68 строке

    let auForm = document.authForm;

    // получаем элемент
    let formLogin = auForm.elements.login.value;
    console.log(formLogin)
    let formPassword = auForm.elements.password.value;
    console.log(formPassword)

    let requestBody = {
        login: formLogin,
        password: formPassword
    }


    fetch(authUrl, {
        method: 'POST',
        //body: 'login: "admin", password: "password"'
        body: JSON.stringify(requestBody)


    })
        .then(response => response.json())
        //.then(commits => alert(commits[0].author.login))
        //.then(data => console.log(data))
        .then(response => {
            document.getElementsByClassName('view-error')[0].innerHTML = response['status'];
            document.getElementsByClassName('view-cookies')[0].innerHTML = response['cookie'];
            console.log(response);
            // # задаём куки без срока годности
            document.cookie = "cookie = " + response['cookie']
        })


    // # проверка авторизации после того, как отправлены данные о логине и пароле
    // checkAuth();
}


// # вызов проверки авторизации
checkAuth()

