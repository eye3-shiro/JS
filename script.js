window.alert("ブラウザオブジェクトの取得に成功！")

document.getElementById("lists");
console.log(document.getElementById("lists"));

function getElement() {
    let element = document.querySelector('#shopB');
    console.log('選ばれたのは' + element.textContent + 'でした');
    }
