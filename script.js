    const body = document.body
   
    const cvButton = document.getElementById('cvButton');
    const buttonClipboard = document.querySelector(".button-clipboard");
    const paperButton = document.getElementById('paperButton');

    document.querySelector('.button-clipboard').addEventListener('click', function(e) {
        copyToClipboard('sergiogg1259@gmail.com');
    });


    var emailCopied = false;

    function copyToClipboard(texto) {
        if (!emailCopied) {
            emailCopied = true
            navigator.clipboard.writeText(texto);
            buttonClipboard.classList.add("clipboard-active");
            setTimeout(() => {
                buttonClipboard.classList.remove("clipboard-active");
                emailCopied = false
            },2500)
        }
    }

    paperButton.addEventListener('click', function() {
        window.open('documents/paper.pdf', '_blank');
    });

    cvButton.addEventListener('click', function() {
        window.open('documents/Sergio Guanilo CV.pdf', '_blank');
    });