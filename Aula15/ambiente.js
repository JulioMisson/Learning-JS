let num = [1,9,8,2,5]
num.sort()

/*for (let pos = 0; pos<num.length;pos++){
    console.log(`na chave ${pos} existe o seguinte elemento ${num[pos]}`)

} */
for(let pos in num ){
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}


