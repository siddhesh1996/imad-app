//counter
 var button = document.getElementById('counter');

 button.onclick = function() {
     //make a request to the counter endpoint
     
     
     // create a request
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
 
 //submit name
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function(){
//Make a request to the server and send the name



//Capture the list of names and render it as a list.
var names =['name1','name2','name3','name4'];
var list ='';
for(var i=0 ;i< names.length; i++){
    
    list += '<li>' + names[i] + '</li>' ;
}
 var ul = document.getElementById('namelist');
 ul.innerHTML = list;
 };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 