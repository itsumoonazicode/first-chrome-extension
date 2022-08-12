const colors = document.querySelectorAll(".color");
const msg = document.getElementById("msg");

colors.forEach((elm) => {
	elm.addEventListener("click", (e) => {
		let options = {
			colorValue: e.target.style.backgroundColor,
			colorName: e.target.innerText
		}

		chrome.storage.sync.set(options);
		msg.innerText = `Set color to ${options.colorName}`;
	});
});