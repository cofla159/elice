function timer(callback, time){
    setTimeout(function(){
        callback(time);
    }, time);
}
timer(function(time){
    console.log('timeout1', time);
    timer(time=>console.log('timeout2', time), 1000);
}, 2000);