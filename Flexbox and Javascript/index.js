const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if(e.propertyName.includes('font')){  //finding that the transitionend has any propety change with font in it 
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));