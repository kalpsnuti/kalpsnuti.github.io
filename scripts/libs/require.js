(function(){
    window.exports = {
        imports:[],
        defaultObj:{},
        set default(input){
            for(i in input){
                this.defaultObj[i] = input[i];
            }
        },  
        get default(){
            return this.defaultObj;
        }
    };

    logoff = false;
    console.warn('type lofoff = true to turn off the logs');
    function parse (object){
        var objstr = '{';
        for (p in object) {
            if(typeof object[p] === 'object'){
                objstr = objstr + p+':'+parse(object[p])+',';
            }
            if(undefined !== object[p]){
                objstr = objstr+p+':'+object[p]+',';
            }
        }
        objstr = objstr.replace(/,\s*$/, "")+'}';
        return objstr;
    }

    window.log = function(message, object=null){
        if(logoff) return;

        if(null !== object){
            message = message + parse(object);
        }
        var today = new Date();
        today = '['+today.getHours()+today.getMinutes()+ ":" + today.getSeconds() + ":" + today.getMilliseconds()+']';
        console.log('%c'+today+'%c %s', 'background: #cecece; color: black', 'background:#384b82; color:#edd48e', message);
    }
})();

function require (module) {
    if (module === 'react')  return React;
    if (module === 'redux')  return Redux;
    if (module === 'react-dom')  return ReactDOM;
    if (module === 'react-redux')  return ReactRedux;
    if (module === 'redux-thunk')  return ReduxThunk;
    
    for (prop in exports){
        if(module.indexOf(prop) > -1){
            log(prop+' direct return from module '+ module);
            return exports[String(prop)];
        }
        
        if(exports[String(prop)] instanceof Object){
            let exported = exports[String(prop)];
            if(exported.hasOwnProperty('filename')){
                if(module.indexOf(exported.filename) > -1){
                    for (inerprop in exported){
                        if('filename' !== inerprop){
                            log(inerprop+' inner object return from '+module);
                            return exported[String(inerprop)];
                        }
                    }
                }
            }
        }
    }

    if(undefined !== exports.default) return exports.default;
}