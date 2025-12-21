
vong = 0
vong2 = 0
phut = 60
for(let i = 1; i <= 10;i++){
    vong = i;
    console.log('toi chay duoc',vong,'vong');
}

while(phut > 0){
    vong2++;
    phut -= 5;
    console.log('toi chay duoc',vong2,'vong trong',60 - phut,'phut');
}
console.log('tong so vong da chay trong 60 phut la:',vong2);
//run = node bai2.js