$(function ()
{
    $('#btnSearch').show().click(function () { Search($("#txtSearchTerm").val(),0);});
    $('#lnkPrev').click(function () { Search($("#txtSearchTerm").val(),-1); });
    $('#lnkNext').click(function () { Search($("#txtSearchTerm").val(),1);  });
});

function Search(term, direction)
{
	var query = term.split(" ").join("+");
	console.log(query);
	var url = "https://www.googleapis.com/customsearch/v1?key="
    + "AIzaSyCIjld6maNImk6Z2bWQT3HEI1GwIICBuyk" + "&num=10&cx=" + "017406780437479842754:il_s2aky6zc" + "&q=" + query + "&searchType=image&callback=?";
    // url = "http://localhost/dummy.js?callback=?";
    $.getJSON(url, '', SearchCompleted);
}

function SearchCompleted(response)
{
    var html = "";
    for (var i = 0; i < response.items.length; i++) {
  		var item = response.items[i];
  		html += '<br>' +  '<img src="' + item.link + '" width="300"/>';
	}
	$("#output").html(html);
}
// https://peter.hahndorf.eu/blog/UsingTheGoogleCustomSearchAPIV.html