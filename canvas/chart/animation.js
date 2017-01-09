"use strict";

var Animation = function (opts) {
    opts.duration = typeof opts.duration === "undefined" ? 0 : opts.duration;
    opts.timing = opts.timing || "linear";

    var delay = 17;

    var createAnimationFrame = function () {
        if (typeof requestAnimationFrame !== "undefined") {
            return requestAnimationFrame;
        } else if (typeof setTimeout !== "undefined") {
            return function (step, delay) {
                setTimeout(function () {
                    var timeStamp = +new Date();
                    step(timeStamp);
                }, delay);
            };
        } else {
            return function (step) {
                step(null);
            };
        }
    };
    var animationFrame = createAnimationFrame();
    var startTimeStamp = null;

    function step(timestamp) {
        if (timestamp === null) {
            opts.onProcess && opts.onProcess(1);
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
            animationFrame(step, delay);
        } else {
            opts.onProcess && opts.onProcess(1);
            opts.onAnimationFinish && opts.onAnimationFinish();
        }
    }

    animationFrame(step, delay);
}