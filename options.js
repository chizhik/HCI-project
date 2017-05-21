// hide all the options at the beginning
$(".animal-favorites").hide();
$(".animal-places").hide();
$(".animal-colors").hide();

// 0 - not hovered, 1 - hovered, 2 - clicked, will be shown forever
var op_animal_hov = 0;
var op_place_hov = 0;
var op_color_hov = 0;


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
	}
});
 

// option in this bar is chosen
$('.animalimage').click(function() {  
	op_animal_hov = 2
});

$('.place-image').click(function() {  
	op_place_hov = 2
});

$('.color').click(function() {  
	op_color_hov = 2
});


// select particular animal
// var animal1 = 0;
// var animal2 = 0;
// var animal3 = 0;
// var animal4 = 0;
// var animal5 = 0;
// var animal6 = 0;
// var animal7 = 0;
// var animal8 = 0;
// var animal9 = 0;
// var animal10 = 0;
for (i = 0; i < 10; i++) {
	$('#animal' + (i + 1)).click(function() { 
		if (this.style.backgroundColor === "gray") {
			this.style.backgroundColor="white";
		} else {
			this.style.backgroundColor="gray";
		}
	});
}
// select particular place
for (i = 0; i < 10; i++) {
	$('#place' + (i + 1)).click(function() {  
		if (this.style.backgroundColor === "gray") {
			this.style.backgroundColor="white";
		} else {
			this.style.backgroundColor="gray";
		}
	});
}
// select particular color
for (i = 0; i < 10; i++) {
	$('#color' + (i + 1)).click(function() {  
		if (this.style.backgroundColor === "gray") {
			this.style.backgroundColor="white";
		} else {
			this.style.backgroundColor="gray";
		}
	});
}














