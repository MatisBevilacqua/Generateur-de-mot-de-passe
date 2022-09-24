let generate = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W','X', 'Y', 'Z','1', '2', '3', '4', '5', '6', '7', '8', '9',  '0', '#', '=', '!', '/', ';', '$', '*', 'µ', '%', '-'];
let mdpLenth = document.querySelector("#mdp-lenth");
let mdpSelect = document.querySelector('#btn');
let mDp = '';

for(let i = 1; i < 16; i++){
    let op = document.createElement('option');
    op.textContent = i;
    op.value = i;
    mdpLenth.appendChild(op);
}




mdpSelect.addEventListener("click", function() {
    for(let i = 0; i < mdpLenth.value; i++){
        mDp += generate[ Math.floor(Math.random() * generate.length)];
    }
   document.querySelector('#gene').textContent = mDp;
});







