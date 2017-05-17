    ng.config(function($routeProvider) {
   		$routeProvider
    .when("/a", {
        template : "<h1>Page 1</h1><p>page A Content goes here.</p>"
    }).when("/b", {
        template : "<h1>Page 2</h1><p>page B content</p>"
    }).otherwise({
        template : "<h1>default</h1><p>OOps! 404,</p>"
    });
});