(function($){
	$.fn.extend({
		popConfirm: function(options) {
			var defaults = {
				title: 'Confirmation',
				content: 'Are you really sure ?',
				placement: 'right'
			};
			var options =  $.extend(defaults, options);
			
			return this.each(function() {
				var $elem = $(this);
				
				//is there an existing click handler registered
				if ($elem.data('events') && $elem.data('events').click) {
					//save the handler (TODO: assumes only one)
					var targetClickFun = $elem.data('events').click[0].handler;
					//unbind it to prevent it firing
					$elem.unbind('click');
				}
				else{
					//assume there is a href attribute to redirect to
					var targetClickFun = function() {window.location.href = $elem.attr('href');};
				}
				
				$elem.popover({
					trigger: 'manual',
					title: options.title,
					html: true,
					placement: options.placement,
					content: options.content + '\
						<p class="button-group" style="margin-top: 10px; text-align: center;">\
							<button type="button" class="btn btn-small btn-danger confirm-dialog-btn-confirm">Oui</button>\
							<button type="button" class="btn btn-small confirm-dialog-btn-abord">Non</button>\
						</p>\
					'
				});
						
				$elem.bind('click', function(e) {
					e.preventDefault();
					
					$elem.popover('show');
					
					$elem.next('.popover').find('.confirm-dialog-btn-confirm').bind('click', function(e) {
						targetClickFun();
						$elem.popover('hide');
					});
					$elem.next('.popover').find('.confirm-dialog-btn-abord').bind('click', function(e) {
						$elem.popover('hide');
					});
				});
			});
		}
	});   
})(jQuery);