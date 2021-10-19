let number = Math.floor(Math.random() * 100) + 1;

let url = `https://randomfox.ca/floof/`;
const image = document.querySelector('img');

const randomfox = () => {
	let promise = fetch(url);
	promise
		.then((respond) => respond.json())
		.then((respond) => (image.src = respond.image));
};

document.addEventListener('DOMContentLoaded', randomfox);
const button = document.querySelector('.button');
button.addEventListener('click', randomfox);
