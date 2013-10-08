# How to use

Include this line in your app.js;
```JavaScript
    /**
     * Custom transformer function for angular Id templates
     * @param  {String} template [description]
     * @param  {String} path     [description]
     * @param  {String} id       [description]
     * @return {Strung}          Transformed template id for '<script type="text/ng-template" id="' + id + '.html">' + template + '</script>'
     */
    function bootstrapTemplateTransformer(template, path, id) {
        /*jshint undef: false, unused: false */
        return 'custom-template-id';
    }
...

    ss.client.templateEngine.use(require('ss-clientangular'), '', {idTransformer: bootstrapTemplateTransformer});
```

You can also use this module for [Jade tamplate engine](http://jade-lang.com/) files

```JavaScript
/**
     * Another Custom transformer function for angular Id templates
     * @param  {String} template [description]
     * @param  {String} path     [description]
     * @param  {String} id       [description]
     * @return {Strung}          Transformed template id for '<script type="text/ng-template" id="' + id + '.html">' + template + '</script>'
     */
    function jadeTemplateTransformer(template, path, id) {
        /*jshint undef: false, unused: false */
        /*
         *  Path
         *      'path-to-your-project/client/templates/pages/about.jade'
         *  will be transformed into
         *      'pages/about.html'
         *
         */
        return path.replace( pathlib.join(process.env.PWD, '/client/templates/'), '').replace('.jade', '.html');
    }


ss.client.templateEngine.use(require('ss-clientangular'), '/pageElements', {jade: true, idTransformer: jadeTemplateTransformer});
```