   


    //Create two variables "last_position_of_x" and  "last_position_of_y".

var  last_position_of_x, last_position_of_y;
 

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables and width_of_line and assign values.
    var color = "yellow";
     var width_of_line = 4;

    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e){
 
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
            
    //Create the my_touchmove() function. Assign 
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

             ctx.beginPath();
             ctx.strokeStyle = color;
             ctx.lineWidth = width_of_line;
             ctx.moveTo(last_position_of_x,last_position_of_y);
             ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
             ctx.stroke();

             last_position_of_x = current_position_of_touch_x; 
             last_position_of_y = current_position_of_touch_y;

    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
