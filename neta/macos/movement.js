$("img.dockicons").hover(function(){
  $(this).prev('img.dockicons').animate({ height: "55px", marginTop: "-35px", top: "-35px" }, {queue: false});
  $(this).animate({ height: "70px",  marginTop: "-35px", top: "-35px" }, {queue: false});
  $(this).next('img.dockicons').animate({ height: "55px",  marginTop: "-35px", top: "-35px" }, {queue: false});
     
}, function() {
  $(this).prev('img.dockicons').animate({ height: "35px",  marginTop: "0px", top: "0px" }, {queue: false});
  $(this).animate({ height: "35px", marginTop: "0px", top: "0px" }, {queue: false});
  $(this).next('img.dockicons').animate({ height: "35px",   marginTop: "0px", top: "0px" }, {queue: false});
});