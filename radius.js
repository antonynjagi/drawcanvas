
var setRadius = function(newRadius){
    if(newRadius<minRad)
        newRadius = minRad;
    else if(newRadius>maxRad)
        newRadius =  maxRad;
    radius = newRadius;
    context.lineWidth = radius * 2;
    radSpan.innerHTML = radius;
    

}


var minRad = 0.5;
var maxRad = 100;
var defaultRad = 10;
var interval = 5 ;
var radSpan = document.getElementById('radvalue');
var lessRad = document.getElementById('lessrad');
var moreRad = document.getElementById('morerad');

lessRad.addEventListener('click', function(){
    setRadius(radius-interval);
});

moreRad.addEventListener('click', function(){
    setRadius(radius+interval);
});

setRadius(defaultRad);

