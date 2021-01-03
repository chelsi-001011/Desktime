$(function ()
{
    chrome.storage.sync.get('urls', function (budget)
    {
            var text = "";
            var i;
            for (i = 0; i < urls.length; i++) {
                text += urls[i].url +  "<br>";
            }
            document.getElementById("demo").innerHTML = text;
    });
    
    chrome.storage.sync.get('urls', function (budget) {
         
        document.getElementById("greet").innerHTML = "Hello you are on " + window.location.href;
        $(document).ready(function () {
        
            var start = new Date();
            let obj;
           
            let url = window.location.href;
            obj.url = url;
              document.getElementById("greet").innerHTML = "Hello you are on " +window.location.href;
            $(document).live("onchange", function () {
                var end = new Date();
                var time = end - start;
                obj.time = time;
                console.log("changed");
            });
                 
            if(budget.urls)
            {
                var first = urls.find((x) => { return x.url == obj.url; });
                if (first)
                {
                    first.time += obj.time;
                }
                else
                {
                    urls.push(obj);
                }
                
            }
            else
            {
                var urls = []; 
                urls.push(obj); 
                chrome.storage.sync.set({'urls':urls});
           }
            var text = "";
            var i;
            for (i = 0; i < urls.length; i++) {
                text += urls[i].url + urls[i].time + "<br>";
            }
            document.getElementById("demo").innerHTML = text;
    
    
        });

    });
});
//existing storage access using chrome api
// chrome.storage.sync.get('total')
// chrome.storage.sync.set({'total':newtotal})
