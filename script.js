//your JS code here. If required.

let p = document.getElementById('status');
let body = document.querySelector('body');

let btn = document.getElementById('enterBtn');

btn.addEventListener('click', (event) => {
	let h1 = document.createElement('h1');
	h1.setAttribute('id', 'status');
	h1.innerHTML = "Entered Metaverse";
	body.replaceChild(h1, p);
});