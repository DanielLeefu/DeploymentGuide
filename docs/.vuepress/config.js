module.exports = {
  base: "/DeploymentGuide/",
  title: "前端部署实践指南",
  description: "从基础到实践，带你全面了解和掌握前端部署流程",
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "Docker, CI, CD, jenkins, git Actions, 前端, 部署",
      },
    ],
    ["meta", { name: "author", content: "九思" }],
  ],
  plugins: [
    "@vuepress/medium-zoom",
    "@vuepress/back-to-top",
    "@vuepress/active-header-links",
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/images/logo.png",
    repo: "https://github.com/DanielLeefu/DeploymentGuide",
    nav: [
      {
        text: "Issue",
        link: "https://github.com/DanielLeefu/DeploymentGuide/issues",
      },
      {
        text: "更多",
        link: ""
      }
    ],
    sidebar: [
      {
        title: "介绍",
        collapsable: false,
        children: [
          "/",
        ],
      },
      {
        title: "基础入门",
        collapsable: false,
        children: [
          "/basic/git-actions/",
          "/basic/git-pages/",
          "/basic/deploy-simple/"
        ],
      },
      {
        title: "部署实践",
        collapsable: false,
        children: [
         "/basic/deploy-simple/"
        ],
      },
      {
        title: "进阶指南",
        collapsable: false,
        children: [
          "/basic/git-actions-create/"
        ],
      },
    ],

    // 搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "最后更新",
  },

  // PWA 配置
  serviceWorker: true,
};