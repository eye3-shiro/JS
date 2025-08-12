// リスト項目を取得（確認用ログ付き）
const lists = document.getElementsByClassName("pull-down-list");
console.log(lists);

// 「リスト」ボタンを取得
const pullDownButton = document.getElementById("lists");
console.log(pullDownButton); // 動作確認用

// プルダウンメニュー（ul要素）を取得
const pullDownParents = document.getElementById("pull-down");
console.log(pullDownParents); // 動作確認用

// マウスが乗ったら表示
pullDownButton.addEventListener("mouseover", function(){
    this.setAttribute("style","background-color:blue;");
    console.log("マウスオーバーで背景色を青に変更しました");
})


// プルダウンからマウスが離れたら非表示
pullDownButton.addEventListener("mouseout", function(){
    this.removeAttribute("style","background-color:red;");
    console.log("マウスアウトで背景色を元に戻しました");
})

// クリックされたら表示切り替え
pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
        console.log("非表示")
    }else{
        pullDownParents.setAttribute("style","display:block;")
        console.log("表示")
    }
})
