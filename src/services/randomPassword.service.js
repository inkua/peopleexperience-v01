export default function (longitud = 12) {
    const caracteres = {
        minusculas: 'abcdefghijklmnopqrstuvwxyz',
        mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeros: '0123456789',
        simbolos: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
    };

    const todoCaracteres = caracteres.minusculas + caracteres.mayusculas + caracteres.numeros + caracteres.simbolos;
    let contrasena = '';

    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * todoCaracteres.length);

        contrasena += todoCaracteres[randomIndex];
    }

    return contrasena;
}
