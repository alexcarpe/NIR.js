(function() {
    var nirRegex = /[12][ \.\-]?[0-9]{2}[ \.\-]?(0[1-9]|[1][0-2])[ \.\-]?([0-9]{2}|2A|2B)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{2}/

    // assuranceCode must be a string
    function nirValidator(assuranceCode){          
        if(nirRegex.test(assuranceCode)){
            var nir = Number(
                assuranceCode
                .replace("2A","19")
                .replace("2B","18")
                .slice(0, assuranceCode.length - 2)
            );
            return ( 97 - nir % 97 ) == Number( assuranceCode.slice(-2) );
        } else {
            return false;
        }
    }
    
    // Establish the root object, `window` (`self`) in the browser, `global`
    // on the server, or `this` in some virtual machines. We use `self`
    // instead of `window` for `WebWorker` support.
    var root = typeof self === 'object' && self.self === self && self ||
            typeof global === 'object' && global.global === global && global ||
            this;

    
     // Node.js
    if (typeof module === 'object' && module.exports) {
        module.exports = nirValidator;
    }
    // AMD / RequireJS
    else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return nirValidator;
        });
    }
    // included directly via <script> tag
    else {
        root.nirValidator = nirValidator;
    }
    
})();

