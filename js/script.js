function validateForm () {
    let email = document.getElementById('email').value
    if (email = ''){
        document.querySelector('.status').innerHTML = 'eail cannot be blank'
        return false
    }// else{
    //     var re = /^(([^<>()\[\]\\.,;'\s@"']))
    // }
    let subject = document.querySelector('#subject').value
    if(subject = '') {
        document.querySelector('.status').innerHTML = 'Please include a subject'
        return false
    }
    let message = document.querySelector('#message').value
    if(message = '') {
        document.querySelector('.status').innerHTML = 'Message box cannot be empty'
        return false
    }
    document.querySelector('.status').innerHTML = 'Sending...'
}