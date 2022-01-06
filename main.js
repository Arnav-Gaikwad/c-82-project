var mouse_event = "empty";
var last_x_pos , last_y_pos ;

canvas = document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d") ;
color ="black" ;
line_width= 1 ;

canvas.addEventListener("mousedown" , my_mouseDown) ;
function my_mouseDown(e) {
    color= document.getElementById("c1").value ;
    line_width= document.getElementById("w1").value ;
    mouse_event="mousedown" ; 
}

canvas.addEventListener("mousemove" , my_mouseMove) ;
function my_mouseMove(e) {
    current_x_pos = e.clientX - canvas.offsetLeft ;
    current_y_pos = e.clientY - canvas.offsetTop ;
    if ( mouse_event == "mousedown" ) {
        ctx.beginPath () ;
        ctx.strokeStyle = color ;
        ctx.lineWidth = line_width ;
        ctx.moveTo(last_x_pos ,last_y_pos) ;
        ctx.lineTo(current_x_pos , current_y_pos) ;
        ctx.stroke() ;
    }

    last_x_pos=current_x_pos ;
    last_y_pos=current_y_pos ;

}

canvas.addEventListener("mouseup" , my_mouseup) ;
function my_mouseup(e) {
    mouse_event="mouseup" ;
}

canvas.addEventListener("mouseleave" , my_mouseleave) ;
function my_mouseleave(e) {
    mouse_event="mouseleave" ;
}

function clear() {
    ctx.clearRect(0,0,ctx.canvas.width , ctx.canvas.height)
}