const table = document.getElementById('table'),
    expression = document.getElementById('expression');
let num = '',
    sign = '',
    tchk = true,
    memory = 0,
    result = false;
function equal(){
    if(num !== '' && sign !== '' && table.innerText !== ''){
        let a = Number(num), b = Number(table.innerText);
        switch(sign){
            case '+':
                table.innerText = String(a + b);
                break;
            case '-':
                table.innerText = String(a - b);
                break;
            case '×':
                table.innerText = String(a * b);
                break;
            case '÷':
                table.innerText = String(a / b);
                break;
            default:
                break;
        }
        num = '';
        sign = '';
        tchk = true;
        result = true;
        expression.innerText = expression.innerText + ' ' + b + ' =';
    }else{
        return false;
    }
}
function action(mark){
    if(num === '' && sign === '' && table.innerText === ''){
        num = '0';
        sign = mark;
    }else if(num === '' && sign === '' && table.innerText !== ''){
        num = table.innerText;
        sign = mark;
        table.innerText = '';
        tchk = true;
        result = false;
    }else if(num !== '' && sign !== '' && table.innerText === ''){
        sign = mark;
    }else if(num !== '' && sign !== '' && table.innerText !== ''){
        equal();
        num = table.innerText;
        sign = mark;
        table.innerText = '';
        result = false;
    }else{
        num = '';
        sign = '';
    }
    expression.innerText = num + ' ' + sign;
}
function clear(){
    table.innerText = '';
    num = '';
    sign = '';
    tchk = true;
    memory = 0;
    result = false;
    expression.innerText = '';
}
for(let i = 0; i < 10; i++){
    document.getElementById(String(i)).onclick = function(){
        if(result){
            table.innerText = '';
            expression.innerText = '';
            result = false;
        }
        if(table.innerText === '0'){
            table.innerText = String(i);
        }else{
            table.innerText = table.innerText + i;
        }
    };
}
document.getElementById('t').onclick = function(){
    if(result){
        table.innerText = '';
        expression.innerText = '';
        result = false;
    }
    if(tchk){
        if(table.innerText === ''){
            table.innerText = '0.';
        }else{
            table.innerText = table.innerText + '.';
        }
        tchk = false;
    }
    else{
        return false;
    }
};
document.getElementById('p').onclick = function(){action('+');};
document.getElementById('m').onclick = function(){action('-');};
document.getElementById('u').onclick = function(){action('×');};
document.getElementById('d').onclick = function(){action('÷');};
document.getElementById('e').onclick = function(){equal();};
document.getElementById('c').onclick = function(){clear();};
document.getElementById('b').onclick = function(){
    if(result){
        clear();
    }else{
        table.innerText = table.innerText.slice(0, -1);
        tchk = !(table.innerText.includes('.'));
    }
};
document.getElementById('mp').onclick = function(){
    memory = memory + Number(table.innerText);
    table.innerText = String(memory);
    result = true;
};
document.getElementById('mm').onclick = function(){
    memory = memory - Number(table.innerText);
    table.innerText = String(memory);
    result = true;
};