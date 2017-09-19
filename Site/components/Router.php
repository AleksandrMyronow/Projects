<?php
/**
 * Created by PhpStorm.
 * User: aleksandrmyronov
 * Date: 19.09.17
 * Time: 16:01
 */

class Router
{
    private $routes;

    public function __construct()
    {
        $routesPath = ROOT.'/config/routes.php';
        $this->routes = include ($routesPath);
    }

    /**
     * Returns request string
     * @return string
     */
    public function getUri()
    {
        if (!empty($_SERVER['REQUEST_URI'])) {
            return trim($_SERVER['REQUEST_URI'], '/');
        }
    }

    public function run()
    {

        //Получить строку запроса

        $uri = $this->getUri();
        echo $uri;

        //Проверить наличие такого запроса в routes.php
        //Если есть совпадение, определить какой контроллер и action образовывают запрос
        //Подключить файл класса-контроллера
        //Создать объект, вызвать метод (т.е. action)

    }

}