var posts=["2023/11/27/MyLoverOpen/","2023/11/27/Mybatis/","2023/12/02/hello-world/","2023/11/27/SpringBootWeb入门/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };