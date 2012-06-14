function InitializeMaps(argument) {
	var maps = {
		WORLD:'world_en',
		US:'usa_en',
		IA: 'usaIA_en',
		NY: 'usaNY_en',
		NJ: 'usaNJ_en',
		PA: 'usaPA_en'
	}

	var currentMap = '#' + maps.WORLD;

	jQuery('.vmap').each(function() {
	   if(jQuery(this).is(currentMap)) {
	     jQuery(this).show();
	   } else {
	     jQuery(this).hide();
	   }
	});

	jQuery('.vmapContainer').on('click', '.close', function (e) {
		jQuery(this).closest('.vmap').fadeOut();
		e.preventDefault();
		e.stopPropagation();
	})

	jQuery('#' + maps.WORLD).vectorMap({
		    map: maps.WORLD,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_values_world,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	if(label === 'us') {
		    		ShowMap(maps.US, 'us', label, maps);
		    	}
		    	else {
		    		// ShowDialog(index, label, 'world');
		    		jQuery('#dialog').dialog({
						position: { 
					        my: 'center',
					        at: 'center',
					        of: jQuery('.vmapContainer')
					    },
					    title: index,
					    resizable: false
					}).html(RenderTemplate(rep_data_world[label], 'dialog'));
		    	}
		    	
		    }
		});

		
		
		jQuery('#' + maps.US).vectorMap({
		    map: maps.US,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_values_us,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	if(label === 'ny') {
		    		ShowMap(maps.NY, 'ny', label, maps);
		    	}
		    	else if(label === 'ia') {
		    		ShowMap(maps.IA, 'ia', label, maps);
		    	}
		    	else if(label === 'nj') {
		    		ShowMap(maps.NJ, 'nj', label, maps);
		    	}
		    	else if(label === 'pa') {
		    		ShowMap(maps.PA, 'pa', label, maps);
		    	}
		    	else {
		    		// ShowDialog(index, label, 'us');
		    		jQuery('#dialog').dialog({
						position: { 
					        my: 'center',
					        at: 'center',
					        of: jQuery('.vmapContainer')
					    },
					    title: index,
					    resizable: false
					}).html(RenderTemplate(rep_data_us[label], 'dialog'));
		    	}
		    }
		});


		jQuery('#' + maps.IA).vectorMap({
		    map: maps.IA,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_values_us_IA,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
	    		// ShowDialog(index, label, 'us_IA');
	    		jQuery('#dialog').dialog({
					position: { 
				        my: 'center',
				        at: 'center',
				        of: jQuery('.vmapContainer')
				    },
				    title: index,
					resizable: false
				}).html(RenderTemplate(rep_data_us_IA[label], 'dialog'));
		    }
		});

		jQuery('#' + maps.NY).vectorMap({
		    map: maps.NY,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_values_us_NY,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
	    		// ShowDialog(index, label, 'us_IA');
	    		jQuery('#dialog').dialog({
					position: { 
				        my: 'center',
				        at: 'center',
				        of: jQuery('.vmapContainer')
				    },
				    title: index,
					resizable: false
				}).html(RenderTemplate(rep_data_us_NY[label], 'dialog'));
		    }
		});

		jQuery('#' + maps.NJ).vectorMap({
		    map: maps.NJ,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_values_us_NJ,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
	    		// ShowDialog(index, label, 'us_IA');
	    		jQuery('#dialog').dialog({
					position: { 
				        my: 'center',
				        at: 'center',
				        of: jQuery('.vmapContainer')
				    },
				    title: index,
					resizable: false
				}).html(RenderTemplate(rep_data_us_NJ[label], 'dialog'));
		    }
		});

		jQuery('#' + maps.PA).vectorMap({
		    map: maps.PA,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_values_us_PA,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
	    		// ShowDialog(index, label, 'us_IA');
	    		jQuery('#dialog').dialog({
					position: { 
				        my: 'center',
				        at: 'center',
				        of: jQuery('.vmapContainer')
				    },
				    title: index,
					resizable: false
				}).html(RenderTemplate(rep_data_us_PA[label], 'dialog'));
		    }
		});
		
}

function ShowMap (id, code, label, maps) {
    		jQuery('#' + id).fadeIn().css({'position': 'absolute', 'top': 0, 'left': 0});
    		jQuery('.close').show();
}

function ShowDialog (index, label, code) {
	var data = rep_data_ + code;
	// console.log('rep_data_' + code + [label] )
	console.log(rep_data_us[label])
	jQuery('#dialog').dialog({
		position: { 
	        my: 'center',
	        at: 'center',
	        of: jQuery('.vmapContainer')
	    },
	    title: index,
		resizable: false
	}).html(RenderTemplate('rep_data_' + code + [label], 'dialog'));
}

	// RENDERS THE HANDLEBARS TEMPLATE
	function RenderTemplate (data, templateId, renderToId, callback) {
		if(renderToId){
			var source = jQuery("#" + templateId + "Template").html(); //GET THE HTML TEMPLATE
			var template = Handlebars.compile(source); //COMPILE THE TEMPLATE
			jQuery("#" + renderToId + "TemplateArea").html(template(data)); //ADD THE TEMPLATE TO THE TEMPATE AREA
		} else {
			var source = jQuery("#" + templateId + "Template").html(); //GET THE HTML TEMPLATE
			var template = Handlebars.compile(source); //COMPILE THE TEMPLATE
			jQuery("#" + templateId + "TemplateArea").html(template(data)); //ADD THE TEMPLATE TO THE TEMPATE AREA
		};
		if(callback){
			console.log('callback')
		}
	}