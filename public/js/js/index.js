    /**
     * You must include the dependency on 'ngMaterial' 
     */
    console.log("indexJS");

    var ng=angular.module('myApp', ['ngMaterial','ngRoute']);

	    ng.controller('main',function(){
	    	console.log("main controller");
	    })

	    ng.controller('home',function(){
	    	console.log("home");
	    })

	

