// "구매하기" 버튼 클릭 시 알림창 표시
document.addEventListener('DOMContentLoaded', function () {
    const buyButton = document.querySelector('.buy-button');
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            alert('장바구니에 넣었습니다');
        });
    }
});