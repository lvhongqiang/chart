"use strict";
// var Timing = require("./util/timing.js");

var Animation = function () {
    var animation = {};
    animation.delay = 17;
    animation.id = 0;
    animation.queue = [];


    animation.run = function (opts) {
        opts.duration = typeof opts.duration === "undefined" ? 0 : opts.duration;
        opts.timing = opts.timing || "linear";

        var createAnimationFrame = function () {
            if (typeof requestAnimationFrame !== "undefined") {
                console.log("requestAnimationFrame");
                return requestAnimationFrame;
            } else if (typeof setTimeout !== "undefined") {
                return function (step, delay) {
                    console.log("setTimeout;" + animation.id);
                    return setTimeout(function () {
                        var timeStamp = +new Date();
                        step(timeStamp);
                    }, delay);
                };
            } else {
                return function (step) {
                    console.log("step(null)");
                    step(null);
                };
            }
        };
        var animationFrame = createAnimationFrame();
        var startTimeStamp = null;

        function step(timestamp) {
            animation.queue.shift();
            if (timestamp === null) {
                opts.onProcess && opts.onProcess(1);
                console.log("timestamp === null opts.onProcess(1)" + animation.id);
                opts.onAnimationFinish && opts.onAnimationFinish();
                return;
            }
            if (startTimeStamp === null) {
                startTimeStamp = timestamp;
            }
            if (timestamp - startTimeStamp < opts.duration) {
                var process = (timestamp - startTimeStamp) / opts.duration;
                var timingFunction = Timing[opts.timing];
                process = timingFunction(process);
                opts.onProcess && opts.onProcess(process);
                console.log("opts.onProcess(process)" + animation.id);
                animation.id = animationFrame(step, animation.delay);
                animation.queue.push(animation.id);
            } else {
                opts.onProcess && opts.onProcess(1);
                console.log("opts.onProcess(1)" + animation.id);
                opts.onAnimationFinish && opts.onAnimationFinish();
            }
        }
        animation.id = animationFrame(step, animation.delay);
        animation.queue.push(animation.id);
    };

    animation.clearQueue = function () {
        console.log("queue.length = " + animation.queue.length);
        var tid;
        while (animation.queue.length > 1) {
            tid = animation.queue.pop();
            console.log("clearQueue" + tid);
            if (typeof cancelAnimationFrame !== "undefined") {
                console.log("cancelAnimationFrame" + tid);
                cancelAnimationFrame(tid);
            } else if (typeof setTimeout !== "undefined") {
                console.log("clearTimeout(id);" + tid);
                clearTimeout(tid);
            }
        }
    };
    return animation;
};

module.exports = Animation();