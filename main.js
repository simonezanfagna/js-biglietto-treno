var distanza = parseInt(prompt("Chilometri da percorrere"));
var eta = parseInt(prompt("Inserisci la tua età"));
var costo_senza_sconto = distanza * 0.21;

if (isNaN(distanza) || isNaN(eta)) {
  alert("Errore. Per favore inserisci la distanza e la tua età utilizzando soltanto numeri!");
}
else if (distanza <= 0 || eta <= 0 ){
  alert("Errore. Per favore inserisci la distanza e la tua età utilizzando soltanto numeri positivi!");
}
else {

  if (eta < 18){
    var sconto_under_18 = ((costo_senza_sconto * 20) / 100);
    var tot_costo_under_18 = costo_senza_sconto - sconto_under_18;
    document.getElementById("costo").innerHTML = tot_costo_under_18 + " " + "€";
    document.getElementById("percorso").innerHTML = distanza + " " + "km";
    document.getElementById("container").setAttribute("class", "visible");
  }

  else if (eta > 65){
    var sconto_over_65 = ((costo_senza_sconto * 40) / 100);
    var tot_costo_over_65 = costo_senza_sconto - sconto_over_65;
    document.getElementById("costo").innerHTML = tot_costo_over_65 + " " + "€";
    document.getElementById("percorso").innerHTML = distanza + " " + "km";
    document.getElementById("container").setAttribute("class", "visible");
  }

  else {
    document.getElementById("costo").innerHTML= costo_senza_sconto + " " + "€";
    document.getElementById("percorso").innerHTML = distanza + " " + "km";
    document.getElementById("container").setAttribute("class", "visible");
  }
}
