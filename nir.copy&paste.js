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