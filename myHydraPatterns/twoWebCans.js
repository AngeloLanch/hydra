osc(100, 0.03, 0)
    .rotate(0, 0.1)
    .repeat()
    .out()

s0.initCam()
screen(s0);out(o1)

src(s0).modulate(o0).out(o2)

osc(10, 0.01, 1.2)
    .rotate(0, 0.7)
    .out(o1)

src(s0).modulate(o1).out(o3)