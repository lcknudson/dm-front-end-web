// console.log("hello world");

const duckImage = document.querySelector('#duck-image')

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form has been submitted successfully!')
	// console.log('form submit');
}

function foundDuck(evt) {
	evt.preventDefault();
	alert('Great Job! These are the best listener ducks.')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
duckImage.addEventListener('mouseover', foundDuck)


// console.log('the end')