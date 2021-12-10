"use strict"


let d = document;
let divA = d.createElement('div');
let divB = d.createElement('div');
let divCon = d.getElementById('divContenido');

let btnMarcador = d.createElement('button'),
  btnDesmarcador = d.createElement('button'),
  labell = d.createElement('label');;
divB.style.width = '10%';
divB.style.float = 'right';

function colorAleatoiro(){

  let result = "rgb(";
  let color = Math.round(Math.random()*255);
  result += color+',';
  color = Math.round(Math.random()*255);
  result += color+',';
  color = Math.round(Math.random()*255);
  result += color;

  return result+')';
}

function nombreAleatorio(){

  let result = "";

  let $array = [
    ["a.","b.","c.","d.","e..","f.","g.","h","i.","j.","k.",".l.","m.","n.","o.","p.",
      "q.","r.","s..",".u.",".v.","w.","x.","y.","z."],
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
      "Q","R","S","U","V","W","X","Y","Z" ],
    ["1","2","!!","()","-","--","/","///","*","**","/*/","=","==","0","654","39w",
      "67ll","ººº","2ºº","fs67gg","ghgn32","as","fg90","GFD-55","ZZTOP65" ]
  ];

  let valorArray = Math.round(Math.random()*2 );
  let valorDado = Math.round(Math.random()*24);
  result = $array[valorArray][valorDado];

  valorArray = Math.round(Math.random()*2 )
  valorDado = Math.round(Math.random()*24);
  result += $array[valorArray][valorDado];

  valorArray = Math.round(Math.random()*2 )
  valorDado = Math.round(Math.random()*24);
  result += $array[valorArray][valorDado];

  return  result;
}

function crearCheckbox(numero){

  for (let i = 1; i <= numero; i++){


    let chekBox = d.createElement('input');
    chekBox.setAttribute('type', 'checkbox');
    chekBox.setAttribute('name', 'checkbox');
    chekBox.style.width= '21px';
    chekBox.style.height= '21px';
    divA.style.float = 'left';
    divA.style.width = '90%';

    labell = d.createElement('label');
    labell.setAttribute('for', 'checkbox');
    labell.textContent = nombreAleatorio();
    labell.style.color = colorAleatoiro();
    console.log(colorAleatoiro())

    if ( i  === numero){

      btnMarcador.setAttribute('class', 'marcador');
      btnMarcador.textContent = "Marcar";
      btnDesmarcador.setAttribute('class', 'desmarcador');

      btnDesmarcador.textContent = "Desmarcar";
      divB.appendChild(btnMarcador);
      divB.appendChild(btnDesmarcador);
      divCon.appendChild(divB);
    }

    divA.appendChild(chekBox);
    divA.appendChild(labell);
    divCon.appendChild(divA);

  }
}





crearCheckbox(100);


btnMarcador.addEventListener('click', (e) => {

  let chek = document.getElementsByName('checkbox');

  for (let i = 0; i < 100; i++){

    setTimeout( function () {
      chek[i].checked = true;

    }, 25 * i);


  }

  console.log(chek.length );
});


btnDesmarcador.addEventListener('click', (e) => {

  let chek = document.getElementsByName('checkbox');

  for (let i = 0; i < 100; i++){
    setTimeout( function () {
      chek[i].checked = false;

    }, 25 * i);

  }

});

