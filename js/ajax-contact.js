$(function () {

    // Get the form.
    var form = $('#main_contact_form');

    // Get the messages div.
    var formMessages = $('#success_fail_info');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();
        var $submit = $('#btn-send');

        $submit.text('Enviando...').prop('disabled', true);
        $(formMessages).removeClass('success error').html('');
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData,
                dataType: 'json'
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages)
                    .removeClass('error')
                    .addClass('success')
                    .html(response.success_message);

                $(form).reset();
            })
            .fail(function (data, err) {
                // Make sure that the formMessages div has the 'error' class.
                console.log(err);
                $(formMessages)
                    .removeClass('success')
                    .addClass('error')
                    .text(data.responseJSON.error_message);
            }).always(function() {
                $submit.prop('disabled', false).text('Reservar o Cotizar Barra');
            });
    });
});