const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');
let lastChecked;
function handleCheck(e) {

    console.log(e);
    let inBetween = false;
    if(e.shiftKey && this.checked){    // if shift key is pressed and checkbox is checked then is condition is followed
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked= true; // checking if inbetween is true for that checkbox and if yes then checked it 
            }
        });

    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));