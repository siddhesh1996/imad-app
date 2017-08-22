//counter
 var button = document.getElementById('counter');

 button.onclick = function() {
     //make a request to the counter endpoint
     
     
     // Crate a request
     var request = new XMLHttpRequest();
    
     
     //render the variable in correct span
      request.onreadystatechange = function(){
       //code here
       if(request.readyState === XMLHttpRequest.DONE){
       //take some action
       if(request.status === 200){
       var counter = request.responseText;
        var span = document.getElementById('count');
         span.innerHTML = counter.toString();
       }
       // not done
       }
       
       
       
     };
     
     //make the request
     request.open('GET','http://ksiddhesh96sk.imad.hasura-app.io/counter',true);
     request.send(null);
     
     
 };