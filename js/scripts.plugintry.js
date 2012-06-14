function InitializeMaps(argument) {
	var maps = [
		{
			name:'world_en',
			code: 'world'
		},{
			name:'usa_en',
			code: 'us'

		},{
			name:'usaCT_en',
			code: 'ct'
		},{
			name:'usaPA_en',
			code: 'pa'
		}
	]



	var currentMap = '#' + maps[0].name;
	// console.log(currentMap)
	jQuery('.vmap').each(function() {
	   if(jQuery(this).is(currentMap)) {
	     jQuery(this).show();
	   } else {
	     jQuery(this).hide();
	   }
	});

	jQuery('.vmapContainer').on('click', '#close', function (e) {
		jQuery(this).closest('.vmap').fadeOut();
		e.preventDefault();
		e.stopPropagation();
	})


	jQuery.each(maps, function (i) {
		var rep_values = 'rep_values_' + maps[i].code;
		console.log(rep_values)
		jQuery('#' + maps[i].name).vectorMap({
		    map: maps[i].name,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#006491',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_values,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	ShowSecondaryMap(label, maps[i], index);
		    }
		});
	})
	

		
	
		
}

function ShowSecondaryMap (label, maps, index) {
	console.log(label, maps, maps.name, maps.code)

	if(label === 'us') {
		jQuery('#usa_en').fadeIn().css({'position': 'absolute', 'top': 0, 'left': 0});
	}
	else if(label === 'ct') {
    	jQuery('#usaCT_en').fadeIn().css({'position': 'absolute', 'top': 0, 'left': 0});
	}
	else if(label === 'pa') {
    	jQuery('#usaPA_en').fadeIn().css({'position': 'absolute', 'top': 0, 'left': 0});
	}
	else {
		ShowDialog(index, label);
	}
	
}

function ShowDialog (index, label) {
	jQuery('#dialog').dialog({
		position: { 
	        my: 'center',
	        at: 'center',
	        of: jQuery('.vmapContainer')
	    },
	    title: index
	}).html(RenderTemplate(rep_data_us[label], 'dialog'));
}


// RENDERS THE HANDLEBARS TEMPLATE
function RenderTemplate (data, templateId, renderToId, callback) {
	
	if(renderToId){
		var source = $("#" + templateId + "Template").html(); //GET THE HTML TEMPLATE
		var template = Handlebars.compile(source); //COMPILE THE TEMPLATE
		$("#" + renderToId + "TemplateArea").html(template(data)); //ADD THE TEMPLATE TO THE TEMPATE AREA
	} else {
		var source = $("#" + templateId + "Template").html(); //GET THE HTML TEMPLATE
		var template = Handlebars.compile(source); //COMPILE THE TEMPLATE
		$("#" + templateId + "TemplateArea").html(template(data)); //ADD THE TEMPLATE TO THE TEMPATE AREA
	};
	if(callback){
		console.log('callback')
	}
}