$('.drip').on('animationend', ()=>{
  $('.name').css('background', '#cc5500');
  $('.drip2').addClass('drip2go');
  $('.drip2').on('animationend', ()=>{
    $('.drip2').addClass('slideup');
    $('.drip2').on('animationend', ()=>{
      $('.drip2').removeClass('drip2');
      $('.drip2').removeClass('slideup');
      $('#lineIntro').addClass('hidden');
      $('#canvas').removeClass('hidden');
    });
  });
});


// TRIANGLES ===================================
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

var triangles = [],
    amount = 10;

function Triangle(){
  this.points = rndPoints();
  this.alpha = (Math.floor(Math.random()*30))/100;
  this.r = Math.floor(Math.random() * 255);
  this.g = Math.floor(Math.random() * 255);
  this.b = Math.floor(Math.random() * 255);
}

for(var i=0; i < amount; i+=1){
  triangle = new Triangle();
  triangles.push(triangle);
}

function rndPoints(){
  var points = [];
  var point;
  for(var i=0; i<3; i+=1){
    point = {
      x: Math.random()*width,
      y: Math.random()*height,
      vx: Math.random()*6 - 3,
      vy: Math.random()*6 - 3
    }
    points.push(point);
  }
  return points;
}

function drawTriangles(triangle){
  var triang = new Path2D();

  triang.moveTo(triangle.points[0].x, triangle.points[0].y);
  triang.lineTo(triangle.points[1].x, triangle.points[1].y);
  triang.lineTo(triangle.points[2].x, triangle.points[2].y);
  triang.lineTo(triangle.points[0].x, triangle.points[0].y);

  context.fillStyle = "rgba(150,150,150," + triangle.alpha + ")";
  //context.fillStyle = "rgba("+triangle.r+","+triangle.g+","+triangle.b+"," + triangle.alpha + ")";
  context.fill(triang);

  for(var i=0; i < triangle.points.length; i+=1){
    triangle.points[i].x += triangle.points[i].vx;
    triangle.points[i].y += triangle.points[i].vy;

    if(triangle.points[i].x >= width){
      triangle.points[i].x = width;
      triangle.points[i].vx *= -1;
    }
    if(triangle.points[i].x <= 0){
      triangle.points[i].x = 0;
      triangle.points[i].vx *= -1;
    }

    if(triangle.points[i].y >= height){
      triangle.points[i].y = height;
      triangle.points[i].vy *= -1;
    }
    if(triangle.points[i].y <= 0){
      triangle.points[i].y = 0;
      triangle.points[i].vy *= -1;
    }
  }
}

function render(){

  context.clearRect(0, 0, width, height);
  // context.fillStyle = "#cc5500";
  context.fillRect(0, 0, width, height);

  for(var i=0; i<triangles.length; i+=1){
    drawTriangles(triangles[i]);
  }

  window.setTimeout(render, 1000 / 60);
}

render();

// END TRIANGLES ===================================
