var input = {numb1: 0, numb2: 0, flag1:0, flag2:0, dotted:0, 
    decCount:0, decLim:0, decMult:0.1, lastInput:0, operand: null};

var numb1 = {value: '0', sign: 1, maxLength: 12, dotted: 0};
var numb2 = {value: '0', sign: 1, maxLength: 12, dotted: 0};

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
const buttonDot = document.querySelector("#buttonDot");
const buttonBckSpc = document.querySelector("#buttonBckSpc");

document.getElementById("display0").textContent = input.numb1;

function limitDigit(numb){
    if(numb/100000000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 0,useGrouping:false}).format(numb);}
    else if(numb/10000000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 1,useGrouping:false}).format(numb);}
    else if(numb/1000000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 2,useGrouping:false}).format(numb);}
    else if(numb/100000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 3,useGrouping:false}).format(numb);}
    else if(numb/10000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 4,useGrouping:false}).format(numb);}
    else if(numb/1000>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 5,useGrouping:false}).format(numb);}
    else if(numb/100>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 6,useGrouping:false}).format(numb);}
    else if(numb/10>1){return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 7,useGrouping:false}).format(numb);}
    else{return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 8,useGrouping:false}).format(numb);}
}

function limitDigitDisplay(numb){
    return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 8}).format(numb);
}

function limitDecimal(numb){
    if(numb/100000000>1){return 10*0;}
    else if(numb/10000000>1){return 10**(-1);}
    else if(numb/1000000>1){return 10**(-2);}
    else if(numb/100000>1){return 10**(-3);}
    else if(numb/10000>1){return 10**(-4);}
    else if(numb/1000>1){return 10**(-5);}
    else if(numb/100>1){return 10**(-6);}
    else if(numb/10>1){return 10**(-7);}
    else{return 10**(-8);}
}

function numbRst(numb){
    numb.value = '0';
    numb.dotted = 0;
    numb.sign = 1;    
    numb.maxLength = 12;
}

function inputNumber(numb, input){
    if(input.flag2==1){
        input.flag2 = 0;
        numbRst(numb1);
    }
    if(input.flag1==0){
        if(numb1.value.length<numb1.maxLength){numb1.value = numb1.value + numb;}
        document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign);        
        document.getElementById("display1").textContent = ''; 
        document.getElementById("display2").textContent = ''; 
        document.getElementById("display3").textContent = ''; 
    }
    else{
        if(numb2.value.length<numb2.maxLength){numb2.value = numb2.value + numb;}
        document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb2.value)*numb2.sign); 
    }    
}

function operand(input,operator){
    input.flag2=0;
    if(input.operand==null){
        input.operand = operator;
        input.flag1 = 1;
        document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb2.value));
        document.getElementById("display1").textContent = input.operand;
        document.getElementById("display2").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign);
        document.getElementById("display3").textContent = "";
    }
    else{
        if(numb2.value.length==1 && numb1.value!="Infinity"){
            input.operand = operator;
            input.flag1 = 1;
            document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb2.value));
            document.getElementById("display1").textContent = input.operand;
            document.getElementById("display2").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign);
            document.getElementById("display3").textContent = "";
        }else{
            input.numb1 = parseFloat(numb1.value)*numb1.sign;
            input.numb2 = parseFloat(numb2.value)*numb2.sign;
            input.numb1 = operate(input.numb1,input.numb2,input.operand);
            if(input.numb1==Infinity || isNaN(input.numb1)){
                numb1.value = input.numb1;
                numb1.sign = 1;
            }
            else if(input.numb1<0){
                numb1.value = "0" + limitDigit((-1)*input.numb1);
                numb1.sign = -1;
            }else{
                console.log(limitDigit(input.numb1));
                numb1.value = "0" + limitDigit(input.numb1);
                console.log(numb1.value);
                numb1.sign = 1;
            }
            numb2.value = "0";
            numb2.sign = 1;
            numb2.dotted = 0;
            input.operand = operator;
            input.flag1 = 1;
            document.getElementById("display0").textContent = numb2.value;
            document.getElementById("display1").textContent = input.operand;
            if(numb1.value==Infinity || isNaN(numb1.value))
                {document.getElementById("display2").textContent = '='+numb1.value;}
            else{document.getElementById("display2").textContent = '=' + limitDigitDisplay(limitDigit(parseFloat(numb1.value)*numb1.sign));}
            document.getElementById("display3").textContent = "";
        }
        
    }
}

