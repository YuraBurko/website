$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/yura_burko@mail.ru", 
            method: "POST",
            data: {
                message: $('#name').val(),
                message: $('#email').val(),
                text: $('#text').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you!</h1>')
        $('form').html('<h1>Thank you!</h1>')
            $('form').html(xhr.statusText);
        });        
    })
});

