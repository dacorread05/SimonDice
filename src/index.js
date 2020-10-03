const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }
    inicializar() {
        this.Color = this.Color.bind(this);
        btnEmpezar.classList.add('hide')
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }
    siguienteNivel(){
        this.iluminarSecuencia();
        this.eventoClick();
    }

    trasformarNumAColor(numero){
        switch (numero) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde'; 
        }
    }

    iluminarSecuencia(){
        for( let i = 0; i < this.nivel; i++){
            const color = this.trasformarNumAColor(this.secuencia[i]);
           setTimeout(() => this.iluminarColor(color), 1000 * i); 
        }
    }
    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }
    apagarColor(color){
        this.colores[color].classList.remove('light');
    }
    eventoClick(){
        this.colores.celeste.addEventListener('click', this.Color);
        this.colores.verde.addEventListener('click', this.Color);
        this.colores.violeta.addEventListener('click', this.Color);
        this.colores.naranja.addEventListener('click', this.Color);
    }
    Color(ev){
        console.log(this);
    }
}

function empezarJuego() {
     window.juego = new Juego()
}