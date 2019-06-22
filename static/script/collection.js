$(function(){
    var cols_html = "<ul>";
    for(collection in collections){
        let cs = collections[collection];
        cols_html += "<li><div><span style=\"color:#f00;\">" + collection+ "</span><ul>";
        for(item in cs){
            cols_html += "<li><div><span style=\"color:#44B78B;\">" + item+ "</span><ul>";
            let ci = cs[item];
            for(link in ci){
                let ci_link = ci[link];
                name = ci_link['name'];
                url = ci_link['url'];
                cols_html += "<li><a href=\""+url+"\" target=\"_blank\" style=\"color:#fff;\">"+name+"</a></li>";
            }
            cols_html += "</ul></div></li>";
        }
        cols_html += "</ul></div></li>";
    }
    cols_html += "</ul>";
    document.getElementById("collections").innerHTML = cols_html;
});