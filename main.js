var min=0; 
var max=255;  
var colours=[];
var ans = document.querySelectorAll(".col-sm");
var min1 =0;
var max1 =5;
startGame();

function startGame(){
	for(var k=0;k<6;k++){
	var r1 =Math.floor(Math.random() * (+max - +min)) + +min; 
	var r2 =Math.floor(Math.random() * (+max - +min)) + +min; 
	var r3 =Math.floor(Math.random() * (+max - +min)) + +min; 
	colours[k] = "rgb(" + r1 + ", " + r2 + ", " + r3 + ")";
}
for(var i=0;i<ans.length;i++){
	ans[i].style.backgroundColor = colours[i];
}

var m =Math.floor(Math.random() * (+max1 - +min1)) + +min1;
var match = colours[m];
var change = document.querySelector("span");
change.innerHTML = match;

for(var j=0;j<ans.length;j++){
			ans[j].style.pointerEvents = 'auto';
		}

// Optimise this using a loop

ans[0].addEventListener("click",function(){
	if(colours[0] != match){
		this.style.backgroundColor = "black";
	}
	else if(colours[0] == match){
		for(var j=0;j<ans.length;j++){
			ans[j].style.backgroundColor = match;
			ans[j].style.pointerEvents = 'none';
		}
	}
});

ans[1].addEventListener("click",function(){
	if(colours[1] != match){
		this.style.backgroundColor = "black";
	}
	else if(colours[1] == match){
		for(var j=0;j<ans.length;j++){
			ans[j].style.backgroundColor = match;
			ans[j].style.pointerEvents = 'none';
		}
	}
});

ans[2].addEventListener("click",function(){
	if(colours[2] != match){
		this.style.backgroundColor = "black";
	}
	else if(colours[2] == match){
		for(var j=0;j<ans.length;j++){
			ans[j].style.backgroundColor = match;
			ans[j].style.pointerEvents = 'none';
		}
	}
});

ans[3].addEventListener("click",function(){
	if(colours[3] != match){
		this.style.backgroundColor = "black";
	}
	else if(colours[3] == match){
		for(var j=0;j<ans.length;j++){
			ans[j].style.backgroundColor = match;
			ans[j].style.pointerEvents = 'none';
		}
	}
});

ans[4].addEventListener("click",function(){
	if(colours[4] != match){
		this.style.backgroundColor = "black";
	}
	else if(colours[4] == match){
		for(var j=0;j<ans.length;j++){
			ans[j].style.backgroundColor = match;
			ans[j].style.pointerEvents = 'none';
		}
	}
});

ans[5].addEventListener("click",function(){
	if(colours[5] != match){
		this.style.backgroundColor = "black";
	}
	else if(colours[5] == match){
		for(var j=0;j<ans.length;j++){
			ans[j].style.backgroundColor = match;
			ans[j].style.pointerEvents = 'none';
		}
	}
});

}

var b = document.querySelectorAll("button");
var s = document.querySelectorAll(".row");

b[0].addEventListener("click",function(){
	b[1].addEventListener("click",function(){
	s[1].classList.add("rem");
	max1 =2;
	startGame();
});

b[2].addEventListener("click",function(){
	s[1].classList.remove("rem");
	startGame();
});
startGame();
});



// var colours = [ "rgb(0, 0, 0)",
// 				"rgb(200, 20, 20)",
// 				"rgb(90, 30, 20)",
// 				"rgb(70, 180, 140)",
// 				"rgb(0, 130, 130)",
// 				"rgb(0, 120, 10)"
// 				];

// var b = document.querySelectorAll("button");

// b[0].addEventListener("click",function(){
// var colours=[];
// for(var k=0;k<6;k++){
// 	var r1 =Math.floor(Math.random() * (+max - +min)) + +min; 
// 	var r2 =Math.floor(Math.random() * (+max - +min)) + +min; 
// 	var r3 =Math.floor(Math.random() * (+max - +min)) + +min; 
// 	colours[k] = "rgb(" + r1 + ", " + r2 + ", " + r3 + ")";
// }

// min1 =0;
// max1 =5;
// var m =Math.floor(Math.random() * (+max1 - +min1)) + +min1;
// var match = colours[m];

// var change = document.querySelector("span");
// change.innerHTML = match;

// var ans = document.querySelectorAll(".col-sm");

// for(var i=0;i<ans.length;i++){
// 	ans[i].style.backgroundColor = colours[i];
// 	ans[i].style.pointerEvents = 'auto';

// }
// });