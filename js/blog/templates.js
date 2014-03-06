/**
 * @fileoverview Blog template strings.
 * @author Jak Wings
 * @license The MIT License (MIT)
 * @preserve Copyright (c) 2013 Jak Wings
 */
'use strict';


define('blog.templates', function () {
  /**
   * Templates
   * @constant {Object.<string, string>}
   */
  return {
    listTitle: '<li class="title"><a href="{{url}}">{{title}}&nbsp;&nbsp;<span class="article-info">[{{date.slice(0,4)}}/{{date.slice(4,6)}}/{{date.slice(6,8)}}]</span></a><p>{{summary}}</p></li>',
    linkItem: '<li class="link-item"><a href="{{url}}" target="_blank">{{text}}</a></li>',
    menuItem: [
      '<li class="menu-item">',
        '<a href="{{url}}"><i class="icon-chevron-right"></i>{{text}}</a>',
      '</li>',
    ].join(''),
    page: [
      '<header>',
        '<h1 class="title">{{title}}</h1>',
      '</header>',
      '<article>{{{content}}}</article>',
    ].join(''),
    article: [
      '<header>',
        '<h1 class="title">{{title}}</h1>',
        '<div class="date muted">',
          '<div class="date-created">Created: {{created}}</div>',
          '<div class="date-modified">Modified: {{modified}}</div>',
        '</div>',
      '</header>',
      '<article>{{{content}}}</article>',
    ].join(''),
  };
});
