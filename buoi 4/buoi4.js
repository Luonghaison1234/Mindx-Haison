function duyetMang(mang){
    for(let i = 0; i < mang.length; i++){
        console.log(mang[i]);
    }
}
let lungtung = [2, "son", false];
let str = 'dien thoai';
let index = 0;
console.log(lungtung[index]);
console.log('-------------------');

lungtung.push(str); //them phan tu vao cuoi mang
duyetMang(lungtung);    

console.log('-------------------');
lungtung.splice(1,2,'iphone'); //thay the phan tu o vi tri
duyetMang(lungtung);

console.log('-------------------');
lungtung.indexOf('son'); //tim vi tri phan tu trong mang
console.log(lungtung.indexOf('iphone')); //-1 neu khong tim thay

console.log('-------------------');
lungtung.splice(0,1); //xoa phan tu o vi tri
duyetMang(lungtung);
//run : node buoi4.j