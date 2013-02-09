window.onload = function() {
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");



function main(){

	grid_init();
	
	spawn( 0 , 0 , 'red' );
	spawn( 384 , 0 , '#00bb00');
	spawn( 0, 384 , 'blue');
	spawn( 384 , 384 , '#FAEA0F' );
	grid_color( [ { 'x' : '48'  ,'y' : '240'  } , { 'x' : '48'  ,'y' : '288' } , { 'x' : '96'  ,'y' : '288' }, { 'x' : '144'  ,'y' : '288' } , { 'x' : '192'  ,'y' : '288' } ]  , 'red');
	grid_color( [ { 'x' : '336'  ,'y' : '48'  } , { 'x' : '288'  ,'y' : '48' } , { 'x' : '288'  ,'y' : '96' }, { 'x' : '288'  ,'y' : '144' } , { 'x' : '288'  ,'y' : '192' } ]  , '#00bb00');
	grid_color( [ { 'x' : 240  ,'y' : 48*11  } , { 'x' : 288  ,'y' : 48*11 } , { 'x' : '288'  ,'y' : 48*10 }, { 'x' : '288'  ,'y' : 48*9 } , { 'x' : '288'  ,'y' : 48*8 } ]  , 'blue');
	grid_color( [ { 'x' : 48*11  ,'y' : 48*7  } , { 'x' : 48*11  ,'y' : 48*6 } , { 'x' : 48*10  ,'y' : 48*6 }, { 'x' : 48*9  ,'y' : 48*6 } , { 'x' : 48*8  ,'y' : 48*6 } ]  , '#FAEA0F');
	home_init();
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
	 context.arc(x+48*2 , y+48*2 , 18, 0 , 2 * Math.PI, false); context.closePath();context.fillStyle = color;
      context.fill();context.beginPath();
	 context.arc(x+48*2 + 54 , y+48*2 , 18, 0 , 2 * Math.PI, false);context.closePath();context.fillStyle = color;
      context.fill();context.beginPath();
	 context.arc(x+48*2 , y+48*2 + 54, 18, 0 , 2 * Math.PI, false);context.closePath();context.fillStyle = color;
      context.fill();context.beginPath();
	 context.arc(x+48*2 + 54 , y+48*2 +54 , 18, 0 , 2 * Math.PI, false);context.closePath();
	 
	 context.fillStyle = color;
      context.fill();

 }

function grid_color( a  , color ){

	for(i = 0 ; i < a.length ; i++ )
	{
		context.fillStyle = color ;
	 	context.fillRect( a[i].x , a[i].y , 48 , 48 );
	 	context.strokeStyle = 'black';
		context.strokeRect( a[i].x , a[i].y , 48 , 48 ); 	
					 	
	}
}

function home_init(){
		

	context.beginPath();
	context.moveTo( 240,240 );
  	context.lineTo(312,312);
  	context.lineTo(240,336+48);
  	context.lineTo(240,240);
    context.fillStyle   = 'red';
    context.closePath();
	context.stroke();
    context.fill();

    context.beginPath();
    context.moveTo( 240+48*3,240 );
  	context.lineTo(312,312);
  	context.lineTo(240+48*3,240+48*3);
  	context.lineTo(240+48*3,240+48*3);
    context.fillStyle   = '#FAEA0F';
    context.closePath();
    context.stroke();
    context.fill();

        context.beginPath();
    context.moveTo( 240,240 );
  	context.lineTo(240 + 48*3,240);
  	context.lineTo(240+48*1.5,240+48*1.5);
  	context.lineTo(240,240);
    context.fillStyle   = '#00bb00';
    context.closePath();
    context.stroke();
    context.fill();

        context.beginPath();
    context.moveTo( 240+48*3,240+48*3 );
  	context.lineTo(240 , 240+48*3);
  	context.lineTo(240+48*1.5,240+48*1.5);
  	context.lineTo(240+48*3,240+48*3);
    context.fillStyle   = 'blue';
    context.closePath();
    context.stroke();
    context.fill();

    
  	
}

main();

}
