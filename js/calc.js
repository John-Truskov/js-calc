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
        if(table.innerText.length > 17){
            let size = 2 - (0.1 * (table.innerText.length - 18));
            table.style.fontSize = size + "em";
        }else{
            table.removeAttribute('style');
        }
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
    table.removeAttribute('style');
}
for(let i = 0; i < 10; i++){
    document.getElementById(String(i)).onclick = () => {
        if(result){
            table.innerText = '';
            expression.innerText = '';
            result = false;
        }
        if(table.innerText === '0'){
            table.innerText = String(i);
        }else if(table.innerText.length > 17){
            table.innerText.substring(0, 17);
        }else{
            table.innerText = table.innerText + i;
        }
    };
}
document.getElementById('t').onclick = () => {
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
document.getElementById('p').onclick = () => {action('+');};
document.getElementById('m').onclick = () => {action('-');};
document.getElementById('u').onclick = () => {action('×');};
document.getElementById('d').onclick = () => {action('÷');};
document.getElementById('e').onclick = () => {equal();};
document.getElementById('c').onclick = () => {clear();};
document.getElementById('b').onclick = () => {
    if(result){
        clear();
    }else{
        table.innerText = table.innerText.slice(0, -1);
        tchk = !(table.innerText.includes('.'));
    }
};
document.getElementById('mp').onclick = () => {
    memory = memory + Number(table.innerText);
    table.innerText = String(memory);
    result = true;
};
document.getElementById('mm').onclick = () => {
    memory = memory - Number(table.innerText);
    table.innerText = String(memory);
    result = true;
};