button0.addEventListener('click', function(e){
    if(input.flag2==1){
        input.flag2 = 0;
        numbRst(numb1);
    }
    if(input.flag1==0){
        if(numb1.value.length<numb1.maxLength && numb1.value.length!=1){numb1.value = numb1.value + 0;}
        document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign);        
        document.getElementById("display1").textContent = ''; 
        document.getElementById("display2").textContent = ''; 
        document.getElementById("display3").textContent = ''; 
    }
    else{
        if(numb2.value.length<numb2.maxLength && numb1.value.length!=1){numb2.value = numb2.value + 0;}
        document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb2.value)*numb2.sign); 
    }    
});
button1.addEventListener('click', function(e){inputNumber(1,input);});
button2.addEventListener('click', function(e){inputNumber(2,input);});
button3.addEventListener('click', function(e){inputNumber(3,input);});
button4.addEventListener('click', function(e){inputNumber(4,input);});
button5.addEventListener('click', function(e){inputNumber(5,input);});
button6.addEventListener('click', function(e){inputNumber(6,input);});
button7.addEventListener('click', function(e){inputNumber(7,input);});
button8.addEventListener('click', function(e){inputNumber(8,input);});
button9.addEventListener('click', function(e){inputNumber(9,input);});
buttonDot.addEventListener('click', function(e){
    if(input.flag2==1){
        input.flag2 = 0;
        numbRst(numb1);
    }
    console.log(input.flag1);
    if(input.flag1==0){
        if(numb1.dotted==0){
            if(numb1.value.length<numb1.maxLength){numb1.value = numb1.value + '.';}
            document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign) + '.';
            document.getElementById("display1").textContent = ''; 
            document.getElementById("display2").textContent = ''; 
            document.getElementById("display3").textContent = '';        
            numb1.dotted = 1;
            numb1.maxLength ++;
        }
    }
    else{
        if(numb2.dotted==0){
            if(numb2.value.length<numb2.maxLength){numb2.value = numb2.value + '.';}
            document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb2.value)*numb2.sign) + '.'; 
            numb2.dotted = 1;
            numb2.maxLength ++;
        }
    }
});

buttonClr.addEventListener('click',function(e){
    input.numb1=0;
    input.numb2=0;
    input.flag1=0;
    input.flag2=0;
    input.operand=null;
    numbRst(numb1);
    numbRst(numb2);
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
    input.dotted=0;
    input.decMult=0.1;
    if(input.operand==null){
        if(numb1.value!='0'){
            document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign);
            document.getElementById("display1").textContent = '=' + limitDigitDisplay(parseFloat(numb1.value)*numb1.sign);        
            input.flag2 = 1;
        }
    }
    else{
        input.numb1 = parseFloat(numb1.value)*numb1.sign;
        input.numb2 = parseFloat(numb2.value)*numb2.sign;
        document.getElementById("display1").textContent = limitDigitDisplay(input.numb2);
        document.getElementById("display2").textContent = input.operand;
        document.getElementById("display3").textContent = limitDigitDisplay(input.numb1);
        input.numb1 = operate(input.numb1,input.numb2,input.operand);
        if(input.numb1==Infinity || isNaN(input.numb1)){
            numb1.value = input.numb1;
            numb1.sign = 1;
        }
        else if(input.numb1<0){
            numb1.value = "0" + limitDigit((-1)*input.numb1);
            numb1.sign = -1;
        }else{
            numb1.value = "0" + limitDigit(input.numb1);
            numb1.sign = 1;
        }
        numbRst(numb2);
        input.numb2 = 0;
        input.flag2 = 1;
        input.flag1 = 0;
        if(numb1.value==Infinity || isNaN(numb1.value))
            {
                console.log(numb1.value);
                console.log('yangini?');
                document.getElementById("display0").textContent = '='+numb1.value;}
        else{
            console.log('masuk?');
            document.getElementById("display0").textContent = '=' + limitDigitDisplay(parseFloat(numb1.value)*numb1.sign);}
        input.operand = null;
    }
});



buttonBckSpc.addEventListener('click', function(e){
    if(input.flag2==0){
        if(input.flag1==0){
            if(numb1.value.length>1){
                numb1.value = numb1.value.substring(0,numb1.value.length-1);
                if(numb1.value.length==1){numb1.sign=1;}
                document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign); 
            }
        }
        if(input.flag1==1){
            if(numb2.value.length>1){
                numb2.value = numb2.value.substring(0,numb2.value.length-1);
                if(numb2.value.length==1){numb2.sign=1;}
                document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb2.value)*numb2.sign);
            }
            else if(numb2.value.length==1){
                document.getElementById("display2").textContent = '';
                document.getElementById("display1").textContent = '';
                document.getElementById("display0").textContent = limitDigitDisplay(parseFloat(numb1.value)*numb1.sign); 
                input.operand=null;
                input.flag1=0;
                numbRst(numb2);
            }
        }
    }    
});