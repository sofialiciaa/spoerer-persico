// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/cunco.jpg",
    title: "BALLOON LATAM - Taller TIDE",
    about: "Creación de una guía de turismo para la agrupación Pro turismo de Cunco en la Araucanía; tres tipos de guía de ayuda para los turistas chilenos. -Sofía Persico",
}, {
    figure: "media/real2.jpg",
    title: "LUMINARIA TEXTIL - Iluminación",
    about: "Construcción de una luminaria a partir de un textil y cinta led; luz para contemplar. -Sofía Persico",
}, {
    figure: "media/andi.jpg",
    title: "MUÑECOS QUE COBRAN VIDA - OPR",
    about: "Creación de editorial estilo vogue italia para el OPR Textil como producto; muñecos que cobran vida. -Sofía Persico",
}, {
    figure: "media/raf.jpg",
    title: "RAF - Taller producto ",
    about: "Diseño en situación de emergencia; mascarillas húmedas de textil para incendios; humo excesivo. -Rosita Spoerer",
}, {
    figure: "media/maggi.jpg",
    title: "SOPA INSTANTÁNEA MAGGI - Taller TIDE",
    about: "Reinterpretar la forma de consumir un producto tradicional de una marca reconocida por los chilenos; sopa fría instantánea. -Spoerer y Persico",
}, {
    figure: "media/lampara.jpg",
    title: "LUMINARIA EN MATERIAL DE EXPERIMENTACIÓN - EyM",
    about: "Construcción de una luminaria con material estudiado; jabón. -Rosita Spoerer",
}, {
    figure: "media/maroma.jpg",
    title: "MAROMA - Taller producto",
    about: "Construcción de un juego para niños a partir de polímeros reciclados. -Sofía Persico",
}, {
    figure: "media/auto.jpeg",
    title: "TOYOTA TACOMA - Diseño por computación",
    about: "Diseño tridimiensional de la camioneta Toyota Tacoma color rojo fuego. -Rosita Spoerer",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});