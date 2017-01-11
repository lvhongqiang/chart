"use strict";

// var grid = require("./grid.js");
// var components = require("./components.js");
// var animation = require("./animation");

var components = new Components();
var grid = new Grid();
var animation = new Animation();

var Line = function () {
    var line = {};
    var canvas;
    var ctx;
    var position = 0;
    var transX = 0;
    var opt = {};

    line.clearQueue = function () {};

    line.startTouch = function (event) {
        position = event.touches[0].x;
    };
    line.moveTouch = function (event) {
        var max = grid.maxTransX();
        if (max <= 0) {
            return;
        }
        if (event.changedTouches !== null && event.changedTouches.length > 0) {
            var x = event.changedTouches[0].x;
            var dis = position - x;
            if (Math.abs(dis) > 1) {
                if ((transX + dis) > 0 && (transX + dis) < max) {
                    line.move(transX + dis,0);
                    transX += dis;
                    position = x;
                }
            }
        }
    };
    line.endTouch = function (event) {
        var max = grid.maxTransX();
        if (max <= 0) {
            return;
        }
        if (event.changedTouches !== null && event.changedTouches.length > 0) {
            var x = event.changedTouches[0].x;
            var dis = position - x;
            if (Math.abs(dis) > 1) {
                if ((transX + dis) < 0) {
                    line.move(0,0);
                    transX = 0;
                } else if ((transX + dis) > 0 && (transX + dis) < max) {
                    line.move(transX + dis,0);
                    transX += dis;
                } else {
                    line.move(max,0);
                    transX = max;
                }
            }
        }
    };

    line.init = function (id) {
        canvas = document.getElementById(id);
        ctx=canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
    };
    line.setOption = function (option) {
        opt = option;
        line.draw(2000);
    };
    line.move = function (transX, duration) {
        animation.clearQueue();
        animation.run({
            timing: "easeOut",
            duration: duration,
            onProcess: function (process) {
                ctx.translate( - transX, 0);
                grid.init(ctx, opt);
                grid.drawXAxis(ctx, opt);
                var i = 0;
                for (i = 0; i < opt.series.length; i += 1) {
                    //画上下两点连接线
                    if (!opt.thumb.enable && i < opt.series.length - 1) {
                        line.lines(ctx, opt.series[i].value, opt.series[i + 1].value);
                    }
                    line.points(ctx, opt.series[i].value, opt.series[i].position, opt.thumb.enable);
                }
                ctx.translate(transX, 0);
                grid.cut(ctx, opt);
                grid.drawGrid(ctx, opt);
                grid.drawYAxis(ctx, opt);
                ctx.draw();
            }
        });
        
    }
    line.draw = function (duration) {
        animation.clearQueue();
        animation.run({
            timing: "easeOut",
            duration: duration,
            onProcess: function (process) {
                grid.init(ctx, opt);
                grid.drawXAxis(ctx, opt);
                var i = 0;
                for (i = 0; i < opt.series.length; i += 1) {
                    //画上下两点连接线
                    if (!opt.thumb.enable && i < opt.series.length - 1) {
                        line.lines(ctx, opt.series[i].value, opt.series[i + 1].value, process);
                    }
                    line.points(ctx, opt.series[i].value, opt.series[i].position, opt.thumb.enable, process);
                }
                grid.cut(ctx, opt);
                grid.drawGrid(ctx, opt);
                grid.drawYAxis(ctx, opt);
                ctx.draw();
            }
        });
    };

    line.lines = function (ctx, data1, data2, process) {
        if(process=== undefined) process = 1;
        var i = 0;
        var p;
        var p2;
        for (i = 0; i < data1.length * process; i += 1) {
            p = grid.getPoint(i, data1[i].value);
            p2 = grid.getPoint(i, data2[i].value);
            components.line(ctx, p.x, p.y, p2.x, p2.y, null, process);
        }
    };

    line.points = function (ctx, data, position, thumb, process) {
        if(process=== undefined) process = 1;
        var i = 0;
        var p;
        var x;
        var y;
        var p2;
        var x2;
        var y2;
        for (i = 0; i < data.length * process; i += 1) {
            p = grid.getPoint(i, data[i].value);
            x = p.x;
            y = p.y;
            if (i < data.length - 1) {
                p2 = grid.getPoint(i + 1, data[i + 1].value);
                x2 = p2.x;
                y2 = p2.y;
                components.line(ctx, x, y, x2, y2, null, process);
            }
            if (thumb) {
                components.cycle(ctx, x, y, data[i].color, 3, process);
            } else {
                components.cycle(ctx, x, y, data[i].color, 7, process);
                if (position === "up") {
                    components.uptext(ctx, x, y, data[i].value);
                } else {
                    components.downtext(ctx, x, y, data[i].value);
                }
            }
        }
    };

    return line;
};

module.exports = new Line();
