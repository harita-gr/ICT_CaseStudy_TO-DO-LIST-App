var source = new EventSource("to_do_2.html");
source.onopen = showDateTime();
source.onopen = CreateTableFromJSON();

//Populating Date & Time
function showDateTime(){
    var today= new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    document.getElementById('date').innerText= date;
    //document.getElementById('time').innerText= "Time: "+time;
}

// Populating TO DO List
function CreateTableFromJSON(){

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "<table class='table table-hover'><thead><tr><th>Check</th><th>Task</th><th>Action</th></tr></thead><tbody>";  
            for(var i=0; i<20;i++){
               output += "<tr>";
              //  output += "<td> <input type='checkbox' class='cbox'> </td>";
               output += "<td><input type='checkbox' class='cbox' style='cursor:pointer'> </td>";
               output += "<td>"+ response[i].title+"</td>";
               output += "<td><i class='fas fa-trash-alt' style='cursor:pointer'></i> </td>"
               output += "</tr>";
            }
            output+="</tbody></table>"
            document.getElementById("todo-list-table").innerHTML=output;
            const list = document.getElementsByClassName('cbox');
            console.log(list.length);

            function countCheckBox()
            {
                  let count=0;
                  return new Promise(function(resolve,reject){

                    $(document).ready(function(){
                                         $('input[type="checkbox"]').click(function() {                         
                                                                            if($(this).prop("checked") == true){
                                                                            console.log("Checkbox is checked.");
                                                                             count++;
                                                                             let width=count*20;
                                                                             $('.progress-bar').css("width",`${width}%`);
                                                                             
                                                                            }
                                                                            else if($(this).prop("checked") == false){
                                                                             console.log("Checkbox is unchecked.");
                                                                             count--;
                                                                             $('.progress-bar').css("width","-20%");
                                                                            }
                                                                            if(count==5)
                                                                            {
                                                                            resolve();
                                                                            }                      
                                                                        });  
                                                 });
                                                });}
                                                let promise = countCheckBox(); 
                                                promise 
                                                .then(function() {
                                                    alert('Daily Goal Achieved! 5 tasks completed'); 
                                                    document.getElementById('achieve').style.display="flex";
                                                })
                                            }}
   
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

// To disable back button after logging out
function preventBack(){window.history.forward();}
setTimeout("preventBack()", 0);
window.onunload=function(){null};