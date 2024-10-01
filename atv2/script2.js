let number = []
let num, i=0

while(i<=9){
    num = parseFloat(prompt("Digite um numero"))
    number.push(num)
    i++
    if(num<0){
        console.log(i)
    }
}