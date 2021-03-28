<?php

// проверка куки



$login = 'admin';
$password = 'password';
$cookie = 'v234baw5432nqw323er';

$cookieArr = ['cookie' => 'v234baw5432nqw323er'];

if (isset($_POST)) {

    # Получить JSON как строку
    $json_str = file_get_contents('php://input');

    # преобразовать JSON в массив
    $json_arr = json_decode($json_str, true);


//    echo '<pre>';
//    echo(var_dump($json_arr[login]));
//    echo '</pre>';


    $requestLogin = $json_arr['login'];
    $requestPassword = $json_arr['password'];

    $requestCookie = $json_arr['cookie'];


    if ($requestCookie == $cookie) {
        # нужно писать именно echo $cookie иначе в ответ ничего не придёт

        $json_return = [
            'cookie' => 'v234baw5432nqw323er',
            'status' => 'Администратор'
        ];

        echo json_encode($json_return);
    } else {

        $checkStatus = [
            'status' => 'Гость'
        ];

        echo json_encode($checkStatus);
    }

}



/*
Этот код спокойно работает если передать информацию через обычную форму

    if ($_POST["login"] == $login && $_POST["password"] == $password) {
        echo 'Ну здравствуй ' . htmlspecialchars($_POST["login"]);
    } else {
        //return 'fuck yeah';
        echo 'Ты кто такой, чувак?';
    }
 */