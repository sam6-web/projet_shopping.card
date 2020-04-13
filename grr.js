

/* function tooltip */
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


/* tableau */



  
function get_text() 
{
  let buttons = document.getElementsByClassName("btn btn-dark")
  let b = document.getElementsByClassName("totale");
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
      var reslt = this.innerText;
      

      let table = document.getElementById("tbd");
      let row = table.insertRow(0);
      let nm = row.insertCell(0);

 
      txtNmValue = document.createTextNode(reslt);
      nm.appendChild(txtNmValue);

         alert("votre comande est à  "  + reslt +" Dt");

      }
    }
       
}

/* test input formulaire */
  
/* const input = document.querySelector( 'input' ).innerText;
const msg   = document.querySelector( '.msg' ).innerText;
let ecr = document.createTextNode(msg)
msg.appendChild(ecr)
const regex = /^\d+(-\d+)?(,\d+(-\d+)?)*$/;

input.addEventListener( 'keyup', function ( e ) {

  let ecr = document.createTextNode(msg);
  msg.appendChild(ecr);
  const str = regex.test( this.value ) ? 'Match!' : 'No Match';
  msg.textContent = str;
} );
 */

f
















  


  


