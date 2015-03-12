
$(document).ready(function(){

    $.getJSON("data/countries.json", function(data){
gi       console.log(data)

    }).error(function(jqXhr, textStatus, error) {
        console.log("ERROR: " + textStatus + ", " + error);
    });
})