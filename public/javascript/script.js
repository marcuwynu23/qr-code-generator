let generateText = document.getElementById("generate-text");
let generateBtn = document.getElementById("generate-btn");

async function sendData() {
	console.log("hello.");
	try {
		let status = await fetch("/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				data: generateText.value,
			}),
		});
		console.log(status);
	} catch (error) {
		console.error(error);
	}
}

generateBtn.addEventListener("click", async function () {
	await sendData(generateText.value);
	window.location.reload();
});
