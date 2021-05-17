

  
  window.onload = numeroAleatorio;

  function numeroAleatorio() {
    var aleatorio = Math.round(Math.random() * 999);
    document.getElementById("monto").append(aleatorio);
  }

  function rangoAleatorio(min, max) {
    var aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("monto").append(aleatorio);
  }

  function dragstart_handler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.effectAllowed = "copyMove";
  }

  function dragover_handler(ev) {
    ev.preventDefault();
  }

  function drop_handler(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");

    if (id == "moneda-1" && ev.target.id == "dest_copy") {
      var nodeCopy = document.getElementById(id).cloneNode(true);
      ev.target.appendChild(nodeCopy);
      reproducirBilletes();
    }

    if (id == "moneda-2" && ev.target.id == "dest_copy") {
      var nodeCopy = document.getElementById(id).cloneNode(true);
      ev.target.appendChild(nodeCopy);
      reproducirMonedas();
    }

    if (id == "moneda-3" && ev.target.id == "dest_copy") {
      var nodeCopy = document.getElementById(id).cloneNode(true);
      ev.target.appendChild(nodeCopy);
      reproducirMonedas();
    }

    var txt1 = document.getElementById(id);

    txt1.onclick = function () {
      document.getElementById(id).remove();
      this.remove();
    };
  }

  function ValidarYMostrar(ev) {
    //var result = document.getElementById("demo");
    var list = document.getElementById("dest_copy");
    let suma = 0;

    for (let i = 0; i < list.children.length; i++) {
      suma += parseInt(list.children[i].innerHTML);
    }

   // document.getElementById("demo").append(suma);

    var aleatoriov = document.getElementById("monto").innerHTML;

    if (suma === parseInt(aleatoriov)) {

      reproducirAplausos();
     
      alert(
        "Bien Hecho!, has completado correctamente la cantidad de dinero señalada $" +
          suma +
          "!."
      );

      if (document.getElementById("nivel").innerHTML === "Nivel 1") {
        mostrarNivelDos();
      } else if (document.getElementById("nivel").innerHTML === "Nivel 2") {
        mostrarNivelTres();
      } else if (document.getElementById("nivel").innerHTML === "Nivel 3") {
       mostrarNivelCuatro();
      } else if (document.getElementById("nivel").innerHTML === "Nivel 4") {
       mostrarNivelCinco();
      } else if (document.getElementById("nivel").innerHTML === "Nivel 5") {
       mostrarFin();
      }

    } else if (suma < parseInt(aleatoriov)) {
      alert(
        "El dinero en el recuadro ($" +
          suma +
          "), es menor al indicado ,Intenta de nuevo."
      );
      reproducirIncorrecto();
    } else if (suma > parseInt(aleatoriov)) {
      alert(
        "El dinero en el recuadro ($" +
          suma +
          "), es mayor al indicado, Intenta de nuevo."
      );
      reproducirIncorrecto();
    }
  }

  function mostrarNivelUno() {
    document.getElementById("dest_copy").innerHTML = "";

    landing = document.getElementById("landing");
    landing.style.display = "none";
    document.getElementById("container").style.display = "flex";

    document.getElementById("monto").innerHTML = "";

    var aleatorio = Math.floor(Math.random() * (999 - 111 + 1) + 111);
    //var aleatorio = Math.round(Math.random()*999);
    document.getElementById("monto").append(aleatorio);

    document.getElementById("nivel").innerHTML = "Nivel 1";
  }

  function mostrarNivelDos() {
    document.getElementById("dest_copy").innerHTML =
      "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
      "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
      "<div draggable='true' id='moneda-3' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>10</div>";
    landing = document.getElementById("landing");
    landing.style.display = "none";
    document.getElementById("container").style.display = "flex";

    document.getElementById("monto").innerHTML = "";

    var aleatorio = Math.floor(Math.random() * (999 - 111 + 1) + 111);
    //var aleatorio = Math.round(Math.random()*999);
    document.getElementById("monto").append(aleatorio);

    document.getElementById("nivel").innerHTML = "Nivel 2";
  }

  function mostrarNivelTres() {
    document.getElementById("dest_copy").innerHTML =
      "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
      "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
      "<div draggable='true' id='moneda-3' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>10</div>" +
      "<div draggable='true' id='moneda-3' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>10</div>";
    landing.style.display = "none";
    document.getElementById("container").style.display = "flex";
    document.getElementById("monto").innerHTML = "";

    var aleatorio = Math.floor(Math.random() * (999 - 221 + 1) + 221);
    document.getElementById("monto").append(aleatorio);

    document.getElementById("nivel").innerHTML = "Nivel 3";
  }

  function mostrarNivelCuatro() {
    document.getElementById("dest_copy").innerHTML =
      "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
      "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
      "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
      "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
      "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
      "<div draggable='true' id='moneda-3' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>10</div>";
    landing.style.display = "none";
    document.getElementById("container").style.display = "flex";
    document.getElementById("monto").innerHTML = "";

    var aleatorio = Math.floor(Math.random() * (999 - 312 + 1) + 312);
    document.getElementById("monto").append(aleatorio);

    document.getElementById("nivel").innerHTML = "Nivel 4";
  }

  function mostrarNivelCinco(){
    document.getElementById("dest_copy").innerHTML =
          "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
          "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
          "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
          "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
          "<div draggable='true' id='moneda-3' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>10</div>" +
          "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
          "<div draggable='true' id='moneda-3' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>10</div>" +
          "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
          "<div draggable='true' id='moneda-2' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>1</div>" +
          "<div draggable='true' id='moneda-1' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>100</div>" +
          "<div draggable='true' id='moneda-3' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>10</div>";

        document.getElementById("monto").innerHTML = "";

        var aleatorio = Math.floor(Math.random() * (999 - 335 + 1) + 335);
        document.getElementById("monto").append(aleatorio);

        document.getElementById("nivel").innerHTML = "Nivel 5";
  }

  function mostrarFin(){

    document.getElementById("dest_copy").innerHTML =
    "<center>Felicidades<center><br><p>Has completado correctamente las cantidades señaladas<br>con lo que muestras que dominas la descomposicion aditiva de los numeros</p><br><input type='button' onclick='mostrarNivelUno()' value='Reiniciar'/>";

  document.getElementById("monto").innerHTML = "";

  var aleatorio = Math.floor(Math.random() * (999 - 335 + 1) + 335);
  document.getElementById("monto").innerHTML = "Bien Hecho!";

  document.getElementById("nivel").innerHTML = "";

    
  }

   function reproducirAplausos(){

      var Audio = document.createElement("audio");
      Audio.setAttribute("src", "assets/sounds/clapping.mp3");
      Audio.play();   

  }

    function reproducirMonedas(){

      var Audio = document.createElement("audio");
      Audio.setAttribute("src", "assets/sounds/money-sound.mp3");
      Audio.play();   

  }

    function reproducirBilletes(){

      var Audio = document.createElement("audio");
      Audio.setAttribute("src", "assets/sounds/billetes.mp3");
      Audio.play();   

  }

   function reproducirIncorrecto(){

      var Audio = document.createElement("audio");
      Audio.setAttribute("src", "assets/sounds/incorrecto.mp3");
      Audio.play();   

  }

  function cuadroDialogo() {
    var dialogo = document.getElementById("DialogoNotificacion");
    dialogo.showModal();
  }

  function cerrarDialogo() {
    dialogo.close();
  }
