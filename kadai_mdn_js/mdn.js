const date = new Date();
const [month, day, year]=[
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];



// 推奨されるメソッドです。どんな値でも相対オフセットではなく、そのまま
// 年として解釈します。
date.setFullYear(24);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)