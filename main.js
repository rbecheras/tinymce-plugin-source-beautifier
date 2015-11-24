/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 2015 SIRAP SAS All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

var beautify = require('js-beautify').html_beautify;

tinymce.PluginManager.add('sourcebeautifier', function(editor) {

	editor.on('GetContent',function(evt){
		if (evt.source_view) {
			evt.content = beautify(evt.content);			
		}
	});

});
