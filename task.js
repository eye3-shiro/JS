// リスト項目を取得（確認用ログ付き）
const lists = document.getElementsByClassName("pull-down-list");
console.log(lists);

// 「リスト」ボタンを取得
const pullDownButton = document.getElementById("lists");
console.log(pullDownButton); // 動作確認用

// プルダウンメニュー（ul要素）を取得
const pullDownMenu = document.getElementById("pull-down");
console.log(pullDownMenu); // 動作確認用

// マウスが乗ったら表示
pullDownButton.addEventListener("mouseover", function(){
    pullDownButton.setAttribute("style","background-color:blue;");
    console.log("マウスオーバーで背景色を青に変更しました");
})


// プルダウンからマウスが離れたら非表示
pullDownButton.addEventListener("mouseout", function(){
    pullDownButton.removeAttribute("style","background-color:red;");
    console.log("マウスアウトで背景色を元に戻しました");
})

// クリックされたら表示切り替え
pullDownButton.addEventListener("click", function(){
    pullDownButton.setAttribute("style","background-color:green;");
    console.log("クリックで背景色を緑に変更しました");
    pullDownMenu.classList.toggle("hidden");
})
