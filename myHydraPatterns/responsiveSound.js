function audio() { 
    a.show()
    a.setBins(3)
    //.out(o0);
  }
  
  function shapes() {
    shape( 2 )
    .rotate(90)
    .repeatX( 5 )
    .repeatY( 1 )
    .scale(
      () => a.fft[0]*1
    )
    //.out(o1);
  }
  
  function background() {
      osc(3, 0.2, 3);
  }
  
  function teste1() {
      shape(19).color(3).out(o0);
  }
  
  function teste2() {
      shape(3).color(5).out(o0);
  }
  
  
  function mix() {
      shape(5).blend(teste1());
  }
  
  render(mix());