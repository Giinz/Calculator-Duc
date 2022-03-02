const buttonsEls = document.querySelectorAll(".Btn");
const screen = document.querySelector(".Output");
  screen.innerHTML = 0;
const history = document.querySelector('.History');
let valueShowOnScreen = "0";
let valueToCalc = "0";
let canTypingTheDot = true;
let canTypingOperator = true;
let delBtn = document.querySelector('[data-type = "delete"]');
let delBtnType = delBtn.getAttribute('data-type');
let displayData = '',
          historyData = [];
buttonsEls.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnLabel = btn.innerHTML;
    const btnValue = btn.getAttribute("value");
    const btnType = btn.getAttribute("data-type");
    const isEqualBtn = btnType === CONSTANTS.EQUAL;
    const isDelBtn = btnType === CONSTANTS.DELETE;
    const isDotBtn = btnType === CONSTANTS.DOT;
    const isNumberBtn = btnType === CONSTANTS.NUMBER;
    const isOperatorBtn = btnType === CONSTANTS.OPERATOR;
    const isACBtn = btnType === CONSTANTS.ALLCLEAR;
    
    if (isEqualBtn ) {
      //History
      displayData = screen.innerHTML;
      historyData.push({exprestion: displayData});
      showHistory();
      const result = eval(valueToCalc);
      screen.innerHTML = result;
      valueToCalc = result;
      valueShowOnScreen = result;
      canTypingTheDot = true;
      delBtn.innerHTML = 'AC';
      delBtnType = delBtn.setAttribute('data-type',CONSTANTS.ALLCLEAR);
      canTypingOperator = true;
      
    } else if (isDelBtn) {
      valueShowOnScreen = valueShowOnScreen.substring(0,valueShowOnScreen.length -1);
      valueToCalc = valueToCalc.substring(0,valueToCalc.length-1);
      screen.innerHTML = valueShowOnScreen;
      canTypingTheDot = true;
      canTypingOperator = true;
    }else if(isACBtn){
      valueShowOnScreen = '0';
      valueToCalc = '0';
      screen.innerHTML = '0';
      canTypingTheDot = true;
      delBtnType = delBtn.setAttribute('data-type',CONSTANTS.DELETE);
      delBtn.innerHTML = 'DEL';
      canTypingOperator = true;
      history.innerHTML = '';
    } else if(isOperatorBtn){
      if(!isOperatorBtn || (isOperatorBtn && canTypingOperator)){
        valueToCalc += btnValue;
        valueShowOnScreen += btnLabel;
        screen.innerHTML = valueShowOnScreen;
        if(isOperatorBtn) canTypingOperator = false;
      }
    }
    
    else { // numb, op, dot
      const valueIsValid = !isDotBtn || (isDotBtn && canTypingTheDot);
      canTypingOperator = true;
      if (valueIsValid) { 
        valueToCalc += btnValue;
        valueShowOnScreen += btnLabel;
        screen.innerHTML = valueShowOnScreen;

        if (isDotBtn) canTypingTheDot = false;
        if (isOperatorBtn) canTypingTheDot = true;
      }
    }
  });
});
function showHistory(){
  let log = '';
  for (let i in historyData){
    log = historyData[i].exprestion + '=';
  }
  history.innerHTML = log;
}