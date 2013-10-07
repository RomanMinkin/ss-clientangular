# Example Usage

Include this line in your app.js;

	/**
     * Transformer fir angualr Id templates
     * @param  {String} template [description]
     * @param  {String} path     [description]
     * @param  {String} id       [description]
     * @return {Strung}          Transformed template id for '<script type="text/ng-template" id="' + id + '.html">' + template + '</script>'
     */
    function bootstrapTemplateTransformer(template, path, id) {
        /*jshint undef: false, unused: false */
        return 'custom-template-id';
    }

    ss.client.templateEngine.use(require('ss-clientangular'), '', {idTransformer: bootstrapTemplateTransformer});

Templates are available in the JT global namespace, `var templateString = JT['templateName'](locals);`