console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
  //img.style.marginLeft = '100px';  
    var interval = setInterval(moveRight,2);
};