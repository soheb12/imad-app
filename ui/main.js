//counter code
var button = document.getElementById('counter');


button.onCLick = function()
{
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.OnreadystateChange = function(){
        
        if(request.readystate == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var counter = request.responsetext;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
    };
    
    //make a request
    request.open('GET' , 'https://moinsoheb02.imad.hasura-app.io/counter' , true);
    request.send(null);
    
};