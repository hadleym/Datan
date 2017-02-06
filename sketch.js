var polygons = [];
function setup(){
	num_rows = 5;
	num_cols = 5;
	for ( var r = 0; r < num_rows; r+=1){
		for ( var c = 0; c < num_cols; c+=1){
			var poly = new hexagon(r,c);
			polygons.push(poly);
		}
	}
	createCanvas(720,800);
}

function draw(){
	background(102);
//	draw_old_hexagons();
	draw_new_hexagons();
}

function draw_new_hexagons(){
	console.log(polygons);
	for (var i = 0; i < polygons.length; i++){
		polygons[i].render();
	}
}
function draw_old_hexagons(){
	unit = width / 6;
	number = 6;
	x_offset = unit*.5;
	y_offset = unit*.5;
	x_gap_modifier = .85;
	y_gap_modifier = .75;
	num_rows = number;
	num_cols = number;
	for ( var r = 0; r < num_rows; r += 1){
		for (var c = 0; c < num_cols; c += 1){
			offset = 0;
			if (( c%2) === 0 ){
				offset = .5*(unit*x_gap_modifier);
			}
			push();
			translate(x_offset+(r)*(unit*x_gap_modifier)+offset,y_offset+ c*(unit*y_gap_modifier));
		//	rotate(frameCount / -100.0);
			polygon(0, 0, unit/2, 6);
			pop();
		}
	}
}		


function polygon(x, y, radius, npoints){
	var angle = TWO_PI / npoints ;
	beginShape();
	for (var a = 0; a < TWO_PI; a += angle) {
		ap = a+TWO_PI/4;
		var sx = cos(ap) * radius;
		var sy = sin(ap) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}

function hexagon(row,col, unit){
	this.unit = width/6;
	this.height = unit;
	this.width = sqrt(3)/2*this.height;
	this.row = row;
	this.col = col;
	this.render = function(){
		push();
		translate(2*this.row, 1.5*this.col);
		polygon(this.x, this.y, 6);
		pop();
	}
}


