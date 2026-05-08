(function () {
  // Theme
  const STORAGE_KEY = 'blog-theme';

  function getTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☽' : '☀';
  }

  function toggleTheme() {
    const current = getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  applyTheme(getTheme());
  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', toggleTheme);

  // Set active nav link
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Post list rendering (index page)
  var listEl = document.getElementById('postList');
  if (listEl) {
    blogPosts.forEach(function (post) {
      var card = document.createElement('div');
      card.className = 'post-card';
      card.addEventListener('click', function () {
        window.location.href = 'post.html#' + post.id;
      });
      card.innerHTML =
        '<h2>' + post.title + '</h2>' +
        '<div class="meta"><span>' + post.date + '</span></div>' +
        '<p class="summary">' + post.summary + '</p>' +
        '<div class="tags">' + post.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>';
      listEl.appendChild(card);
    });
  }

  // Post detail rendering (post page)
  var articleEl = document.getElementById('article');
  if (articleEl) {
    var postId = parseInt(window.location.hash.slice(1)) || 1;
    var post = blogPosts.find(function (p) { return p.id === postId; });

    if (post) {
      document.title = post.title + ' - 博客';
      articleEl.innerHTML =
        '<h1>' + post.title + '</h1>' +
        '<div class="meta"><span>' + post.date + '</span></div>' +
        '<div class="tags">' + post.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
        '<div class="content">' + post.content + '</div>';
    } else {
      articleEl.innerHTML = '<h1>文章未找到</h1><p>请检查链接是否正确。</p>';
    }
  }
})();
