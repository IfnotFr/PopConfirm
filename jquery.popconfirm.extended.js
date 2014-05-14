/*!
 * PopConfirm 0.2a PlipPLop modified
 * http://ifnot.github.io/PopConfirm/
 *
 *  MODIFIED BY: Plippie Plop
 *	@EditAdd: 5-04-2014
 *
 * Use jQuery & Bootstrap
 * http://jquery.com/
 * http://getbootstrap.com/
 *
 * Copyright 2014 Anael Favre and other contributors
 * Released under the MIT license
 * https://raw.github.com/AnaelFavre/PopConfirm/master/LICENCE
 *
 	
 	 global Options:
		
			$('.popconfirm').popConfirm();
 
		 	$('.popconfirm')popConfirm({
				title: 'Confirmation',
				content: 'Are you really sure ?',
				placement: 'right',
				container: 'body',
				yesBtn:   'Ok',
				noBtn:    'Cancel',
				url : 'Url to go to' 	 
	   });
 
 		Per element Element options:
		
		<a  class="popconfirm"
			data-popconfirm-to="url"
			data-popconfirm-title="Title"
			data-popconfirm-content="Some content"
			data-popconfirm-placement="top|left|right|bottom"
			data-popconfirm-container="body|element"
			data-popconfirm-yes="Confirm"
			data-popconfirm-no="Cancelation"
		>

 */

(function($){
	$.fn.extend({
		popConfirm: function(options) {
			var defaults = {
				title: 'Confirmation',
				content: 'Are you really sure ?',
				placement: 'right',
				container: 'body',
				yesBtn:   'Ok',
				noBtn:    'Cancel',
				url : '' 
			};

			var options =  $.extend(defaults, options);
			var last = null;
			
			return this.each(function() {
				var self = $(this);
				var arrayActions = [];
				
								
				// If there are jquery click events
				if (typeof(jQuery._data(this, "events")) !== "undefined" && typeof(jQuery._data(this, "events")['click']) !== "undefined") {
					
					// Save all click handlers
					for (var i = 0; i < jQuery._data(this, "events")['click'].length; i++) {
						arrayActions.push(jQuery._data(this, "events")['click'][i].handler);
					}
					
					// unbind it to prevent it firing
					$(self).unbind("click");
				}
				
				// PlipPLop: detect custom attribute data from clicked element
				var elData = self.data();	
				console.log(elData);
				if (elData){
					options.title = elData.popconfirmTitle ? elData.popconfirmTitle : options.title; 
					options.content = elData.popconfirmContent ? elData.popconfirmContent : options.content; 
					options.placement = elData.popconfirmPlacement ? elData.popconfirmPlacement : options.placement;
					options.container = elData.popconfirmContainer ? elData.popconfirmContainer : options.container; 
					options.yesBtn =  elData.popconfirmYes ? elData.popconfirmYes : options.yesBtn; 
					options.noBtn =  elData.popconfirmNo ? elData.popconfirmNo : options.noBtn; 
					options.url = elData.popconfirmTo  ? elData.popconfirmTo : self.attr('href'); // link 
				}
								
				
				// If there are hard onclick attribute
				if(typeof self.attr('onclick') !== 'undefined') {
					// Extracting the onclick code to evaluate and bring it into a closure
					var code = self.attr('onclick');
					arrayActions.push(function() {
						eval(code);
					});
					$(self).removeAttr('onclick');
				}
				
				// If there are href link defined
				// PlipPlop: if emty or # then presume no href				
				if(typeof options.url !== 'undefined' && options.url !=="#" ) {
					
					// Assume there is a href attribute to redirect to
					arrayActions.push(function() {
						window.location.href = options.url;
					});
				}
	
				
				// If the button is a submit one
				if(typeof self.attr('type') !== 'undefined' && self.attr('type') === 'submit') {
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
					content: options.content + 
						'<p class="button-group" style="margin-top: 10px; text-align: center;">'+
							'<button type="button" class="btn btn-small confirm-dialog-btn-abord">' + options.noBtn + '</button>'+
							'<button type="button" class="btn btn-small btn-inverse confirm-dialog-btn-confirm">' + options.yesBtn + '</button>'+							
						'</p>'
				}).on('click',function(e) {
					if(last && last !== self) last.popover('hide');
					last = self;
				});
				
						
				$(document).on('click', function(){
				    if (last) last.popover('hide');
				});

				self.bind('click', function(e) {				
					e.preventDefault();
					e.stopPropagation();					
					self.popover('show');
					
					if(options.container==="body"){
					
						$('.popover').on('click','.confirm-dialog-btn-confirm', function(e) {
							for(var i = 0; i < arrayActions.length; i++) {						
								arrayActions[i].apply(self);
							}
							self.popover('hide');
						}).on('click','.confirm-dialog-btn-abord', function(e) {						
							console.log(options);
							self.popover('hide');
							$(this).off(e);
						});
					
					} else {					
					
						self.next('.popover').on('click','.confirm-dialog-btn-confirm', function(e) {
							for(var i = 0; i < arrayActions.length; i++) {
								arrayActions[i].apply(self);
							}						
							self.popover('hide');
						}).on('click','.confirm-dialog-btn-abord', function(e) {						
							console.log('cancel');
							self.popover('hide');
							$(this).off(e);
						});
										
					}
										
				});
			});
		}
	});   
})(jQuery);
