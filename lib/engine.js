/**
 * For more info please see
 *  https://github.com/socketstream/socketstream/blob/master/doc/guide/en/template_engine_wrappers.md
 *  https://github.com/socketstream/socketstream/blob/master/lib/client/template_engine.js
 *  https://github.com/socketstream/socketstream/tree/master/lib/client/template_engines
 *
 * @param  {String} root   Peoject root directory
 * @param  {Object} config Passed from the step on template engine initialization: ss.client.templateEngine.use(require('ss-clientangular'), '', {idTransformer: bootstrapTemplateTransformer});
 * @return {String}        Compiled template
 */
exports.init = function(root, config) {
    "use strict";

    return {
        name: 'Angular.js',
        process: function(template, path, id) {
            if (config && config.idTransformer) {
                id = config.idTransformer(template, path, id);
            }
            return '<script type="text/ng-template" id="' + id + '.html">' + template + '</script>';
        }
    };
};