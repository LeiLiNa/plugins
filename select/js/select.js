"use strict";
(function($){
    $.fn.myPlugin = function(option){
        var opt = option;
        this.css(opt);
        return this;
    }
})(jQuery);