Wiedergegeben
===========

A modified version of Wiedersehen.

## Demo

http://cyanidea.com/#!/wiki

## Change Log

1-因为个人习惯我把i文件夹改名叫archives，o文件夹改名posts，相应的config和index也改掉了

2-custom.css，为了看上去比较舒服，#title加了margin-top: 70px，#subtitle加了margin-bottom: 50px，然后因为后面加了摘要，要突出标题于是#content .contents .title &gt; a改成了font-size: 1.2rem；#content article加了line-height: 1.5rem;

3-core.js，item那里改了title: li.getAttribute('data-title').trim(),，加了summary: li.textContent.trim(),，也就是加了摘要。相应的render的loadArticleTitles函数循环里加了summary: list[i].summary，templates.js的listTitle改成了listTitle: '&lt;li class="title"&gt;&lt;a href="{{url}}"&gt;{{title}}&lt;/a&gt;&lt;p style="padding-left:12px"&gt;{{summary}}&lt;/p&gt;&lt;/li&gt;',

4-index.html，标题和副标题的div加了style="text-align:center"，older和newer的&lt;a&gt;标签分别加了margin-left/right=-3px属性。

5-顶栏和底栏只是为了和我站里其他页面保持一致。

顶栏：
&lt;div class="head-warp"&gt;
  &lt;div class="head"&gt;
    &lt;h1 style="margin: 0px 0"&gt;&lt;a href="index.html"&gt;Cyanidea&lt;/a&gt;&lt;/h1&gt;
    &lt;div class="nav-box"&gt;
      &lt;ul&gt;
          &lt;li&gt;&lt;a href="/"&gt;首页&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="/p"&gt;项目&lt;/a&gt;&lt;/li&gt;
          &lt;li class="cur"&gt;&lt;a href="/blog2"&gt;博客&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#!/projects"&gt;鸣谢&lt;/a&gt;&lt;/li&gt;
          &lt;li class="last"&gt;&lt;a href="/blog"&gt;Wordpress博客&gt;&gt;&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
      &lt;div class="nav-line"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
（这个要在头部加载jquery）

底栏：
&lt;div class="footer"&gt;
  &lt;p&gt;Wiedersehen & Theme Milky created by Jak Wings
  &lt;br/&gt;Copyleft ©2013 cyanidea.com, All Rights Reserved. 
  &lt;/p&gt;
&lt;/div&gt;

CSS是http://chrome.360.cn/style/common.css ……大数字的css……然后尾部加载http://chrome.360.cn/script/main.js 。

