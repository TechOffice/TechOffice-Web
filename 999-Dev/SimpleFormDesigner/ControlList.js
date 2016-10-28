$(function(){
    var controlList = $("#controlList");
    
    var div = $("<div>Div</div>");
    div.draggable({
        helper: function(){
            return controlGenerator.getControl(ControlConstant.CONTROL_DIV);
        },
        connectToSortable: "#drawingPanel"
    });
    controlList.append(div);

    var span = $("<div>Span</div>")
    span.draggable({
        helper: function(){
            return controlGenerator.getControl(ControlConstant.CONTROL_SPAN);
        },
        connectToSortable: "#drawingPanel"
    });
    controlList.append(span);

    var label = $("<div>Label</div>")
    label.draggable({
        helper: function(){
            var control = controlGenerator.getControl(ControlConstant.CONTROL_LABEL);
            return control;
        },
        connectToSortable: "#drawingPanel"
    });
    controlList.append(label);

});