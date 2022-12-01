let noise, playBtn, dropDownNoise, noiseVolume;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
//noLoop();
  noise = new p5.Noise();
  noise.amp(0)

  playBtn = createButton("PLAY");
  playBtn
    .position(10, 10)
    .style("width", "100px")
    .style("height", "30px")
    .style("border-radius", "50px")
    .style("border", "1px solid black")
    .mousePressed(playNoise);

  stopBtn = createButton("STOP");
  stopBtn
    .position(120, 10)
    .style("width", "100px")
    .style("height", "30px")
    .style("border-radius", "50px")
    .style("border", "1px solid black")
    .mousePressed(() => {
      noise.stop();
      background(0);
    });

  dropDownNoise = createSelect();
  dropDownNoise
    .position(230, 10)
    .style("border-radius", "50px")
    .style("width", "100px")
    .style("height", "30px")
    .style("border", "1px solid black")
    .style("text-align", "center")
    dropDownNoise.option("white");
    dropDownNoise.option("brown");
    dropDownNoise.option("pink");
    dropDownNoise.changed(() => {
      noise.setType(`${dropDownNoise.value()}`)
      noise.start();
      background(`${dropDownNoise.value()}`);
      text(`${dropDownNoise.value()} noise`, width / 2, height / 2);
    });
  
  noiseVolume = createSlider(0,1,0,0)
  noiseVolume.position(50,50)
  noiseVolume.input(()=>{
    noise.amp(noiseVolume.value())
  })
}

function playNoise() {
  noise.setType(`${dropDownNoise.value()}`)
  noise.start();
  background(`${dropDownNoise.value()}`);
  text(`${dropDownNoise.value()} noise`, width / 2, height / 2);
}

function draw() {
  textAlign(CENTER);
  textSize(width/8);
  
}
