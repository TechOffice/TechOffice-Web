controlGenerator = {};

controlGenerator.getControl = function(controlType){
    var control = $("<div></div>");
    control.addClass(ControlConstant.CONTROL_CLASS);
    var handle = $("<div class='handle'></div>");
    handle.addClass(ControlConstant.HANDLE_CLASS);
    var content = $("<div></div>");
    content.addClass(ControlConstant.CONTENT_CLASS);
    var select = $("<div></div>");
    select.addClass(ControlConstant.SELECT_CLASS);
    var checkbox = $("<input type='checkbox'/>");

    control.append(handle);
    select.append(checkbox);
    content.append(select);
    content.append(this.getContent(controlType));
    control.append(content);
    return control;
}

controlGenerator.getContent = function (controlType){
    if (controlType == ControlConstant.CONTROL_LABEL){
        return $("<div>Label</div>");
    }
    if (controlType == ControlConstant.CONTROL_DIV){
        return $("<div class='content-div'></div>");
    }
    if (controlType == ControlConstant.CONTROL_SPAN){
        return $("<span class='content-span'></span");
    }
    return null;
}