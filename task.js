function pullDown() {
  // リスト項目
  const items = document.querySelectorAll(".pull-down-list");
  // 選択中の表示
  const currentList = document.getElementById("current-list");
  // トグルボタンとメニュー
  const pullDownButton  = document.getElementById("lists");
  const pullDownParents = document.getElementById("pull-down");

  // 見た目（任意）
  pullDownButton.addEventListener("mouseover", function () {
    this.style.backgroundColor = "blue";
  });
  pullDownButton.addEventListener("mouseout", function () {
    this.style.backgroundColor = ""; // 元に戻す
  });

  // メニューの開閉（style.displayで単純に）
  pullDownButton.addEventListener("click", function () {
    const isOpen = pullDownParents.style.display === "block";
    pullDownParents.style.display = isOpen ? "none" : "block";
  });

  // 各リストクリックで表示更新＆遷移
  items.forEach((item) => {
    item.addEventListener("click", () => {
      // spanに選択中の文字を表示
      currentList.textContent = item.textContent.trim();

      // data-url があれば遷移
      const url = item.dataset.url;
      if (url) {
        // メニューを閉じてから遷移（任意）
        pullDownParents.style.display = "none";
        window.location.href = url;
      }
    });
  });
}

window.addEventListener("load", pullDown);
