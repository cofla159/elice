function night() {
    document.querySelector('body').style.backgroundcolor='black';
    document.querySelector('body').style.color='white';
    let as = document.querySelectorAll('a');
    for (let i = 0; i < as.length; i++){
        as[i].style.color='white';
    }
}
function day() {
    document.querySelector('body').style.backgroundcolor='white';
    document.querySelector('body').style.color='black';
    let as = document.querySelectorAll('a');
    for (let i = 0; i < as.length; i++){
        as[i].style.color='black';
    }
}
function dayNight(mode) {
    if(mode === 'night'){
        night();
    } else{
        day();
    }
}