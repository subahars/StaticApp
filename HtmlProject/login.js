$(document).ready(function(){
    $("#login").click(function(){
        let body={
            email:$("#email").val(),
            password:$("#password").val()
        }
        $.ajax({
            url:'https://localhost:44304/api/Identity/token',
            method:'POST',
            data:JSON.stringify(body),
            contentType:'application/json',
            dataType:'json',
            success:function(result){            
                localStorage.setItem("user", JSON.stringify(result));
            },
            error:function(err){
                console.log(err);
                alert("Invalid login credentials");
            }
        })
    });
})