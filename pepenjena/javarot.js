let nombres = ["Alice", "Bob", "Charlie"];

console.log('elija entre',`(Alice,`, 'Bob', 'y Charlie)');

let habilidades = {
    "Alice": [70, 70, 70],
    "Bob": [25, 25, 25],
    "Charlie": [99, 99, 99]
};

// se le pide a el usuario que ingrese un nombre 
let nombreBuscado = prompt("Ingresa el nombre para ver sus habilidades:").toLowerCase();

// detecta si escribio con minuscula o mayuscula
let nombresLower = nombres.map(nombre => nombre.toLowerCase());

if (nombresLower.includes(nombreBuscado)) {
    let indice = nombresLower.indexOf(nombreBuscado);
    let nombreReal = nombres[indice];
    
    let suma = habilidades[nombreReal].reduce((a, b) => a + b, 0);
    let promedio = suma / habilidades[nombreReal].length;
    
    console.log(`${nombreReal}: ${promedio} - ${promedio >= 70 ? 'Aprobado' : 'No logrado'}`);
} else {
    console.log(`El nombre ${nombreBuscado} no está en la lista.`);
}
