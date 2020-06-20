var d1 = document.getElementById('section1');
var d2 = document.getElementById('section2');
var d3 = document.getElementById('section3');
var d4 = document.getElementById('section4');
var d5 = document.getElementById('section5');
var photo = document.querySelector('.photo');
var introduction = document.querySelector('.introduction');
var year1 = document.getElementsByClassName('year')[0];
var year2 = document.getElementsByClassName('year')[1];
var info1 = document.getElementsByClassName('info')[0];
var info2 = document.getElementsByClassName('info')[1];
var Icon1 = document.getElementsByClassName('skillIcons')[0];
var Icon2 = document.getElementsByClassName('skillIcons')[1];
var Icon3 = document.getElementsByClassName('skillIcons')[2];
var Icon4 = document.getElementsByClassName('skillIcons')[3];
var d6 = document.getElementById('section6');
var title = document.querySelector('.title');
var message1 = document.getElementsByClassName('contact-message')[0];
var message2 = document.getElementsByClassName('contact-message')[1];
var viewportHeight =window.innerHeight;
var viewportWidth = window.innerWidth;
var d2Top = viewportHeight;
var d3Top = 6*viewportHeight;
var d4Top = 8*viewportHeight;
var d5Top = 10*viewportHeight;
var d6Top = 12*viewportHeight;
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
    photo.style.width = updateStyle(h,viewportHeight,2*viewportHeight,100,35,'vh');
    photo.style.height = updateStyle(h,viewportHeight,2*viewportHeight,100,35,'vh');
    photo.style.transform = `translateX(${updateStyle(h,2*viewportHeight,3*viewportHeight,0,-80,'%')})`;
    introduction.style.opacity = updateStyle(h,2*viewportHeight,3*viewportHeight,0,100,'%');
    year1.style.transform = `translateX(${updateStyle(h,4*viewportHeight,6*viewportHeight,-100,0,'%')})`;
    info1.style.transform = `translateX(${updateStyle(h,4*viewportHeight,6*viewportHeight,100,0,'%')})`;
    year2.style.transform = `translateX(${updateStyle(h,6*viewportHeight,6.5*viewportHeight,-100,0,'%')})`;
    info2.style.transform = `translateX(${updateStyle(h,6*viewportHeight,6.5*viewportHeight,100,0,'%')})`;
    Icon1.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    Icon2.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    Icon3.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    Icon4.style.opacity = updateStyle(h,7.5*viewportHeight,8*viewportHeight,0,50,'%');
    title.style.opacity = updateStyle(h,11*viewportHeight,12*viewportHeight,0,100,'%');
    message1.style.opacity = updateStyle(h,12*viewportHeight,13.5*viewportHeight,0,100,'%');
    fixedElement(h,viewportHeight,d2,100,'vh');
    fixedElement(h,6*viewportHeight,d3,600,'vh');
    fixedElement(h,8*viewportHeight,d4,800,'vh');
    fixedElement(h,10*viewportHeight,d5,1000,'vh');
    fixedElement(h,12*viewportHeight,d6,1200,'vh');
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
function fixedElement(h,animeStart,element,elementTop,suffix){
    // small than start: 
    //bigger/equal start:fixed
    if(h<animeStart){
        element.style.position = 'absolute';
        element.style.top = elementTop.toString()+suffix;
    }else{
        element.style.position = 'fixed';
        element.style.top = '0';
    }
}

