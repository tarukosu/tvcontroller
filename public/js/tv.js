$(function(){
    var url="tvapi";
    $("#power").click(function(){
	$.ajax({
	    url: url,
	    data: {
		button: "KEY_POWER"
	    }
	});
	    
	alert("hoge");
    });

});
