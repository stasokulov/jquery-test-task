import $ from 'jquery';


/*
 * Example plugin used to demonstrate how to create a plugin which
 * will handle init / destroy events
 */
$.fn.examplePlugin = function (data) {
    if (data === 'destroy') {
        // Destructor of plugin instance
        // ...
    } else {
        // Initialize plugin
        console.log(this, data.xxx);
    }
};
