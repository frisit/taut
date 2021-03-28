<?php

// ввод логина и пароля и получение куки

$login = 'admin';
$password = 'password';

$cookie = [ 'cookie' => 'v234baw5432nqw323er'];

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



    if ($requestLogin == $login && $requestPassword == $password) {
        # нужно писать именно echo $cookie иначе в ответ ничего не придёт

        #нужно вернуть куку и статус подвтерждения
        echo json_encode(
            [
                'cookie' => 'v234baw5432nqw323er',
                'status' => 'Авторизация пройдена успешно'
            ]
        );
    } else {
        echo json_encode( ['status' => 'Неверные данные']);
    }

}
