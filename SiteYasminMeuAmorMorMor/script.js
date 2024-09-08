document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('loveImage').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function() {
    const button = document.getElementById('noButton');
    button.style.position = 'absolute';
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
});
