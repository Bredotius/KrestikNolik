let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for(let i=1; i<10; i++){
  let excel = document.createElement('div');
  excel.classList.add('excel');
  field.appendChild(excel);
}

let excel = document.getElementsByClassName('excel');

let x = 1, y = 3; 

for(let i=0; i<excel.length; i++){
  if(x>3){
    x=1;
    y--;
  }
  excel[i].setAttribute('posX', x);
  excel[i].setAttribute('posY', y);
  x++;
}

function clearFeild(){
  for(let i = 0;i<9;i++){
    excel[i].classList.remove('used');
    excel[i].classList.remove('nolik');
    excel[i].classList.remove('krestik');
    hod = 1;
    click = 0;
    step = true;
  }
}

let step = true;

function winCheck(){
  if (excel[0].classList.contains('nolik') && excel[1].classList.contains('nolik') && excel[2].classList.contains('nolik')
  || excel[3].classList.contains('nolik') && excel[4].classList.contains('nolik') && excel[5].classList.contains('nolik')
  || excel[6].classList.contains('nolik') && excel[7].classList.contains('nolik') && excel[8].classList.contains('nolik')

  || excel[0].classList.contains('nolik') && excel[3].classList.contains('nolik') && excel[6].classList.contains('nolik')
  || excel[1].classList.contains('nolik') && excel[4].classList.contains('nolik') && excel[7].classList.contains('nolik')
  || excel[2].classList.contains('nolik') && excel[5].classList.contains('nolik') && excel[8].classList.contains('nolik')
 
  || excel[0].classList.contains('nolik') && excel[4].classList.contains('nolik') && excel[8].classList.contains('nolik')
  || excel[2].classList.contains('nolik') && excel[4].classList.contains('nolik') && excel[6].classList.contains('nolik'))
  {
    alert("Нолики выиграли");
    clearFeild();
  } else if (excel[0].classList.contains('krestik') && excel[1].classList.contains('krestik') && excel[2].classList.contains('krestik')
  || excel[3].classList.contains('krestik') && excel[4].classList.contains('krestik') && excel[5].classList.contains('krestik')
  || excel[6].classList.contains('krestik') && excel[7].classList.contains('krestik') && excel[8].classList.contains('krestik')

  || excel[0].classList.contains('krestik') && excel[3].classList.contains('krestik') && excel[6].classList.contains('krestik')
  || excel[1].classList.contains('krestik') && excel[4].classList.contains('krestik') && excel[7].classList.contains('krestik')
  || excel[2].classList.contains('krestik') && excel[5].classList.contains('krestik') && excel[8].classList.contains('krestik')
 
  || excel[0].classList.contains('krestik') && excel[4].classList.contains('krestik') && excel[8].classList.contains('krestik')
  || excel[2].classList.contains('krestik') && excel[4].classList.contains('krestik') && excel[6].classList.contains('krestik'))
  {
    alert("Крестики выиграли");
    clearFeild();
  } else if(click >= 9){
    alert("Ничья");
    clearFeild();
  }
}

function createNolik(){
  function generateNolik(){
    let posX = Math.round(Math.random()* (2) + 1);
    let posY = Math.round(Math.random()* (2) + 1);
    return [posX,posY];
  }

  hod = 1;
  click++;
  if(click >= 9){
    winCheck();
  }

  let nolikCoordinates = generateNolik();
  nolik = document.querySelector(`[posX = "${nolikCoordinates[0]}"][posY = "${nolikCoordinates[1]}"]`);
  
  while(nolik.classList.contains('used')){
    let nolikCoordinates = generateNolik();
    nolik = document.querySelector(`[posX = "${nolikCoordinates[0]}"][posY = "${nolikCoordinates[1]}"]`);
  }
  nolik.classList.add('nolik');
  nolik.classList.add('used');
  step = true;
}

let interval = setInterval(function(){
  winCheck();
  if(hod == 2){
    createNolik();
  }
}, 500)

let hod = 1;
let click = 0;

field.addEventListener('click', function(e){
  let target = e.target;
  if(!target.classList.contains('used') && hod == 1 && step){
    click++;
    target.classList.add('krestik');
    hod = 2;
    target.classList.add('used');
    ster = false;
  } else if(click == 9){
    alert("Ничья");
    clearFeild();
  }
})

