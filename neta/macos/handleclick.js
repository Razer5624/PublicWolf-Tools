$( "img.dockicons" ).click(function(event) {
        $("#" + event.target.id).animate({ "margin-bottom": "40px", "margin-top" : "-40px"}, 500);
        $("#" + event.target.id).animate({ "margin-bottom": "-5px", "margin-top" : "-5px"}, 500);
        $("#" + event.target.id).animate({ "margin-bottom": "40px", "margin-top" : "-40px"}, 500);
        $("#" + event.target.id).animate({ "margin-bottom": "-5px", "margin-top" : "-5px"}, 500);
        $("#" + event.target.id).animate({ "margin-bottom": "40px", "margin-top" : "-40px"}, 500);
        $("#" + event.target.id).animate({ "margin-bottom": "0px", "margin-top" : "0px"}, 500);
});