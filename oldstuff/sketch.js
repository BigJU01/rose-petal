//declaring variables
//sliderZ is an attempt to make a slider that changes the size of the pattern (not working)
let d = 8, n = 5, z = 2, sliderD, sliderN, sliderZ, SliderR, SliderG, SliderB;
function setup() {
  createCanvas(500, 500);
	//making sliders
  sliderD = createSlider(1,100,50);
	sliderD.position(10,20);
	sliderN = createSlider(1,100,50);
	sliderN.position(10,50);
	sliderZ = createSlider(1,10,1);
	sliderZ.position(10,80);
  sliderR = createSlider(1,100,50);
	sliderR.position(10,110);
	sliderG = createSlider(1,100,50);
	sliderG.position(10,140);
	sliderB = createSlider(1,10,1);
	sliderB.position(10,170);
}

function draw() {
  //sliders that change the the colour of the design
  const R = SliderR.value();
  const G = SliderG.value();
  const B = SliderB.value();
  fill(R, G, B);
	d = sliderD.value();
	n = sliderN.value();
	//calculating k
  var k = n/d;
  background(80);
	translate(width/2, height / 2);
	//programming desgin
  beginShape();
	stroke(255);
	fill(40);
	strokeWeight(1);
  //making a loop that gives an angle which is used in equations to calculate radius and coordinates
	for (var a = 0; a < TWO_PI * d; a += 0.02) {
		var r = 200 * cos(k * a);
		var x = r *cos(a);
		var y = r *sin(a);
		vertex(x,y);
	}
endShape(CLOSE);
}
