let hocsinh = {
  ten: "son",
  tuoi: 11,
  lop: 6,
};
console.log(hocsinh);
console.log("ten hoc sinh: " + hocsinh.ten);
console.log("-------");

for (let key in hocsinh) {
  //duyet thuoc tinh
  console.log(key);
}
console.log("-------");

hocsinh.lophoc = "6A1"; //them thuoc tinh moi
hocsinh["namhoc"] = 2023; //them thuoc tinh moi
console.log(hocsinh);
console.log("-------");

if ("tuoi" in hocsinh) {
  //kiem tra thuoc tinh
  console.log(hocsinh.tuoi);
}
console.log("-------");

delete hocsinh.lop; //xoa thuoc tinh
console.log(hocsinh);

//run : node hocsinh.js
