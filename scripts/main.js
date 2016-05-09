require.config({
    baseUrl: "scripts",
    paths: { 
        // library
        jquery: "lib/jquery-1.12.0",
    	underscore: "lib/underscore",
        backbone: "lib/backbone",
    	marionette: "lib/backbone.marionette",
        handlebars: "lib/handlebars-v4.0.5",
        jqueryUi: "lib/jquery-ui",

        // application files
        topographyApp: "topographyApp",
        topographyLayoutView: "topography/topographyLayoutView",
        topographyMainView: "topography/topographyMainView",
        topographyRootView: "topography/topographyRootView",
        topographyTreeView: "topography/topographyTreeView",
        topographyCollection: "topography/topographyCollection",
        topographyModel: "topography/topographyModel"
    },
    shim: {
    	backbone: {
    		deps: ["jquery", "jqueryUi", "underscore"],
    		exports: "backbone"
    	}
    }
});
require(["backbone", "marionette", "topographyApp"],
    function(Backbone, Mnt, App) {
        App.start();
    }
);