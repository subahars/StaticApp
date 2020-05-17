$(document).ready(function(){
    
    $.ajax({
        url:'https://localhost:44390/api/events',
        method:'GET',
        contentType:'application/json',
        dataType:'json',
        success:function(result){
            $.each(result,function(index, item){                
                let row =  `<tr>
                                <td>${item.title}</td>
                                <td>${item.location}</td>
                                <td>${item.startDate}</td>
                                <td>${item.endDate}</td>
                            </tr>`;
                $('tbody').append(row);
            })
        },
        error:function(err){
            console.log(err);
        }
    })
})