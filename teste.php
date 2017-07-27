<?php
/**
 * Created by PhpStorm.
 * User: Junior
 * Date: 24/06/2017
 * Time: 18:40
 */

//$name = isset($_REQUEST['name']) && !empty($_REQUEST['name']) ? $_REQUEST['name'] : 'Anônimo';

$name = isset($_REQUEST['name']) ? 'não vazio' : 'vazio';

echo 'Olá ' . $name;