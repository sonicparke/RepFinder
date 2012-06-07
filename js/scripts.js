function InitializeMaps(argument) {
	var maps = {
		primary:'world_en',
		secondary:'usa_en',
		thirdiary: 'usaCT_en'
	}

	var currentMap = '#' + maps.primary;

	$('.vmap').each(function() {
	   if($(this).is(currentMap)) {
	     $(this).show();
	   } else {
	     $(this).hide();
	   }
	});

	$('.vmapContainer').on('click', '#close', function (e) {
		$(this).closest('.vmap').fadeOut();
	})

	$('#' + maps.primary).vectorMap({
		    map: maps.primary,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#006491',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_data_global,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	ShowSecondaryMap(maps.secondary, 'us', label, maps);
		    }
		});

		
		
		$('#' + maps.secondary).vectorMap({
		    map: maps.secondary,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#006491',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_data_states,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
	    		ShowSecondaryMap(maps.thirdiary, 'ct', label, maps);
		    }
		});

		$('#' + maps.thirdiary).vectorMap({
		    map: maps.thirdiary,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#006491',
		    enableZoom: true,
		    showTooltip: true,
		    // values: rep_data,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
	    		$('#dialog').dialog({
	    			position: { 
				        my: 'center',
				        at: 'center',
				        of: $('.vmapContainer')
				    }
	    		});
		    }
		});
		
}

function ShowSecondaryMap (id, code, label, maps) {
	if(label === code) {
    		$('#' + id).fadeIn().css({'position': 'absolute', 'top': 0, 'left': 0});
    	} else {
    		$('#' + id).fadeOut();
    		$('#dialog').dialog({
    			modal: true,
    			position: { 
			        my: 'center',
			        at: 'center',
			        of: $('.vmapContainer')
			    }
    		});
    	}
	
}