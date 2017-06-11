var buttonClick = document.getElementsByTagName('button')[0];

console.log(buttonClick);

var par1 = document.getElementsByTagName('p')[0];
var par2 = document.getElementsByTagName('p')[1];

buttonClick.onclick = function(){
    par1.style.backgroundColor = 'red';
    par2.style.backgroundColor = 'yellow';
};

