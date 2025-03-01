const themeControllerBtn = document.getElementById("theme-controller-btn");
const body = document.body;

function randomLightColor() {
	const letters = "ABCDEF"; 
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}

	return color;
}

themeControllerBtn.addEventListener("click", () => {
	body.style.backgroundColor = randomLightColor();
});