const name = prompt('タスクを入力してください');
window.alert('新しいタスクを追加しました');
window.prompt('「確認、追加、削除、終了」の４つのいずれかを入力してください')

console.log("======================");

console.log("現在持っているタスク一覧");

console.log("======================");

console.log("0:掃除\n1:買い物\n2:散歩")

console.log("======================");

console.log("現在持っているタスク一覧");

console.log("======================");


const characters = ['掃除','買い物','散歩',name];

for (let i = 0; i < characters.length; i++) {

  console.log(i + `:` + characters[i]);
};
  





