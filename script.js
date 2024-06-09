const text = `
     Hi, I'm Akif!, programmer / red teaming solving ctf's and more
     i like C, Python,
     I'm Front-End Developer
     Arch Linux enjoyer
     I have xmpp / matrix
     Feel Free To contact with me

     my email : aripathm@proton.me
     
     
     

`;





function openProjectTerminal() {
    const projectTerminal = document.querySelector(".project-terminal");
    projectTerminal.style.display = "block";
}

function closeProjectTerminal() {
    const projectTerminal = document.querySelector(".project-terminal");
    projectTerminal.style.display = "none";
}



const typedText = document.getElementById("typed-text");

function typeText() {
    let index = 0;
    typedText.innerHTML = '';
    const interval = setInterval(function () {
        typedText.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
        }
    }, 50);
}

window.onload = typeText;

function closeTerminal() {
    
}

function minimizeTerminal() {
    
}

function maximizeTerminal() {
    
}

function openEmailDialog() {
    const modal = document.getElementById("email-modal");
    modal.style.display = "block";
}

function closeEmailDialog() {
    const modal = document.getElementById("email-modal");
    modal.style.display = "none";
}

const emailForm = document.getElementById("email-form");
emailForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const to = document.getElementById("doasman@proton.me").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

});
