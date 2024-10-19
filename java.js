document.addEventListener("DOMContentLoaded", function() {
    // Select the love message
    const loveMessage = document.querySelector('.love-message');
    
    // Add fade-in class to the message
    loveMessage.classList.add('fade-in');

    // Original onload functionality to remove the 'not-loaded' class
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);
});
