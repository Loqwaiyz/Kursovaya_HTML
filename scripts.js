document.getElementById("address").addEventListener("change", function() {
    let result = document.getElementById("result");
    if (this.value) {
        result.textContent = "Вы выбрали адрес: " + this.options[this.selectedIndex].text;
    } else {
        result.textContent = "";
    }
});
