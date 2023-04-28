var numberToFind = 0;

var attemps = 0;

function refresh() {
    attemps = 0;
    numberToFind = parseInt(Math.random() * 100);
    console.log(numberToFind);
}

refresh();

function verifyNumber() {
    const bet = document.querySelector('#bet').value;

    if(bet < 1 || bet > 100) {
        swal('De 0 a 100 imbecil');
       return;
    }

    if (bet > numberToFind) {
        attemps++;
        swal('O número é MENOR!');
    } else if (bet < numberToFind) {
        attemps++;
        swal('O número é MAIOR!');
    } else {
        swal(`Parabéns! Depois de ${attemps} tentativas, você acertou!`);
        refresh();
    }
}

const button = document.querySelector('#button');

button.addEventListener('click', () => {
      verifyNumber();
});