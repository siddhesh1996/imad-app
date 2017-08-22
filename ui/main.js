//counter
 var button = document.getElemnetById("counter");
 var counter = 0;
 button.onclick = function() {
     //make a request to the counter endpoint
     
     
     // capture the response and store it in variable
     
     
     //render the variable in correct span

     counter = counter + 1;
     var span = documnt.getElementById("count");
     span.innerHTML = counter.toString();
     
     
     
 };