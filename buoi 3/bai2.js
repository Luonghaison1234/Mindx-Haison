let number = [3, 7, 12, 4, 10, -2, 8, 15];
let i = 0;
let found = false;
while(i < number.length){
    if(number[i] % 2 == 0 && number[i] > 10){
        console.log('tim thay so chan lon hon 10:' + ' ' + number[i]);
        found = true;
    }
    i++;
}

if(!found){
    console.log('khong tim thay so thoa dieu kien');
}

let a = 0
while(a < number.length){
    let num = number[a];
    if(num == 10 || num < 0){
        console.log('dung tai so' + ' ' + num  + ' ' + 'tai thoa dieu kien');
        break;
    }
    a++;
}

let b = 0;
let count = 0;
while(b < number.length){
    let num = number[b];

    if(num > 100){
        break;
    }
    if(num != 0){
        count++;
    }
    b++;
}

console.log('so luong phan tu khac 0 la truoc khi gap so > 100 la:',count);