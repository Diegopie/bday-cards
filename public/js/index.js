// * Query Selector for Copy Buttons
document.querySelector('#serverCopy').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(navigator.clipboard.writeText);
    if (navigator.clipboard.writeText) {

        const path = document.querySelector('#serverCopy').children[0];
        console.dir(path);
        let copyText = window.location.origin;
        navigator.clipboard.writeText(copyText);
        $(path).text("Copied!")
    } else {
        $(path).text("Your browser does not support this feature :/")
    }
});


$('.copy').text(window.location.origin);
