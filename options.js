// 0 - not hovered, 1 - hovered, 2 - clicked, will be shown forever
var op_animal_hov = 0;
var op_place_hov = 0;
var op_color_hov = 0;
var op_type_hov = 0;
var cartoonClicked = false;
var colorValue = "#76d275"

// all the options are hidden at the beginning
$(".animal-favorites").hide();
$(".animal-places").hide();
$(".animal-colors").hide();
$(".animal-type").hide();

// The "Animal" icon on hover
$('#option-animal').hover(function() {
	// wasnt' hovered
	if (op_animal_hov == 0) {
		op_animal_hov = 1; 
		$(".animal-favorites").show();
		if (op_place_hov == 1) {
			$(".animal-places").hide();
			op_place_hov = 0; 
		}
		if (op_color_hov == 1) {
			$(".animal-colors").hide();
			op_color_hov = 0; 
		}
                if (op_type_hov == 1) {
			$(".animal-type").hide();
			op_type_hov = 0; 
		}
	}
});

// The "Place" icon on hover
$('#option-place').hover(function() {
	// wasnt' hovered
	if (op_place_hov == 0) {
		op_place_hov = 1; 
		$(".animal-places").show();
		if (op_animal_hov == 1) {
			$(".animal-favorites").hide();
			op_animal_hov = 0; 
		}
		if (op_color_hov == 1) {
			$(".animal-colors").hide();
			op_color_hov = 0; 
		}
                if (op_type_hov == 1) {
			$(".animal-type").hide();
			op_type_hov = 0; 
		}
	}
});

// The "Color" icon on hover
$('#option-color').hover(function() {
	// wasnt' hovered
	if (op_color_hov == 0) {
		op_color_hov = 1; 
		$(".animal-colors").show();
		if (op_place_hov == 1) {
			$(".animal-places").hide();
			op_place_hov = 0; 
		}
		if (op_animal_hov == 1) {
			$(".animal-favorites").hide();
			console.log('2');
			op_animal_hov = 0; 
		}
                if (op_type_hov == 1) {
			$(".animal-type").hide();
			op_type_hov = 0; 
		}
	}
});

// The "Cartoon" icon on hover
$('#option-cartoon-real').hover(function() {
	// wasnt' hovered
	/*if (op_type_hov == 0) {
		op_type_hov = 1; 
		$(".animal-type").show();
		if (op_place_hov == 1) {
			$(".animal-places").hide();
			op_place_hov = 0; 
		}
		if (op_animal_hov == 1) {
			$(".animal-favorites").hide();
			console.log('2');
			op_animal_hov = 0; 
		}
                if (op_color_hov == 1) {
			$(".animal-colors").hide();
			console.log('tt');
			op_color_hov = 0; 
		}
	}*/
    if (op_type_hov == 0) {
		op_type_hov = 1;
    }else{
        op_type_hov = 0;
    }
});
 

// select a particular animal
for (i = 0; i < 12; i++) {
	$('#animal' + (i + 1)).click(function() {  

		if (this.className === "animalimageselected") {
			this.className = "animalimage";
			// deselect every other animal 
			for (j = 0; j < 12; j++) {
				document.getElementById('animal' + (j+1)).style.backgroundColor="white";
			}
			op_animal_hov = 0;
                        setFavorite("");
                        Search();
		} else {
			op_animal_hov = 2;
			for (j = 0; j < 12; j++) {
				document.getElementById('animal' + (j+1)).style.backgroundColor="white";
				document.getElementById('animal' + (j+1)).className = 'animalimage';

			}
			this.className = "animalimageselected";
			this.style.backgroundColor=colorValue;
			// Add the animal to the search query and perform the search 
			setFavorite($(this).find('img').map(function() { return this.alt; }).get().toString());                          
                        Search();
		}
	});
}
// select a particular place
for (i = 0; i < 10; i++) {
	$('#place' + (i + 1)).click(function() {  

		// select this
		if (this.className === "place-imageselected") {
			this.className = "place-image";
			// deselect every other place  
			for (j = 0; j < 10; j++) {
				document.getElementById('place' + (j+1)).style.backgroundColor="white";
			}
			op_place_hov = 0;
                        setPlace("");
                        Search();
		} else {
			op_place_hov = 2;
			for (j = 0; j < 10; j++) {
				document.getElementById('place' + (j+1)).style.backgroundColor="white";
				document.getElementById('place' + (j+1)).className = 'place-image';
			}
			this.className = "place-imageselected";
			this.style.backgroundColor=colorValue;
			// Add the place to the search query and perform the search 
			setPlace($(this).find('img').map(function() { return this.alt; }).get().toString());  
                        Search();
		}
	});
}
// select a particular color
for (i = 0; i < 9; i++) {
	$('#color' + (i + 1)).click(function() {  

		// select this
		if (this.className === "colorselected") {
			this.className = "color";
			// deselect every other color  
			for (j = 0; j < 9; j++) {
				document.getElementById('color' + (j+1)).style.backgroundColor="white";
			}
			op_color_hov = 0;
                        setColor("");
                        Search();
		} else {
			op_color_hov = 2;
			for (j = 0; j < 9; j++) {
				document.getElementById('color' + (j+1)).style.backgroundColor="white";
				// change other classes to 'color'
				document.getElementById('color' + (j+1)).className = 'color';
			}
			this.className = "colorselected";
			this.style.backgroundColor=colorValue;
			// Add the color to the search query and perform the search 
			setColor($(this).attr("title").toString());
                        Search();
		}
	});
}

