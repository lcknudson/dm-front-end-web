console.log('We are connected, Captain Kirk')

const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

function favColor() {
    console.log('Purple')
    alert('Purple')
}

function favPlace() {
    console.log('Out in my desert.')
    alert('Out in my desert')
}

function favRitual() {
    console.log('Morning coffee.')
    alert('Morning coffee')
}

console.log('Are we there yet, Mr. Scott')




colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)



console.log('We got beamed down, Commander Spock')