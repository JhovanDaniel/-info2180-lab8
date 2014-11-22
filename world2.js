window.onload = function() {
var lookB = document.getElementById("lookup");
lookB.onclick = countAlert;  
};



function countAlert() {
    var param = document.getElementById("term").value;
    if (window.XMLHttpRequest){
        var xmlhttp = new XMLHttpRequest();
    }
    else {
         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        
    }
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var xmlDoc=xmlhttp.responseXML;
            var ans = xmlhttp.responseText;
            alert(ans);
        }
    }
    if (document.getElementById("check").checked == true){
        xmlhttp.open('GET', 'world.php', true);
        xmlhttp.send()
    }
   else{
    //document.getElementById("check").checked = true;
    xmlhttp.open('GET', 'world.php?lookup=' + param , true);
    xmlhttp.send();
    }
}

