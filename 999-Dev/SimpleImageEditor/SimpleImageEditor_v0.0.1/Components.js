// Define Components

// Line
var Line = function (startX, startY, endX, endY){
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
}
Line.prototype.draw = function (ctx){
    ctx.moveTo(this.startX,this.startY);
    ctx.lineTo(this.endX,this.endY);
    ctx.stroke();
}

// Circle
var Circle = function(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
}
Circle.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y , this.r ,0 ,2*Math.PI);
    ctx.stroke();
}

// Rect
var StrokeRect = function (x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
StrokeRect.prototype.draw = function(ctx){
    ctx.strokeRect(this.x, this.y, this.width, this.height);
}

