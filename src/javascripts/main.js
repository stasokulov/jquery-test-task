/*
 * Initializes jQuery plugins on elements which have data-plugin="..." HTML
 * attribute.
 *
 * When plugin is being destroyed first parameter will be passed 'destroy'
 *
 * @example
 *     <div data-plugin="examplePlugin" data-xxx="123"></div>
 *
 * @example
 *     $.fn.examplePlugin = function (data) {
 *         if (data === 'destroy') {
 *             // Destroy plugin
 *             // ...
 *         } else {
 *             // Initialize plugin
 *             console.log(this, data.xxx);
 *         }
 *     };
 */

import $ from 'jquery';
import { initPlugins, destroyPlugins } from './lib/plugins';


// Example plugin
import './components/example';
import './components/animation';
import './components/validations';
import './components/lazy';
import './components/rotate';


$(() => {
    initPlugins();

    /*
     * @TODO Uncomment to check whether with multiple destroy / init calls
     * it still works correctly
     * For memory leaks we will check manually
     */
    // destroyPlugins();
    // initPlugins();
    // destroyPlugins();
    // initPlugins();
});
