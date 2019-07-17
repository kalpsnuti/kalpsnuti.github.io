(function(){
    [].slice.call(document.querySelectorAll('[type="text/babel"]'))
    .map(scriptSrc)
    .map(transform)
    .map(scriptify);

    function scriptSrc(script) {
        console.log('babeler scriptSrc called...');
        return script.src
        ? fetch(script.src)
        .then(function (resp) { return resp.text(); })
        : Promise.resolve(script.textContent)
    }

    function transform(srcPromise) {
        console.log('babeler transform called...');
        return srcPromise.then(function(src) {
            var code = Babel.transform(src, { 
                    presets: [
                        'es2015', 'stage-0', 'react'
                    ],
                    plugins: [
                       ['proposal-decorators', {'legacy':true}]
                    ]
                }
            ).code;
            return code;
        });
    }

    function scriptify(jsPromise) {
        console.log('babeler scriptify called...');
        jsPromise.then(function (js) {
            var s = document.createElement('script');
            s.textContent = js;
            document.head.appendChild(s);
        });
    }
})();