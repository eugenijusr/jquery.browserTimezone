(function($) {
	
	$.fn.browserTimezone = function(options) {
		
		var opts = $.extend({}, $.fn.browserTimezone.defaults, options);
		
		function padZeros(num, numZeros){
			var n = Math.abs(num);
			var zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
			var zeroString = Math.pow(10, zeros).toString().substr(1);
			if (num < 0){
				zeroString = '-' + zeroString;
			}
			return zeroString + n;
		}
		
		return this.each(function(elementIndex, element){
			var $this = $(element);
			
			// Retrieve browser time offset.
			var offset = -(new Date().getTimezoneOffset());
			
			// Convert time offset to hours and minutes.
			var hours = parseInt(offset / 60);
			var minutes = Math.abs(offset - 60 * hours);
			
			// Pad hours and minutes for matching with select options.
			var hourString = zeroPad(hours, 2);
			if (!hourString.indexOf('-') == 0) {
				hourString = '\\+' + hourString;
			}
			var minuteString = zeroPad(minutes, 2);
			
			// Loop though select options.
			$this.find('option').each(function(){
				var regexp = new RegExp("^\\(GMT" + hourString + ":" + minuteString + "\\).*$", "i");
				if (this.text.match(regexp) != null) {
					// If matches, simply select the first value ant exit the loop.
					$this.val(this.value);
					return false;
				}
			});
		});
	};

	$.fn.browserTimezone.defaults = {
	}

})(jQuery);