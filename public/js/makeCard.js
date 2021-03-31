// * Stores Current Class Being Rendered to Correctly Target and Replace Styles
let currentClass = "note-gambit"
// * Default Styling to Send to DB, Listeners Will Update this Value
let dbStyle = ["note-gambit", "gambitMotes-01.png"]
const imgPath = "../img/card/"

// * Minecraft: Remove Current Styling and Apply Minecraft Class and Image
$('#mine').click((e) => {
    e.preventDefault();
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-mine");
    currentClass = "note-mine"; 
    // Change Image
    $('.img').attr('src', imgPath + 'mineGrass-01.png')
    dbStyle = ["note-mine", "mineGrass-01.png"]
});

// * Gambit: Remove Current Styling and Apply Gambit Class and Image
$('#gambo').click((e) => {
    e.preventDefault();
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-gambit");
    currentClass = "note-gambit"; 
    // Change Image
    $('.img').attr('src', imgPath + 'gambitMotes-01.png')
    dbStyle = ["note-gambit", "gambitMotes-01.png"]
});

// * Age of Empire: Remove Current Styling and Apply Age of Empire Class and Image
$('#empire').click((e) => {
    e.preventDefault();
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-age");
    currentClass = "note-age"; 
    // Change Image
    $('.img').attr('src', imgPath + 'ageEmpire-01.png')
    dbStyle = ["note-age", "ageEmpire-01.png"]
});

// * Age of Empire: Remove Current Styling and Apply Age of Empire Class and Image
$('#border').click((e) => {
    e.preventDefault();
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-border");
    currentClass = "note-border"; 
    // Change Image
    $('.img').attr('src', imgPath + 'borderlands-01.png');
    dbStyle = ["note-border", "borderlands-01.png"];
});

// * Validate textareas; Make POST Req; Handle Success and Fail
$('#submit').click(async e => {
    e.preventDefault();
    $('.note-msg').addClass('poof');
    const userNote = document.querySelector('.note').value;
    const userSignature = document.querySelector('.signature').value;

    if (!userNote) {
       $('.note-msg').text('Your Note Cannot Be Empty!');
       $('.note-msg').removeClass('poof');
    } else if (!userSignature) {
        $('.note-msg').text('Your Signature Cannot Be Empty!');
        $('.note-msg').removeClass('poof');
    } else {
        $('.note-msg').addClass('poof');
        const noteRequest = await fetch('/api/note/new', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                note: userNote,
                signature: userSignature,
                style: dbStyle
            }),
            method: 'POST'
        });
        const noteResponse = await noteRequest.json();
        console.log(noteResponse.message.msgError);
        if (noteResponse.message.msgError) {
            $('.note-msg').text("Your Note Couldn't Be Sent! Refresh and Try Again 😐");
            $('.note-msg').removeClass('poof');
        } else {
            $('.note-msg').text("Your Note Was Sent!");
            $('.note-msg').removeClass('poof');
            $('#submit').addClass('poof');            
            const redirect = `<a class="col button" href="./card.html"> Click To View Your Card!</a>`
            $('.note-msg').append(redirect);

        }
    }
})
