var fundo = osc(2.5, 0.4, 39)
	.rotate(0, -0.1)
	.modulateScrollY(osc(2), 1, 0);

var forma = shape(3)
	.scale(0.9)
	.rotate(0.319, 0.7)
	.modulateRotate(osc(120.5, 0.4, 39)
    .scale(1), 500, 10)
	// padrao de interferencia .repeat(200, 1000);
forma.diff(fundo).out();