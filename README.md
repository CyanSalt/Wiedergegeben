Wiedergegeben
===========

A modified version of Wiedersehen.

## Demo

http://cyanidea.com/#!/wiki

## Change Log

1-因为个人习惯我把i文件夹改名叫archives，o文件夹改名posts，相应的config和index也改掉了

2-custom.css，为了看上去比较舒服，#title加了margin-top: 70px，#subtitle加了margin-bottom: 50px，然后因为后面加了摘要，要突出标题于是#content .contents .title > a改成了font-size: 1.2rem；#content article加了line-height: 1.5rem;

3-core.js，item那里改了title: li.getAttribute('data-title').trim(),，加了summary: li.textContent.trim(),，也就是加了摘要。相应的render的loadArticleTitles函数循环里加了summary: list[i].summary，templates.js的listTitle改成了listTitle: '<pre><li class="title"><a href="{{url}}">{{title}}</a><p style="padding-left:12px">{{summary}}</p></li></pre>',

4-基本上出现英文的地方我都翻译了……。还有那个分享我感觉没啥用，就注释掉了。

5-index.html，标题和副标题的div加了style="text-align:center"，older和newer的<pre><a></pre>标签分别加了margin-left/right=-3px属性。

6-顶栏和底栏只是为了和我站里其他页面保持一致。

顶栏：<pre>
<div class="head-warp">
  <div class="head">
    <h1 style="margin: 0px 0"><a href="index.html">Cyanidea</a></h1>
    <div class="nav-box">
      <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/p">项目</a></li>
          <li class="cur"><a href="/blog2">博客</a></li>
          <li><a href="#!/projects">鸣谢</a></li>
          <li class="last"><a href="/blog">Wordpress博客>></a></li>
      </ul>
      <div class="nav-line"></div>
    </div>
  </div>
</div></pre>
（这个要在头部加载jquery）

底栏：<pre>
<div class="footer">
  <p>Wiedersehen & Theme Milky created by Jak Wings
  <br/>Copyleft ©2013 cyanidea.com, All Rights Reserved. 
  </p>
</div></pre>

CSS是http://chrome.360.cn/style/common.css……大数字的css……然后尾部加载http://chrome.360.cn/script/main.js。

