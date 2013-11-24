title: 帮助文档

---


## 简介

本博客使用的系统是由[Jak Wings](http://likelikeslike.com)完成的静态博客系统Wiedersehen。Wiedersehen是一款开源博客系统，源代码请戳[这里][Git]。原版的示例页面请见[这里][demo]，而[本博客使用的代码](https://github.com/CyanSalt/Wiedergegeben)部分细节已由我优化。

[Git]: https://github.com/jakwings/Wiedersehen/releases
[demo]: http://jakwings.github.io/Wiedersehen/#!/i/about

上面的示例页面同时提供了Wiedersehen的使用方法，为方便起见，我简单修改了Jak Wings书写的博客使用说明，以便大家能够迅速了解本博客的建造过程。相比于WordPress、Typecho等PHP动态博客系统，静态系统有其优势和劣势。

优点：

*   占用空间较少，速度很快，无需刷新网页即可在页面之间完成切换，且不需要依托MySQL数据库。几乎可以自定义任何页面。

缺点：

*   一般来说必须手动更新上传博客文件。文章订阅功能须另外设置，而且有点麻烦。对旧的浏览器兼容性一般，对于新手玩家修改博客主题比较困难，同时SEO优化较差。并且对于和我一样的新手，你需要简单学习一下[Markdown][]语言的基本用法。

[Markdown]: http://daringfireball.net/projects/markdown/dingus


## 安装

1\.  下载源代码

2\.  配置博客信息

  打开 `js/blog/config.js` ，然后按照指示修改相应内容并保存文件。不懂的请留言。

3\.  上传博客文件到空间

  本博客由于是基于MarkDown语言，因此无法在本地直接查看，必须上传到网站在浏览器中查看。上传的方式取决于你所使用的空间，这方面网络上有很多很详细的教程，这里不再赘述。本博客使用的是BAE空间。


## 上传更新文章

1\.  首先修改 `index.html` 文件，搜索「USER DATA」找到文章列表信息，然后按照相同的格式增删内容便可。

  `data-file` 为源文件路径，采用相对于博客所在路径的路径。

  `data-url` 为文章在网页中所使用的相对链接。

  标签里面的内容为标题（不同于md文件中的title，是显示在文章列表的文章名）。
  
  对于本修改版，`data-title` 为文章的标题，而标签里面的内容是文章的概述或摘要。

2\.  创建你在 `data-file` 属性指定的 Markdown 代码源文件，该源文件的内容由两部分组成。

  第一部分为由 [YAML][] 语言编写的配置信息，指定 title（标题）、created（创建日期）、modified（修改日期）三个属性。

  第二部分为文章的 Markdown 源代码。

  两部分之间由单独一行「---」分隔。

3\.  修改并创建了以上文件后，上传更新那些文件就 OK 了。

[YAML]: http://yaml.org


## 评论系统配置

在 `js/blog/config.js` 里面有两段被注释掉的代码，一段是用来载入多说评论框的，另一段是用来载入 Disqus 评论框的。只要把其中一段前面的 `//` 去掉，然后填写好 `duoshuo_shortname` 或 `disqus_shortname` 的值就可以了。

那两段代码是特制的，不要随便修改。

如果你之前使用过WordPress等博客系统，并希望移植评论到Wiedersehen，只需在<’your_shortname’.duoshuo.com>的设置界面中将**包含文章信息**的评论数据导出，然后修改文章信息部分的 `thread_key` 为你的文章的 `data-url` ，修改 `url` 为Wiedersehen主页的绝对地址，然后上传到新的多说托管网站即可。

注意：覆盖上传可能会引起未知错误，如果你希望不修改原有的多说域名，请备份原有数据后删除站点重建。


## 文章订阅配置

注：本站暂无feed，下面的教程由Jak Wings提供。

安装并浏览该博客之后，你可能会发现右侧的 Feed 订阅图片根本没有任何功能。那，你要么不去管它，把它换成别的更有意思的图片，或者，好好地折腾一下如何生成订阅链接，让访客关注你的更新动态。

你可以用 [FEED43][] 免费提供的 feed 定制服务来为你的博客生成订阅链接：

1\.  到 <http://feed43.com/feed.html?action=new> 开始创建。

  勾选「I agree to the Terms of Service」以同意 ToS 的内容，然后点击「Continue」按钮继续。

  ![图：开始页面。](http://jakwings.github.io/Wiedersehen/data/images/feed01.png)

2\.  在「Address」一栏填写 `index.html` 文件对应的完整 URL ，即指定了文章列表信息的提取来源，然后在「Encoding」一栏指定内容编码为「utf-8」。按「Reload」按钮继续。

  ![图：文章提取来源地址。](http://jakwings.github.io/Wiedersehen/data/images/feed02.png)

3\.  接着看新出现的「Step 2」下的文本框，在「Global Search Pattern」处填上 `<ul id="-article-list">{%}</ul>` ，在「Item (repeatable) Search Pattern」处填 `<li {*}data-url="{%}"{*}>{%}</li>` 。按「Extract」按钮测试这两个用于提取文章列表信息的筛选命令是否有用。

  **注：使用本博客修改版请在「Item」处填写`<li {*}data-url="{%}"{*}data-title="{%}"{*}>{%}</li>`**

  ![图：提取指令。](http://jakwings.github.io/Wiedersehen/data/images/feed03.png)

  ![图：提取出的信息。](http://jakwings.github.io/Wiedersehen/data/images/feed04.png)

4\.  然后进行 feed 内容输出格式的指定。

  「Feed Title」改为你的网站名称，「Feed Link」改为你的网站首页 URL ，「Feed Description」填写网站简介信息。

  ![图：输出格式部分一。](http://jakwings.github.io/Wiedersehen/data/images/feed05.png)

  「Item Title Template」处填 `{%2}` ，「Item Link Template」处填法类似 `http://example.com/#!/{%1}` ，「Item Content Template」处由于我们无法获取文章详细内容，故填写「打开页面以继续阅读……」之类的提示就好了。
  
  **注：使用本博客修改版可以在「Item」处填写`{%3}`**

  ![图：输出格式部分二。](http://jakwings.github.io/Wiedersehen/data/images/feed06.png)

  点击「Preview」按钮进行效果预览，效果还不错吧？

  ![图：输出内容预览。](http://jakwings.github.io/Wiedersehen/data/images/feed07.png)

5\.  预览后生成的 Feed URL 就是我们所要提供给访客的订阅链接了！接着修改 `index.html` 中的「feed.xml」为该链接便 OK 了。

  ![图：生成的订阅链接。](http://jakwings.github.io/Wiedersehen/data/images/feed08.png)

6\.  假如对那一串数字不满意，还可以对其进行自定义，修改链接为你喜欢的样子。

  点击页面下方的「Change file name」以进行修改，不过限定了只能使用 `a-z` 和 `0-9` 之间的字符，改好后点击「Rename」就行。

  ![图：修改订阅链接的名称。](http://jakwings.github.io/Wiedersehen/data/images/feed09.png)

7\.  最后需要注意：FEED43 还提供了一条修改 feed 配置的链接，即是说假如你以后换域名了，还可以继续修改并使用那个 feed 订阅链接。

  另外还要注意：该 feed 配置页面的链接没有加密，任何人都可以进行操作，你还应该为其加上密码保护！

  继续点击页面下方的「Protect feed from being edited」，分别填上密码（Password）和用于找回密码的邮箱地址（E-mail），点击「Set」确定。从此进入 feed 配置页面就要输入密码了。

  ![图：为订阅链接的配置页面添加密码保护。](http://jakwings.github.io/Wiedersehen/data/images/feed10.png)

OK ，订阅链接生成教程就此完毕。

[FEED43]: http://feed43.com


## 自行修改系统

如果只是想汉化一下界面，直接在文件中搜索相关词语就可以尝试修改了。

该博客系统仅由以下核心文件组成：

*   `index.html`
*   `js/lib/minified.js`
*   `js/blog/*.js`
*   `js/app.js`

其余文件皆为辅助用途。推荐用 [Minified][] 这个 JS 库来编写主题，因为默认主题的代码就是基于它的，这个 JS 库十分小巧易用。另外不用担心是否一定要熟悉 Minified 的使用，因为基本上只有 `js/blog/render.js` 这个文件是使用到它的。

至于更详细的说明，源代码中有Jak的详细注释。这里我列举了一些常见的修改方法：

1\. 修改样式

  本博客的样式使用的是[bootstrap](http://v3.bootcss.com/)，不建议直接修改bootstrap.css，自定义的地方主要在   `css/custom.css` ，如果你熟悉css的编写，修改应该很方便。

  除此之外，你也可以为 `index.html` 、 `js/templates.js` 等出现HTML标签的位置添加标签属性`style=”/*你想要的css样式*/”` 。

2\. 修改页面内容

  多数页面内容可以通过直接编辑 `index.html` 和 `js/config.js` 完成，少数部分需要通过修改模板实现。

3\. 修改模板

  模板的位置是在 `js/templates.js` 。其中：

  `listTitle` 是显示在文章列表的内容， `page` 和 `article` 是文章页面的内容。

  `{{url}}` 和 `{{title}}` 对应的是 `js/core.js` 中 `Blog()` 里面声明的 `item` 的属性。本博客修改了 `title` 属性并添加了 `summary` 属性。如果添加新属性，请在 `js/render.js` 的 `loadArticleTitles(opt_pageNum, opt_itemNum)` 函数的循环中增加相应操作。

  `article` 中的 `{{created}}` 和 `{{modified}}` 对应的是md文件中的yaml配置。如需添加新配置，请为所有的md文件增加相同的配置，然后在 `js/render.js` 的 `loadPageContent(text)` 函数中增加读取操作。


[Minified]: http://minifiedjs.com


## 其他

如有更多问题，请在下方留言，或直接联系原作者。
