let count = 0
const updateCount =()=>{
    const countTag =document.getElementById("count")
    countTag.innerText=count;
}
updateCount()
const plusOrMinus = (operation)=> {
    operation==="plus" ? count++ : operation==="minus" ? count-- : count=0;
    updateCount()
}
const square =() => {
    count*=count;
    updateCount()
}
const sqrt = () => {
    count=Math.sqrt(count)
    updateCount()
}
const divide =() => {
    count/=document.getElementById('divide_value').value;
    updateCount()
}
const mult =()=> {
    count*=document.getElementById('mult_value').value;
    updateCount()
}
const square2 = () => {
    count=Math.pow(count, document.getElementById('square_value').value);
    updateCount()
}
const sum = () => {
    count+=parseFloat(document.getElementById('sum_value').value);
    updateCount()
}
const minus = () => {
    count-=document.getElementById('minus_value').value;
    updateCount()
}