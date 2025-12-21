console.log(50%2); //lay ra phan du
console.log(5/2); //chia lay so thap phan
console.log(Math.floor(5/2)); //lam tron xuong
console.log(5<'3')
console.log(5>'3')
console.log(5=='5') //so sanh gia tri
console.log(5==='5') //so sanh ca gia tri va kieu du lieu

//and = &&
//or = ||
//phu dinh = !

var thoitiet = 'nang'
var phoungtien = 'xe o to'
if ( (thoitiet == 'nang' || thoitiet == 'mua') && (phoungtien == 'xe may'|| phoungtien == 'xe o to') ) {
    console.log('di bang',phoungtien)
}
else {
    console.log('phai di bang xe o to')
}