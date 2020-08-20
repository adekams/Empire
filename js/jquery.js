$(document).ready(function (){
    $('#registration-form').hide()
    $('#reg-btn').click(function() {
        $('#login-form').hide();
        $('#registration-form').show()
    })

    $('#login-btn').click(function() {
        $('#registration-form').hide();
        $('#login-form').show()
    })
})