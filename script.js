document.getElementById('redbutton').addEventListener('click', function(){
    document.querySelector('#carimage').src='./images/redcar.jpg';
});
document.getElementById('bluebutton').addEventListener('click', function(){
    document.querySelector('#carimage').src='./images/bluecar.jpg';
});
document.getElementById('greybutton').addEventListener('click', function(){
    document.querySelector('#carimage').src='./images/greycar.jpg';
});
document.getElementById('addtocartbutton').addEventListener('click', function(){
    document.querySelector('#addtocartbutton h4').innerHTML = 'Your item is added to cart';
});
