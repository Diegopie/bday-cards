const siteURL = window.location.origin;
let currentClass = "note-border"

// I keep getting bad request response but the data comes threw in the error???
$.ajax({
    url: '/api/note/all',
    type: "GET",
    dataType: "json",
    success: (data) => {
        console.log(data.responseJSON.notes);
    },
    error: (error) => {
        console.log(error);
        console.log(error.responseJSON.notes);
        const noteData = error.responseJSON.notes
        // Render Each Note
        noteData.forEach(note => {
            const newNote = `
                <article 
                    class="col-8 col-md-4 col-lg-2 note-card ${note.style[0]}" data-id="${note._id}"
                >
                    <h2 class="note">${note.note.substring(0, 220)}</h2>
                    <h4 class="signature">- ${note.signature}</h4>
                    <img 
                        class="img" src="../img/card/${note.style[1]}"
                    >
                </article>
            `
            $('#card-contain').prepend(newNote)
        });
        // trying to get modal to work
        $(".img").click((e) => {
            e.preventDefault();
            console.dir(e.target.parentElement.dataset.id);





            // I thought this wouldn't work but I can just store the full text in an html attribute then use that for the modal

            // // console.dir(e.target.attributes[1].value);
            // const img = e.target.attributes[1].value;
            // const style = e.target.parentElement.classList[4];

            // $('#change').removeClass(currentClass);
            // $('#change').addClass(style);
            // $('.img-target').attr('src', img);
            // $("#validateModal").modal();
        });
    }
})




