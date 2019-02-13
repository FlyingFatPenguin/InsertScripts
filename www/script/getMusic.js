/*var link = document.createElement('a');
link.href = 'http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_40823434&type=convert_url&response=res';
link.innerHTML = 'hello';
link.click();*/

/*
function downloadFile(url) {   
    try{ 
        var elemIF = document.createElement("iframe");   
        elemIF.src = url;   
        elemIF.style.display = "none";   
        document.body.appendChild(elemIF);   
    }catch(e){ 

    } 
}

downloadFile('http://win.web.nf03.sycdn.kuwo.cn/8d40a65993e8a3b90bd17552c4e4e522/5c63ca59/resource/a2/1/12/1669798022.aac');
*/

xmlHttp = new XMLHttpRequest();
var url = 'http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_5017333&type=convert_url&response=res=';
xmlHttp.open("GET", url, true);/* 异步处理返回 */
xmlHttp.onreadystatechange = function(){
    alert('成功');
}; 
xmlHttp.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded;");
xmlHttp.send();

