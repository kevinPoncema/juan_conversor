function cal(){
    let numero;
    let unidad;
    let r;
    numero =document.getElementById("numero").value;
    unidad = document.getElementById("uni").value;
    console.log(numero);
    console.log(unidad);

    switch (unidad) {
        case '1':
            r=numero*1.82;
            break;
        case '2':r=numero*1.82;
        break
        case '3':r=(numero*1.82)*100;

        break
        case '4':r=(numero*1.82)*39.3701;
        break
    
        default:
            break;
    }
    document.getElementById("texto").innerHTML="la respuesta es "+r;
    console.log("la respuesta es "+r);
    return r;
}