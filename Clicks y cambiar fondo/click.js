
// fondo.style.background = this.style.backgroundColor;
let fondo = document.getElementById('fondo');

function cambiarColorDeFondo() {
            document.body.style.backgroundColor = this.style.backgroundColor;
        }

        document.getElementById('div1')
                .addEventListener('mouseover', cambiarColorDeFondo);

        document.getElementById('div2')
                .addEventListener('mouseover', cambiarColorDeFondo);

        document.getElementById('div3')
                .addEventListener('mouseover', cambiarColorDeFondo);

        document.getElementById('div4')
                .addEventListener('mouseover', cambiarColorDeFondo);