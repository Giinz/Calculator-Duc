const number = [
    {
        label : '7',
        value : '7',
        dataType : 'number',
    },
    {
        label : '8',
        value : '8',
        dataType : 'number',
    },
    {
        label : '9',
        value : '9',
        dataType : 'number',
    },
    {
        label : '4',
        value : '4',
        dataType : 'number',
    },
    {
        label : '5',
        value : '5',
        dataType : 'number',
    },
    {
        label : '6',
        value : '6',
        dataType : 'number',
    },
    {
        label : '1',
        value : '1',
        dataType : 'number',
    },
    {
        label : '2',
        value : '2',
        dataType : 'number',
    },
    {
        label : '3',
        value : '3',
        dataType : 'number',
    },
    {
        label : '0',
        value : '0',
        dataType : 'number',
    },
    {
        label : '.',
        value : '.',
        dataType : 'operator',
    },
    {
        label : '=',
        value : '=',
        dataType : 'operator',
    }
];
const operator = [
    {
        label : 'DEL',
        value : 'DEL',
        dataType : 'operator',
    },
    {
        label : 'x',
        value : '*',
        dataType : 'operator',
    },
    {
        label : '÷',
        value : '/',
        dataType : 'operator',
    },
    {
        label : '+',
        value : '+',
        dataType : 'operator',
    },
    {
        label : '-',
        value : '-',
        dataType : 'operator',
    },
  
];
let clearBtn =
    {
    label : 'AC',
    value : 'AC',
    dataType : 'operator',
    };
let html = '',
    html2 = '',
    output = document.querySelector('.Output'),
    opr = document.querySelector('.Operations'),
    num = document.querySelector('.Numbers');
    output.textContent = '0';
number.map(function(item){
    let numberButton = document.createElement('button');
    numberButton.textContent = item.label;
    num.appendChild(numberButton);
    numberButton.setAttribute('value',item.value);
    numberButton.setAttribute('data-type',item.dataType);
    numberButton.className = 'Btn';
})
operator.map(function(item){
    let numberButton = document.createElement('button');
    numberButton.textContent = item.label;
    opr.appendChild(numberButton);
    numberButton.setAttribute('data-type',item.dataType);
    numberButton.setAttribute('value',item.value);
    numberButton.className = 'Btn';
})
num.querySelector('.Btn:last-child').classList.add('Equal');
let button = num.querySelectorAll('button'),
    result = '0';
let equalBtn = document.querySelector('.Equal'),
    delBtn = opr.querySelector('.Btn:first-child'),
    dotBtn = num.querySelector('.Btn:nth-child(11)');
for (let i =0; i<button.length;++i){
    button[i].onclick = function(){
        if(output.textContent == '0'){
            output.textContent = '';
            result = '';
        }
        output.textContent += button[i].textContent;
        result += button[i].getAttribute('value');
    }
}

let oprBtn = opr.querySelectorAll('button');
for (let z = 0; z<oprBtn.length; ++z){
    oprBtn[z].onclick = function(){
        output.textContent += oprBtn[z].textContent;
        result += oprBtn[z].getAttribute('value');
    }  
}
equalBtn.onclick = function(){
    delBtn.textContent = clearBtn.label;
    delBtn.setAttribute('value',clearBtn.value);
    // result = eval(result);
    output.textContent = eval(result);
    delBtn.addEventListener('click', function(){
        delBtn.textContent = operator[0].label;
        delBtn.setAttribute('value',operator[0].value);
    })
}
delBtn.onclick = function(){
    if (delBtn.textContent === 'DEL' && delBtn.getAttribute('value') == 'DEL'){
        let arrText = Array.from(output.textContent),
        arrResult = Array.from(result);
            arrText.splice(arrText.length - 1,1);
            arrResult.splice(arrResult.length - 1, 1);
            if(arrText.length != 0){
                output.textContent= arrText.join('');
                result = arrResult.join('');
            }else if (arrText.length = 1){
                output.textContent='0';
                result = '0';
            } 
    }else 
    if (delBtn.textContent === 'AC'){
        output.textContent = '0';
        result = '0';
    }
}
dotBtn.onclick = function(){
    if(!output.textContent.includes('.')){
        output.textContent += dotBtn.textContent;
        result += dotBtn.getAttribute('value');
    }
}
console.log(eval(9*0.3));