let obtenInfoCovidApi = new Promise(function (exito, fracaso) {

    // Simulamos una llamada a una API. A veces va bien , a veces va mal
    let resultado = getRandomInt(1)
    exito("Estos son los datos: 5000 casos en Galicia");
    if (resultado == 1) {
        exito("Estos son los datos: 5000 casos en Galicia");
    }

    fracaso("Error al comunicar con la API");

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function dameInfoCovid() {
    try {
        obtenDatosApi = await obtenInfoCovidApi();
    }
    catch (error) {
        console.log(error);
        return;
    }

    console.log("Llamada a la Api: ", obtenDatosApi);

}

function dameInfoCovidv2() {
    obtenInfoCovidApi().then(result => {
        return result;
    })
}



dameInfoCovid();