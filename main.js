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
let logHistory = document.querySelector('.History');
let history = [],
    displayData = '',
    resultData = '';
    
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
let button = num.querySelectorAll('[data-type="number"]'),
    result = '0';
let equalBtn = document.querySelector('.Equal'),
    delBtn = opr.querySelector('.Btn:first-child'),
    dotBtn = num.querySelector('.Btn:nth-child(11)'),
    minusBtn = opr.querySelector('.Btn:last-child');
for (let i =0; i<button.length;++i){
    button[i].onclick = function(){
        if(output.textContent == '0'){
            output.textContent = '';
            result = '';
        }
        output.textContent += button[i].textContent;
        result += button[i].getAttribute('value');
        console.log(result);
    }
}
let oprBtn = opr.querySelectorAll('button');
for (let z = 0; z<oprBtn.length; ++z){
    oprBtn[z].onclick = function(){
        let oprLast = output.textContent[output.textContent.length - 1];
        if ( oprLast == 'x'|| oprLast == '+' || oprLast == '-'|| oprLast == '÷') {
            output.textContent = output.textContent.replace(output.textContent[output.textContent.length - 1], '');
            result = result.replace(result[result.length - 1], '');
          }
        
        output.textContent += oprBtn[z].textContent;
        result += oprBtn[z].getAttribute('value');
        
    } 
    if(output.textContent[output.textContent.length - 2] == 'x'|| output.textContent[output.textContent.length - 2] == '+' || output.textContent[output.textContent.length - 2] == '-'|| output.textContent[output.textContent.length - 2] == '÷'){
        oprBtn[z].disabled = true
    }    
}
// minusBtn.onclick = function(){
//     let oprLast = output.textContent[output.textContent.length - 1];
//     if ( oprLast == 'x' || oprLast == '÷') {
//         output.textContent = output.textContent.concat(minusBtn.textContent);
//         result = result.concat(minusBtn.getAttribute('value'));
//       }
   
// }
function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

equalBtn.onclick = function(){
    displayData = output.textContent;
    history.push({expression: displayData});
    showHistory();
    delBtn.textContent = clearBtn.label;
    delBtn.setAttribute('value',clearBtn.value);
    output.textContent = precisionRound(eval(result),12);
    delBtn.addEventListener('click', function(){
        delBtn.textContent = operator[0].label;
        delBtn.setAttribute('value',operator[0].value);
    })
}
function showHistory(){
    let log = '';
    for(let key in history){
        log = history[key].expression + '=';
    }
    logHistory.textContent = log;
}
delBtn.onclick = function(){
    let display = output.textContent;
    if (delBtn.textContent === 'DEL' && delBtn.getAttribute('value') == 'DEL'){
        display = display.substring(0,display.length -1)
            if(display.length != 0){
                output.textContent= display.concat('');
                result = result.concat('');
            }else if (display.length = 1){
                output.textContent='0';
                result = '0';
            } 
    }else 
    if (delBtn.textContent === 'AC'){
        output.textContent = '0';
        result = '0';
        logHistory.textContent = '';
    }
}
dotBtn.onclick = function(){
    if(!output.textContent.includes('.')){
        output.textContent += dotBtn.textContent;
        result += dotBtn.getAttribute('value');
    }
}

