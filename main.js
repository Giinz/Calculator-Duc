let output = document.querySelector('.Output');
let buttons = document.querySelectorAll('.Btn');
buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(output.innerHTML == '0'){
            output.innerHTML = '';
        }
        if(btn.innerHTML == 'AC'){
            output.innerHTML = '0';
        }
        else if (btn.innerHTML == 'DEL'){
            let arrText = output.innerHTML;
            arrText.splice(arrText.length-1, 1);
            if(arrText.length != 0){
                output.innerHTML=arrText.join('');
            }else{
                output.innerHTML='0';
            }
        }
        else if(btn.innerHTML == '='){
            output.innerHTML = eval(output.innerHTML);
        }
        else {
            output.innerHTML += btn.innerHTML;
        }
    })
})
console.log(typeof output.innerHTML);