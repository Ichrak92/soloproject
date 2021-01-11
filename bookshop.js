	$(document).ready(function(){
		var slideIndex = 1;

		showDivs(slideIndex);

function plusDivs(n) {
	console.log(n)
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
$('.previous').on('click',function(){plusDivs(-1)})
$('.next').on('click',function(){plusDivs(1)})



//button Shop Now
  $(".btn3").click(function(){
    $("#book").toggle();
  });
});


