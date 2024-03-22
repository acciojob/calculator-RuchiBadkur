document.addEventListener('DOMContentLoaded', function() {
  let input = document.getElementById('input');
  let ans = document.getElementById('ans');
  let clr = document.getElementById('clr');

  document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
      if (button.id === 'ans') {
        try {
          input.value = eval(input.value);
        } catch (error) {
          input.value = 'Error';
        }
      } else if (button.id === 'clr') {
        input.value = '';
      } else {
        input.value += button.textContent;
      }
    });
  });
});

// //your code here
// const body = document.querySelector("body");
// const main = document.createElement("main");
// const input = document.createElement("input");
// const table = document.createElement("table");
// const arr = ["C", "/", "*", "<-", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, ".", "(", 0, ")", "="];
// let item = 0;
// for(let row = 1; row <= 5; row++){
// 	const tr = document.createElement("tr");
// 	for(let col = 1; col <= 4; col++){
// 		var btn = document.createElement("button");
// 		btn.innerText = arr[item];
// 		console.log(btn.innerText);
// 		item++;
// 		tr.append(btn);
// 	}
// 		table.append(tr);
// }
// main.append(input);
// main.append(table);
// body.append(main);