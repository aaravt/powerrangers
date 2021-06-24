var canvas= new fabric.Canvas('canvas5')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image , function (Img) {
		block_image_object=Img
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		})
		canvas.add(block_image_object)
	})
}

window.addEventListener("keydown",kd);
function kd(e) {
keynumber = e.keyCode;
console.log(keynumber);

	if(keynumber == '82') 
	{
		console.log("r is pressed")
		new_image('rr1.png')
	}
	if(keynumber == "71")
	{
		block_x = 200;
		new_image("gr.png")
		console.log("g")
	}
	
	if(keynumber == "89")
	{
		block_x =350;
		new_image("yr.png")
		console.log("y")
	}
	if(keynumber == "80")
	{
		block_x = 600;
		new_image("pr.png")
		console.log("p")
	}
	if(keynumber == "66")
	{
		block_x = 700;
		new_image("br.png")
		console.log("b")
	}
	if(keynumber == "67")
	{
		
		new_image("prback.jpg")
		console.log("c")
	}
}


