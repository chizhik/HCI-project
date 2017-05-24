var search_index = 0;
var search_term = '';

var query = "";

var favorite = "";
var color = "";
var place = "";
var type = "";

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
    var query = $("#txtSearchTerm").val();
    query = query.replace(stringToRemove, "");
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
    $('#loadMoreButton').click(function () { Search();});
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
    
    if (!(search_term === term)) {
        search_term = term;
        search_index = 0;
    }
    var start = search_index*10 + 1;
    
    term = addIconOpts(term);
    
    var query = "";
    if(term !== ""){
        query = term.split(" ").join("+");
    }    
    
    console.log(query);
    var url = "https://www.googleapis.com/customsearch/v1?key="
    + "AIzaSyCojH9Lu1vXE4f2MhxPF9kvJuqXo4nDPRQ" + "&num=10&cx=" + "017406780437479842754:il_s2aky6zc" + "&start=" + start + "&q=" + query + "&searchType=image&callback=?";
    // url = "http://localhost/dummy.js?callback=?";
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
    search_index += 1;    
}

function addIconOpts(term)
{
    var opts = '';
    if(favorite !== ""){
        if(isStringinQuery(term,favorite) === false){
            opts = favorite;
        }        
    }
    if(color !== ""){
        if(isStringinQuery(term,color) === false){
            if(opts === ""){
                opts = color;
            }else{
                opts = opts + " " + color;
            }
            
        } 
    }
    if(place !== ""){
        if(isStringinQuery(term,place) === false){
            if(opts === ""){
                opts = place;
            }else{
                opts = opts + " " + place;    
            }
        }
    }
    if(type !== ""){
        if(isStringinQuery(term,type) === false){
            if(opts === ""){
                opts = type;
            }else {
                opts = opts + " " + type;
            }
        }        
    }
    term += opts;
    $("#txtSearchTerm").val(term);
    return term;
}

function isStringinQuery(query, string){
    console.log(query);
    console.log(string);
    console.log(query.includes(string));
    return query.includes(string);
    
}

function MoreResults(response)
{
    var html = "";
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // html += '<br>' +  '<img src="' + item.link + '" width="300"/>';
        html += '<a href="' + item.link + '" data-title="' + item.title + '" data-toggle="lightbox" data-gallery="example-gallery">'
        + '<img src="' + item.link + '" title="' + item.title + '" alt="' + item.title + '" class="img-circle col-sm-4" width="350" height="350"></a>'
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
        + '<img src="' + item.link + '" title="' + item.title + '" alt="' + item.title + '" class="img-circle col-sm-4" width="350" height="350"></a>'
	}
	$("#output").html(html);
}
// https://peter.hahndorf.eu/blog/UsingTheGoogleCustomSearchAPIV.html