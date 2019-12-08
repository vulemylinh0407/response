let toggles = document.querySelectorAll('.toggle')

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', function() {
    this.classList.toggle('show')
  })
}

var text = $(".split");

var split = new SplitText(text);

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

$(split.chars).each(function(i){
	TweenMax.from($(this), 2.5, {
		opacity: 0,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		scale: .1,
		delay: i * .02,
		yoyo: true,
		repeat: -1,
		repeatDelay: 10
	});
});
