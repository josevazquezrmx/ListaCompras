

    let element = document.getElementById("TotalPrecio");
    element.innerHTML="Total en Precio";

    let txtNombre = document.getElementById("Name");
    //txtNombre.value="Leche Semidescremada"
    let txtNumber = document.getElementById("Number");


 //   let campos = document.getElementsByClassName("campo")
 //   campos[0].value = "Leche descremada deslactosada light=agua";
 //   console.log(campos [0].value);
//    console.log(campos);
//
 //   for (let  i= 0;  i< campos.length; i++) {
 //       campos[i].style.border="red thin solid";
 //   } // for i
//
 //   let spans = document.getElementsByTagName("span");
//    for (let i = 0; i< spans.length; i++) {
//      console.log(spans[i].textContent);
//    } // for i
//
    
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML= `
//    <tr>
//    <th scope="row">1</th>
//    <td>Leche des</td>
//    <td>3</td>
//    <td>$23.00</td>
//    </tr> 
// `;

  let agregar = document.getElementById ("btnAgregar")
  
  agregar.addEventListener("click", (event)=>{
    let Precio = Math.random () * 100;
    let tmp = `    <tr>
        <th scope="row">1</th>
        <td> ${txtNombre.value} </td>
        <td> ${txtNumber.value} </td>
        <td> ${Precio} </td>
        </tr> 
     `
        console.log(tmp);
        cuerpoTabla[0].innerHTML += tmp;
        txtNumber.value="";
        txtNombre.value="";
        txtNombre.focus();


   //   console.log("click en el boton agregar", event)
  }
  );