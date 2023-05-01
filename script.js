//your JS code here. If required.

let p = document.getElementById('status');
let btn = document.getElementById('enterBtn');

btn.addEventListener('click', () => {
	p.innerHTML = "";
	let h1 = document.createElement('h1');
	h1.innerHTML = "Entered Metaverse";
	p.appendChild(h1);
});