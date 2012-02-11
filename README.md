jquery.browserTimezone for Rails time_zone_select
==============================

Plugin enables preselection of timezone from user's browser using timezone offset.

Usage
-----

### Quick setup

Reference the jquery.browserTimezone.js in your markup.
Now calling browserTimezone() on a select element will match and preselect the time zone.

### Rails tips

I recommend using it like any other jQuery plugin.

First by specifying a new CSS class called lets say 'browser-timezone'.
Then loading it on document load:

	$(function() {
		$('.browser-timezone').browserTimezone();
	});

After this when using time_zone_select in a view you can simply do something like this:

	<%= f.time_zone_select :time_zone, {}, {}, :class => (params[:action] == 'new' ? 'browser-timezone' : '') %>
	
Since you would usually want to preselect timezone only when creating some object (usually user) you add class only when the action is 'new'.