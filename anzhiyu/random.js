var posts=["2024/10/13/JVM/","2024/10/07/DDD/","2024/10/13/Kafka/","2024/02/07/JWT令牌/","2023/12/25/Mybatis-plus/","2023/12/07/Mysql/","2025/04/08/RAG/","2023/11/27/Mybatis/","2024/05/05/POJO、PO、DTO、BO、VO模型概念/","2024/10/13/RabbitMQ/","2024/07/09/Redis/","2024/03/25/Spring/","2023/11/27/SpringBoot/","2025/05/06/SpringBoot中请求映射的原理-源码/","2024/04/04/SpringCloud/","2024/03/25/SpringMVC/","2024/04/18/Stream流式编程/","2024/05/08/docker/","2024/03/12/spring原理/","2024/01/17/文件上传-oss存储/","2024/05/08/使用docker常见的问题/","2023/12/17/数据库-MySQL/","2024/09/30/设计模式/","2024/01/12/请求和响应/","2024/04/24/零碎知识集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };