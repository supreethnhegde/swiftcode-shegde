var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController',  function ($scope){
	$scope.messages = [
	{
		sender: "BOT",
		text: "what can i do for you?",
		time: "1:12 pm"
	},
	{
		sender: "USER",
		text: "what is 1+1",
		time: "1:13pm"
	},
	{
		sender: "USER",
		text: "who are you",
		time: "1:14pm"
	},
	];
	var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
	exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);    
	};	       

});