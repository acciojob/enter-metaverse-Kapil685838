//your JS code here. If required.

let p = document.getElementById('status');
let body = document.querySelector('body');

let btn = document.getElementById('enterBtn');

btn.addEventListener('click', (event) => {
	p.innerHTML = "";
	let h1 = document.createElement('h1');
	h1.innerHTML = "Entered Metaverse";
	p.appendChild(h1);
});