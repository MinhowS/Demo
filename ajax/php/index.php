<?php
/**
 * Created by PhpStorm.
 * User: lxd
 * Date: 2017/12/20
 * Time: 23:40
 */
header("Content-type:text/html;charset=utf-8");
$name = $_REQUEST['name'];//接收名字
$pwd = $_REQUEST['pwd'];//接收密码

$dataName = 'admin';//存在服务端的名字
$dataPwd = '123456';//存在服务端的密码
if ($name != $dataName) {
    echo "该用户不存在";
} else {
    if ($pwd != $dataPwd) {
        echo "密码错误!";
    } else {
        echo "登陆成功";
    }
}