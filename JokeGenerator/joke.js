
$(document).ready(function(){
    $('#get_joke').click(function(){
        fetch('https://icanhazdadjoke.com/',{
            headers: {
                'Accept' :'application/json'
            }
        }).then(response => response.json())
        .then(data => {
          $('#h2_joke').text(data.joke);
        })
    });  
});


