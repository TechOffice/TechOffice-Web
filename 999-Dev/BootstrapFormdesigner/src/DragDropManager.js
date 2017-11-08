
export default {
  
  instance: null,
  
  getInstance: function(){
    if (!this.instance){
      var me = this;
      this.instance = {
        draggable: null,
        doppable: null,
        getDraggable: function(){
          return this.draggable;
        },
        setDraggable: function(draggable){
          this.draggable = draggable;
        },
        getDroppable: function(){
          return thisdroppable;
        },
        setDroppable: function(droppable){
          this.droppable = droppable;
        }
      };
    }
    return this.instance;
  }
};
