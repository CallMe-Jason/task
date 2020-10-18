/**
 * 
 * @param {*} obj 
 * @param {*} target 
 */
function animate(obj, target) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10
        if (step > 0) {
            step = Math.ceil(step)
        }
        else {
            step = Math.floor(step)
        }
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer)
            return;
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15)
}