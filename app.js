var d1 = document.getElementById('section1');
var d2 = document.getElementById('section2');
var d3 = document.getElementById('section3');
var d4 = document.getElementById('section4');
var d5 = document.getElementById('section5');
var photo = document.getElementById('photo');
var introduction = document.querySelector('.introduction');
var year1 = document.getElementsByClassName('year')[0];
var year2 = document.getElementsByClassName('year')[1];
var info1 = document.getElementsByClassName('info')[0];
var info2 = document.getElementsByClassName('info')[1];
var credit = document.querySelector('.credit');
var Icon1 = document.getElementsByClassName('skillIcons')[0];
var Icon2 = document.getElementsByClassName('skillIcons')[1];
var Icon3 = document.getElementsByClassName('skillIcons')[2];
var Icon4 = document.getElementsByClassName('skillIcons')[3];
var viewportHeight =window.innerHeight;
var viewportWidth = window.innerWidth;
var d2Top = viewportHeight;
var d3Top = 6*viewportHeight;
var d4Top = 8*viewportHeight;
var d5Top = 10*viewportHeight;
//resize event
window.onresize = resize;
function resize(){
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
}
//scroll event;
window.addEventListener('scroll',function(){
    var h = window.scrollY;
    photo.style.opacity = updateStyle(h,0,viewportHeight,10,100,'%');
    photo.style.borderRadius = updateStyle(h,viewportHeight,2*viewportHeight,0,50,'%');
    photo.style.width = updateStyle(h,viewportHeight,2*viewportHeight,35,25,'vw');
    photo.style.transform = `translateX(${updateStyle(h,2*viewportHeight,3*viewportHeight,0,60,'%')})`;
    introduction.style.opacity = updateStyle(h,2*viewportHeight,3*viewportHeight,0,100,'%');
    year1.style.transform = `translateX(${updateStyle(h,4*viewportHeight,6*viewportHeight,-200,0,'%')})`;
    info1.style.transform = `translateX(${updateStyle(h,4*viewportHeight,6*viewportHeight,200,0,'%')})`;
    year2.style.transform = `translateX(${updateStyle(h,6*viewportHeight,6.5*viewportHeight,-200,0,'%')})`;
    info2.style.transform = `translateX(${updateStyle(h,6*viewportHeight,6.5*viewportHeight,200,0,'%')})`;
    credit.style.opacity = updateStyle(h,8*viewportHeight,9*viewportHeight,0,50,'%');
    Icon1.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    Icon2.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    Icon3.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    Icon4.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    fixedElement(h,viewportHeight,d2);
    fixedElement(h,6*viewportHeight,d3);
    fixedElement(h,8*viewportHeight,d4);
});
//anime update
function updateStyle(h,start,end,valueStart,valueEnd,suffix){
    if(h<=start){
        return `${valueStart}`;
    }else if(h>=end){
        return `${valueEnd}`;
    }else{
        var scrollRange = end - start;
        var process = valueEnd - valueStart;
        var pos = h - start;
        var percentage = pos*process/scrollRange+valueStart;
        str = `${Math.round(percentage)}`+suffix;
        return str;
    }
}
//fixed divs
function fixedElement(h,animeStart,element){
    // small than start: 
    //bigger/equal start:fixed
    if(h<animeStart){
        element.style.position = 'absolute';
    }else{
        element.style.position = 'fixed';
        element.style.top = '0'
    }
}

