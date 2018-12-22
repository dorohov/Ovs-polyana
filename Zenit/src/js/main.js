(function($) {
    "use strict"
    $(function() {
        $('#mainform').validationEngine()
    })
})(jQuery)

var phoneMask = new IMask(
    document.getElementById('mainform--phone'), {
      mask: '+{7}(000)000-00-00'
});