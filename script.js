// 模拟的用户数据库
const users = {
    'user1': 'password1',
    'user2': 'password2'
};

// 登录功能
document.getElementById('loginBtn').addEventListener('click', function() {
    // 显示登录框
    document.getElementById('loginForm').style.display = 'block';
});

// 登录表单提交事件
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        alert('登录成功');
        // 隐藏登录框，显示检索框
        document.getElementById('loginForm').style.display = 'none';
    } else {
        alert('用户名或密码错误');
    }
});

// 期刊检索功能
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const category = document.getElementById('categorySelect').value;
    const cycle = document.getElementById('cycleSelect').value;
    const website = document.getElementById('websiteSelect').value;
    const level = document.getElementById('levelSelect').value;
    const batch = document.getElementById('batchSelect').value;
    const sort = document.getElementById('sortSelect').value;
    const keyword = document.getElementById('keyword').value;

    // 模拟返回的检索结果
    const results = [
        { title: `${keyword}的研究进展`, description: `这是关于${category}领域的文献描述`, category, cycle, website, level, batch, sort },
        { title: `深入探讨${keyword}`, description: `该文献主要关注${category}领域的深度问题`, category, cycle, website, level, batch, sort }
    ];

    const resultContainer = document.getElementById('searchResults');
    resultContainer.innerHTML = '';  // 清空之前的结果
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');
        resultElement.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <small>分类：${result.category} | 出版周期：${result.cycle} | 收录网站：${result.website} | 期刊级别：${result.level} | 批次：${result.batch} | 排序：${result.sort}</small>
        `;
        resultContainer.appendChild(resultElement);
    });
});
