function main() {
    const altura = 1.71;
    const peso = 70;

    document.getElementById("tb_altura").setAttribute("value", altura);
    document.getElementById("tb_peso").setAttribute("value", peso);

    document.getElementById("imc_calculado").innerHTML = "El I.M.C es " + (peso / altura ** 2)
}

main()