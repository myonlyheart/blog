const blogPosts = [
  {
    id: 1,
    title: "搭建这个博客的过程",
    date: "2026-04-20",
    summary: "为什么要自己写一个博客，以及在这个过程中学到的东西。",
    tags: ["随笔", "前端"],
    content: `
      <p>我一直想要一个属于自己的地方来记录想法和学习笔记。市面上有很多现成的博客平台，但我还是决定自己写一个——主要是想从头理解一个网站的构建过程。</p>

      <h2>为什么不用框架</h2>
      <p>React 和 Vue 都很棒，但一个个人博客用框架有点像用大炮打蚊子。纯 HTML/CSS/JS 的好处是：没有构建步骤，没有 node_modules，双击就能看效果。对初学者来说，这种直接反馈非常友好。</p>

      <h2>暗色模式的设计</h2>
      <p>做暗色模式比我想象的简单。CSS 自定义属性（变量）是关键——定义好明暗两套色值，用一条 JS 切换 <code>data-theme</code> 属性就行了。再配合 <code>prefers-color-scheme</code> 媒体查询检测系统偏好，体验就很完整。</p>

      <p>这个博客会持续更新，计划加入 RSS 订阅和搜索功能。</p>
    `
  },
  {
    id: 2,
    title: "Git 常用命令速查",
    date: "2026-04-10",
    summary: "记录最常用的 Git 命令，方便日常查阅。",
    tags: ["Git", "工具"],
    content: `
      <p>Git 是开发中最常用的工具之一。这里整理了一些高频命令，不用每次都去搜。</p>

      <h2>分支操作</h2>
      <pre><code>git checkout -b feature/xxx    # 创建并切换新分支
git branch -d feature/xxx      # 删除本地分支
git push origin --delete xxx   # 删除远程分支
git merge --squash feature/x   # 压缩合并到当前分支</code></pre>

      <h2>撤销操作</h2>
      <pre><code>git reset HEAD~1              # 撤销最近一次 commit（保留修改）
git checkout -- filename       # 撤销单个文件的修改
git stash && git stash pop     # 暂存当前修改再恢复</code></pre>

      <h2>协作流程</h2>
      <ul>
        <li><code>git fetch origin</code> —— 拉取远程分支信息</li>
        <li><code>git rebase origin/main</code> —— 在最新的 main 上重放你的 commits</li>
        <li><code>git push -u origin feature/x</code> —— 首次推送并设置上游</li>
      </ul>

      <p>记住：<strong>理解原理比记住命令更重要</strong>，Git 本质是一个内容寻址的文件系统。</p>
    `
  },
  {
    id: 3,
    title: "学习编程的第一年 — 我的经验",
    date: "2026-03-15",
    summary: "从零开始学编程这一年的踩坑与收获。",
    tags: ["随笔", "编程"],
    content: `
      <p>一年前我写下了第一行 <code>console.log("hello world")</code>。回头看，这一年走了一些弯路，也有一些意外收获。</p>

      <h2>最大的教训</h2>
      <p>一开始我花了太多时间看教程、抄代码，却没有真正动手做自己的项目。直到开始写一个简单的待办事项应用，才发现很多概念只有在实践中才能理解。看和做之间有一道巨大的鸿沟。</p>

      <h2>对我帮助最大的学习方式</h2>
      <ul>
        <li><strong>小项目驱动</strong> —— 每个星期做一个小东西，坚持比规模重要</li>
        <li><strong>读官方文档</strong> —— 博客教程通常已经过时，文档才是最新的</li>
        <li><strong>看懂报错信息</strong> —— 不跳过任何错误，养成阅读报错文本的习惯</li>
        <li><strong>做笔记</strong> —— 用自己的话总结学到的概念，而不是复制粘贴</li>
      </ul>

      <p>编程的学习曲线不会变平，但会变得越来越有意思。</p>

      <p>共勉 🔥</p>
    `
  }
];
