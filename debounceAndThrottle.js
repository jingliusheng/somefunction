/**
 * 区别：
 * 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，如无限加载场景，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现
 * 函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的点击提交，刷新下，。
 */


/**
 *函数防抖 
 * 
 * 函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。持续触发scroll事件时，并不执行handle函数，当1000毫秒内没有触发scroll事件时，才会延时触发scroll事件。
 */
function debounce(fn, wait) {    
    var timeout = null;    
    return function() {        
        if(timeout !== null){ clearTimeout(timeout);}        
        timeout = setTimeout(fn, wait);    
    }
}
// 处理函数
function handle() {    
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));

/**
 * 函数节流
 * 
 * 函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。持续触发scroll事件时，并不立即执行handle函数，每隔1000毫秒才会执行一次handle函数。
 * 
 * 函数节流主要有两种实现方法：时间戳和定时器。
 */

/**
 * 时间戳
 */
var throttle = function(func, delay) {            
　　var prev = Date.now();            
　　return function() {                
　　　　var context = this;                
　　　　var args = arguments;                
　　　　var now = Date.now();                
　　　　if (now - prev >= delay) {                    
　　　　　　func.apply(context, args);                    
　　　　　　prev = Date.now();                
　　　　}            
　　}        
}        
function handle() {            
　　console.log(Math.random());        
}        
window.addEventListener('scroll', throttle(handle, 1000));

/**
 * 定时器
 */
var throttle = function(func, delay) {            
    var timer = null;            
    return function() {                
        var context = this;               
        var args = arguments;                
        if (!timer) {                    
            timer = setTimeout(function() {                        
                func.apply(context, args);                        
                timer = null;                    
            }, delay);                
        }            
    }        
}        
function handle() {            
    console.log(Math.random());        
}        
window.addEventListener('scroll', throttle(handle, 1000));
