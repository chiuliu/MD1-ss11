// var, let , const
// var: có thể khai báo lại được, có thể gắn lại được
// ,có thể kích hoạt hoisting

//let: k khai báo lại được, có thể gắn lại được
//, k kích hoạt được hoisting
// const: ko khai báo lại được, k gắn lại được, k kích hoạt được hoisting


let num = +prompt("mời b nhập số");
if(num % 2 == 0){
    console.log(`Số ${num} là số chẵn`);
}
else{
    console.log(`Số ${num} là số lẻ`);
}