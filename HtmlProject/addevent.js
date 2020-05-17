$(document).ready(function(){
    $("#save").click(function(){
        let body={
            title:$("#title").val(),
            description:$("#desc").val(),
            startDate:$("#sdate").val(),
            endDate:$("#edate").val(),
            location:$("#location").val(),
            registrationUrl:$("#url").val(),
            organizer:$("#org").val(),        
            lastDate:$("#ldate").val()
        }
        var user = JSON.parse(localStorage.getItem("user"));
        $.ajax({
            url:'https://localhost:44390/api/events',
            method:'POST',
            data:JSON.stringify(body),
            headers:{
                "Authorization": `Bearer ${user.token}`
            },
            contentType:'application/json',
            dataType:'json',
            success:function(result){            
                alert("Added successfully")
            },
            error:function(err){
                console.log(err);
                alert("Failed to add");
            }
        })
    });
})