$(document).ready(function (e){
	var $browseBtn = $('#ImgerBrowseBTN');
	var user_settings = $browseBtn.attr('data-imger');
	user_settings = JSON.parse(user_settings);

	var settings = {
		width: 300,
		height: 200,
		mime: 'image/jpeg',
		quality: 100,
		autoborwse: true,
		note: '',
		form: 'imger.imagename',
	}

	settings = $.extend(settings, user_settings);
	
	settings.dataurl = {
		complete: function (data) {
			data.form.meta = data.meta;
			$('#ImgerBrowseLabel').html(data.meta.name + ' as <b>' + data.form.imagename + '</b>');	
			var v = 'imgerDjango:'+JSON.stringify(data.form)+':imgerDjango:'+data.dataURL;
			$('#ImgerDataURL').val(v);
		}
	}

	imger = new Imger({
		templateUrl: "/static/imger/templates/theme-standard.html"
	});

	$('#ImgerBrowseBTN').click(function(e){
		imger.open(settings);
	});
});
