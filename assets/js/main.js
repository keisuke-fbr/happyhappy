document.querySelector('.heart-button').addEventListener('click', function() {
    const heartsContainer = document.querySelector('.hearts-container');
    
    for (let i = 0; i < 10; i++) { // 飛ぶハートの数を10に設定
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
        const distance = Math.random() * 300 + 150; // 50pxから200pxの範囲で飛ぶ
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
