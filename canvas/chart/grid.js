"use strict";
var components = new Components();

var Grid = function () {
    var grid = {};
    grid.config = {
        width: 370,
        height: 270,
        padding: {
            top: 30,
            right: 30,
            bottom: 40,
            left: 40
        },
        thumb: {
            enable: true,
            zoom: 6
        },
        minSpace: {
            xAxis: 45,
            yAxis: 24
        }
    };
    grid.zeroPoint = {x: 0, y: 0};
    grid.maxPoint = {x: 0, y: 0};
    grid.xAxis = {
        space: 0,//x轴刻度间隔距离
        splitNum: 0,//x轴刻度数
        splitD: 0,//刻度值差
        zeroValue: 0//0刻度值
    };
    grid.yAxis = {
        space: 0,//y轴刻度间隔距离
        splitNum: 0,//y轴刻度数
        splitD: 0,//刻度值差
        zeroValue: 0//0刻度值
    };
    //初始化坐标系
    grid.init = function (ctx, opt) {
        grid.setConfig(opt); //设置配置项
        grid.zeroPoint.x = grid.config.padding.left;
        grid.zeroPoint.y = grid.config.height - grid.config.padding.bottom;
        grid.maxPoint.x = grid.config.width - grid.config.padding.right;
        grid.maxPoint.y = grid.config.padding.top;
        // ctx.translate(0.5,0.5);
        ctx.setLineWidth(1);
        ctx.setStrokeStyle("rgba(200, 200, 200, 0.7)");
        ctx.setFontSize(11);
        grid.initXAxis(opt);//设置x轴属性
        grid.initYAxis(opt);//设置y轴属性
    };
    grid.maxTransX = function () {
        return grid.xAxis.space * grid.xAxis.splitNum - (grid.maxPoint.x - grid.zeroPoint.x);
    };

    //切掉移动后溢出坐标轴外的内容
    grid.cut = function (ctx) {
        ctx.clearRect(-1, 0, grid.zeroPoint.x + 1, grid.config.height);
        ctx.clearRect(grid.maxPoint.x, 0, grid.config.width - grid.zeroPoint.x, grid.config.height);
        ctx.clearRect(grid.zeroPoint.x - 1, grid.zeroPoint.y, 20, grid.config.height - grid.zeroPoint.y);
    };

    //画坐标轴
    grid.drawGrid = function (ctx, opt) {
        ctx.beginPath();
        ctx.moveTo(grid.zeroPoint.x, grid.maxPoint.y);
        ctx.lineTo(grid.zeroPoint.x, grid.zeroPoint.y);
        ctx.lineTo(grid.maxPoint.x, grid.zeroPoint.y);
        ctx.stroke();
        ctx.closePath();

        ctx.fillText(opt.xtitle, grid.zeroPoint.x - 10, grid.zeroPoint.y + 20);
        ctx.fillText(opt.ytitle, grid.zeroPoint.x - 10, grid.maxPoint.y - 5);
    };

    grid.getPoint = function (index, value) {
        var x = grid.zeroPoint.x + (index + 1) * grid.xAxis.space;
        var y = grid.zeroPoint.y - ((value - grid.yAxis.zeroValue) / grid.yAxis.splitD * grid.yAxis.space);
        return {x: x, y: y};
    };

    //画x轴刻度
    grid.drawXAxis = function (ctx, opt) {
        var xdata = opt.xdata;
        var interval = 1;
        //趋势模式刻度间隔增加
        if (grid.config.thumb.enable) {
            interval = grid.config.thumb.zoom;
        }
        var i = interval;
        var x;
        var y;
        var textX;
        var textY;
        for (i = interval; i < grid.xAxis.splitNum && i <= xdata.length; i += interval) {
            x = grid.zeroPoint.x + i * grid.xAxis.space;
            y = grid.zeroPoint.y;
            //画刻度线
            components.line(ctx, x, y, x, y - 6);
            textX = x - grid.valueLength(xdata[i - 1].value) / 2;
            textY = y + 20;
            //画刻度值
            ctx.fillText(xdata[i - 1].value, textX, textY);
            ctx.fillText(xdata[i - 1].sub, textX, textY + 10);
        }
    };

    //画y轴刻度
    grid.drawYAxis = function (ctx) {
        var i = 1;
        var value;
        var x;
        var y;
        for (i = 1; i <= grid.yAxis.splitNum - 1; i += 1) {
            value = grid.yAxis.zeroValue + i * grid.yAxis.splitD;
            x = grid.zeroPoint.x - grid.valueLength(value) - 9;
            y = grid.zeroPoint.y - i * grid.config.minSpace.yAxis;
            //画刻度值
            ctx.fillText(value + "", x, y);
            //画辅助线
            components.line(ctx, grid.zeroPoint.x, y, grid.maxPoint.x, y, "rgba(200, 200, 200, 0.2)");
        }
    };

    //数值的长度
    grid.valueLength = function (value) {
        value = value + "";
        return value.length * 5;
    };

    //y轴最小刻度值
    grid.startD = function (splitD, min) {
        var m = min % splitD;
        return min - m;
    };

    //取分割值间距
    grid.round = function (splitD) {
        var ten = 0;
        while (splitD > 10) {
            splitD = splitD / 10;
            ten += 1;
        }
        splitD = Math.ceil(splitD);
        if (splitD > 3 && splitD < 6) {
            splitD = 5;
        } else if (splitD >= 6) {
            splitD = 10;
        }
        while (ten > 0) {
            splitD = splitD * 10;
            ten -= 1;
        }
        return splitD;
    };

    //取最大值和最小值
    grid.range = function (opt) {
        var min = opt.series[0].value[0].value;
        var max = opt.series[0].value[0].value;
        var i = 0;
        var j = 0;
        var value;
        for (i = 0; i < opt.series.length; i += 1) {
            for (j = 0; j < opt.series[i].value.length; j += 1) {
                value = opt.series[i].value[j].value;
                if (value > max) {
                    max = value;
                }
                if (value < min) {
                    min = value;
                }
            }
        }
        return {max: max, min: min};
    };

    //设置配置项
    grid.setConfig = function (opt) {
        if (opt.thumb !== null) {
            if (opt.thumb.enable !== null) {
                grid.config.thumb.enable = opt.thumb.enable;
            }
            if (opt.thumb.zoom !== null) {
                grid.config.thumb.zoom = opt.thumb.zoom;
            }
        }
        if (opt.width !== null) {
            grid.config.width = opt.width;
        }
        if (opt.height !== null) {
            grid.config.height = opt.height;
        }
        if (opt.padding !== null) {
            if (opt.padding.top !== null) {
                grid.config.padding.top = opt.padding.top;
            }
            if (opt.padding.right !== null) {
                grid.config.padding.right = opt.padding.right;
            }
            if (opt.padding.bottom !== null) {
                grid.config.padding.bottom = opt.padding.bottom;
            }
            if (opt.padding.left !== null) {
                grid.config.padding.left = opt.padding.left;
            }
        }
    };

    //设置y轴属性
    grid.initYAxis = function (opt) {
        var r = grid.range(opt);
        var valueD = r.max - r.min;
        var pxLength = grid.zeroPoint.y - grid.maxPoint.y;
        //刻度数
        var splitNum = Math.floor(pxLength / grid.config.minSpace.yAxis);
        //刻度值差
        var splitD = Math.ceil(valueD / splitNum);
        splitD = grid.round(splitD);
        //0刻度值
        var zeroValue = grid.startD(splitD, r.min) - splitD;
        grid.yAxis.space = grid.config.minSpace.yAxis;
        grid.yAxis.splitNum = splitNum;
        grid.yAxis.splitD = splitD;
        grid.yAxis.zeroValue = zeroValue;
    };

    //设置x轴属性
    grid.initXAxis = function (opt) {
        var pxLength = grid.maxPoint.x - grid.zeroPoint.x;
        var splitNum;//刻度数
        var space;//刻度间隔距离

        splitNum = opt.xdata.length + 1;
        space = Math.ceil(pxLength / splitNum);
        if (space < grid.config.minSpace.xAxis) {
            space = grid.config.minSpace.xAxis;
        }
        //趋势模式
        if (grid.config.thumb.enable) {
            space = grid.config.minSpace.xAxis / grid.config.thumb.zoom;
        }
        grid.xAxis.space = space;
        grid.xAxis.splitNum = splitNum;
    };

    return grid;
};
