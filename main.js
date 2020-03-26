const tipForm = document.getElementById('tipForm');

tipForm.addEventListener('submit', e => {
    e.preventDefault();
    const billAmount = document.getElementById('billAmount').value;
    const serviceQuality = document.getElementById('serviceQuality').value;

    let tipAmount;

    switch (serviceQuality) {
        case 'bad':
            tipAmount = billAmount * 0.1;
            break;
        case 'average':
            tipAmount = billAmount * 0.15;
            break;
        case 'good':
            tipAmount = billAmount * 0.2;
            break;
        case 'amazing':
            tipAmount = billAmount * 0.25;
            break;
        default:
            break;
    }

    console.log(tipAmount);
});
