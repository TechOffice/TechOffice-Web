// Define Layer
var Layer = function (){
    this.components = [];
};
Layer.prototype.draw = function(ctx){
    this.components.forEach(function(component){
        component.draw(ctx);
    });
}
Layer.prototype.add = function(component){
    this.components.push(component);
}
Layer.prototype.reset = function(){
    this.components = [];
}