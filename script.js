//your JS code here. If required.
const target = document.getElementById("level");

let count = 0;
let current = target;

// Traverse up the DOM until there are no more parents

while (target !== null) {
    count++;
    current = current.parentElement;
}

alert(`The level of the element is: ${count}`)
