/**
 * Created by Lv on 2016/12/29.
 */

var canvas = document.getElementById('main');
var ctx=canvas.getContext("2d");
ctx.translate(0.5,0.5);
ctx.lineWidth = 1;
ctx.strokeStyle='#999';

ctx.beginPath();
ctx.moveTo(45,3);
ctx.lineTo(45,184);
ctx.lineTo(349,184);
ctx.stroke();
ctx.closePath();

ctx.font="11px";
for(var i=0;i<7;i++){
    var x=20;
    var value=80+(6-i)*10;
    if(value<100){x=24;}
    var y=(i+1)*20;
    ctx.fillText(value+"",x,y);
}

var high=[115,117,126,136,123,125];
var highColor=['#ffde30','#ff9000','#45c01a','#ff3e3e','#2782d7','#45c01a'];

var low=[97,84,78,92,84,85];
var lowColor=['#ffde30','#ff9000','#45c01a','#ff3e3e','#2782d7','#45c01a'];

points(high,highColor,"up");
points(low,lowColor,"down");

var xdata=['09:00','11:20','08:30','12:20','13:15','14:00'];
for(var i=0;i<6;i++){
    var x = 77 + i * 45;
    var y=196;
    ctx.fillText(xdata[i],x,y);
}
for(var i=0;i<6;i++){
    var x = 92 + i * 45;
    line(x,178,x,184);
}

function points(values,colors,position) {
    for (var i = 0; i < values.length; i++) {
        var x = 92 + i * 45;
        var y = (150 - values[i]) * 2;
        if(i<values.length-1){
            var x2 = 92 + (i+1) * 45;
            var y2 = (150 - values[i+1]) * 2;
            line(x,y,x2,y2);
        }
        cycle(x, y, colors[i], values[i], position);
    }
}

function line(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
function cycle(x,y,color,text,position) {
    ctx.save();
    var r=7;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.fillStyle=color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    if(position=='up'){
        uptext(x,y,text);
    }else{
        downtext(x,y,text);
    }
}
function uptext(x,y,text){
    ctx.fillText(text,x-10,y-12);
}
function downtext(x,y,text){
    ctx.fillText(text,x-6,y+22);
}

