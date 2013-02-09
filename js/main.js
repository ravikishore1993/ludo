window.onload = function() {
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");



function main(){

	grid_init();
	spawn( 0 , 0 , 'red' );
	spawn( 384 , 0 , '#00bb00');
	spawn( 0, 384 , 'blue');
	spawn( 384 , 384 , '#FAEA0F' );

}


function grid_init(){
	 context.strokeStyle =	 "#000";
	context.strokeRect(0, 0, 624, 624);
	for ( x = 0; x <= 624; x += 48) {
	  context.moveTo(x, 0);
  	context.lineTo(x, 624);
	}
	for ( y = 0; y <= 624; y += 48) {
  	context.moveTo(0, y);
  	context.lineTo(624, y);
	}
	context.strokeStyle = "#000";
	context.stroke();
}

function spawn( x , y , color )
{
	 context.fillStyle = color ;
	 context.fillRect( x , y , 5*48 , 5*48 );
	 context.strokeRect(x , y , 5*48 , 5*48 );
	 context.fillStyle = 'white' ;
	 context.fillRect( x+48 , y+48 , 3*48 , 3*48 );	
	 context.strokeRect(x+48 , y+48 , 3*48 , 3*48);
	 context.beginPath();
	 context.arc(x+48*2 , y+48*2 , 18, 0 , 2 * Math.PI, false);
	 context.arc(x+48*2 + 54 , y+48*2 , 18, 0 , 2 * Math.PI, false);
	 context.arc(x+48*2 , y+48*2 + 54, 18, 0 , 2 * Math.PI, false);
	 context.arc(x+48*2 + 54 , y+48*2 +54 , 18, 0 , 2 * Math.PI, false);
	 
	 context.fillStyle = color;
      context.fill();
 }




main();

}
