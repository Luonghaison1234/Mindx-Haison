let score = [7, 9, 5, 10, 8];
let total = 0;
console.log(score);

for (let i = 0; i < score.length; i++) {
  total += score[i];
}
let average = total / score.length;
console.log("Average score:", average);

let score2 = [];
for (let i = 0; i < score.length; i++) {
  if (score[i] >= 8) {
    score2.push(score[i]);
  }
}
console.log(score2);



let student = {name: 'hai son',age: 16 ,class:'10A1'};
console.log(student);

let so_thich = 'choi game';
student.so_thich = so_thich;
console.log(student);

student.age = 17;
console.log(student);