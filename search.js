var search_index = 0;
var search_term = '';

var oldquery = "";
var qarr = []

var favorite = "";
var color = "";
var place = "";
var type = "";

// Google Costum Search Keys
var key2 = "017406780437479842754:il_s2aky6zc";
// Olzhas
// var key1 = "AIzaSyA2uHMtgKOVYdR8J_NgU3awwbTl_ROLch8";
// Alisher
var key1 = "AIzaSyCIjld6maNImk6Z2bWQT3HEI1GwIICBuyk";
// var key2 = "";
// Michael
// var key1 = "AIzaSyDh5dCTjagdYQ-PXBB8xxsXxuQ3gfk3dCw";
// Eunji
/* var key1 = "";
var key2 = ""; */

function setFavorite(add){
    if(favorite !== ""){
        removeOldOptionFromQuery(favorite);
    }
    favorite = add;
}

function setColor(add){
    if(color !== ""){
        removeOldOptionFromQuery(color);
    }
    color = add;
}

function setPlace(add){
    if(place !== ""){
        removeOldOptionFromQuery(place);
    }
    place = add;
}

function setType(add){
    if(type !== ""){
        removeOldOptionFromQuery(type);
    }
    type = add;
}

function removeOldOptionFromQuery(stringToRemove){
    console.log(qarr)
    var idx = qarr.indexOf(stringToRemove);
    if (idx > -1) {
        qarr.splice(idx, 1);
    }
    var query = qarr.join(' ');
    $("#txtSearchTerm").val(query);
}



$(function ()
{
    $('#btnSearch').click(function () { Search();});
    $('input[type=text]').on('keydown', function(e){
        if (e.which===13){
            Search();
        }
    });
    $('#loadMoreButton').click(function () {
        search_index += 1;
        Search();
    });
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        // alert("JJJ");
        event.preventDefault();
        $(this).ekkoLightbox(
        {    
            alwaysShowClose: true,
            showArrows:true,
            onShown: function() {
                console.log('Checking our the events huh?');
            },
            onNavigate: function(direction, itemIndex) {
                console.log('Navigating '+direction+'. Current item: '+itemIndex);
            }
        });
    });
});

function Search()
{
    var term = $("#txtSearchTerm").val();
    if (term !== '') {
        var termarr = term.split(" ");
        var newarr = [];
        for (var i = 0; i < termarr.length; i++) {
            if (termarr[i] === 'light' && termarr[i+1] === 'brown') {
                newarr.push('light brown');
                i++;
            }
            else if (termarr[i] === 'dark' && termarr[i+1] === 'brown') {
                newarr.push('dark brown');
                i++;
            }
            else {
                newarr.push(termarr[i]);
            }
        }
        qarr = newarr;
    }
    
    addIconOpts();
    
    var query = qarr.join('+');
    if (query !== oldquery) {
        search_index = 0;
        oldquery = query;
    }
    var start = search_index*9 + 1;
    
    console.log("Query: " + query);
    var url = "https://www.googleapis.com/customsearch/v1?key="
    + key1 + "&num=9&cx=" + key2 + "&start=" + start + "&q=" + query + "&searchType=image&callback=?";
    // url = "http://localhost/dummy.js?callback=?";
    // console.log("URL:" + url);
    if (search_index === 0) {
        $.getJSON(url, '', FirstResults);
    }
    else
    {
        $.getJSON(url, '', MoreResults);
    }
    if (search_index <= 4) {
        $('.loadMore').show();
    }
    else {
        $('.loadMore').hide();
    }    
}

function addIconOpts()
{
    
    if(favorite !== ""){
        if(isStringinQuery(favorite) === false){
            qarr.push(favorite);
        }        
    }
    if(color !== ""){
        if(isStringinQuery(color) === false){
            qarr.push(color);
        } 
    }
    if(place !== ""){
        if(isStringinQuery(place) === false){
            qarr.push(place);
        }
    }
    if(type !== ""){
        if(isStringinQuery(type) === false){
            qarr.push(type);
        }        
    }
    $("#txtSearchTerm").val(qarr.join(" "));
}

function isStringinQuery(string){
    var idx = qarr.indexOf(string);
    if (idx > -1)
        return true;
    return false;
}

function MoreResults(response)
{
    var html = "";
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // html += '<br>' +  '<img src="' + item.link + '" width="300"/>';
        html += '<a href="' + item.link + '" data-title="' + item.title + '" data-toggle="lightbox" data-gallery="example-gallery">'
        + '<img src="' + item.link + '" title="' + item.title + '" alt="' + item.title + '" class="img-circle col-sm-4" width="350" height="350"></a>';
    }
    $("#output").append(html);
}

function FirstResults(response)
{
    var html = "";
    for (var i = 0; i < response.items.length; i++) {
  		var item = response.items[i];
  		// html += '<br>' +  '<img src="' + item.link + '" width="300"/>';
        html += '<a href="' + item.link + '" data-title="' + item.title + '" data-toggle="lightbox" data-gallery="example-gallery">'
        + '<img src="' + item.link + '" title="' + item.title + '" alt="' + item.title + '" class="img-circle col-sm-4" width="350" height="350"></a>';
	}
	$("#output").html(html);
}
// https://peter.hahndorf.eu/blog/UsingTheGoogleCustomSearchAPIV.html