document.addEventListener('DOMContentLoaded', function() {
    // 为所有代码块添加折叠按钮
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'fold-button';
        button.textContent = '▼ 折叠代码';
        pre.parentNode.insertBefore(button, pre);
        pre.style.display = 'none'; // 默认折叠

        button.addEventListener('click', () => {
            if (pre.style.display === 'none') {
                pre.style.display = 'block';
                button.textContent = '▲ 展开代码';
            } else {
                pre.style.display = 'none';
                button.textContent = '▼ 折叠代码';
            }
        });
    });
});