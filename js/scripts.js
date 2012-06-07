function InitializeMaps(argument) {
	var maps = {
		primary:'world_en',
		secondary:'usa_en',
		thirdiary: 'usaCT_en',
		fourthiary: 'usaPA_en'
	}

	// var thisRegion = $.each(rep_data_states, function  (key, value) {
	//     				console.log(key)
	//     			})


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
		    selectedColor: '#84bfda',
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
		    selectedColor: '#84bfda',
		    enableZoom: true,
		    showTooltip: true,
		    values: rep_data_states,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	if(label === 'ct') {
		    		ShowSecondaryMap(maps.thirdiary, 'ct', label, maps);
		    	} 
		    	else if(label === 'pa') {
		    		ShowSecondaryMap(maps.fourthiary, 'pa', label, maps);
		    	} else {
		    		var salesRep = '<p>' + index + '</p>';
		    		$('#dialog').dialog({
		    			position: { 
					        my: 'center',
					        at: 'center',
					        of: $('.vmapContainer')
					    },
					    title: index
	    			}).html(salesRep);
	    			
	    			// console.log(index)
	    			for(var value in rep_data_states){
	    				console.log(value)
	    				// console.log(label)
	    				if(key = label){
		    				// console.log(key)
		    			} else {
		    				// console.log('looped but no label')
		    			}
	    			}
	    			
		    	}
		    }
		});

		$('#' + maps.thirdiary).vectorMap({
		    map: maps.thirdiary,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
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

		$('#' + maps.fourthiary).vectorMap({
		    map: maps.fourthiary,
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#84bfda',
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