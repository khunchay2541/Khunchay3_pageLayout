jQuery(document).ready(function ($) {

    console.log("test")
    $.ajax({

        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Gallery')/getitems?$expand=FileDirRef,FieldValuesAsHtml,FieldValuesAsText",
    
        method: "POST",
    
        data: JSON.stringify({
    
            "query": {
    
                "__metadata": {
    
                    "type": "SP.CamlQuery"
    
                },
    
                "ViewXml": '<View>\
                <ViewFields>\
                    <FieldRef Name="Title" />\
                    <FieldRef Name="Image1" />\
                </ViewFields>\
            </View>'
    
            }
    
        }),
    
        headers: {
    
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
    
            "Accept": "application/json; odata=verbose",
    
            "content-type": "application/json; odata=verbose"
    
        },
        success: function (data) {
           console.log(data)
            var arr = [];
            data.d.results.forEach(function (value, i) {
                var title = value.Title, img = value.FieldValuesAsHtml.Image1;
    
                arr.push(String.format(
                    '<div class="image">\
                        <h1>{0}</h1>\
                         {1}\
                      </div>', title, img))
            })
            $(".container-gallery").html(arr.join(''));
            console.log(arr.join(''))
        }
    
    })




})