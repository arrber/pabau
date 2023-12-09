
function shuffleValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const values = Array.from(checkboxes).map(checkbox => checkbox.value);
    values.sort(() => Math.random() - 0.5);
    
    checkboxes.forEach((checkbox, index) => {
        checkbox.value = values[index];
    });
}


function changeValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const newValues = ["test1", "test2", "test3", "test4"];

    checkboxes.forEach((checkbox, index) => {
        checkbox.value = newValues[index];
    });
}


function showSelectedValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);

    document.getElementById('selectedValues').innerText = "Selected Values: " + selectedValues.join(', ');
}
