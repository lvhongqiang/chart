"use strict";
var Components = function () {
    var component = {};

    component.line = function (ctx, x1, y1, x2, y2, color, process) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        if (process !== undefined) {
            ctx.lineTo((x2 - x1) * process + x1, (y2 - y1) * process + y1);
        } else {
            ctx.lineTo(x2, y2);
        }
        if (color !== undefined) {
            ctx.setStrokeStyle(color);
        }
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };

    component.cycle = function (ctx, x, y, color, r, process) {
        ctx.save();
        if (process !== undefined) {
            r = r * process;
        }
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
        ctx.setFillStyle(color);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };

    component.uptext = function (ctx, x, y, text) {
        ctx.fillText(text, x - 10, y - 12);
    };

    component.downtext = function (ctx, x, y, text) {
        ctx.fillText(text, x - 6, y + 22);
    };

    return component;
};
module.exports = Components();