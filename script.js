const steps = document.querySelectorAll('.step');
let current = 0;

function update(){
  steps.forEach((s,i)=>{
    s.classList.toggle('active', i <= current);
  });
}

function next(){
  if(current < steps.length - 1){
    current++;
    update();
  }
}

function prev(){
  if(current > 0){
    current--;
    update();
  }
}

update();
