//= require jquery
//= require semantic-ui
//= require_tree .

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown.item').dropdown();
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    scroll_bottom();
});

scroll_bottom = function() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}