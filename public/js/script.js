//Add a user
$("form[name='add']").on('submit',function(e){
    e.preventDefault();
    $.ajax({
        type     : "POST",
        url      : $(this).attr('action'),
        data     : $(this).serialize(),
        success  : function(data) {
        	alert("success");
            window.location.replace("/user/all");
        }
    });

});

//Update a user
$("form[name='update']").on('submit',function(e){
    e.preventDefault();
    $.ajax({
        type     : "PUT",
        url      : $(this).attr('action'),
        data     : $(this).serialize(),
        success  : function(data) {
        	alert("success");
            window.location.replace("/user/all");
        }
    });

});


//Delete a user
function deleteUser(id){
    var choice = window.confirm("Are you sure?");
    if (choice) {
	    //delete the user
		$.ajax({
	        type     : "DELETE",
	        url      : "users/"+id,
	        success  : function(data) {
	        	console.log(data);
	            location.reload();
	        }
	    });

	} else {
	    //do nothing
	}
}


//Post a comment
$("form[name='comment']").on('submit',function(e){
    var flag = checkUsrIsSel();
    e.preventDefault();
    if (flag){
            $.ajax({
            type     : "POST",
            url      : $(this).attr('action'),
            data     : $(this).serialize(),
            success  : function(data) {
                alert("success");
            }
        });
    }

});

function checkUsrIsSel(){
   var selectedField =  $( ".user" ).val();
   console.log(selectedField);
   if(selectedField == "usr"){
        alert("Please select a valid user");
        return false;
   }

   return true;
}

var comments;
var users;

$.ajax({url: "/comments", success: function(result){
        comments=result;
}});

$.ajax({url: "/users", success: function(result){
        users=result;
}});


$( "#koment" ).click(function(){


});

console.log(Koment.name("Dupree"))