'use strict';

const url = "./Script/products.json";
const productsDOM = document.querySelector('.products-container');
const sortItem = document.querySelectorAll('.sortBtn'); // 絞り込む項目を選択するエリア
//
const hideClass = 'is-hidden'; // 絞り込み対象外の場合のclass名
const activeClass = 'is-activated'; // 選択中のグループのclass名

async function resJson() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function displayProducts(products) {
    let result = '';
    products.forEach(product => {
        result += `
            <!--アイテム-->
            <article class="product ${product.type}" data-group="${product.type}">
                    <div class="img-container">
                        <img src="${product.image}" alt="product" class="product-img">
                    </div>
                    <h3>${product.title}</h3>
                    <h4>¥${product.price}</h4>
                    <div class="link-btn"><a href="product.html?item=${product.title}">商品ページへ</a></div>
            </article>
        `;
    });
    productsDOM.innerHTML = result;
}




async function allProducts() {
    const products = await resJson();
    await displayProducts(products);

    const listItem = document.querySelectorAll('.product'); // 絞り込み対象のアイテム
    let selected;
    //ソートボタン全部にイベントを設定
    for (let i = 0; i < sortItem.length; i++) {
        sortItem[i].addEventListener('click', function () {
            //selectedに選択したデータを代入
            selected = this.dataset.group;
            //一度すべてのアクティブクラスを除去
            for (let j = 0; j < sortItem.length; j++) {
                sortItem[j].classList.remove(activeClass);
            }

            for (let k = 0; k < listItem.length; k++) {
                listItem[k].classList.remove(hideClass);
                if (listItem[k].classList.contains(selected)) {
                    continue;
                }
                listItem[k].classList.add(hideClass);
            }
            if (sortItem[i].dataset.group == selected) {
                sortItem[i].classList.add(activeClass);
            }
        });
    }
}
allProducts();


/*
function search_filter(group) {
    // 非表示状態を解除
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.remove(hideClass);
    }
    // 値が空の場合はすべて表示
    if (group === "") {
        return;
    }
    // リスト内の各アイテムをチェック
    let itemData;
    for (let i = 0; i < listItem.length; i++) {
        // アイテムに設定している項目を取得
        itemData = listItem[i].dataset.group;
        // 絞り込み対象かどうかを調べる
        if (itemData !== group) {
            listItem[i].classList.add(hideClass);
        }
    }
}
function sortItems() {
    let selected;
    let group;
    //ソートボタン全部にイベントを設定
    for (let i = 0; i < sortItem.length; i++) {
        sortItem[i].addEventListener('click', function () {
            //一度すべてのアクティブクラスを除去
            for (let j = 0; j < sortItem.length; j++) {
                sortItem[j].classList.remove(activeClass);
            }
            //selectedに選択したデータを代入
            selected = this.dataset.group;
            if (sortItem[i].dataset.group == selected) {
                sortItem[i].classList.add(activeClass);
                group = sortItem[i].dataset.group;
                return group;

            } else if (selected == '') {
                group = '';
                return group;
            }
        });
    }
}
let selected;
let group;
//ソートボタン全部にイベントを設定
for (let i = 0; i < sortItem.length; i++) {
    sortItem[i].addEventListener('click', function () {
        //selectedに選択したデータを代入
        selected = this.dataset.group;
        //一度すべてのアクティブクラスを除去
        for (let j = 0; j < sortItem.length; j++) {
            sortItem[j].classList.remove(activeClass);
        }

        for (let k = 0; k < listItem.length; k++) {
            listItem[k].classList.add(hideClass);
            if (listItem[k].classList.contains(selected)) {
                continue;
            }
            listItem[k].classList.add(hideClass);
        }
        if (sortItem[i].dataset.group == selected) {
            sortItem[i].classList.add(activeClass);
        }
    });
}*/