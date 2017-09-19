<?php
/**
 * Created by PhpStorm.
 * User: aleksandrmyronov
 * Date: 19.09.17
 * Time: 15:51
 */

//FRONT CONTROLLER

//1. Общие настройки

ini_set('display_errors',1);
error_reporting(E_ALL);

//2. Подключение файлов системы

define('ROOT', dirname(__FILE__));
require_once (ROOT.'/components/Router.php');

//3. Установка соединения с БД



//4. Вызов Router
$router = new Router();
$router->run();


