(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(107),i=a(119),o=a(104),c=a(105);var s=function(e){var t=e.nextItem,a=e.prevItem;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(o.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(o.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(o.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(113),d=a(116),v=a(120),u=a(102);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,o=t.metadata,c=o.title,p=o.description,g=o.nextItem,E=o.prevItem,b=o.editUrl,f=n.hide_table_of_contents;return l.a.createElement(r.a,{title:c,description:p,wrapperClassName:u.ThemeClassNames.wrapper.blogPages,pageClassName:u.ThemeClassNames.page.blogPostPage},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(m.a,{sidebar:a})),l.a.createElement("main",{className:"col col--7"},l.a.createElement(i.a,{frontMatter:n,metadata:o,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,b&&l.a.createElement(v.a,{editUrl:b})),(g||E)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(s,{nextItem:g,prevItem:E}))),!f&&t.toc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(d.a,{toc:t.toc})))))}},116:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(103);var i=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,o=!1,c=document.getElementsByClassName(e);l<c.length&&!o;){var s=c[l],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),s.classList.add(t),i(s),o=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},o=a(56),c=a.n(o),s="table-of-contents__link";function m(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return i(s,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(c.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:t}))}},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(0),l=a.n(n),r=a(104),i=a(3),o=a(7),c=a(103),s=a(61),m=a.n(s),d=function(e){var t=e.className,a=Object(o.a)(e,["className"]);return l.a.createElement("svg",Object(i.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(m.a.iconEdit,t),"aria-label":"Edit page"},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function v(e){var t=e.editUrl;return l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(d,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);