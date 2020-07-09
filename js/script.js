const spans=document.querySelectorAll('h1 span')
spans.forEach(span=> span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span=>span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand')
}))

function sub(){
    alert("Thanks For Reaching Me,I Will Catch You Soon");
    return true;
}

