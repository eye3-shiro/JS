window.alert("ブラウザオブジェクトの取得に成功！")

document.getElementById("lists");
console.log(document.getElementById("lists"));

//function getElement() {
//    let element = document.querySelector('#shopB');
//    console.log('選ばれたのは' + element.textContent + 'でした');
//    }

    function getElement2() {
        elements = document.querySelectorAll('.shop li');
//lenはlengthの略
        let len = elements.length;
        for (let i = 0; i < len; i++) {
            console.log(elements.item(i).textContent);
        }
    }