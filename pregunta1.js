function main() {
    const anio_nacimiento = 1997;

    document.getElementById("tb_nombres").setAttribute("value", "Diego Ronaldo");
    document.getElementById("tb_apellidos").setAttribute("value", "Ramos Mendoza");

    document.getElementById("tb_anio_nacimiento").setAttribute("value", anio_nacimiento);
    document.getElementById("tb_edad").setAttribute("value", new Date().getFullYear() - anio_nacimiento);
}

main()