var posts=["2023/11/30/hello-world/","2023/11/27/MyLoverOpen/","2023/11/27/SpringBootWeb入门/","2023/11/27/Mybatis/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };