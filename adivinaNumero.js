
let numeroMax =40;
let numeroSecreto = Math.floor(Math.random()*numeroMax)+1;
let numeroUsuario = 0;
let intentos = 1;

let maxIntentos =6;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Escribe un número entre 1 y ${numeroMax}: `));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acerstaste, el numero es: ${numeroSecreto} !!! Lo descubriste en: ${intentos} ${intentos == 1 ? 'Vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        intentos ++;
        
        if(intentos > maxIntentos){
            alert(`Gastaste tus ${maxIntentos} intentos`);
            break;
        }
    }
}
