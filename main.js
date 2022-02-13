let output = document.querySelector('.Output');
let buttons = document.querySelectorAll('.Btn');
buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
        
        // if(output.innerHTML == '0'){
        //     output.innerHTML = '';
        // }
        if(btn.innerHTML == 'AC'){
            output.innerHTML = '0';
        }
        else if (btn.innerHTML == 'DEL'){
            let arrText = Array.from(output.innerHTML);
            arrText.splice(arrText.length - 1,1);
            if(arrText.length != 0){
                output.innerHTML= arrText.join('');
            }else if (arrText.length = 1){

                output.innerHTML='0';
            }    
            else{
                output.innerHTML='0';
            }
        }
        else if(btn.innerHTML === '='){
            if(output.innerHTML === '' || output.innerHTML === '0'){
                output.innerHTML === '0';
            }else{
             output.innerHTML = eval(output.innerHTML);
            }
        }
        else if (btn.innerHTML === '.' && output.innerHTML.includes('.')){
            return
        }
        else {
            output.innerHTML += btn.innerHTML;
        }
    })
})
// let buttonsNumber = document.querySelectorAll('.Btn-number');
// buttonsNumber.forEach(function(btnNumber){
//     btnNumber.addEventListener('click',function(){
//         output.innerHTML = '' + btnNumber.innerHTML;
//     })
// })