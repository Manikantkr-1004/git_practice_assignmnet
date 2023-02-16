let number=13;
let count =0;

for(let i=0; i<=number; i++){
if(i%number==0){
count++;
}

}

if(count==2){
console.log("It's prime");
}
else{
console.log("It is not a prime number");
}