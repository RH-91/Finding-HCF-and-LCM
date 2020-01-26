let q,r;

function process(a,b){
    let num1=a,num2=b;
    console.log(`The numbers are : ${a} and ${b} \n`)
do{
    r=a%b;
    q=Math.floor(a/b);
    console.log(`${a} = ${b} X ${q} + ${r} \n`);
    if(r==0){console.log(`HCF is ${b}`);break;};
    a=b;
    b=r;
}
while(0<=r);

console.log(`LCM is ${num1*num2/b}`);
return 'DONE!!'
}

function findhcf(num1,num2){
    if(num1>num2){process(num1,num2)}
    else{process(num2,num1)}; 
    return 'DONE!!'
}
findhcf(81,21);

