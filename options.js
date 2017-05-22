// hide all the options at the beginning
$(".animal-favorites").hide();
$(".animal-places").hide();
$(".animal-colors").hide();
$(".animal-type").hide();

// 0 - not hovered, 1 - hovered, 2 - clicked, will be shown forever
var op_animal_hov = 0;
var op_place_hov = 0;
var op_color_hov = 0;
var op_type_hov = 0;


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


$('#option-place').hover(function() {
	// wasnt' hovered
	if (op_place_hov == 0) {
		op_place_hov = 1; 
		$(".animal-places").show();
		if (op_animal_hov == 1) {
			$(".animal-favorites").hide();
			console.log('1');
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

$('#option-cartoon-real').hover(function() {
	// wasnt' hovered
	if (op_type_hov == 0) {
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
	}
});
 

// option in this bar is chosen
// $('.animalimage').click(function() {  
// 	op_animal_hov = 2;
// });

// $('.place-image').click(function() {  
// 	op_place_hov = 2;
// });

// $('.color').click(function() {  
// 	op_color_hov = 2;
// });

// $('.animal-type').click(function() {  
// 	op_type_hov = 2;
// });


// select particular animal
for (i = 0; i < 10; i++) {
	$('#animal' + (i + 1)).click(function() {  

		// select this
		//console.log(this.style.backgroundColor);
		if (this.style.backgroundColor === "yellow") {
			//this.style.backgroundColor="white";
			// deselect everything 
			for (j = 0; j < 10; j++) {
				document.getElementById('animal' + (j+1)).style.backgroundColor="white";
			}
			op_animal_hov = 0;
                        setFavorite("");
                        SearchOpts();
		} else {
			op_animal_hov = 2;
			for (j = 0; j < 10; j++) {
				document.getElementById('animal' + (j+1)).style.backgroundColor="white";
			}
			this.style.backgroundColor="yellow";
                        setFavorite($(this).find('img').map(function() { return this.alt; }).get().toString());                          
                        SearchOpts();
		}
	});
}
// select particular place
for (i = 0; i < 10; i++) {
	$('#place' + (i + 1)).click(function() {  

		// select this
		//console.log(this.style.backgroundColor);
		if (this.style.backgroundColor === "yellow") {
			//this.style.backgroundColor="white";
			// deselect everything 
			for (j = 0; j < 10; j++) {
				document.getElementById('place' + (j+1)).style.backgroundColor="white";
			}
			op_place_hov = 0;
                        setPlace("");
                        SearchOpts();
		} else {
			op_place_hov = 2;
			for (j = 0; j < 10; j++) {
				document.getElementById('place' + (j+1)).style.backgroundColor="white";
			}
			this.style.backgroundColor="yellow";
                        setPlace($(this).find('img').map(function() { return this.alt; }).get().toString());  
                        SearchOpts();
		}
	});
}
// select particular color
for (i = 0; i < 6; i++) {
	$('#color' + (i + 1)).click(function() {  

		// select this
		//console.log(this.style.backgroundColor);
		if (this.style.backgroundColor === "yellow") {
			//this.style.backgroundColor="white";
			// deselect everything 
			for (j = 0; j < 6; j++) {
				document.getElementById('color' + (j+1)).style.backgroundColor="white";
			}
			op_color_hov = 0;
                        setColor("");
                        SearchOpts();
		} else {
			op_color_hov = 2;
			for (j = 0; j < 6; j++) {
				document.getElementById('color' + (j+1)).style.backgroundColor="white";
			}
			this.style.backgroundColor="yellow";
			//setColor($(this).find('img').map(function() { return this.alt; }).get().toString());
                        SearchOpts();
		}
	});
}

// select particular type
for (i = 0; i < 2; i++) {
	$('#animal-type' + (i + 1)).click({msg : i+1},function(e) {  

		// select this
		//console.log(this.style.backgroundColor);
		if (this.style.backgroundColor === "yellow") {
			//this.style.backgroundColor="white";
			// deselect everything 
			for (j = 0; j < 2; j++) {
				document.getElementById('animal-type' + (j+1)).style.backgroundColor="white";
			}
			op_type_hov = 0;
                        setType("");
                        SearchOpts();
		} else {
			op_type_hov = 2;
			for (j = 0; j < 2; j++) {
				document.getElementById('animal-type' + (j+1)).style.backgroundColor="white";
			}
			this.style.backgroundColor="yellow";
                        setType($(this).find('img').map(function() { return this.alt; }).get().toString());    
                        SearchOpts();
		}
	});
}















