var input = {numb1: 0, numb2: 0, flag1:0, flag2:0, operand: null};

function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
	return a/b;
}

function operate (a,b,c) {
    if(c=='+'){return(add(a,b));}
    else if(c=='-'){return(subtract(a,b));}
    else if(c=='×'){return(multiply(a,b));}
    else if(c=='÷'){return(divide(a,b));}
}

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const button0 = document.querySelector("#button0");
const buttonClr = document.querySelector("#buttonClr");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonMul = document.querySelector("#buttonMul");
const buttonEq = document.querySelector("#buttonEq");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubs = document.querySelector("#buttonSubs");

document.getElementById("display0").textContent = input.numb1;

function limitDigit(numb){
    if(numb/100000000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 0}).format(numb);}
    else if(numb/10000000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 1}).format(numb);}
    else if(numb/1000000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 2}).format(numb);}
    else if(numb/100000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 3}).format(numb);}
    else if(numb/10000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 4}).format(numb);}
    else if(numb/1000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 5}).format(numb);}
    else if(numb/100>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 6}).format(numb);}
    else if(numb/10>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 7}).format(numb);}
    else{return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 8}).format(numb);}
}

function inputNumber(numb, input){
    if(input.flag2==1){
        input.flag2 = 0;
        input.numb1 = 0;
    }
    if(input.flag1==0){
        console.log('numb1');
        if(input.numb1<100000000){input.numb1 = input.numb1*10 + numb;}
        document.getElementById("display0").textContent = input.numb1;        
    }
    else{
        console.log('numb2');
        if(input.numb2<100000000){input.numb2 = input.numb2*10 + numb;}
        document.getElementById("display0").textContent = input.numb2;
    }
}

function operand(input,operator){
    input.flag2 = 0;
    if(input.operand==null){
        input.operand = operator;
        input.flag1 = 1;
        document.getElementById("display0").textContent = input.numb2;
        document.getElementById("display1").textContent = input.operand;
        document.getElementById("display2").textContent = limitDigit(input.numb1);
        document.getElementById("display3").textContent = "";
    }
    else{
        input.numb1 = operate(input.numb1,input.numb2,input.operand);
        console.log(typeof input.numb1);
        input.numb2 = 0;
        input.operand = operator;
        input.flag1 = 1;
        document.getElementById("display0").textContent = input.numb2;
        document.getElementById("display1").textContent = input.operand;
        document.getElementById("display2").textContent = '=' + limitDigit(input.numb1);
        document.getElementById("display3").textContent = "";
    }
}

button0.addEventListener('click', function(e){inputNumber(0,input);});
button1.addEventListener('click', function(e){inputNumber(1,input);});
button2.addEventListener('click', function(e){inputNumber(2,input);});
button3.addEventListener('click', function(e){inputNumber(3,input);});
button4.addEventListener('click', function(e){inputNumber(4,input);});
button5.addEventListener('click', function(e){inputNumber(5,input);});
button6.addEventListener('click', function(e){inputNumber(6,input);});
button7.addEventListener('click', function(e){inputNumber(7,input);});
button8.addEventListener('click', function(e){inputNumber(8,input);});
button9.addEventListener('click', function(e){inputNumber(9,input);});

buttonClr.addEventListener('click',function(e){
    input.numb1=0;
    input.numb2=0;
    input.flag1=0;
    input.flag2=0;
    input.operand=null;
    document.getElementById("display0").textContent = 0;
    document.getElementById("display1").textContent = "";
    document.getElementById("display2").textContent = "";
    document.getElementById("display3").textContent = "";
});

buttonAdd.addEventListener('click',function(e){
    operand(input,'+')
});

buttonSubs.addEventListener('click',function(e){
    operand(input,'-')
});

buttonMul.addEventListener('click',function(e){
    operand(input,'×')
});

buttonDiv.addEventListener('click',function(e){
    operand(input,'÷')
});

buttonEq.addEventListener('click',function(e){
    if(input.operand==null){
        if(input.numb1!=0){
            document.getElementById("display0").textContent = limitDigit(input.numb1);
            document.getElementById("display1").textContent = '=' + limitDigit(input.numb1);        
            input.flag2 = 1;
        }
    }
    else{
        document.getElementById("display1").textContent = input.numb2;
        document.getElementById("display2").textContent = input.operand;
        document.getElementById("display3").textContent = limitDigit(input.numb1);
        input.numb1 = operate(input.numb1,input.numb2,input.operand);
        input.numb2 = 0;
        input.flag2 = 1;
        input.flag1 = 0;
        document.getElementById("display0").textContent = '=' + limitDigit(input.numb1);
        input.operand = null;
    }
});