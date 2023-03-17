const audio = new Audio("../sounds/key01.mp3");
cost buttons = document.querySelectorAll("Button");

buttons.forEach(button => {
	button.addEventListener("click", () => {
		audio.play();
	});
});