$(function(){
    $("#drawingPanel").sortable({
        receive: function(event, ui){
            ui.helper.removeAttr("style");
		    },
        placeholder: "control-placeholder",
        handle: '.handle'
    }).selectable({
        cancel: ".handle",
        filter: ".select",
        selected: function(event, ui){
            var selected = $(ui.selected);
            var parent = selected.parent();
            var children = parent.children();
            for (var i=0; i<children.length; i++){
                if (!$(children[i]).hasClass("ui-selected")){
                    $(children[i]).addClass("ui-selected");
                }
            }
            $(selected.children()[0]).prop("checked", true);
        },
        unselected: function(event, ui){
            var unselected = $(ui.unselected);
            var parent = unselected.parent();
            var children = parent.children();
            for (var i=0; i<children.length; i++){
                if ($(children[i]).hasClass("ui-selected")){
                    $(children[i]).removeClass("ui-selected");
                }
            }
            $(unselected.children()[0]).prop("checked", false);
        }
    });
});