// select a particular cartoon
$("#option-cartoon-real").click(function(){
    if(cartoonClicked === false){
        op_type_hov = 2;
        this.style.backgroundColor="rgb(0, 206, 0)";
        // Add the cartoon option to the search query and perform the search 
        setType($(this).find('img').map(function() { return this.alt; }).get().toString());    
        Search();  
        cartoonClicked = true;
    }else{
        this.style.backgroundColor="";
        op_type_hov = 0;
        setType("");
        Search();
        cartoonClicked = false;
    }
});

// select a particular animal-type (cartoon or real)
for (i = 0; i < 2; i++) {
	$('#animal-type' + (i + 1)).click(function() {  
		// select this
		if (this.className === "animal-typeselected") {
			this.className = "animal-type";
			// deselect every other animal-type (cartoon or real)
			for (j = 0; j < 2; j++) {
				document.getElementById('animal-type' + (j+1)).style.backgroundColor="white";
			}
			op_type_hov = 0;
                        setType("");
                        Search();
		} else {
			op_type_hov = 2;
			for (j = 0; j < 2; j++) {
				document.getElementById('animal-type' + (j+1)).style.backgroundColor="white";
				document.getElementById('animal-type' + (j+1)).className = 'animal-type';
			}
			this.className = "animal-typeselected";
			this.style.backgroundColor=colorValue;
                        setType($(this).find('img').map(function() { return this.alt; }).get().toString());    
                        Search();                       
		}
	});
}

// on-hover behavior of animal-options
 for (i = 0; i < 12; i++) {
 	$('#animal' + (i + 1)).hover(
	 	function() {
	 		if (this.className === 'animalimage') {
	 			this.style.backgroundColor=colorValue; 
	 		}
	 	 }, function() {
	 	 	// not selected
	 	 	if (this.className === "animalimage") {
		 	 	this.style.backgroundColor="white";
		 	} 
	 	});
 }

// on-hover behavior of color-options
  for (i = 0; i < 9; i++) {
 	$('#color' + (i + 1)).hover(
	 	function() {
	 		if (this.className === 'color') {
	 			this.style.backgroundColor=colorValue; 
	 		}
	 	 }, function() {
	 	 	// not selected
	 	 	if (this.className === "color") {
		 	 	this.style.backgroundColor="white";
		 	} 
	 	});
 }

// on-hover behavior of place-options
  for (i = 0; i < 10; i++) {
 	$('#place' + (i + 1)).hover(
	 	function() {
	 		if (this.className === 'place-image') {
	 			this.style.backgroundColor=colorValue; 
	 		}
	 	 }, function() {
	 	 	// not selected
	 	 	if (this.className === "place-image") {
		 	 	this.style.backgroundColor="white";
		 	} 
	 	});
 }
 

// hide all the icons when scrolling down
 function hideOptions(){
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        $("#options").hide("slow");
       
    } else {
       $("#options").show("slow");
       
    }
 }
 










