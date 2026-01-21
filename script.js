document.addEventListener("DOMContentLoaded", () => {
    const row1 = document.querySelector(".row-1");
    const row2 = document.querySelector(".row-2");
    const frameDuo1 = document.querySelector(".row-1 .frame-duo");
    const frameDuo2 = document.querySelector(".row-2 .frame-duo");

    // Se guarda la posición original
    const frameDuo1NextSibling = frameDuo1.nextElementSibling; //obtener el nodo hermano
    const frameDuo2NextSibling = frameDuo2.nextElementSibling;

    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    function swapFrames(event) {

        if (event.matches) {
            // Intercambiar
            if (row1.contains(frameDuo1)) {
                row2.insertBefore(frameDuo1, row2.firstChild);
                row1.insertBefore(frameDuo2, row1.firstChild);
            }
        } else {
            // Restaurar posiciones originales
            if (row2.contains(frameDuo1)) {
                row1.insertBefore(frameDuo1, frameDuo1NextSibling);
                row2.insertBefore(frameDuo2, frameDuo2NextSibling);
            }
        }
    }

    function adjustRows() {
        const container = document.querySelector('.left');
        const rows = document.querySelectorAll(".row");
        const photo = document.querySelector('.photo');

        if (window.innerWidth > 1200) {
            const heightTotal = container.clientHeight - 32;
            const heightRow = heightTotal / rows.length;

            rows.forEach( row => {
                row.style.height = heightRow + 'px';
            });

            if (photo) {
                photo.style.height = heightRow + 'px';
                photo.style.width = heightRow + 'px';
            }
        } else {

            rows.forEach( row => {
                row.style.height = '';
            });

            if (photo) {
                photo.style.height = '';
                photo.style.width = '';
            }
        }
    }


    // Se ejecuta cuando cambia la media query
    mediaQuery.addEventListener("change", swapFrames);

    // Se ejecuta al inicio
    swapFrames(mediaQuery);
    adjustRows();

    window.addEventListener('resize', adjustRows);
});



//Toggle switch
const toggle = document.querySelector('.switch');
const frames = document.querySelectorAll('.right-first .frame');

// Función para aplicar el modo según el estado guardado
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true; // Dejar el switch prendido
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false; // Dejar el switch apagado
    }
}

const savedTheme = sessionStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

toggle.addEventListener('change', () => {

    frames.forEach(frame => {
        frame.style.transition = 'none';
    });
    
    if (toggle.checked) {
        document.body.classList.add('dark-mode');
        sessionStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        sessionStorage.setItem('theme', 'light');
    }
    
    setTimeout(() => {
        frames.forEach(frame => {
            frame.style.transition = 'background-color 0.3s ease';
        });
    }, 0);
});

//EMAIL
const buttonClipboard = document.querySelector(".button-clipboard");
document.querySelector('.button-clipboard').addEventListener('click', function(e) {
    copyToClipboard('sergiogg1259@gmail.com');
});

var emailCopied = false;

function copyToClipboard(text) {
    if (!emailCopied) {
        emailCopied = true
        navigator.clipboard.writeText(text);
        buttonClipboard.classList.add("clipboard-active");
        setTimeout(() => {
            buttonClipboard.classList.remove("clipboard-active");
            emailCopied = false
        },2500)
    }
}

var lunaDialog = new ldcover({root: ".luna-dialog"});
var healthPlusDialog = new ldcover({root: ".healthplus-dialog"});
var salesPredictionDialog = new ldcover({root: ".sales-prediction-dialog"});


