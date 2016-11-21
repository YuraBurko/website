$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        if ($('#name1').val() == '') {
            alert('cant send empty form');
            return;
        }
        $.ajax({
            url: "https://formspree.io/yura_burko@mail.ru", 
            method: "POST",
            data: {
                name: $('#name1').val(),
                mail: $('#email').val(),
                textme: $('#textv').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you!</h1>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });        
    })
});