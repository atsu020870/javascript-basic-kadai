const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    const btn = document.createElement('text');

    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
      }, 2000);

});
