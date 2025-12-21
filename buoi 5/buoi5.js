function tinhdientichchunhat(chieu_dai, chieu_rong) {
    return chieu_dai * chieu_rong;
}

function tinhdientichhinhvuong(canh) {
    return canh * canh;
}

function hienthidientich() {
    let dientichchunhat = tinhdientichchunhat(5, 10);
    let dientichhinhvuong = tinhdientichhinhvuong(7);
    console.log("Dien tich chu nhat: " + dientichchunhat);
    console.log("Dien tich hinh vuong: " + dientichhinhvuong);

    localStorage.setItem('dientichchunhat', dientichchunhat);
    let giatrivuatinh = localStorage.getItem('dientichchunhat');
}
function xoadientich() {
    localStorage.removeItem('dientichchunhat');
}

