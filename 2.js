let check = 92

let i = 2
let flag = false

while(i<check){
    if(check%i==0){
        flag = true
    }

i++
}

if(flag == false){
    console.log(check, 'Its a prime')
}else{
    console.log(check, 'Its not a prime')
}