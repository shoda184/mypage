// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // スムーススクロール機能
    initSmoothScroll();
    
    // ナビゲーション背景変更機能
    initNavigationScroll();
    
    // フェードインアニメーション機能
    initFadeInAnimations();
    
});

/**
 * スムーススクロール機能を初期化
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * スクロール時のナビゲーション背景変更機能を初期化
 */
function initNavigationScroll() {
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('bg-black/90');
            nav.classList.remove('bg-black/80');
        } else {
            nav.classList.add('bg-black/80');
            nav.classList.remove('bg-black/90');
        }
    });
}

/**
 * フェードインアニメーション機能を初期化
 */
function initFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in forwards';
                // アニメーション完了後は監視を停止（パフォーマンス向上）
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // .fade-inクラスを持つ全要素を監視
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * モバイルメニューの表示/非表示切り替え（将来の機能拡張用）
 */
function toggleMobileMenu() {
    // モバイルメニューの実装は必要に応じて追加
    console.log('Mobile menu toggle - 実装予定');
}

/**
 * お問い合わせフォーム送信処理（将来の機能拡張用）
 */
function handleContactForm(event) {
    // フォーム送信処理は必要に応じて追加
    event.preventDefault();
    console.log('Contact form submission - 実装予定');
}