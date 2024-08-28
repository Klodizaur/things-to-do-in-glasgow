/*Fixed by Steve to so that the photo stays in place when the user suddenly clicks the background*/
document.getElementById("thumbnails").addEventListener("click", function(){
   
    let thumbImgs = event.target.id;
    change(thumbImgs);
});

function change(pic) {
    if ( pic != "thumbnails") {
        document.getElementById("bigpreview").src = pic;
    }
}



/*
Old working gallery code by Klaudia

var thumbs = document.getElementById("thumbnails"); //get thumbnails div
var thumbImgs = thumbs.getElementsByTagName("img"); //get images from thumbnails div

thumbs.addEventListener("click", myGallery); //event listener

//function to set the source of big image to source of the thumbnail that was clicked
function myGallery() {
    
    document.getElementById('bigpreview').src = event.target.src; 

    thumbImgs = event.target.img;

}*/
