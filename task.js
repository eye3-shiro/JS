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
pullDownButton.addEventListener("mouseenter", () => {
    console.log("マウスが乗りました！");
    pullDownMenu.classList.remove("hidden");
});

// プルダウンからマウスが離れたら非表示
pullDownMenu.addEventListener("mouseleave", () => {
    console.log("マウスがプルダウンから外れました！");
    pullDownMenu.classList.add("hidden");
});

// クリックされたら表示切り替え
pullDownButton.addEventListener("click", () => {
    console.log("クリックされました！");
    pullDownMenu.classList.toggle("hidden");
});
