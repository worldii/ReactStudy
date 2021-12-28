function createBulkpetList() {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    array.push({
      id: i,
      text: "전체 강아지 분양",
      kind: "펫샵",
      islike: false,
      price: 520000,
      description: "3개월/ 남아/ 진돗개",
      date: "2021/12/24",
      img: "dog",
    });
  }
  return array;
}

function createBulkpetList2() {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    array.push({
      id: i,
      text: "펫샵 강아지 분양",
      kind: "펫샵",
      islike: false,
      price: 520000,
      description: "3개월/ 남아/ 진돗개",
      date: "2021/12/24",
      img: "dog2",
    });
  }
  return array;
}

function createBulkpetList3() {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    array.push({
      id: i,
      text: "보호소 분양",
      kind: "펫샵",
      islike: false,
      price: 520000,
      description: "3개월/ 남아/ 진돗개",
      date: "2021/12/24",
      img: "dog3",
    });
  }
  return array;
}
var fs = require("fs");
const petJson = createBulkpetList3();
fs.writeFileSync("3.js", petJson);
