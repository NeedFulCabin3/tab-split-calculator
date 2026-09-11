const billInput = document.getElementById('billTotal');
const tipInput = document.getElementById('serviceTip');
const peopleInput = document.getElementById('personCount');

const tipPerPersonEl = document.getElementById('tipPerPerson');
const totalPerPersonEl = document.getElementById('totalPerPerson');

function calculateTip() {
    const bill = parseFloat(billInput.value) || 0;
    const tipPercent = parseFloat(tipInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;

    if (people < 1) {
        tipPerPersonEl.textContent = '₹0.00';
        totalPerPersonEl.textContent = '₹0.00';
        return;
    }

    const totalTip = bill * (tipPercent / 100);
    const grandTotal = bill + totalTip;

    const tipPerPerson = totalTip / people;
    const totalPerPerson = grandTotal / people;

    // Fixed the template literals here to inject the correct rupee symbol
    tipPerPersonEl.textContent = `₹${tipPerPerson.toFixed(2)}`;
    totalPerPersonEl.textContent = `₹${totalPerPerson.toFixed(2)}`;
}

billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);