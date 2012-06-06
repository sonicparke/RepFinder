(function () {
	$('#vmapUSA').hide();
	console.log('hidden')
})();

function InitializeMaps(argument) {
	$('#vmapWorld').vectorMap({
		    map: 'world_en',
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    color: '#f4f3f0',
		    hoverOpacity: 0.7,
		    selectedColor: '#666666',
		    enableZoom: true,
		    showTooltip: true,
		    values: sample_data,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    onRegionClick: function  (event, label, index) {
		    	if(label === 'us') {
		    		console.log('label is US: ' , label)
		    		
		    	} else {
		    		console.log('label: ' , label)
		    	}
		    	
		    }
		});
		$('#vmapUSA').vectorMap({
		    map: 'usa_en',
		    backgroundColor: '#fff',
		    borderColor: '#c9c9c9',
		    borderWidth: 3,
		    color: '#84bfda',
		    hoverOpacity: 0.7,
		    selectedColor: '#006491',
		    enableZoom: true,
		    showTooltip: true,
		    // values: sample_data,
		    scaleColors: ['#C8EEFF', '#006491'],
		    normalizeFunction: 'polynomial',
		    selectedRegion: 'OK',
		    onRegionClick: function  (event, label, index) {
		    	if(label === 'us') {
		    		console.log('label is US: ' , label)
		    		
		    	} else {
		    		console.log('label: ' , label)
		    	}
		    	
		    }
		});
}