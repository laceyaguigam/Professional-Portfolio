
// takes you to linkedin and github
function myLinkedin () {
    location.replace("https://www.linkedin.com/in/laceyaguigam/")
}

function myGithub () {
    location.replace("https://github.com/laceyaguigam")
}

//creates the caret list for education
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-dowm");
    });
}


