var drop;
var drops = [];
function setup() {
  createCanvas(800,400);
for(var i = 0; i<100; i++)  {
  drops[i] = new Drop();
}
}

function draw() {
  background("black"); 
  for(var i = 0; i<100; i++){
    drops[i].fall();
    drops[i].display();
  }

}