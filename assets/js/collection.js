const heartIcon = document.querySelector('.heart-icon');

// 色の配列を定義
const colors = ['#FF0000', '#FFD700', '#FFC0CB', '#FFFFFF', '#ADD8E6', '#90EE90', '#FFA07A']; // 赤, ゴールド, ピンク, 白, 水色, 薄緑, 薄オレンジ

let currentColorIndex = 0; // 初期の色インデックス

// ハートをタップすると色が変更される
heartIcon.addEventListener('click', function () {
    currentColorIndex = (currentColorIndex + 1) % colors.length; // 次の色に切り替え
    heartIcon.style.color = colors[currentColorIndex]; // ハートの色を変更
});
