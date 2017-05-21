var search_index = 0;
var search_term = '';

$(function ()
{
    $('#btnSearch').click(function () { Search($("#txtSearchTerm").val());});
    $('input[type=text]').on('keydown', function(e){
        if (e.which==13){
            Search($("#txtSearchTerm").val());
        }
    });
    $('#loadMoreButton').click(function () { Search($('#txtSearchTerm').val());});
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

function Search(term)
{
    if (!(search_term === term)) {
        search_term = term;
        search_index = 0;
    }
    var start = search_index*10 + 1;
	var query = term.split(" ").join("+");
	console.log(query);
	var url = "https://www.googleapis.com/customsearch/v1?key="
    + "AIzaSyCIjld6maNImk6Z2bWQT3HEI1GwIICBuyk" + "&num=10&cx=" + "017406780437479842754:il_s2aky6zc" + "&start=" + start + "&q=" + query + "&searchType=image&callback=?";
    // url = "http://localhost/dummy.js?callback=?";
    if (search_index == 0) {
        $.getJSON(url, '', FirstResults);
    }
    else
    {
        $.getJSON(url, '', MoreResults);
    }
    if (search_index <= 4) {
        $('.loadMore').show()
    }
    else {
        $('.loadMore').hide()
    }
    search_index += 1
    
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