$.fn.dialog = function(config){
	var me = this;
	var config = config ? config : {};
	
	var header, body, modal;
	var buttonList = [];
	
	if(me.find(".dialog-header").length > 0){
		header = me.find(".dialog-header");
		me.find(".dialog-header").remove();
	}
	
	if(me.find(".dialog-body").length > 0){
		body = me.find(".dialog-body");
		me.find(".dialog-body").remove();
	}
	
	if(me.find(".dialog-button button").length > 0){
		buttonList.push(me.find(".dialog-button button"));
		me.find(".dialog-button").remove();
	}
	
	me.addClass("modal");
	me.addClass("fade");
	me.attr("tabindex", "-1");
	me.attr("role", "dialog");
	var container = $("<div class='modal-dialog' role='document'></div>");
	var contentContainer = $("<div class='modal-content'></div>");
	var headerContainer = $("<div class='modal-header'></div>");
	var headerCloseBtn = $("<button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span></button>");
	headerContainer.append(headerCloseBtn);
	headerContainer.append(header);
	var bodyContainer = $("<div class='modal-body'></div>");
	bodyContainer.append(body);
	var footerContainer = $("<div class='modal-footer'></div>");
	var footerCloseBtn = $("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");
	footerContainer.append(footerCloseBtn);
	footerContainer.append(buttonList);
	contentContainer.append(headerContainer);
	contentContainer.append(bodyContainer);
	contentContainer.append(footerContainer);
	container.append(contentContainer);
	me.append(container);

	return {
		
	};
};