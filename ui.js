const numbers = document.querySelector('.Numbers'),
      operator = document.querySelector('.Operations');
data.forEach(function(item){
    let button = document.createElement('button');
    button.className = 'Btn';
    button.innerHTML = item.label;
    button.setAttribute('value', item.value);
    button.setAttribute('data-type',item.dataType);
    if(item.dataType == CONSTANTS.OPERATOR || item.dataType == CONSTANTS.DELETE){
        operator.appendChild(button);
    }else{
        numbers.appendChild(button);
    };
    if(item.dataType == CONSTANTS.EQUAL){
        button.classList.add('Equal');
    }
})

