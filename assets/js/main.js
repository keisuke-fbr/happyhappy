// 1. ユーザー識別子の生成と取得
function getUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9); // 簡易的な一意識別子を生成
        localStorage.setItem('userId', userId);
    }
    return userId;
}

const userId = getUserId(); // ユーザー識別子を取得

// 2. クリック回数の初期化とハートサイズの設定
let clickCount = localStorage.getItem(`${userId}_clickCount`) ? parseInt(localStorage.getItem(`${userId}_clickCount`)) : 0;
let heartSize = 150 + clickCount * 2; // 初期のハートサイズを設定

// ハートの色候補
const colors = ['#FFD700', '#FF0000', '#FFC0CB', '#FFFFFF', '#ADD8E6', '#90EE90', '#FFA07A']; // 金（もっと神々しい）, 赤, ピンク, 白, 水色, 薄緑, 薄オレンジ

// ランダムな色を取得する関数
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// 初期のハートサイズと色をボタンに反映
const heartButton = document.querySelector('.heart-button');
heartButton.style.fontSize = `${heartSize}px`;

// ハートのサイズに応じて色を設定
if (heartSize >= 500) {
    heartButton.style.color = getRandomColor(); // ハートの色をランダムに変更
} else {
    heartButton.style.color = '#ff0000'; // デフォルトの赤色
}

// 3. クリックイベントの処理
heartButton.addEventListener('click', function() {
    clickCount++; // クリック回数を増やす

    // ハートのサイズが500に達した場合の処理
    if (150 + clickCount * 2 >= 300) {
        heartSize = 150; // サイズを初期化
        clickCount = 0; // クリック回数をリセット
        heartButton.style.color = getRandomColor(); // ハートの色をランダムに変更
    } else {
        heartSize = 150 + clickCount * 2; // サイズを増加
    }

    // 状態を保存
    localStorage.setItem(`${userId}_clickCount`, clickCount);

    this.style.fontSize = `${heartSize}px`; // ハートボタンのサイズを更新

    const heartsContainer = document.querySelector('.hearts-container');
    
    for (let i = 0; i < 20; i++) { // 飛ぶハートの数を10に設定
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = '❤️';

        heartsContainer.appendChild(heart);

        // 初期位置の設定
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.transform = 'translate(-50%, -50%)'; // 初期位置を中央に設定

        // 不規則な方向に飛ぶアニメーション
        const angle = Math.random() * 360; // 0から360度のランダムな角度
        const distance = Math.random() * 250 + 50; // 50pxから200pxの範囲で飛ぶ
        const endX = distance * Math.cos(angle * (Math.PI / 180));
        const endY = distance * Math.sin(angle * (Math.PI / 180));

        // アニメーションの開始
        setTimeout(() => {
            heart.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
            heart.style.transform = `translate(${endX}px, ${endY}px) scale(0.5)`;
            heart.style.opacity = '0'; // アニメーションと共に消える
        }, 10);

        // アニメーション終了後にハートを削除
        heart.addEventListener('transitionend', function() {
            heart.remove();
        });
    }
});
