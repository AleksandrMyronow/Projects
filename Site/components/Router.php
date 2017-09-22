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
    private function getUri()
    {
        if (!empty($_SERVER['REQUEST_URI'])) {
            return trim($_SERVER['REQUEST_URI'], '/');
        }
    }

    public function run()
    {

        //Получить строку запроса

        $uri = $this->getUri();

        //Проверить наличие такого запроса в routes.php

        foreach ($this->routes as $uriPattern => $path) {

            //Сравниваем $uriPattern и $path

            if(preg_match("~$uriPattern~", $uri)) {


                //Получаем внутренний путь из внешнего согласно правилу
                $internalRoute = preg_replace("~$uriPattern~", $path, $uri);
//                print_r($internalRoute);

                //Определить контроллер, action и параметры

                $segments = explode('/', $internalRoute);

                $mainFolder = array_shift($segments);
                $siteFolder = array_shift($segments);
                $indexFile = array_shift($segments);

                $controllerName = array_shift($segments) . 'Controller';
                $controllerName = ucfirst($controllerName);

                $actionName = 'action' . ucfirst(array_shift($segments));

                echo '<br>controller name: '.$controllerName;
                echo '<br>action name: '.$actionName;


                $parameters = $segments;
                echo "<pre>";
                print_r($parameters);
                echo "</pre>";



                //Подключить файл класса-контроллера

                $controllerFile = ROOT . '/controllers/' . $controllerName . '.php';

                if (file_exists($controllerFile)) {
                    include_once ($controllerFile);
                }

                //Создать объект, вызвать метод (т.е. action)

                $controllerObject = new $controllerName;

                $result = call_user_func_array(array($controllerObject, $actionName), $parameters);

                if ($result != null) {
                    break;
                }


            }
        }
    }
}