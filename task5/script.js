let inputField = document.getElementById('inputField');
let duplicateField = document.getElementById('duplicateField');

inputField.addEventListener('keyup', change, false);
function change(e) {
    duplicateField.textContent = e.target.value;
}

document.querySelector('#sendtext').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inputField.value);
    inputField.value = '';
    duplicateField.textContent = '';
});