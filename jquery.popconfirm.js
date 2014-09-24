/*!
* PopConfirm 0.3
* http://ifnot.github.io/PopConfirm/
*
* Use jQuery & Bootstrap
* http://jquery.com/
* http://getbootstrap.com/
*
* Copyright 2014 Anael Favre and other contributors
* Released under the MIT license
* https://raw.github.com/AnaelFavre/PopConfirm/master/LICENCE
*
* Thanks to contributors : 
* Thomas Hanson https://github.com/diresquirrel
* Mohamed Aymen https://github.com/kernel64
*/

(function($){
  $.fn.extend({
    popConfirm: function(options) {
      var defaults = {
        title: 'Confirmation',
        content: 'Are you really sure ?',
        placement: 'right',
        container: 'body',
        yesBtn:   'Yes',
        noBtn:    'No'
      };
      var options =  $.extend(defaults, options);
      var last = null;

      return this.each(function() {
        var self = $(this);
        var arrayActions = [];
        var arrayDelegatedActions = [];
        var eventToConfirm;
        
        // Load data-* attriutes
        for(var optName in options) {
          var optValue = $(this).attr('data-confirm-' + optName);

          // For some browsers, `attr` is undefined; for others, `attr` is false.  Check for both.
          if (typeof optValue !== typeof undefined && optValue !== false) {
            options[optName] = optValue;
          }
        }

        // If there are jquery click events
        if (typeof(jQuery._data(this, "events")) != "undefined" && typeof(jQuery._data(this, "events")['click']) != "undefined") {

          // Save all click handlers
          for (var i = 0; i < jQuery._data(this, "events")['click'].length; i++) {
            arrayActions.push(jQuery._data(this, "events")['click'][i].handler);
          }

          // unbind it to prevent it firing
          $(self).unbind("click");
        }

        // If there are jquery delegated click events
        if (self.data('remote') && typeof(jQuery._data(document, "events")) != "undefined" && typeof(jQuery._data(document, "events")['click']) != "undefined") {

          // Save all delegated click handlers that apply
          for (var i = 0; i < jQuery._data(document, "events")['click'].length; i++) {
            var elmType = self[0].tagName.toLowerCase();
            if(typeof jQuery._data(document, "events")['click'][i].selector != "undefined" && jQuery._data(document, "events")['click'][i].selector.indexOf(elmType + "[data-remote]") > -1)
              arrayDelegatedActions.push(jQuery._data(document, "events")['click'][i].handler);
          }
        }

        // If there are hard onclick attribute
        if(typeof self.attr('onclick') != 'undefined') {
          // Extracting the onclick code to evaluate and bring it into a closure
          var code = self.attr('onclick');
          arrayActions.push(function() {
            eval(code);
          });
          $(self).removeAttr('onclick');
        }

        // If there are href link defined
        if(!self.data('remote') && typeof self.attr('href') != 'undefined') {
          // Assume there is a href attribute to redirect to
          arrayActions.push(function() {
            window.location.href = self.attr('href');
          });
        }

        // If the button is a submit one
        if(typeof self.attr('type') != 'undefined' && self.attr('type') == 'submit') {
          // Get the form related to this button then store submiting in closure
          var form = $(this).parents('form:first');
          arrayActions.push(function() {
            form.submit();
          });
        }

        self.popover({
          trigger: 'manual',
          title: options.title,
          html: true,
          placement: options.placement,
          container: options.container,
          content: options.content + '\
          <p class="button-group" style="margin-top: 10px; text-align: center;">\
          <button type="button" class="btn btn-small btn-danger confirm-dialog-btn-confirm">' + options.yesBtn + '</button>\
          <button type="button" class="btn btn-small confirm-dialog-btn-abord">' + options.noBtn + '</button>\
          </p>'
        }).click(function(e) {
          if(last && last !== self) last.popover('hide').removeClass('popconfirm-active');
          last = self;
        });

        $(document).on('click', function(){
          if (last) last.popover('hide').removeClass('popconfirm-active');
        });

        self.bind('click', function(e) {
          eventToConfirm = e;

          e.preventDefault();
          e.stopPropagation();

          $('.popconfirm-active').not(self).popover('hide').removeClass('popconfirm-active');
          self.popover('show').addClass('popconfirm-active');

          $(document).find('.popover .confirm-dialog-btn-confirm').bind('click', function(e) {
            for(var i = 0; i < arrayActions.length; i++) {
              arrayActions[i].apply(self);
            }

            for(var i = 0; i < arrayDelegatedActions.length; i++) {
              arrayDelegatedActions[i].apply(self, [eventToConfirm.originalEvent]);
            }

            self.popover('hide').removeClass('popconfirm-active');
          });
          $(document).find('.popover .confirm-dialog-btn-abord').bind('click', function(e) {
            self.popover('hide').removeClass('popconfirm-active');
          });
        });
      });
    }
  });
})(jQuery);
