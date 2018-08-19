function Calcular(){
  var dateInicio  = new Date("01"+' '+"January"+', '+"1901"+' 12:00:00');
  var dateFinal = new Date("31"+' '+"December"+', '+"2000"+' 12:00:00');
  var dateAux = new Date();
  var cantidadMesInicio = dateInicio.getMonth();
  var cantidadYearInicio = dateInicio.getFullYear();
  var cantidadDias = 0;
  var cantidadDomingos = 0;
  //Iterar fecha de inicia hasta fecha final
  while (dateInicio <= dateFinal)
  {
    //Verificar en que mes esta la fecha de inicio
    switch (cantidadMesInicio)
    {
      case (8 || 3 || 5 || 10): //Septiembre, Abril, Junio, Noviembre
        cantidadDias = 30;
        break;
      case 1: //Febrero
        cantidadDias = 28;
        //Si es añi bisiesto
        if ((cantidadYearInicio % 4 === 0 && cantidadYearInicio % 100 !== 0) || (cantidadYearInicio % 400 === 0))
          cantidadDias = 29;
        break;
      default:  //Resto de meses
        cantidadDias = 31;
        break;
    }
    //Sumo la cant de dias a la fecha de inicio y lo guardo en un aux
    dateAux.setDate(dateInicio.getDate() + cantidadDias);
    //Iterar desde fecha de inicio hasta fecha aux
    while (dateInicio <= dateAux)
    {
      //Si el dia es domingo
      if (dateInicio.getDay() === 0 && dateInicio <= dateFinal && dateInicio.getDate() == 01)
        cantidadDomingos++;
      //Sumo un dia y lo guardo fecha de inicio
      dateInicio.setDate(dateInicio.getDate() + 1);
    }
    //Obtengo mes y año
    cantidadMesInicio = dateInicio.getMonth();
    cantidadYearInicio = dateInicio.getFullYear();
  }
  alert("Cantidad de domingos: " + cantidadDomingos);
};