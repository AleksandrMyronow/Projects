<?php
/**
 * Created by PhpStorm.
 * User: aleksandrmyronov
 * Date: 21.09.17
 * Time: 16:05
 */

include_once ROOT. '/models/News.php';

class NewsController {

    public function actionIndex() {

        $newsList = array();
        $newsList = News::getNewsList();

        echo '<pre>';
        print_r($newsList);
        echo '</pre>';

        return true;
    }

    public function actionView($category, $id) {

        echo 'Просмотр одной новости';
        return true;
    }
}