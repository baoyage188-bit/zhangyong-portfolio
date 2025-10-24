export interface Work {
  title: string;
  cover: string;
  desc: string;
  link: string;
}

export interface Article {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export const siteConfig = {
  // 基本信息
  name: "张勇",
  oneLiner: "高级视觉设计师，专注品牌建设与 APPUI设计开发",
  avatar: "/08152e9277a724e867c2664e2c50e61d.JPG",
  
  // 社交链接
  social: {
    xiaohongshu: "{{XHS_URL}}",
  },
  
  // 导航菜单
  navigation: [
    { name: "作品集", href: "#works" },
    { name: "文章", href: "#articles" },
    { name: "简历", href: "#resume" },
  ],
  
  // 作品集数据
  works: [
    {
      title: "JIYUEJI租包",
      cover: "/12.jpg",
      desc: "专为女性打造一站式奢侈品租赁平台，涵盖包、首饰等品类，日活居女性租赁平台首位",
      link: "jiyueji/index.html"
    },
    {
      title: "MarryU高端婚恋App", 
      cover: "/25.jpg",
      desc: "聚焦 25-45 岁人群，严选优质用户，主打以结婚为目的的交友",
      link: "marryu/index.html"
    },
    {
      title: "项目三",
      cover: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop", 
      desc: "展示我的专业技能",
      link: "https://example.com/project3"
    }
  ] as Work[],
  
  // 文章数据
  articles: [
    {
      title: "我的第一篇技术文章",
      date: "2024-01-15",
      excerpt: "这篇文章分享了我对前端开发的思考和经验...",
      link: "https://example.com/article1"
    },
    {
      title: "设计思维在工作中的应用",
      date: "2024-01-10", 
      excerpt: "探讨如何将设计思维融入到日常工作中...",
      link: "https://example.com/article2"
    },
    {
      title: "个人成长的心得体会",
      date: "2024-01-05",
      excerpt: "分享我在学习和成长过程中的一些感悟...",
      link: "https://example.com/article3"
    }
  ] as Article[],
  
  // 简历下载链接
  cvUrl: "{{CV_FILE_URL}}",
  
  // 版权信息
  year: new Date().getFullYear(),
  
  // 主题配置
  theme: {
    defaultTheme: 'system',
    enableSystem: true,
  }
} as const;
