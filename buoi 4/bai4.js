let hocsinh = [
  { ten: "An", tuoi: 15, lop: "10A1" },
  { ten: "Binh", tuoi: 16, lop: "11B2" },
  { ten: "Chau", tuoi: 15, lop: "10A1" },
];

console.log(hocsinh);

console.log('Them hoc sinh Dung vao:')
hocsinh.push({ ten: "Dung", tuoi: 17, lop: "11A3" });
console.log(hocsinh);

console.log('Thay tuoi Binh thanh 17:')
hocsinh.splice(1, 1, { ten: "Binh", tuoi: 17, lop: "11B2" });
console.log(hocsinh);

console.log('Xoa hoc sinh Chau:');
hocsinh.splice(2, 1);
console.log(hocsinh);

//run : node hocsinh.js

