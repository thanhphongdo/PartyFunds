(function(){
    $.fn.form.settings.rules.greaterThan = function (inputValue, validationValue) {
        return inputValue > validationValue;
    }
})();