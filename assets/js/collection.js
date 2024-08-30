const heartIcon = document.querySelector('.heart-icon');
const heartCount = document.getElementById('heartCount');

// 色の配列を定義
const colors = ['#FF0000', '#FFD700', '#FFC0CB', '#FFFFFF', '#ADD8E6', '#90EE90', '#FFA07A']; // 赤, ゴールド, ピンク, 白, 水色, 薄緑, 薄オレンジ

let currentColorIndex = 0; // 初期の色インデックス

// 各色のハートのカウントをローカルストレージから取得
const colorCounts = {
    '#FF0000': localStorage.getItem('redCount') || 0,
    '#FFD700': localStorage.getItem('goldCount') || 0,
    '#FFC0CB': localStorage.getItem('pinkCount') || 0,
    '#FFFFFF': localStorage.getItem('whiteCount') || 0,
    '#ADD8E6': localStorage.getItem('lightblueCount') || 0,
    '#90EE90': localStorage.getItem('lightgreenCount') || 0,
    '#FFA07A': localStorage.getItem('lightorangeCount') || 0,
};

// 初期のカウントを表示
heartCount.innerText = colorCounts[colors[currentColorIndex]];

// ハートをタップすると色とカウントが変更される
heartIcon.addEventListener('click', function () {
    // 右に流れるようにスライドさせる
    heartIcon.style.transition = 'transform 0.5s ease, color 0.5s ease';
    heartIcon.style.transform = 'translateX(100%)';

    // アニメーションが終わるまで待ってから色を変更し、元の位置に戻す
    setTimeout(() => {
        currentColorIndex = (currentColorIndex + 1) % colors.length; // 次の色に切り替え
        heartIcon.style.color = colors[currentColorIndex];
        heartCount.innerText = colorCounts[colors[currentColorIndex]]; // カウントを更新
        heartIcon.style.transform = 'translateX(-100%)'; // 左に移動した位置に設定
        heartIcon.style.transition = 'none'; // 色の変更後すぐに戻るように一旦transitionをオフ
        requestAnimationFrame(() => {
            heartIcon.style.transition = 'transform 0.5s ease'; // transitionを再度設定
            heartIcon.style.transform = 'translateX(0)'; // 中央に戻る
        });
    }, 500); // 0.5秒（500ms）後に色を変更
});
