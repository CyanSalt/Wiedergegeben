/**
 * @fileoverview Blog configuration.
 * @author Jak Wings
 * @license The MIT License (MIT)
 * @preserve Copyright (c) 2013 Jak Wings
 */
'use strict';


define('blog.config', function () {
  /**
   * Configurations.
   * 让普通用户自行修改的博客配置。
   * @constant {Object.<string, *>}
   */
  return {
    /**
     * Author name or your nick name.
     * 博主名称。
     * @type {string}
     */
    author: 'Cyan',
    /**
     * Main title of your blog.
     * 博客主标题。
     * @type {string}
     */
    title: 'Absolute Zero',
    /**
     * Subtitle of your blog.
     * 博客副标题。
     * @type {string}
     */
    subtitle: 'Let life be beautiful like summer flowers and death like autumn leaves.',
    /**
     * Current timezone. Format (ABNF):
     *     ("+" / "-") 1*2DIGIT [":" 1*2DIGIT [":" 1*2DIGIT [":" 1*2DIGIT]]]
     * 当前时区。格式可以为形如 +08 或 +08:00 或 +08:00:00 ，
     * 分别代表相对于格林尼治标准时区的时分秒偏移量。
     * @type {string}
     */
    timezone: '+08:00',
    /**
     * License information.
     * 博客文章的版权信息。
     * @type {{text: string, url: string}}
     */
    license: {
      text: 'Creative Commons BY',
      url: 'http://creativecommons.org/licenses/by/3.0/deed'
    },
    /**
     * Bulletin on sidebar.
     * 博客公告栏信息。
     * @type {string}
     */
    bulletin: 'WordPress再见。膜拜笔笔……',
    /**
     * Links on side bar.
     * 博客相关链接。
     * @type {Array.<{{text: string, url: string}}>}
     */
    links: [
      {text: 'Example', url: 'http://www.example.com'},
    ],
    /**
     * Menu on sidebar.
     * 博客菜单栏链接。
     * @type {Array.<{{title: string, url: string, file: string=}}>}
     */
    menu: [
      {text: '首页', url: ''},
      {text: 'Wiedersehen Wiki', url: 'wiki', file: 'archives/wiki'},
    ],
    /**
     * Article links
     * 博客文章链接，由旧到新排序。为了 SEO ，改由 HTML 源代码指定。
     * @type {Array.<{{title: string, url: string, file: string=}}>}
     */
    articles: [],
    /**
     * Comment system Loader
     * 评论框载入函数。
     * @param {Object} window global object
     * @param {string} id indentifier
     * @param {string} url full url
     */
    loadComment: function (window, container, id, url) {
      // duoshuo.com
      var duoshuo_shortname = 'cyanidea';
      // DON'T EDIT BELOW THIS LINE
      if (!duoshuo_shortname) { return; }
      var document = window.document;
      if (!window.DUOSHUO) {
        window.duoshuoQuery = {short_name: duoshuo_shortname};
        container.className += ' ds-thread';
        container.setAttribute('data-thread-key', id);
        container.setAttribute('data-url', url);
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = 'http://static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
            || document.getElementsByTagName('body')[0]).appendChild(ds);
      } else {
        container.innerHTML = '';
        var clone = document.createElement('div');
        clone.id = 'ds-thread';
        clone.className = 'comments hide';
        clone.setAttribute('data-thread-key', id);
        clone.setAttribute('data-url', url);
        container.parentNode.replaceChild(clone, container);
        window.DUOSHUO.EmbedThread(clone);
      }

      //// disqus.com
      //window.disqus_shortname = '';
      //// DON'T EDIT BELOW THIS LINE
      //if (!window.disqus_shortname) { return; }
      //var document = window.document;
      //if (!window.DISQUS) {
      //  window.disqus_disable_mobile = false;
      //  window.disqus_identifier = id;
      //  window.disqus_url = url;
      //  container.id = 'disqus_thread';
      //  var dsq = document.createElement('script');
      //  dsq.type = 'text/javascript';
      //  dsq.async = true;
      //  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      //  (document.getElementsByTagName('head')[0] ||
      //      document.getElementsByTagName('body')[0]).appendChild(dsq);
      //} else {
      //  window.DISQUS.reset({
      //    reload: true,
      //    config: function () {
      //      this.page.identifier = id;
      //      this.page.url = url;
      //    }
      //  });
      //}
    },
  };
});
