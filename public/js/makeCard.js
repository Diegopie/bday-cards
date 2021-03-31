// * Stores Current Class Being Rendered to Correctly Target and Replace Styles
let currentClass = "note-fest"
// * Default Styling to Send to DB, Listeners Will Update this Value
let dbStyle = ["note-fest", "festival-01.png"]
const imgPath = "/img/card/"

// * Festival: Remove Current Styling and Apply Festival Class and Image
$('#fest').click((e) => {
    e.preventDefault();
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-fest");
    currentClass = "note-fest"; 
    // Change Image
    $('.img').attr('src', imgPath + 'festival-01.png')
    dbStyle = ["note-fest", "festival-01.png"]
});

// * Horror: Remove Current Styling and Apply Horror Class and Image
$('#horror').click((e) => {
    e.preventDefault();
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-horror");
    currentClass = "note-horror"; 
    // Change Image
    $('.img').attr('src', imgPath + 'horror-01.png')
    dbStyle = ["note-horror", "horror-01.png"]
});

// * Daemon: Remove Current Styling and Apply Daemon Class and Image
$('#daemon').click((e) => {
    e.preventDefault();
    // Change Color
    $('#change').removeClass(currentClass);
    $('#change').addClass("note-daemon");
    currentClass = "note-daemon"; 
    // Change Image
    $('.img').attr('src', imgPath + 'daemon-01.png')
    dbStyle = ["note-daemon", "daemon-01.png"]
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
            const redirect = `<a class="col button" href="/"> Click To View Your Card!</a>`
            $('.note-msg').append(redirect);

        }
    }
})
