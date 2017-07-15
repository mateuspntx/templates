/*
	Copyright (c) 2017 by Bridges (http://github.com/pxntxs)
*/

var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' +username.value+ '</h1>';
}
