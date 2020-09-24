/*
 * Initializes jQuery plugins on elements which have data-plugin HTML
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


/*
 * Call plugins on all elements with data-plugin attribute
 */
function callPlugins (callback) {
    $('[data-plugin]').each(function () {
        const $element = $(this);
        const plugins = $element.data('plugin').trim().split(/\s+/);

        plugins.forEach((plugin) => {
            if (plugin in $element) {
                callback($element, plugin);
            }
        });
    });
}

/*
 * Initialize plugins
 */
export function initPlugins () {
    callPlugins(($element, plugin) => {
        // Call plugin and pass all data-... attributes in
        $element[plugin].call($element, $element.data());
    });
}

/*
 * Attempt destroying all plugins
 */
export function destroyPlugins () {
    callPlugins(($element, plugin) => {
        // Pass 'destroy' parameter, plugins are responsible for
        // removing all global event listeners, etc.
        $element[plugin]('destroy');
    });
}

export default {
    init: initPlugins,
    destroy: destroyPlugins
};
