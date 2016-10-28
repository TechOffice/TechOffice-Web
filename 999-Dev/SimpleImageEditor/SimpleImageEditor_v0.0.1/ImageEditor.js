// CanvasManager
CanvasManager = function(canvas){
    this.canvas = canvas;
    this.layers = [];
    var layer = new Layer();
    this.layers.push(layer);
};
CanvasManager.prototype.draw = function(){
    that = this;
    this.layers.forEach(function(layer){
        layer.draw(that.canvas);
    });
}
CanvasManager.prototype.getTopLayer = function(){
    return this.layers[this.layers.length - 1];
}
CanvasManager.prototype.add = function(component){
    layer = this.getTopLayer();
    layer.add(component);
}
CanvasManager.prototype.reset = function(){
    this.layers = [];
    var layer = new Layer();
    this.layers.push(layer);
}