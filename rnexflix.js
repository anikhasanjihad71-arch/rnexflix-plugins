From: <Saved by Blink>
Snapshot-Content-Location: https://cdn.jsdelivr.net/gh/blogger-templates/Plugins@main/helperabefilx.min.js
Subject: 
Date: Mon, 15 Jun 2026 13:53:21 +0600
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--pNkmEE7gAxWLUoiDj9yTteEpZMrC5Jd0L8nuZUDBx6----"


------MultipartBoundary--pNkmEE7gAxWLUoiDj9yTteEpZMrC5Jd0L8nuZUDBx6----
Content-Type: text/html
Content-ID: <frame-4F635C0B718DEA08295DF76B3C73C613@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: https://cdn.jsdelivr.net/gh/blogger-templates/Plugins@main/helperabefilx.min.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-b0ab6b=
ca-4f23-4a0e-8d87-70ae983a5c78@mhtml.blink" /><meta name=3D"color-scheme" c=
ontent=3D"light dark"></head><body><pre style=3D"word-wrap: break-word; whi=
te-space: pre-wrap;">(()=3D&gt;{function e(){if($("body").find(".item-post"=
).length){var e=3D$("#post-page-sidebar .widget");e.length&amp;&amp;e.appen=
dTo("#post-page-sidebar-content")}}function t(){let e=3Ddocument.getElement=
ById("mobile-search-modal");if(!e)return;let t=3Ddocument.querySelectorAll(=
".mobile-search-input, .mobile-search-button"),a=3Ddocument.getElementById(=
"ms-back-btn"),i=3Ddocument.getElementById("ms-input"),n=3Ddocument.getElem=
entById("ms-form"),s=3Ddocument.getElementById("ms-default-view"),l=3Ddocum=
ent.getElementById("ms-results-view"),r=3Ddocument.getElementById("ms-histo=
ry-container"),o=3Ddocument.getElementById("ms-popular-container"),d=3D"abe=
filmSearchHistory",c,_=3D()=3D&gt;{e.classList.add("active"),document.body.=
classList.add("ms-modal-open"),i.focus(),y()},p=3D()=3D&gt;{e.classList.rem=
ove("active"),document.body.classList.remove("ms-modal-open"),i.value=3D"",=
b()},m=3D()=3D&gt;JSON.parse(localStorage.getItem(d)||"[]"),u=3De=3D&gt;{if=
(!e||!e.trim())return;let t=3Dm().filter(t=3D&gt;t.toLowerCase()!=3D=3De.to=
LowerCase());t.unshift(e),t.length&gt;3&amp;&amp;t.pop(),localStorage.setIt=
em(d,JSON.stringify(t))},g=3De=3D&gt;{let t=3Dm().filter(t=3D&gt;t.toLowerC=
ase()!=3D=3De.toLowerCase());localStorage.setItem(d,JSON.stringify(t)),v()}=
,h=3D()=3D&gt;{localStorage.removeItem(d),v()},v=3D()=3D&gt;{let e=3Dm();if=
(0=3D=3D=3De.length){r.innerHTML=3D"";return}let t=3D'\n            &lt;div=
 class=3D"ms-section-title ms-history-header"&gt;\n                &lt;span=
&gt;Search History&lt;/span&gt;\n                &lt;button class=3D"clear-=
btn"&gt;Clear All&lt;/button&gt;\n            &lt;/div&gt;\n            &lt=
;ul&gt;';e.forEach(e=3D&gt;{t+=3D'\n                &lt;li&gt;\n           =
         &lt;a href=3D"/search?q=3D'+encodeURIComponent(e)+'"&gt;'+e+'&lt;/=
a&gt;\n                    &lt;button class=3D"delete-item-btn" data-term=
=3D"'+e+'"&gt;&amp;times;&lt;/button&gt;\n                &lt;/li&gt;'}),t+=
=3D"&lt;/ul&gt;",r.innerHTML=3Dt},f=3D()=3D&gt;{o.innerHTML=3D'\n        &l=
t;div class=3D"ms-section-title ms-popular-header"&gt;\n            &lt;spa=
n&gt;\uD83D\uDD25 Latest Posts&lt;/span&gt;\n        &lt;/div&gt;\n        =
&lt;div class=3D"ms-loader"&gt;Loading...&lt;/div&gt;',fetch("/feeds/posts/=
default?alt=3Djson&amp;max-results=3D8&amp;orderby=3Dpublished").then(e=3D&=
gt;e.json()).then(e=3D&gt;{if(!e.feed||!e.feed.entry||0=3D=3D=3De.feed.entr=
y.length){o.innerHTML=3D"";return}let t=3D'\n                &lt;div class=
=3D"ms-section-title ms-popular-header"&gt;\n                    &lt;span&g=
t;\uD83D\uDD25 Latest Posts&lt;/span&gt;\n                &lt;/div&gt;\n   =
             &lt;ul&gt;';e.feed.entry.forEach((e,a)=3D&gt;{t+=3D'\n        =
            &lt;li&gt;\n                        &lt;span class=3D"rank-numb=
er '+(a&lt;3?"top-3":"")+'"&gt;'+(a+1)+'&lt;/span&gt;\n                    =
    &lt;a href=3D"'+e.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel).href+'"&=
gt;'+e.title.$t+"&lt;/a&gt;\n                    &lt;/li&gt;"}),t+=3D"&lt;/=
ul&gt;",o.innerHTML=3Dt}).catch(e=3D&gt;{console.error("Error fetching popu=
lar posts:",e),o.innerHTML=3D""})},y=3D()=3D&gt;{v(),f()},b=3D()=3D&gt;{s.s=
tyle.display=3D"block",l.style.display=3D"none"};window.renderDefaultView=
=3Dy;let w=3D()=3D&gt;{s.style.display=3D"none",l.style.display=3D"block"},=
k=3De=3D&gt;{w(),l.innerHTML=3D'&lt;div class=3D"ms-loader"&gt;Searching...=
&lt;/div&gt;',fetch("/feeds/posts/default?alt=3Djson&amp;q=3D"+encodeURICom=
ponent(e)+"&amp;max-results=3D10").then(e=3D&gt;e.json()).then(e=3D&gt;{if(=
!e.feed||!e.feed.entry||0=3D=3D=3De.feed.entry.length){l.innerHTML=3D'&lt;d=
iv class=3D"ms-no-results"&gt;No results found.&lt;/div&gt;';return}Promise=
.all(e.feed.entry.map(e=3D&gt;{let t=3De.link.find(e=3D&gt;"alternate"=3D=
=3D=3De.rel).href;return fetch(t).then(e=3D&gt;e.text()).then(a=3D&gt;{let =
i=3Dnew DOMParser().parseFromString(a,"text/html"),n=3Di.querySelector('img=
[alt=3D"poster"]')?.src||"https://resources.blogblog.com/img/blank.gif",s=
=3Di.querySelector("#extra-meta .meta-year")?.textContent.trim()||"",l=3Di.=
querySelector("#extra-meta .meta-type")?.textContent.trim()||"";return{titl=
e:e.title.$t,url:t,imageUrl:n,year:s,type:l}}).catch(()=3D&gt;null)})).then=
(e=3D&gt;{let t=3De.filter(Boolean);if(0=3D=3D=3Dt.length){l.innerHTML=3D'&=
lt;div class=3D"ms-no-results"&gt;No results found.&lt;/div&gt;';return}let=
 a=3D"&lt;ul&gt;";t.forEach(e=3D&gt;{a+=3D'\n                            &l=
t;li&gt;\n                                &lt;a href=3D"'+e.url+'"&gt;\n   =
                                 &lt;img class=3D"result-thumb" src=3D"'+e.=
imageUrl+'" alt=3D"'+e.title+'" loading=3D"lazy"/&gt;\n                    =
                &lt;div class=3D"result-info"&gt;\n                        =
                &lt;h3 class=3D"title"&gt;'+e.title+'&lt;/h3&gt;\n         =
                               &lt;p class=3D"meta"&gt;'+e.year+(e.year&amp=
;&amp;e.type?" \xb7 ":"")+e.type+"&lt;/p&gt;\n                             =
       &lt;/div&gt;\n                                &lt;/a&gt;\n          =
                  &lt;/li&gt;"}),a+=3D"&lt;/ul&gt;",l.innerHTML=3Da,l.addEv=
entListener("click",e=3D&gt;{let t=3De.target.closest("a");t&amp;&amp;(e.pr=
eventDefault(),u(i.value.trim()),window.location.href=3Dt.href)})})}).catch=
(e=3D&gt;{l.innerHTML=3D'&lt;div class=3D"ms-no-results"&gt;An error occurr=
ed.&lt;/div&gt;'})};t.forEach(e=3D&gt;{e.addEventListener("click",e=3D&gt;{=
e.preventDefault(),_()}),e.addEventListener("focus",e=3D&gt;{e.preventDefau=
lt(),e.target.blur(),_()})}),a.addEventListener("click",p),i.addEventListen=
er("input",()=3D&gt;{clearTimeout(c);let e=3Di.value.trim();e.length&gt;1?c=
=3DsetTimeout(()=3D&gt;{k(e)},300):b()}),n.addEventListener("submit",e=3D&g=
t;{e.preventDefault();let t=3Di.value.trim();t&amp;&amp;(u(t),window.locati=
on.href=3D"/search?q=3D"+encodeURIComponent(t))}),r.addEventListener("click=
",e=3D&gt;{e.target.classList.contains("delete-item-btn")&amp;&amp;g(e.targ=
et.dataset.term),e.target.classList.contains("clear-btn")&amp;&amp;h()});le=
t C=3Ddocument.getElementById("bottom-nav-search-trigger");C&amp;&amp;C.add=
EventListener("click",e=3D&gt;{e.preventDefault(),_()})}function a(){docume=
nt.querySelectorAll(".comment-content:not(.tags-transformed)").forEach(e=3D=
&gt;{let t=3De.innerHTML;t.includes("[QA]")&amp;&amp;(t=3Dt.replace(/\[QA\]=
(.*?)\[OPT\](.*?)\[\/QA\]/g,(t,a,i)=3D&gt;{let n=3De.closest(".comment"),s=
=3D"Join the discussion...",l=3D"";if(n){l=3D"qa-source-"+n.id,n.setAttribu=
te("data-qa-id",l);let r=3Dn.querySelector(".comment-replies");if(r){let o=
=3Dr.querySelectorAll("li.comment").length;if(o&gt;0){let d=3Do;o&gt;=3D1e3=
&amp;&amp;(d=3D(o/1e3).toFixed(1).replace(/\.0$/,"")+"K"),s=3Dd+" replies a=
nd discussion"}}}let c=3Di.split("[OPT]").map(e=3D&gt;'&lt;span class=3D"qa=
-option"&gt;'+e.trim()+"&lt;/span&gt;").join("");return'&lt;div class=3D"qa=
-card" data-qa-id=3D"'+l+'"&gt;\n                  &lt;div class=3D"qa-titl=
e"&gt;&lt;span class=3D"qa-icon"&gt;#&lt;/span&gt;'+a.trim()+'&lt;/div&gt;\=
n                  &lt;div class=3D"qa-options"&gt;'+c+'&lt;/div&gt;\n     =
             &lt;a class=3D"qa-footer" href=3D"javascript:void(0)"&gt;&lt;s=
vg class=3D"qa-stats-icon" viewBox=3D"0 0 24 24" fill=3D"currentColor" xmln=
s=3D"http://www.w3.org/2000/svg"&gt;&lt;g&gt;&lt;rect x=3D"4" y=3D"10" widt=
h=3D"4" height=3D"10" rx=3D"1"&gt;&lt;/rect&gt;&lt;rect x=3D"10" y=3D"4" wi=
dth=3D"4" height=3D"16" rx=3D"1"&gt;&lt;/rect&gt;&lt;rect x=3D"16" y=3D"6" =
width=3D"4" height=3D"14" rx=3D"1"&gt;&lt;/rect&gt;&lt;/g&gt;&lt;/svg&gt;&l=
t;span&gt;'+s+'&lt;/span&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" wi=
dth=3D"12" height=3D"12" fill=3D"currentColor" viewBox=3D"0 0 16 16" style=
=3D"margin-left: 4px; font-weight: bold;"&gt;&lt;path fill-rule=3D"evenodd"=
 d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-=
.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&lt;/svg&gt;&lt;/a&g=
t;\n                &lt;/div&gt;'}));let a=3D(e,t)=3D&gt;{let a=3Dt.replace=
(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;amp;/g,"&amp=
;"),i=3D(a=3Da.replace(/&lt;br\s*\/?&gt;/gi,"\n")).replace(/&lt;/g,"&amp;lt=
;").replace(/&gt;/g,"&amp;gt;"),n=3D"copied-msg-"+Math.random().toString(36=
).substr(2,9);return'&lt;div class=3D"comment-code-wrapper"&gt;\n          =
  &lt;pre&gt;&lt;code class=3D"hljs"&gt;'+i+'&lt;/code&gt;&lt;/pre&gt;\n   =
         &lt;button class=3D"copy-code-btn" title=3D"Copy code" onclick=3D"=
navigator.clipboard.writeText(this.previousElementSibling.querySelector(\'c=
ode\').textContent).then(() =3D&gt; { const msg =3D document.getElementById=
(\''+n+'\'); msg.classList.add(\'show\'); setTimeout(() =3D&gt; msg.classLi=
st.remove(\'show\'), 2000); });"&gt;\n              &lt;svg xmlns=3D"http:/=
/www.w3.org/2000/svg" viewBox=3D"0 0 24 24" fill=3D"none"&gt;&lt;path d=3D"=
M16.9637 8.98209C16.9613 6.03194 16.9167 4.50384 16.0578 3.45753C14.4008 1.=
99854 12.7609 1.99854 9.48087 1.99854C6.20089 1.99854 4.5609 1.99854 3.4570=
8 2.90436C1.99799 4.56128 1.99799 6.20116 1.99799 9.48091C1.99799 12.7607 1=
.99799 14.4005 2.90387 15.5043C4.50346 16.9162 6.03167 16.9608 8.98201 16.9=
632" stroke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round" =
stroke-linejoin=3D"round"&gt;&lt;/path&gt;&lt;path d=3D"M14.0283 9.02455L16=
.994 8.98193M14.0143 22.0013L16.9799 21.9586M21.9716 14.0221L21.9436 16.981=
8M9.01033 14.0357L8.98236 16.9953M11.4873 9.02455C10.6545 9.17371 9.31781 9=
.32713 9.01033 11.0488M19.4946 21.9586C20.3296 21.8223 21.6685 21.6894 22.0=
025 19.9726M19.4946 9.02455C20.3274 9.17371 21.6641 9.32713 21.9716 11.0488=
M11.5 21.9573C10.6672 21.8086 9.33039 21.6559 9.02197 19.9344" stroke=3D"cu=
rrentColor" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=
=3D"round"&gt;&lt;/path&gt;&lt;/svg&gt;\n            &lt;/button&gt;\n     =
       &lt;span class=3D"code-copied-msg" id=3D"'+n+'"&gt;Copied!&lt;/span&=
gt;\n          &lt;/div&gt;'};t=3D(t=3D(t=3D(t=3Dt.replace(/\[pre\]([\s\S]*=
?)\[\/pre\]/g,a)).replace(/\[code\]([\s\S]*?)\[\/code\]/g,'&lt;code class=
=3D"comment-inline-code hljs"&gt;$1&lt;/code&gt;')).replace(/\[quote\]([\s\=
S]*?)\[\/quote\]/g,"&lt;blockquote&gt;$1&lt;/blockquote&gt;")).replace(/\[t=
ag\]([\s\S]*?)\[\/tag\]/g,'&lt;b class=3D"comment-tag"&gt;@$1&lt;/b&gt;'),e=
.innerHTML=3Dt,e.classList.add("tags-transformed"),"undefined"!=3Dtypeof hl=
js&amp;&amp;e.querySelectorAll("pre code.hljs").forEach(e=3D&gt;{hljs.highl=
ightElement(e),"function"=3D=3Dtypeof hljs.lineNumbersBlock&amp;&amp;hljs.l=
ineNumbersBlock(e)})})}function i(){if(!document.querySelector(".account-pa=
ge-container"))return;let e=3D(JSON.parse(localStorage.getItem("abefilmUser=
Watchlist"))||[]).length,t=3D(JSON.parse(localStorage.getItem("watchHistory=
IDs"))||[]).length,a=3D(JSON.parse(localStorage.getItem("abefilm_favorites"=
))||[]).length,i=3Ddocument.querySelector('a[href=3D"/p/watchlist.html"] .i=
tem-value'),n=3Ddocument.querySelector('a[href=3D"/p/history.html"] .item-v=
alue'),s=3Ddocument.querySelector('a[href=3D"/p/favorite.html"] .item-value=
');i&amp;&amp;(e&gt;0?(i.textContent=3De,i.classList.add("is-badge")):(i.te=
xtContent=3D"View",i.classList.remove("is-badge"))),n&amp;&amp;(n.textConte=
nt=3Dt&gt;0?t:"View"),s&amp;&amp;(s.textContent=3Da&gt;0?a:"View")}document=
.body.classList.add("no-transition"),"collapsed"=3D=3D=3DlocalStorage.getIt=
em("sidebarState")&amp;&amp;document.body.classList.add("sidebar-collapsed"=
),window.removeFromHistory=3Dfunction(e){if(!e)return;let t=3DJSON.parse(lo=
calStorage.getItem("watchHistoryIDs")||"[]");t=3Dt.filter(t=3D&gt;String(t)=
!=3D=3DString(e)),localStorage.setItem("watchHistoryIDs",JSON.stringify(t))=
;let a=3Ddocument.getElementById("history-item-"+e);a&amp;&amp;a.remove();l=
et i=3Ddocument.getElementById("history-items-list");i&amp;&amp;0=3D=3D=3Di=
.children.length&amp;&amp;(document.getElementById("history-empty-message")=
.style.display=3D"block"),"function"=3D=3Dtypeof window.updateHistoryBadge&=
amp;&amp;window.updateHistoryBadge()},document.addEventListener("DOMContent=
Loaded",function(){let e=3Ddocument.getElementById("comments");e&amp;&amp;e=
.addEventListener("click",function(e){let t=3De.target.closest(".qa-footer"=
);if(t){e.preventDefault();let a=3Dt.closest(".qa-card");if(a){let i=3Ddocu=
ment.querySelector('.comment[data-qa-id=3D"'+a.dataset.qaId+'"]');if(i){let=
 n=3Di.querySelector(".comment-actions a.comment-reply");n&amp;&amp;n.click=
()}}}});let t=3Ddocument.body,a=3Ddocument.getElementById("sidebarToggle");=
setTimeout(()=3D&gt;{t.classList.remove("no-transition")},100),a&amp;&amp;a=
.addEventListener("click",()=3D&gt;{t.classList.toggle("sidebar-collapsed")=
,localStorage.setItem("sidebarState",t.classList.contains("sidebar-collapse=
d")?"collapsed":"expanded"),setTimeout(function(){$("#dynamic-main-slider, =
#PopularPosts1 .owl-carousel").trigger("refresh.owl.carousel")},350)});let =
i=3Dwindow.location.pathname,n=3Ddocument.querySelectorAll(".sidebar-nav a"=
),s=3Dnull,l=3D-1;n.forEach(e=3D&gt;{let t=3De.getAttribute("href");if(!t||=
!t.startsWith("#"))try{let a=3Dnew URL(e.href).pathname;"/"=3D=3D=3Da&amp;&=
amp;"/"=3D=3D=3Di?(s=3De,l=3D1):"/"!=3D=3Da&amp;&amp;i.startsWith(a)&amp;&a=
mp;a.length&gt;l&amp;&amp;(l=3Da.length,s=3De)}catch{}}),s&amp;&amp;(n.forE=
ach(e=3D&gt;e.parentElement.classList.remove("active")),s.parentElement.cla=
ssList.add("active"));let r=3Ddocument.querySelector('a[href=3D"#clear-cach=
e"]');if(r&amp;&amp;r.addEventListener("click",function(e){e.preventDefault=
(),confirm("This will clear cached data. Continue?")&amp;&amp;(localStorage=
.clear(),sessionStorage.clear(),alert("Cache cleared. The page will now rel=
oad."),window.location.reload(!0))}),document.body.classList.contains("fina=
l-layout-script-loaded"))return;document.body.classList.add("final-layout-s=
cript-loaded");let o=3Ddocument.querySelector(".post-page-final-container")=
;if(o){try{var d;let c=3Dfunction(e){if(!e)return;let t=3DJSON.parse(localS=
torage.getItem("watchHistoryIDs")||"[]");(t=3Dt.filter(t=3D&gt;String(t)!=
=3D=3DString(e))).unshift(e),t.length&gt;50&amp;&amp;t.pop(),localStorage.s=
etItem("watchHistoryIDs",JSON.stringify(t))},_=3Dfunction(e){let t=3DD[G=3D=
e]?.length||0,a=3DMath.ceil(t/50),i=3Do.querySelector(".episodes-pagination=
-final"),n=3Do.querySelector(".episodes-grid-container-final"),s=3Do.queryS=
elector("#episodes-content").querySelector(".total-ep-header");if(s&amp;&am=
p;s.remove(),t&gt;0&amp;&amp;i.insertAdjacentHTML("beforebegin",'\n        =
            &lt;div class=3D"total-ep-header"&gt;\n                        =
&lt;p class=3D"total-ep-count"&gt;Total Episodes: '+t+'&lt;/p&gt;\n        =
                &lt;button class=3D"all-episodes-btn-mobile"&gt;\n         =
                   All Episodes\n                            &lt;svg xmlns=
=3D"http://www.w3.org/2000/svg" width=3D"16" height=3D"16" fill=3D"currentC=
olor" viewBox=3D"0 0 16 16"&gt;\n                              &lt;path fil=
l-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .70=
8l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;\n=
                            &lt;/svg&gt;\n                        &lt;/butt=
on&gt;\n                    &lt;/div&gt;\n                '),i.innerHTML=3D=
"",n.innerHTML=3D"",0=3D=3D=3Dt)return;i.innerHTML=3D(t&gt;50?'&lt;div clas=
s=3D"ep-range-tabs-container"&gt;&lt;/div&gt;':"")+'\n                &lt;d=
iv class=3D"ep-range-dropdown"&gt;\n                    &lt;button class=3D=
"ep-range-dropdown-toggle"&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" =
viewBox=3D"0 0 16 16" fill=3D"currentColor"&gt;&lt;path fill-rule=3D"evenod=
d" d=3D"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1=
.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rul=
e=3D"evenodd" /&gt;&lt;/svg&gt;&lt;/button&gt;\n                    &lt;div=
 class=3D"ep-range-dropdown-menu"&gt;&lt;/div&gt;\n                &lt;/div=
&gt;';for(let l=3D0;l&lt;a;l++){let r=3Ddocument.createElement("div");r.cla=
ssName=3D"episodes-grid-final",r.dataset.page=3Dl+1,n.appendChild(r);for(le=
t d=3D0;d&lt;50;d++){let c=3D50*l+d+1;if(c&gt;t)break;let _=3Ddocument.crea=
teElement("a");_.className=3D"ep-button",_.dataset.epIndex=3Dc-1,_.innerHTM=
L=3D'&lt;span class=3D"ep-number-text"&gt;'+c+'&lt;/span&gt;&lt;span class=
=3D"ep-active-indicator"&gt;&lt;svg viewBox=3D"0 0 24 24"&gt;&lt;rect class=
=3D"bar bar1" x=3D"4" y=3D"8" width=3D"4" height=3D"10" rx=3D"1"&gt;&lt;/re=
ct&gt;&lt;rect class=3D"bar bar2" x=3D"10" y=3D"4" width=3D"4" height=3D"16=
" rx=3D"1"&gt;&lt;/rect&gt;&lt;rect class=3D"bar bar3" x=3D"16" y=3D"10" wi=
dth=3D"4" height=3D"8" rx=3D"1"&gt;&lt;/rect&gt;&lt;/svg&gt;&lt;/span&gt;',=
r.appendChild(_)}}N&gt;=3Dt&amp;&amp;(N=3D0);let p=3Ddocument.getElementByI=
d("all-episodes-modal-overlay"),u=3Ddocument.getElementById("all-episodes-m=
odal-grid"),g=3Dp.querySelector(".episodes-modal-close-btn"),h=3D()=3D&gt;{=
u.innerHTML=3D"",o.querySelectorAll(".episodes-grid-final .ep-button").forE=
ach(e=3D&gt;{let t=3De.cloneNode(!0);u.appendChild(t)}),p.classList.add("is=
-visible"),document.body.style.overflow=3D"hidden"},v=3D()=3D&gt;{p.classLi=
st.remove("is-visible"),document.body.style.overflow=3D""},f=3Do.querySelec=
tor(".all-episodes-btn-mobile");f&amp;&amp;(f.onclick=3Dh),g.onclick=3Dv,p.=
onclick=3De=3D&gt;{e.target=3D=3D=3Dp&amp;&amp;v()},u.onclick=3De=3D&gt;{le=
t t=3De.target.closest(".ep-button");if(t){e.preventDefault();let a=3Dparse=
Int(t.dataset.epIndex,10);m(a),v()}},m(N)},p=3Dfunction(){J.innerHTML=3D"",=
z.forEach(e=3D&gt;{let t=3Ddocument.createElement("button");t.className=3D"=
server-btn",t.dataset.server=3De;let a=3Dv.querySelector('ul[data-server-na=
me=3D"'+e+'"]'),i=3Da?a.dataset.serverLogo:null,n=3D"";n=3Di?'&lt;img src=
=3D"'+i+'" alt=3D"'+e+'" class=3D"server-logo-img"/&gt; &lt;span class=3D"s=
erver-name-text"&gt;'+e+"&lt;/span&gt;":'&lt;span class=3D"server-name-text=
"&gt;'+e+"&lt;/span&gt;",t.innerHTML=3Dn,e=3D=3D=3DG&amp;&amp;t.classList.a=
dd("active"),J.appendChild(t)})},m=3Dfunction(e){let t=3DD[G]?.length||0;if=
(e&lt;0||e&gt;=3Dt)return;N=3De;let a=3D{server:G,episode:N};localStorage.s=
etItem(R,JSON.stringify(a));let i=3Ddocument.getElementById("post-id");if(i=
){let n=3Di.getAttribute("data-post-id");if(n)try{let s=3DJSON.parse(localS=
torage.getItem("abefilmWatchProgress")||"{}");s["post-"+n]=3De,localStorage=
.setItem("abefilmWatchProgress",JSON.stringify(s))}catch(l){console.error("=
Could not save watch progress",l)}}V.src=3DD[G][e].href,ei.textContent=3De+=
1+" / "+t,document.querySelectorAll(".episodes-grid-container-final, #all-e=
pisodes-modal-grid").forEach(t=3D&gt;{let a=3Dt.querySelector(".ep-button.a=
ctive");a&amp;&amp;a.classList.remove("active");let i=3Dt.querySelector('.e=
p-button[data-ep-index=3D"'+e+'"]');i&amp;&amp;(i.classList.add("active"),t=
.classList.contains("episodes-grid-container-final")&amp;&amp;i.scrollIntoV=
iew({behavior:"smooth",block:"nearest",inline:"center"}))}),et.disabled=3D0=
=3D=3D=3De,ea.disabled=3De=3D=3D=3Dt-1;let r=3DMath.floor(e/50)+1,d=3Do.que=
rySelector(".episodes-pagination-final");if(d&amp;&amp;d.innerHTML){let c=
=3Dd.querySelector(".ep-range-tabs-container .ep-range-tab.active");c&amp;&=
amp;parseInt(c.dataset.page,10)=3D=3D=3Dr||(u(r),g(r))}},u=3Dfunction(e){le=
t t=3DD[G]?.length||0,a=3DMath.ceil(t/50),i=3Do.querySelector(".episodes-pa=
gination-final"),n=3Di.querySelector(".ep-range-tabs-container"),s=3Di.quer=
ySelector(".ep-range-dropdown-menu");n&amp;&amp;(n.innerHTML=3D""),s.innerH=
TML=3D"";let l=3D1;a&gt;3&amp;&amp;e&gt;3&amp;&amp;(l=3D3*Math.floor((e-1)/=
3)+1);for(let r=3D0;r&lt;a;r++){let d=3Dr+1,c=3D50*r+1,_=3DMath.min((r+1)*5=
0,t),p=3Dc+"-"+_,m=3Ddocument.createElement("a");if(m.className=3D"ep-range=
-tab",m.href=3D"#",m.dataset.page=3Dd,m.innerHTML=3D"&lt;span&gt;"+p+"&lt;/=
span&gt;",d=3D=3D=3De&amp;&amp;m.classList.add("active"),s.appendChild(m),n=
&amp;&amp;d&gt;=3Dl&amp;&amp;d&lt;l+3){let u=3Ddocument.createElement("butt=
on");u.className=3D"ep-range-tab",u.dataset.page=3Dd,u.innerHTML=3D"&lt;spa=
n&gt;"+p+"&lt;/span&gt;",d=3D=3D=3De&amp;&amp;u.classList.add("active"),n.a=
ppendChild(u)}}let g=3Di.querySelector(".ep-range-dropdown-toggle");g&amp;&=
amp;(g.style.display=3Da&gt;1?"flex":"none")},g=3Dfunction(e){o.querySelect=
orAll(".episodes-grid-final").forEach(t=3D&gt;{t.classList.toggle("active",=
t.dataset.page=3D=3De)})},h=3Ddocument.querySelector("#source-data-containe=
r");if(!h)throw Error("Source data container (#source-data-container) not f=
ound.");let v=3Dh.querySelector(".post-body");if(!v)throw Error("Source dat=
a element (.post-body) not found inside hidden container.");let f=3D()=3D&g=
t;h.querySelector(".entry-title")?.textContent.trim()||"",y=3De=3D&gt;v.que=
rySelector(e)?.textContent.trim()||"",b=3Dv.querySelector(d=3D'img[alt=3D"p=
oster"]')?.getAttribute("src")||"",w=3Dy("span.slider-backdrop"),k=3Dy("#ex=
tra-meta .meta-rating"),C=3Dy("#extra-meta .meta-year"),L=3Dy("#extra-meta =
.meta-pg"),x=3Dy("#extra-meta .meta-status"),E=3Dy("#extra-meta .meta-count=
ry"),S=3DArray.from(v.querySelectorAll("#extra-meta .meta-genre")).map(e=3D=
&gt;e.textContent.trim()),I=3Do.querySelector("#add-to-watchlist-btn");if(I=
){let M=3Dnew URL(window.location.href).pathname,B=3Df(),q=3Dwindow.locatio=
n.href,A=3Dw||b;I.setAttribute("data-post-id",M),I.setAttribute("data-post-=
title",B),I.setAttribute("data-post-url",q),I.setAttribute("data-post-image=
",A),$(document).trigger("abefilm:postDataReady",[{id:M,title:B,url:q,image=
:A}])}o.querySelectorAll(".details-header-final").forEach(e=3D&gt;{e.queryS=
elector(".poster-final img").src=3Db,e.querySelector(".title-final").textCo=
ntent=3Df();let t=3De.querySelector(".meta-line-final");k&amp;&amp;(t.inner=
HTML+=3D'&lt;span class=3D"rating"&gt;&lt;svg xmlns=3D"http://www.w3.org/20=
00/svg" viewBox=3D"0 0 24 24" width=3D"18" height=3D"18" fill=3D"none"&gt;\=
n    &lt;path d=3D"M15.0183 9.43335L15.5462 10.498C15.6182 10.6462 15.8102 =
10.7883 15.9722 10.8155L16.9291 10.9758C17.541 11.0787 17.685 11.5263 17.24=
4 11.9678L16.5001 12.7179C16.3741 12.8449 16.3051 13.0899 16.3441 13.2653L1=
6.5571 14.1938C16.7251 14.9288 16.3381 15.2131 15.6932 14.829L14.7963 14.29=
37C14.6343 14.1969 14.3674 14.1969 14.2024 14.2937L13.3055 14.829C12.6636 1=
5.2131 12.2736 14.9258 12.4416 14.1938L12.6546 13.2653C12.6935 13.0899 12.6=
246 12.8449 12.4986 12.7179L11.7547 11.9678C11.3167 11.5263 11.4577 11.0787=
 12.0696 10.9758L13.0265 10.8155C13.1855 10.7883 13.3775 10.6462 13.4495 10=
.498L13.9774 9.43335C14.2654 8.85568 14.7333 8.85568 15.0183 9.43335Z" stro=
ke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke-li=
nejoin=3D"round" /&gt;&lt;path d=3D"M8 17L8 20.5" stroke=3D"currentColor" s=
troke-width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=3D"round" /&gt=
;&lt;path d=3D"M8 3.5V7" stroke=3D"currentColor" stroke-width=3D"1.5" strok=
e-linecap=3D"round" stroke-linejoin=3D"round" /&gt;&lt;path d=3D"M22 8.8789=
5C21.9331 7.33687 21.7456 6.33298 21.2203 5.53884C20.9181 5.08196 20.5428 4=
.68459 20.1112 4.36468C18.9447 3.5 17.299 3.5 14.0078 3.5H9.99305C6.70178 3=
.5 5.05614 3.5 3.88962 4.36468C3.45805 4.68459 3.08267 5.08196 2.78047 5.53=
884C2.25526 6.33289 2.06776 7.33665 2.00083 8.87843C1.98938 9.14208 2.21648=
 9.34375 2.46531 9.34375C3.85109 9.34375 4.97449 10.533 4.97449 12C4.97449 =
13.467 3.85109 14.6562 2.46531 14.6562C2.21648 14.6562 1.98938 14.8579 2.00=
083 15.1216C2.06776 16.6634 2.25526 17.6671 2.78047 18.4612C3.08267 18.918 =
3.45805 19.3154 3.88962 19.6353C5.05614 20.5 6.70178 20.5 9.99306 20.5H14.0=
078C17.299 20.5 18.9447 20.5 20.1112 19.6353C20.5428 19.3154 20.9181 18.918=
 21.2203 18.4612C21.7456 17.667 21.9331 16.6631 22 15.1211V8.87895Z" stroke=
=3D"grey" stroke-width=3D"1.5" stroke-linejoin=3D"round" /&gt;\n&lt;/svg&gt=
; '+k+"&lt;/span&gt;"),C&amp;&amp;(t.innerHTML+=3D"&lt;span&gt;"+C+"&lt;/sp=
an&gt;"),E&amp;&amp;(t.innerHTML+=3D"&lt;span&gt;"+E+"&lt;/span&gt;"),L&amp=
;&amp;(t.innerHTML+=3D"&lt;span&gt;"+L+"&lt;/span&gt;");let a=3De.querySele=
ctor(".tags-line-final");if(S.forEach(e=3D&gt;a.innerHTML+=3D'&lt;span clas=
s=3D"tag"&gt;'+e+"&lt;/span&gt;"),x){let i=3De.querySelector(".meta-line-fi=
nal");i&amp;&amp;i.insertAdjacentHTML("afterend",'&lt;div style=3D"font-siz=
e:13px; color:#a7a7a7; margin-top:8px;"&gt;'+x+"&lt;/div&gt;")}}),o.querySe=
lector(".synopsis-final").textContent=3Dv.querySelector("#overview-data")?.=
textContent.trim()||"";let H=3Dv.querySelectorAll("#celebrity-data li");if(=
H.length&gt;0){let T=3Do.querySelector("#celebrity-section"),j=3Do.querySel=
ector(".celebrity-grid-final");T.style.display=3D"block",H.forEach(e=3D&gt;=
{let t=3De.querySelector("img")?.src||"",a=3De.querySelector("span")?.textC=
ontent||"";j.innerHTML+=3D'&lt;div class=3D"celebrity-item-final"&gt;&lt;im=
g src=3D"'+t+'" alt=3D"'+a+'"/&gt;&lt;span class=3D"name"&gt;'+a+"&lt;/span=
&gt;&lt;/div&gt;"})}let D=3D{},z=3D[];v.querySelectorAll("#episodes-data &g=
t; ul[data-server-name]").forEach(e=3D&gt;{let t=3De.dataset.serverName;t&a=
mp;&amp;e.querySelectorAll("a").length&gt;0&amp;&amp;(z.push(t),D[t]=3DArra=
y.from(e.querySelectorAll("a")))});let F=3DArray.from(v.querySelectorAll("#=
download-data a")),V=3Do.querySelector(".video-player-container-final ifram=
e"),P=3Do.querySelector(".video-player-container-final"),W=3Do.querySelecto=
r(".video-overlay");W&amp;&amp;w&amp;&amp;(W.style.backgroundImage=3D"url("=
+w+")"),W&amp;&amp;W.addEventListener("click",()=3D&gt;{let e=3Ddocument.ge=
tElementById("post-id");if(e){let t=3De.getAttribute("data-post-id");t&amp;=
&amp;c(t)}P.classList.add("is-playing");let a=3DV.getAttribute("src");if(a&=
amp;&amp;"about:blank"!=3D=3Da)try{let i=3Dnew URL(a);i.searchParams.set("a=
utoplay","1"),V.setAttribute("src",i.href)}catch{V.setAttribute("src",a+(a.=
includes("?")?"&amp;":"?")+"autoplay=3D1")}});let R=3D"watchState_"+window.=
location.pathname,N=3D0,G=3Dz[0]||null,U=3DlocalStorage.getItem(R);if(U)try=
{let O=3DJSON.parse(U);if(O&amp;&amp;z.includes(O.server)){let Z=3DD[O.serv=
er]?.length||0;O.episode&lt;Z&amp;&amp;(G=3DO.server,N=3DO.episode)}}catch(=
K){console.error("Could not parse saved watch state.",K)}let J=3Do.querySel=
ector(".server-selection-final"),Y=3Do.querySelector(".download-links-conta=
iner"),Q=3Do.querySelector("#reload-btn"),X=3Do.querySelector("#fullscreen-=
btn"),ee=3Do.querySelector("#sandbox-checkbox"),et=3Do.querySelector("#prev=
-ep-btn"),ea=3Do.querySelector("#next-ep-btn"),ei=3Do.querySelector("#ep-co=
unter"),en=3Do.querySelector("#season-info"),es=3Dz.length&gt;0&amp;&amp;D[=
z[0]]?.length&gt;0,el=3Dz.length&gt;1,er=3DF.length&gt;0;if(es||el||er){o.q=
uerySelector("#episodes-section").style.display=3D"block";let eo=3Do.queryS=
elector(".episodes-tabs-final"),ed=3Do.querySelectorAll(".ep-tab-content"),=
ec=3Dnull;if(eo.innerHTML=3D"",es&amp;&amp;(eo.innerHTML+=3D'&lt;button cla=
ss=3D"ep-tab-button" data-target=3D"#episodes-content"&gt;&lt;svg xmlns=3D"=
http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24" width=3D"16" height=3D"16=
" fill=3D"none"&gt;\n    &lt;path d=3D"M2 14C2 10.2288 2 8.34315 3.17157 7.=
17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.=
34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.=
7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 =
2 14Z" stroke-width=3D"1.5" stroke-linecap=3D"round"&gt;&lt;/path&gt;\n    =
&lt;path d=3D"M9 3L12 6L16 2" stroke-width=3D"1.5" stroke-linecap=3D"round"=
 stroke-linejoin=3D"round"&gt;&lt;/path&gt;\n&lt;/svg&gt;Episodes&lt;/butto=
n&gt;',ec||=3D"#episodes-content"),el&amp;&amp;(eo.innerHTML+=3D'&lt;button=
 class=3D"ep-tab-button" data-target=3D"#server-content"&gt;&lt;svg xmlns=
=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24" width=3D"16" height=
=3D"16" fill=3D"none"&gt;\n    &lt;path d=3D"M19 4H5C4.06812 4 3.60218 4 3.=
23463 4.15224C2.74458 4.35523 2.35523 4.74458 2.15224 5.23463C2 5.60218 2 6=
.06812 2 7C2 7.93188 2 8.39782 2.15224 8.76537C2.35523 9.25542 2.74458 9.64=
477 3.23463 9.84776C3.60218 10 4.06812 10 5 10H19C19.9319 10 20.3978 10 20.=
7654 9.84776C21.2554 9.64477 21.6448 9.25542 21.8478 8.76537C22 8.39782 22 =
7.93188 22 7C22 6.06812 22 5.60218 21.8478 5.23463C21.6448 4.74458 21.2554 =
4.35523 20.7654 4.15224C20.3978 4 19.9319 4 19 4Z" stroke-width=3D"1.5" str=
oke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;/path&gt;\n    &lt;p=
ath d=3D"M19 14H5C4.06812 14 3.60218 14 3.23463 14.1522C2.74458 14.3552 2.3=
5523 14.7446 2.15224 15.2346C2 15.6022 2 16.0681 2 17C2 17.9319 2 18.3978 2=
.15224 18.7654C2.35523 19.2554 2.74458 19.6448 3.23463 19.8478C3.60218 20 4=
.06812 20 5 20H19C19.9319 20 20.3978 20 20.7654 19.8478C21.2554 19.6448 21.=
6448 19.2554 21.8478 18.7654C22 18.3978 22 17.9319 22 17C22 16.0681 22 15.6=
022 21.8478 15.2346C21.6448 14.7446 21.2554 14.3552 20.7654 14.1522C20.3978=
 14 19.9319 14 19 14Z" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke=
-linejoin=3D"round"&gt;&lt;/path&gt;\n    &lt;path d=3D"M6 17H6.01" stroke-=
width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;/pa=
th&gt;\n    &lt;path d=3D"M10 17H10.01" stroke-width=3D"1.5" stroke-linecap=
=3D"round" stroke-linejoin=3D"round"&gt;&lt;/path&gt;\n    &lt;path d=3D"M6=
 7H6.01" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=3D"r=
ound"&gt;&lt;/path&gt;\n    &lt;path d=3D"M10 7H10.01" stroke-width=3D"1.5"=
 stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;/path&gt;\n&lt;/=
svg&gt;Server&lt;span class=3D"tab-count"&gt;'+z.length+"&lt;/span&gt;&lt;/=
button&gt;",ec||=3D"#server-content"),er&amp;&amp;(eo.innerHTML+=3D'&lt;but=
ton class=3D"ep-tab-button" data-target=3D"#download-content"&gt;&lt;svg xm=
lns=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24" width=3D"18" heigh=
t=3D"18" fill=3D"none"&gt;\n    &lt;path d=3D"M2.99969 17.0002C2.99969 17.9=
302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324=
 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.=
9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119=
 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002" stroke-wi=
dth=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;/path=
&gt;\n    &lt;path d=3D"M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11=
.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.00=
02V3.00016" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=
=3D"round"&gt;&lt;/path&gt;\n&lt;/svg&gt;Download&lt;/button&gt;',ec||=3D"#=
download-content"),ec&amp;&amp;(eo.querySelector('[data-target=3D"'+ec+'"]'=
).classList.add("active"),o.querySelector(ec).classList.add("active")),es?_=
(G):o.querySelector(".footer-group-middle").style.display=3D"none",el&amp;&=
amp;p(),er&amp;&amp;function(){Y.innerHTML=3D"";let e=3DF.length;if(0=3D=3D=
=3De)return;Y.innerHTML=3D'&lt;p class=3D"total-ep-count"&gt;Total Files: '=
+e+"&lt;/p&gt;";let t=3Ddocument.createElement("div");t.className=3D"downlo=
ad-grid-final",F.forEach(e=3D&gt;{let a=3Ddocument.createElement("a");a.hre=
f=3De.href,a.className=3D"ep-button",a.setAttribute("target","_blank"),a.te=
xtContent=3De.textContent,t.appendChild(a)}),Y.appendChild(t)}(),eo.addEven=
tListener("click",e=3D&gt;{let t=3De.target.closest(".ep-tab-button");if(t)=
{eo.querySelector(".active")?.classList.remove("active"),t.classList.add("a=
ctive"),ed.forEach(e=3D&gt;e.classList.remove("active"));let a=3Dt.dataset.=
target;o.querySelector(a).classList.add("active")}}),J.addEventListener("cl=
ick",e=3D&gt;{if(e.target.matches(".server-btn")){let t=3De.target.dataset.=
server;t!=3D=3DG&amp;&amp;(_(t),p())}}),es){let e_=3Dfunction(){let e=3Ddoc=
ument.querySelector(".ep-range-dropdown-menu.is-open-globally");e&amp;&amp;=
e.classList.remove("is-open-globally"),window.removeEventListener("scroll",=
e1),e0=3D!1},e1=3Dfunction(){e_()},ep=3Dfunction(e,t){let a=3De.getBounding=
ClientRect().bottom+8;t.style.top=3Da+"px",t.classList.add("is-open-globall=
y"),e0||(window.addEventListener("scroll",e1,{once:!0}),e0=3D!0)};o.querySe=
lector(".episodes-pagination-final");let e0=3D!1;document.body.addEventList=
ener("click",function(e){let t=3De.target.closest(".ep-range-dropdown-toggl=
e"),a=3De.target.closest(".ep-range-tab"),i=3Ddocument.querySelector(".ep-r=
ange-dropdown-menu.is-open-globally");if(t){e.preventDefault(),e.stopPropag=
ation();let n=3Dt.nextElementSibling;n&amp;&amp;n.classList.contains("is-op=
en-globally")?e_():n&amp;&amp;ep(t,n)}else if(a){e.preventDefault();let s=
=3DparseInt(a.dataset.page,10);e.target.closest(".ep-range-dropdown-menu")&=
amp;&amp;e_(),u(s),g(s)}else i&amp;&amp;!e.target.closest(".ep-range-dropdo=
wn")&amp;&amp;e_()}),o.querySelector(".episodes-grid-container-final").addE=
ventListener("click",e=3D&gt;{let t=3De.target.closest(".ep-button");t&amp;=
&amp;(e.preventDefault(),m(parseInt(t.dataset.epIndex,10)))}),et.addEventLi=
stener("click",()=3D&gt;m(N-1)),ea.addEventListener("click",()=3D&gt;m(N+1)=
)}let e$=3Do.querySelector("#comment-btn");e$&amp;&amp;e$.addEventListener(=
"click",()=3D&gt;{let e=3Ddocument.querySelector("#comments");e&amp;&amp;e.=
scrollIntoView({behavior:"smooth"})}),Q.addEventListener("click",()=3D&gt;{=
V.src=3DV.src}),X.addEventListener("click",()=3D&gt;{V.requestFullscreen&am=
p;&amp;V.requestFullscreen()}),ee.addEventListener("change",()=3D&gt;{ee.ch=
ecked?V.setAttribute("sandbox","allow-scripts allow-same-origin"):V.removeA=
ttribute("sandbox")});let em=3Dy("#extra-meta .meta-season");em&amp;&amp;(e=
n.textContent=3Dem),!es&amp;&amp;G&amp;&amp;(V.src=3DD[G][0].href)}else{let=
 eu=3Dv.querySelector("iframe");eu&amp;&amp;eu.src&amp;&amp;(V.src=3Deu.src=
),o.querySelector("#episodes-section").style.display=3D"none",o.querySelect=
or(".footer-group-middle").style.display=3D"none"}let eg=3Do.querySelector(=
".info-modal-final"),eh=3Do.querySelector(".introduction-link-final"),ev=3D=
eg.querySelector(".modal-close-btn");if(eh&amp;&amp;eg&amp;&amp;ev){let ef=
=3De=3D&gt;{e.preventDefault(),window.innerWidth&lt;=3D767?eg.classList.add=
("is-open-mobile"):eg.style.display=3D"block"},e4=3D()=3D&gt;{window.innerW=
idth&lt;=3D767?eg.classList.remove("is-open-mobile"):eg.style.display=3D"no=
ne"};eh.addEventListener("click",ef),ev.addEventListener("click",e4)}if(o.c=
lassList.add("loaded"),window.innerWidth&lt;=3D767){let e2=3Ddocument.query=
Selector(".player-column-final"),ey=3Ddocument.querySelector("article.item-=
post");e2&amp;&amp;ey&amp;&amp;ey.prepend(e2)}}catch(e3){if(console.error("=
Error initializing custom player layout:",e3),document.querySelector(".item=
-post")){let e5=3Ddocument.getElementById("source-data-container");e5&amp;&=
amp;(e5.style.display=3D"block")}o&amp;&amp;(o.style.display=3D"none")}try{=
var e6=3DdecodeURIComponent(window.location.pathname),e7=3Ddocument.querySe=
lectorAll(".mobile-nav a"),eb=3Dnull;e7.forEach(function(e){var t=3Dnew URL=
(e.href).pathname;("/"=3D=3D=3Dt&amp;&amp;"/"=3D=3D=3De6||"/"!=3D=3Dt&amp;&=
amp;e6.startsWith(t)&amp;&amp;(!eb||t.length&gt;new URL(eb.href).pathname.l=
ength))&amp;&amp;(eb=3De)}),eb?eb.classList.add("active"):"/"=3D=3D=3De6&am=
p;&amp;document.querySelector('.mobile-nav a[href=3D"/"]').classList.add("a=
ctive")}catch(ew){console.error("Error setting active mobile link:",ew)}}})=
,$(document).ready(function(){if($(document).on("click",".header-carousel-n=
av .header-nav-btn",function(){var e=3D$(this),t=3D$(e.data("target"));if(t=
.length){var a,i=3Dt.data("owl.carousel");if(!i)return;var n=3Dwindow.inner=
Width;a=3Dn&lt;768?3:n&lt;1024?4:6;var s=3Di.current();if(e.hasClass("prev"=
)){var l=3DMath.max(0,s-a);t.trigger("to.owl.carousel",[l,300])}else if(e.h=
asClass("next")){var l=3DMath.min(i.items().length-a,s+a);t.trigger("to.owl=
.carousel",[l,300])}}}),window.innerWidth&gt;1023&amp;&amp;$("body").hasCla=
ss("item-view")){let t=3Ddocument.body;new MutationObserver((e,t)=3D&gt;{le=
t a=3D$("#comments"),i=3D$(".recommendation-section"),n=3D$(".most-popular-=
sidebar"),s=3D$(".post-page-final-container");if(a.length&amp;&amp;i.length=
&amp;&amp;n.length&amp;&amp;s.length&amp;&amp;!s.hasClass("layout-processed=
")){t.disconnect(),s.addClass("layout-processed"),a.detach(),i.detach(),n.d=
etach();let l=3D$('&lt;div class=3D"post-footer-container"&gt;&lt;/div&gt;'=
),r=3D$('&lt;div class=3D"post-footer-main-content"&gt;&lt;/div&gt;');r.app=
end(a),r.append(i),l.append(r),l.append(n),s.after(l),$("#video-tab-content=
 .post-footer-container, #comment-tab-content .post-footer-container").remo=
ve()}}).observe(t,{childList:!0,subtree:!0})}function a(e){$(e+" .entry-ima=
ge[data-image]").each(function(){var e=3D$(this).attr("data-image");e&amp;&=
amp;e.includes("googleusercontent")&amp;&amp;$(this).attr("data-image",e.re=
place(/\/(s|w|h)\d+(-[a-z0-9]+)*\//,"/s720/"))})}function i(){var e=3D$(win=
dow).width()+200,t=3D$(window).height()+200;$(".entry-image[data-image]:not=
(.lazyloaded)").each(function(){var a=3D$(this),i=3Da[0].getBoundingClientR=
ect();i.width&gt;0&amp;&amp;i.height&gt;0&amp;&amp;i.top&lt;t&amp;&amp;i.bo=
ttom&gt;-200&amp;&amp;i.left&lt;e&amp;&amp;i.right&gt;-200&amp;&amp;a.css("=
background-image",'url("'+a.attr("data-image")+'")').addClass("lazyloaded")=
})}function n(e,t){e.closest(".widget").find(".widget-title .title").text()=
.trim();var a=3D$.extend({maxResults:12,label:null,style:"nowrap",sortBy:nu=
ll},t);let n=3D["Action","Action &amp; Adventure","Adventure","Animation","=
Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror"=
,"Kids","Music","Mystery","Reality","Romance","Sci-Fi &amp; Fantasy","Scien=
ce Fiction","Thriller","War","Western"];var s=3De.closest(".widget");if("_a=
uto_"=3D=3D=3Da.label&amp;&amp;!$("body").is(".item-view, .item-page")){s.h=
ide();return}if(!a.label&amp;&amp;null!=3D=3Da.label){e.html('&lt;span clas=
s=3D"error-msg"&gt;No category specified for this widget.&lt;/span&gt;');re=
turn}var l=3D"rating"=3D=3D=3Da.sortBy?50:a.maxResults,r=3D"/feeds/posts/de=
fault"+(a.label?"/-/"+encodeURIComponent(a.label):"")+"?alt=3Djson-in-scrip=
t&amp;max-results=3D"+l;$.ajax({url:r,dataType:"jsonp",success:function(t){=
var s,l=3Dt.feed&amp;&amp;t.feed.entry?t.feed.entry:[];if(0=3D=3D=3Dl.lengt=
h){e.html('&lt;span class=3D"error-msg"&gt;No posts found for this genre.&l=
t;/span&gt;');return}let r=3Dl.map(function(e){let t=3Ddocument.createEleme=
nt("div");t.innerHTML=3De.content.$t;let a=3D$(t);return{id:e.id.$t.split("=
.post-")[1],label:(e.category||[]).map(e=3D&gt;e.term).find(e=3D&gt;n.inclu=
des(e))||"",link:(e.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel)||{}).href,=
title:e.title.$t,imageUrl:(a.find('img[alt=3D"poster"]').attr("src")||"http=
s://resources.blogblog.com/img/blank.gif").replace(/\/s\d+(-[a-z0-9]+)*\//,=
"/s400-rw/").replace(/\/t\/p\/w\d+[^/]*\//,"/t/p/w780/"),rating:a.find("#ex=
tra-meta .meta-rating").text().trim(),type:a.find("#extra-meta .meta-type")=
.text().trim(),year:a.find("#extra-meta .meta-year").text().trim(),synopsis=
:a.find("#overview-data").text().trim(),genres:a.find("#extra-meta .meta-ge=
nre").map(function(){return $(this).text().trim()}).get(),subtitles:a.find(=
"#extra-meta .meta-subtitles").text().trim(),audio:a.find("#extra-meta .met=
a-audio").text().trim(),isMature:!!e.category&amp;&amp;e.category.some(e=3D=
&gt;"Mature"=3D=3D=3De.term)}}).filter(e=3D&gt;e.link);"rating"=3D=3D=3Da.s=
ortBy&amp;&amp;r.sort((e,t)=3D&gt;parseFloat(t.rating||0)-parseFloat(e.rati=
ng||0));var d=3D"";(r=3Dr.slice(0,a.maxResults)).forEach(function(e,t){var =
i=3Dt+1,n=3De.label?'&lt;span class=3D"entry-label"&gt;'+e.label+"&lt;/span=
&gt;":"";if("wide-list"=3D=3D=3Da.style){let s=3D"";1=3D=3D=3Di?s=3D"rank-g=
old":2=3D=3D=3Di?s=3D"rank-blue":3=3D=3D=3Di&amp;&amp;(s=3D"rank-green");va=
r l=3De.rating?'&lt;span class=3D"item-rating"&gt;&lt;svg class=3D"g-star" =
viewBox=3D"0 0 24 24"&gt;&lt;path d=3D"M12 17.27L18.18 21l-1.64-7.03L22 9.2=
4l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/&gt;&lt;/svg&gt;'+e.r=
ating+"&lt;/span&gt;":"";let r=3D"TV Series"=3D=3D=3De.type?"TV":e.type;var=
 o=3De.type?'&lt;span class=3D"type-tag '+e.type.toLowerCase().replace(/\s+=
/g,"-")+'"&gt;'+r+"&lt;/span&gt;":"",c=3De.year?'&lt;span class=3D"item-yea=
r"&gt;'+e.year+"&lt;/span&gt;":"",_=3De.genres.slice(0,2).map(e=3D&gt;'&lt;=
span class=3D"genre-tag"&gt;'+e+"&lt;/span&gt;").join("");d+=3D'&lt;a class=
=3D"wide-list-item" href=3D"'+e.link+'" title=3D"'+e.title+'"&gt;&lt;div cl=
ass=3D"item-thumb"&gt;&lt;img src=3D"'+e.imageUrl+'" alt=3D"'+e.title+'" lo=
ading=3D"lazy"/&gt;&lt;div class=3D"rank-badge '+s+'"&gt;'+i+'&lt;/div&gt;&=
lt;/div&gt;&lt;div class=3D"item-info"&gt;&lt;h4 class=3D"item-title"&gt;'+=
e.title+'&lt;/h4&gt;&lt;div class=3D"item-meta-group"&gt;'+c+l+o+'&lt;/div&=
gt;&lt;div class=3D"item-genres"&gt;'+_+'&lt;/div&gt;&lt;p class=3D"item-sy=
nopsis"&gt;'+(e.synopsis||"")+"&lt;/p&gt;&lt;/div&gt;&lt;/a&gt;"}else if("r=
anked-grid-alt"=3D=3D=3Da.style){var _=3De.genres.slice(0,3).map(e=3D&gt;'&=
lt;span class=3D"tag"&gt;'+e+"&lt;/span&gt;").join("");d+=3D'&lt;div class=
=3D"ranked-grid-alt-item"&gt;&lt;a class=3D"item-thumb" href=3D"'+e.link+'"=
 title=3D"'+e.title+'"&gt;&lt;img src=3D"'+e.imageUrl+'" alt=3D"'+e.title+'=
" loading=3D"lazy"/&gt;&lt;/a&gt;&lt;span class=3D"rank-number"&gt;'+i+'&lt=
;/span&gt;&lt;div class=3D"item-info"&gt;&lt;h4 class=3D"item-title"&gt;&lt=
;a href=3D"'+e.link+'"&gt;'+e.title+'&lt;/a&gt;&lt;/h4&gt;&lt;div class=3D"=
item-tags"&gt;'+_+"&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;"}else if("top-list"=
=3D=3D=3Da.style){var l=3De.rating?'&lt;span class=3D"item-rating"&gt;'+e.r=
ating+"&lt;/span&gt;":"",p=3De.subtitles?'&lt;span class=3D"item-cc"&gt;CC =
'+e.subtitles+"&lt;/span&gt;":"",m=3De.audio?'&lt;span class=3D"item-audio"=
&gt;&lt;svg viewBox=3D"0 0 24 24" width=3D"1em" height=3D"1em" fill=3D"curr=
entColor" style=3D"vertical-align: -2px; margin-right: 4px;"&gt;&lt;path d=
=3D"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.=
66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 =
6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"&gt;&lt;/path&gt;&lt;/svg&gt;=
'+e.audio+"&lt;/span&gt;":"",u=3De.type&amp;&amp;e.type.toLowerCase().repla=
ce(/\s+/g,"-")||"movie",o=3De.type?'&lt;span class=3D"type-tag '+u+'"&gt;'+=
e.type+"&lt;/span&gt;":"";d+=3D'&lt;div class=3D"top-list-item"&gt;&lt;div =
class=3D"rank-badge top-'+i+'"&gt;'+i+'&lt;/div&gt;&lt;div class=3D"item-in=
fo"&gt;&lt;h4 class=3D"item-title"&gt;&lt;a href=3D"'+e.link+'"&gt;'+e.titl=
e+'&lt;/a&gt;&lt;/h4&gt;&lt;div class=3D"item-footer"&gt;'+l+p+m+o+'&lt;/di=
v&gt;&lt;/div&gt;&lt;a class=3D"item-thumb" href=3D"'+e.link+'" title=3D"'+=
e.title+'"&gt;&lt;img src=3D"'+e.imageUrl+'" alt=3D"'+e.title+'" loading=3D=
"lazy"/&gt;&lt;/a&gt;&lt;/div&gt;'}else d+=3D'&lt;article class=3D"index-po=
st'+(e.isMature?" is-mature":"")+'" data-post-id=3D"'+e.id+'"&gt;&lt;a clas=
s=3D"entry-image-wrap" href=3D"'+e.link+'" title=3D"'+e.title+'"&gt;&lt;spa=
n class=3D"entry-image" data-image=3D"'+e.imageUrl+'"&gt;&lt;/span&gt;'+n+'=
&lt;div class=3D"thumb-meta-overlay"&gt;&lt;span class=3D"thumb-meta thumb-=
duration"&gt;&lt;/span&gt;&lt;span class=3D"thumb-meta thumb-rating"&gt;&lt=
;/span&gt;&lt;/div&gt;&lt;/a&gt;&lt;div class=3D"entry-header"&gt;&lt;h2 cl=
ass=3D"entry-title"&gt;&lt;a href=3D"'+e.link+'"&gt;'+e.title+'&lt;/a&gt;&l=
t;/h2&gt;&lt;div class=3D"card-sub-meta"&gt;&lt;div class=3D"sub-meta-left"=
&gt;&lt;span class=3D"sub-meta-type"&gt;&lt;/span&gt;&lt;span class=3D"sub-=
meta-year"&gt;&lt;/span&gt;&lt;/div&gt;&lt;div class=3D"sub-meta-right"&gt;=
&lt;span class=3D"sub-meta-cc"&gt;&lt;/span&gt;&lt;span class=3D"sub-meta-m=
ic"&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/article&gt;'})=
;var c=3D"abefilm-carousel-"+Math.random().toString(36).substring(2,9);s=3D=
"nowrap"=3D=3D=3Da.style||"wide-list"=3D=3D=3Da.style?'&lt;div class=3D"ind=
ex-post-wrap owl-carousel owl-theme entry-slider" id=3D"'+c+'"&gt;'+d+"&lt;=
/div&gt;":"grid"=3D=3D=3Da.style?'&lt;div class=3D"index-post-wrap"&gt;'+d+=
"&lt;/div&gt;":"ranked-grid-alt"=3D=3D=3Da.style?'&lt;div class=3D"ranked-g=
rid-alt-widget-content"&gt;'+d+"&lt;/div&gt;":"top-list"=3D=3D=3Da.style?'&=
lt;div class=3D"top-list-widget-content"&gt;'+d+"&lt;/div&gt;":'&lt;div cla=
ss=3D"widget-content-inner"&gt;'+d+"&lt;/div&gt;",e.html(s);let _=3D{loop:!=
1,margin:16,nav:!0,dots:!1,slideBy:"page",navText:['&lt;svg fill=3D"none" v=
iewBox=3D"0 0 24 24"&gt;&lt;path stroke=3D"currentColor" stroke-linecap=3D"=
round" stroke-linejoin=3D"round" stroke-width=3D"2" d=3D"M15 18l-6-6 6-6"/&=
gt;&lt;/svg&gt;','&lt;svg fill=3D"none" viewBox=3D"0 0 24 24"&gt;&lt;path s=
troke=3D"currentColor" stroke-linecap=3D"round" stroke-linejoin=3D"round" s=
troke-width=3D"2" d=3D"M9 6l6 6-6 6"/&gt;&lt;/svg&gt;'],responsive:{0:{auto=
Width:!0,margin:8},768:{items:4,margin:16},1024:{items:6}}};"wide-list"=3D=
=3D=3Da.style&amp;&amp;(_.responsive=3D{0:{items:1,margin:12,autoWidth:!0,s=
tagePadding:60},768:{items:2,margin:16},1024:{items:3,margin:20}}),("nowrap=
"=3D=3D=3Da.style||"wide-list"=3D=3D=3Da.style)&amp;&amp;e.find(".owl-carou=
sel").owlCarousel(_),i();var p=3De.find(".owl-nav .owl-prev");p.length&amp;=
&amp;p.removeAttr("role").attr("aria-label","Previous");var m=3De.find(".ow=
l-nav .owl-next");m.length&amp;&amp;m.removeAttr("role").attr("aria-label",=
"Next"),"function"=3D=3Dtypeof o&amp;&amp;o()},error:function(){e.html('&lt=
;span class=3D"error-msg"&gt;Error: Feed could not be loaded.&lt;/span&gt;'=
)}})}function s(){$("#Blog1 .index-post:not(.meta-populated)").each(functio=
n(){var e,t=3D$(this),a=3Dt.find("a.entry-image-wrap").attr("href");a&amp;&=
amp;(e=3Dt,$.get(a,function(t){var a=3D$(t),i=3Da.find(".meta-rating").text=
().trim(),n=3Da.find(".meta-year").text().trim(),s=3De.find(".entry-header =
.entry-meta");if((n||i)&amp;&amp;s.length){var l=3D"";n&amp;&amp;(l+=3D'&lt=
;span class=3D"entry-year"&gt;'+n+"&lt;/span&gt;"),i&amp;&amp;(l+=3D'&lt;sp=
an class=3D"entry-rating"&gt;&lt;svg viewBox=3D"0 0 24 24"&gt;&lt;path d=3D=
"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46=
 4.73L5.82 21z"/&gt;&lt;/svg&gt;'+i+"&lt;/span&gt;"),s.html(l).addClass("lo=
aded")}e.addClass("meta-populated")}))})}function l(e){var t=3De.target;set=
Timeout(function(){var a=3D$(t).closest(".widget-content").find(".header-ca=
rousel-nav");e.item.count&lt;=3De.page.size?a.hide():a.show()},50)}function=
 r(e,t){e.duration&amp;&amp;t.find(".thumb-duration").html('\n            &=
lt;svg xmlns=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24" width=3D"=
20" height=3D"20" fill=3D"none" style=3D"vertical-align: middle; margin-rig=
ht: 4px;"&gt;\n                &lt;path d=3D"M2 15C2.14277 15.4274 2.31023 =
15.8431 2.50062 16.2452M4.12547 18.7463C4.44158 19.1137 4.781 19.4596 5.141=
37 19.7814M9 22C8.55224 21.8557 8.11701 21.6824 7.69641 21.4822" stroke=3D"=
currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=
=3D"round" /&gt;\n                &lt;path d=3D"M12 13.5C12.8284 13.5 13.5 =
12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716=
 10.5 12M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12M12 13.5V16M10.5 12H6" st=
roke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round" /&gt;\n=
                &lt;path d=3D"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715=
 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke=3D"currentColor" stroke-wi=
dth=3D"1.5" stroke-linecap=3D"round" /&gt;\n            &lt;/svg&gt;\n     =
   '+e.duration).addClass("is-visible"),e.rating&amp;&amp;t.find(".thumb-ra=
ting").html('\n            &lt;svg xmlns=3D"http://www.w3.org/2000/svg" vie=
wBox=3D"0 0 24 24" width=3D"20" height=3D"20" fill=3D"none" style=3D"vertic=
al-align: middle; margin-right: 4px;"&gt;\n                &lt;path d=3D"M9=
.03658 10.8665L10.0925 12.9957C10.2364 13.2921 10.6204 13.5764 10.9444 13.6=
309L12.8582 13.9515C14.082 14.1571 14.37 15.0524 13.4881 15.9355L12.0003 17=
.4356C11.7483 17.6897 11.6103 18.1796 11.6883 18.5305L12.1142 20.3875C12.45=
02 21.8574 11.6763 22.426 10.3864 21.6578L8.59263 20.5871C8.26867 20.3935 7=
.73473 20.3935 7.40476 20.5871L5.61096 21.6578C4.3271 22.426 3.54719 21.851=
3 3.88315 20.3875L4.3091 18.5305C4.3871 18.1796 4.24911 17.6897 3.99714 17.=
4356L2.5093 15.9355C1.6334 15.0524 1.91537 14.1571 3.13923 13.9515L5.05302 =
13.6309C5.37099 13.5764 5.75494 13.2921 5.89893 12.9957L6.95481 10.8665C7.5=
3075 9.71116 8.46665 9.71116 9.03658 10.8665Z" stroke=3D"currentColor" stro=
ke-width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;=
/path&gt;\n                &lt;path d=3D"M22 2L14 10M16 2L11 7M20 10L17 13"=
 stroke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round"&gt;&=
lt;/path&gt;\n            &lt;/svg&gt;\n        '+e.rating).addClass("is-vi=
sible"),e.audio&amp;&amp;t.find(".sub-meta-mic").html('\n            &lt;sv=
g xmlns=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24" width=3D"20" h=
eight=3D"20" fill=3D"none" style=3D"vertical-align: middle; margin-right: 4=
px;"&gt;\n                &lt;path d=3D"M17 11C17 13.7614 14.7614 16 12 16C=
9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2" stroke=3D"currentColo=
r" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=3D"round" =
/&gt;\n                &lt;path d=3D"M20 11C20 15.4183 16.4183 19 12 19M12 =
19C7.58172 19 4 15.4183 4 11M12 19V22" stroke=3D"currentColor" stroke-width=
=3D"1.5" stroke-linecap=3D"round" stroke-linejoin=3D"round" /&gt;\n        =
        &lt;path d=3D"M14.3327 4.64612C15.5394 4.49594 16.4959 3.53944 16.6=
461 2.33267C16.6689 2.14999 16.8159 2 17 2C17.1841 2 17.3311 2.14999 17.353=
9 2.33267C17.5041 3.53944 18.4606 4.49594 19.6673 4.64612C19.85 4.66885 20 =
4.81591 20 5C20 5.1841 19.85 5.33115 19.6673 5.35388C18.4606 5.50406 17.504=
1 6.46056 17.3539 7.66733C17.3311 7.85001 17.1841 8 17 8C16.8159 8 16.6689 =
7.85001 16.6461 7.66733C16.4959 6.46056 15.5394 5.50406 14.3327 5.35388C14.=
15 5.33115 14 5.1841 14 5C14 4.81591 14.15 4.66885 14.3327 4.64612Z" stroke=
=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round" stroke-line=
join=3D"round" /&gt;\n            &lt;/svg&gt;\n         '+e.audio).addClas=
s("is-visible"),e.type&amp;&amp;t.find(".sub-meta-type").text("TV Series"=
=3D=3D=3De.type?"TV":e.type).addClass("is-visible"),e.year&amp;&amp;t.find(=
".sub-meta-year").text(e.year).addClass("is-visible"),e.subtitles&amp;&amp;=
t.find(".sub-meta-cc").html("CC "+e.subtitles).addClass("is-visible")}funct=
ion o(){$(".index-post:not(.custom-meta-populated)").each(function(){var e=
=3D$(this),t=3De.find("a.entry-image-wrap").attr("href");if(!t){e.addClass(=
"custom-meta-populated");return}var a=3DsessionStorage.getItem("meta_"+t);i=
f(a){r(JSON.parse(a),e),e.addClass("custom-meta-populated");return}$.get(t,=
function(a){var i=3D$(a).find("#extra-meta"),n=3D{year:i.find(".meta-year")=
.text().trim(),duration:i.find(".meta-duration").text().trim(),subtitles:i.=
find(".meta-subtitles").text().trim(),audio:i.find(".meta-audio").text().tr=
im(),type:i.find(".meta-type").text().trim(),rating:i.find(".meta-rating").=
text().trim()};sessionStorage.setItem("meta_"+t,JSON.stringify(n)),r(n,e),e=
.addClass("custom-meta-populated")}).fail(function(){e.addClass("custom-met=
a-populated")})})}(function e(){var t=3D$(".homepage-filter-buttons");if(t.=
length){var a=3Dt.find(".scroll-area"),i=3Dt.find(".prev-btn"),n=3Dt.find("=
.next-btn");a.owlCarousel({loop:!1,margin:12,nav:!1,dots:!1,autoWidth:!0,sl=
ideBy:1}),n.on("click",function(){a.trigger("next.owl.carousel")}),i.on("cl=
ick",function(){a.trigger("prev.owl.carousel")})}})(),function(){let e=3D$(=
"#HTML90");if(!e.length)return;let t=3D["Action","Action &amp; Adventure","=
Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fan=
tasy","History","Horror","Kids","Music","Mystery","Reality","Romance","Sci-=
Fi &amp; Fantasy","Science Fiction","Thriller","War","Western"],a=3De.find(=
"#random-posts-grid"),n=3De.find("#random-posts-switch"),s=3D[];function l(=
){if(s.length&lt;6){a.html("&lt;p style=3D'width:100%;text-align:center;fon=
t-size:14px;'&gt;Not enough posts to display.&lt;/p&gt;"),n.hide();return}!=
function e(t){for(let a=3Dt.length-1;a&gt;0;a--){let i=3DMath.floor(Math.ra=
ndom()*(a+1));[t[a],t[i]]=3D[t[i],t[a]]}}(s);let e=3Ds.slice(0,6).map(e=3D&=
gt;'\n            &lt;article class=3D"index-post" data-post-id=3D"'+e.id+'=
"&gt;\n              &lt;a class=3D"entry-image-wrap" href=3D"'+e.url+'" ti=
tle=3D"'+e.title+'"&gt;\n                &lt;span class=3D"entry-image" dat=
a-image=3D"'+e.imageUrl+'"&gt;&lt;/span&gt;\n                &lt;span class=
=3D"entry-label"&gt;'+e.label+'&lt;/span&gt;\n                &lt;div class=
=3D"thumb-meta-overlay"&gt;\n                  &lt;span class=3D"thumb-meta=
 thumb-duration"&gt;\n                    '+(e.duration?'&lt;svg xmlns=3D"h=
ttp://www.w3.org/2000/svg" viewBox=3D"0 0 24 24" width=3D"20" height=3D"20"=
 fill=3D"none" style=3D"vertical-align: middle; margin-right: 4px;"&gt;&lt;=
path d=3D"M2 15C2.14277 15.4274 2.31023 15.8431 2.50062 16.2452M4.12547 18.=
7463C4.44158 19.1137 4.781 19.4596 5.14137 19.7814M9 22C8.55224 21.8557 8.1=
1701 21.6824 7.69641 21.4822" stroke=3D"currentColor" stroke-width=3D"1.5" =
stroke-linecap=3D"round" stroke-linejoin=3D"round" /&gt;&lt;path d=3D"M12 1=
3.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.=
1716 10.5 10.5 11.1716 10.5 12M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12M12=
 13.5V16M10.5 12H6" stroke=3D"currentColor" stroke-width=3D"1.5" stroke-lin=
ecap=3D"round" /&gt;&lt;path d=3D"M12 22C17.5228 22 22 17.5228 22 12C22 6.4=
7715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke=3D"currentColor" strok=
e-width=3D"1.5" stroke-linecap=3D"round" /&gt;&lt;/svg&gt;'+e.duration:"")+=
'\n                  &lt;/span&gt;\n                  &lt;span class=3D"thu=
mb-meta thumb-rating"&gt;\n                    '+(e.rating?'&lt;svg xmlns=
=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24" width=3D"11" height=
=3D"11" fill=3D"none"&gt;&lt;path d=3D"M9.03658 10.8665L10.0925 12.9957C10.=
2364 13.2921 10.6204 13.5764 10.9444 13.6309L12.8582 13.9515C14.082 14.1571=
 14.37 15.0524 13.4881 15.9355L12.0003 17.4356C11.7483 17.6897 11.6103 18.1=
796 11.6883 18.5305L12.1142 20.3875C12.4502 21.8574 11.6763 22.426 10.3864 =
21.6578L8.59263 20.5871C8.26867 20.3935 7.73473 20.3935 7.40476 20.5871L5.6=
1096 21.6578C4.3271 22.426 3.54719 21.8513 3.88315 20.3875L4.3091 18.5305C4=
.3871 18.1796 4.24911 17.6897 3.99714 17.4356L2.5093 15.9355C1.6334 15.0524=
 1.91537 14.1571 3.13923 13.9515L5.05302 13.6309C5.37099 13.5764 5.75494 13=
.2921 5.89893 12.9957L6.95481 10.8665C7.53075 9.71116 8.46665 9.71116 9.036=
58 10.8665Z" stroke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D=
"round" stroke-linejoin=3D"round"&gt;&lt;/path&gt;&lt;path d=3D"M22 2L14 10=
M16 2L11 7M20 10L17 13" stroke=3D"currentColor" stroke-width=3D"1.5" stroke=
-linecap=3D"round"&gt;&lt;/path&gt;&lt;/svg&gt;'+e.rating:"")+'\n          =
        &lt;/span&gt;\n                &lt;/div&gt;\n              &lt;/a&g=
t;\n              &lt;div class=3D"entry-header"&gt;\n                &lt;h=
2 class=3D"entry-title"&gt;&lt;a href=3D"'+e.url+'"&gt;'+e.title+'&lt;/a&gt=
;&lt;/h2&gt;\n                &lt;div class=3D"card-sub-meta"&gt;\n        =
          &lt;div class=3D"sub-meta-left"&gt;\n                    &lt;span=
 class=3D"sub-meta-type"&gt;'+(e.type?"TV Series"=3D=3D=3De.type?"TV":e.typ=
e:"")+'&lt;/span&gt;\n                    &lt;span class=3D"sub-meta-year"&=
gt;'+(e.year||"")+'&lt;/span&gt;\n                  &lt;/div&gt;\n         =
         &lt;div class=3D"sub-meta-right"&gt;\n                    &lt;span=
 class=3D"sub-meta-cc"&gt;'+(e.subtitles?"CC "+e.subtitles:"")+'&lt;/span&g=
t;\n                    &lt;span class=3D"sub-meta-mic"&gt;\n              =
        '+(e.audio?'&lt;svg xmlns=3D"http://www.w3.org/2000/svg" viewBox=3D=
"0 0 24 24" width=3D"10" height=3D"10"&gt;&lt;path d=3D"M12 14c1.66 0 2.99-=
1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 =
3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-=
.48 6-3.3 6-6.72h-1.7z" fill=3D"currentColor"/&gt;&lt;/svg&gt;'+e.audio:"")=
+"\n                    &lt;/span&gt;\n                  &lt;/div&gt;\n    =
            &lt;/div&gt;\n              &lt;/div&gt;\n            &lt;/arti=
cle&gt;\n        ").join("");a.html(e),i(),o()}let r=3D$(".sidebar-logo .lo=
go-text").text().trim()||"ABEFILM",d=3D"";for(let c=3D0;c&lt;6;c++)d+=3D'&l=
t;div class=3D"skeleton-post-item"&gt;&lt;div class=3D"skeleton-image-place=
holder"&gt;&lt;span class=3D"skeleton-card-text"&gt;'+r+'&lt;/span&gt;&lt;/=
div&gt;&lt;div class=3D"skeleton-title-placeholder"&gt;&lt;/div&gt;&lt;/div=
&gt;';a.html(d),n.hide(),new IntersectionObserver((e,i)=3D&gt;{e.forEach(e=
=3D&gt;{e.isIntersecting&amp;&amp;($.ajax({url:"/feeds/posts/default?alt=3D=
json-in-script&amp;max-results=3D50",type:"get",dataType:"jsonp",success:fu=
nction(e){if(!e.feed||!e.feed.entry){a.html("&lt;p&gt;Failed to load posts.=
&lt;/p&gt;");return}s=3De.feed.entry.map(function(e){let a=3Ddocument.creat=
eElement("div");a.innerHTML=3De.content.$t;let i=3D$(a),n=3Di.find("#extra-=
meta"),s=3D(e.category||[]).map(e=3D&gt;e.term).find(e=3D&gt;t.includes(e))=
||"";return{id:e.id.$t.split(".post-")[1],title:e.title.$t,url:e.link.find(=
e=3D&gt;"alternate"=3D=3D=3De.rel).href,imageUrl:(i.find('img[alt=3D"poster=
"]').attr("src")||"x").replace(/\/s\d+(-[a-z0-9]+)*\//,"/w400-h600-c/"),lab=
el:s,rating:n.find(".meta-rating").text().trim(),year:n.find(".meta-year").=
text().trim(),duration:n.find(".meta-duration").text().trim(),subtitles:n.f=
ind(".meta-subtitles").text().trim(),audio:n.find(".meta-audio").text().tri=
m(),type:n.find(".meta-type").text().trim()}}).filter(Boolean),l(),n.show()=
},error:function(){a.html("&lt;p&gt;Failed to load post feed.&lt;/p&gt;")}}=
),i.unobserve(e.target))})},{rootMargin:"0px 0px 200px 0px"}).observe(e[0])=
,n.on("click",l)}();let d,c;d=3D"abefilmUserWatchlist",c=3D$("#clear-watchl=
ist-modal-overlay"),window.getWatchlist=3D()=3D&gt;{try{let e=3DlocalStorag=
e.getItem(d);if(e)return JSON.parse(e);return[]}catch{return[]}},window.sav=
eWatchlist=3De=3D&gt;{localStorage.setItem(d,JSON.stringify(e))},window.add=
ToWatchlist=3De=3D&gt;{let t=3DgetWatchlist();t.some(t=3D&gt;t.id=3D=3D=3De=
.id)||(t.unshift(e),saveWatchlist(t))},window.removeFromWatchlist=3De=3D&gt=
;{saveWatchlist(getWatchlist().filter(t=3D&gt;String(t.id)!=3D=3DString(e))=
)},window.isItemInWatchlist=3De=3D&gt;!!e&amp;&amp;getWatchlist().some(t=3D=
&gt;String(t.id)=3D=3D=3DString(e)),window.updateWatchlistBadge=3D()=3D&gt;=
{let e=3DgetWatchlist().length,t=3D$(".watchlist-badge");e&gt;0?t.text(e).s=
how():t.text("0").hide()},window.renderWatchlistPanel=3Dasync()=3D&gt;{let =
e=3DgetWatchlist(),t=3D$("#watchlist-items-list"),a=3D$("#watchlist-empty-m=
essage"),i=3De.length,n=3De.slice(0,4);if(t.empty(),$(".view-all-watchlist-=
link").remove(),0=3D=3D=3Dn.length){a.show(),updateWatchlistBadge();return}=
a.hide(),t.html("&lt;li&gt;Loading...&lt;/li&gt;");let s=3Dawait Promise.al=
l(n.map(async e=3D&gt;{try{let t=3Dawait fetch(e.url);if(!t.ok)return e;let=
 a=3Dawait t.text(),i=3Ddocument.createElement("div");i.innerHTML=3Da;let n=
=3Di.querySelector("span.slider-backdrop"),s=3De.image;return n&amp;&amp;n.=
textContent.trim()&amp;&amp;(s=3Dn.textContent.trim()),{...e,image:s}}catch=
(l){return console.warn("Failed to fetch details for "+e.title+":",l),e}}))=
;t.empty(),s.forEach(e=3D&gt;{let a=3D'&lt;li&gt;&lt;a href=3D"'+e.url+'" t=
itle=3D"'+e.title+'"&gt;&lt;img class=3D"watchlist-item-image" src=3D"'+e.i=
mage+'" alt=3D"'+e.title+'" loading=3D"lazy" width=3D"90" height=3D"50"/&gt=
;&lt;/a&gt;&lt;a href=3D"'+e.url+'" class=3D"watchlist-item-title" title=3D=
"'+e.title+'"&gt;'+e.title+'&lt;/a&gt;&lt;button class=3D"watchlist-delete-=
btn" data-id=3D"'+e.id+'" title=3D"Remove"&gt;&lt;svg viewBox=3D"0 0 24 24"=
 width=3D"18" height=3D"18" fill=3D"none"&gt;&lt;path d=3D"M19.5 5.5L19.098=
2 12.0062M4.5 5.5L5.10461 15.5248C5.25945 18.0922 5.33688 19.3759 5.97868 2=
0.299C6.296 20.7554 6.7048 21.1407 7.17905 21.4302C7.85035 21.84 8.68108 21=
.9631 10 22" stroke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D=
"round"/&gt;&lt;path d=3D"M20 15L13 21.9995M20 22L13 15.0005" stroke=3D"cur=
rentColor" stroke-width=3D"1.5" stroke-linecap=3D"round"/&gt;&lt;path d=3D"=
M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.30=
17 2.39681C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412=
C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke=3D"curr=
entColor" stroke-width=3D"1.5" stroke-linecap=3D"round"/&gt;&lt;/svg&gt;&lt=
;/button&gt;&lt;/li&gt;';t.append(a)}),i&gt;4&amp;&amp;t.after('&lt;a class=
=3D"view-all-watchlist-link" href=3D"/p/watchlist.html"&gt;See All &lt;svg =
xmlns=3D"http://www.w3.org/2000/svg" width=3D"12" height=3D"12" fill=3D"cur=
rentColor" viewBox=3D"0 0 16 16" style=3D"vertical-align: middle;"&gt;&lt;p=
ath fill-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 =
1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"=
/&gt;&lt;/svg&gt;&lt;/a&gt;'),updateWatchlistBadge()},window.updateButtonSt=
ate=3De=3D&gt;{if(!e||!e.length)return;let t=3DisItemInWatchlist(e.attr("da=
ta-post-id")),a=3De.hasClass("post-page-add-btn"),i=3De.closest("#preview-p=
opup").length&gt;0,n=3De.hasClass("slider-btn");a?e.html((t?'&lt;svg viewBo=
x=3D"0 0 24 24"&gt;&lt;path d=3D"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.4=
1-1.41z"&gt;&lt;/path&gt;&lt;/svg&gt;':'&lt;svg viewBox=3D"0 0 24 24"&gt;&l=
t;path d=3D"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"&gt;&lt;/path&gt;&lt;/svg&g=
t;')+"&lt;span&gt;"+(t?"Added":"Add to List")+"&lt;/span&gt;"):i?e.html(t?'=
&lt;svg viewBox=3D"0 0 60 60"&gt;&lt;circle fill=3D"#fff" cx=3D"30" cy=3D"3=
0" r=3D"30"&gt;&lt;/circle&gt;&lt;path d=3D"M29.3,17.25C29.7,17.25,30,17.56=
,30,17.94V19.38C30,19.77,29.7,20.08,29.3,20.08H22.91V39.72L28.64,34.95C29.3=
7,34.34,30.41,34.3,31.18,34.82L37.08,39.72V33.52C37.08,33.14,37.39,32.83,37=
.77,32.83H39.22C39.6,32.83,39.91,33.14,39.91,33.52V41.23C39.91,42.41,38.96,=
43.36,37.79,43.36C37.36,43.36,36.95,43.23,36.6,42.99L30,37.5L23.56,42.87C22=
.72,43.57,21.49,43.51,20.72,42.75C20.3,42.27,20.13,41.87,20.08,41.23V20.08C=
20.08,18.58,21.23,17.36,22.7,17.25H29.3Z" fill=3D"#111319" fill-rule=3D"non=
zero"&gt;&lt;/path&gt;&lt;path d=3D"M33 23L37 27L44 18" stroke=3D"#111319" =
stroke-width=3D"3" fill=3D"none" stroke-linecap=3D"round" stroke-linejoin=
=3D"round"&gt;&lt;/path&gt;&lt;/svg&gt;':'&lt;svg width=3D"60px" height=3D"=
60px" viewBox=3D"0 0 60 60"&gt;&lt;g stroke=3D"none" stroke-width=3D"1" fil=
l=3D"none" fill-rule=3D"evenodd"&gt;&lt;circle fill=3D"#FFFFFF" cx=3D"30" c=
y=3D"30" r=3D"30"&gt;&lt;/circle&gt;&lt;path d=3D"M29.3055556,17.25 C29.689=
0866,17.25 30,17.5609134 30,17.9444444 L30,19.3888889 C30,19.77242 29.68908=
66,20.0833333 29.3055556,20.0833333 L22.9166667,20.0833333 L22.9166667,39.7=
24 L28.6396082,34.9562398 C29.3713667,34.346441 30.4106369,34.302884 31.186=
3257,34.8255686 L31.3603918,34.9562398 L37.0833333,39.7254167 L37.0833333,3=
3.5277778 C37.0833333,33.1442467 37.3942467,32.8333333 37.7777778,32.833333=
3 L39.2222222,32.8333333 C39.6057533,32.8333333 39.9166667,33.1442467 39.91=
66667,33.5277778 L39.9166667,41.2376789 C39.9166667,42.4112764 38.9652794,4=
3.3627321 37.7916667,43.3627321 C37.3655561,43.3627321 36.9510168,43.234631=
3 36.6007867,42.9976358 L36.4312748,42.8701491 L30,37.50975 L23.5687252,42.=
8701491 C22.7234861,43.574515 21.4929682,43.5114751 20.7233835,42.7579578 L=
20.5758631,42.5980707 C20.3030814,42.2707327 20.1360669,41.8703014 20.09391=
54,41.4495208 L20.0833333,41.2376789 L20.0833333,20.0833333 C20.0833333,18.=
5896541 21.2391602,17.3659327 22.7052117,17.2577715 L22.9166667,17.25 L29.3=
055556,17.25 Z M39.2222222,17.25 C39.6057533,17.25 39.9166667,17.5609134 39=
.9166667,17.9444444 L39.9163333,21.499 L43.4722222,21.5 C43.8557533,21.5 44=
.1666667,21.8109134 44.1666667,22.1944444 L44.1666667,23.6388889 C44.166666=
7,24.02242 43.8557533,24.3333333 43.4722222,24.3333333 L39.9163333,24.333 L=
39.9166667,27.8888889 C39.9166667,28.27242 39.6057533,28.5833333 39.2222222=
,28.5833333 L37.7777778,28.5833333 C37.3942467,28.5833333 37.0833333,28.272=
42 37.0833333,27.8888889 L37.0823333,24.333 L33.5277778,24.3333333 C33.1442=
467,24.3333333 32.8333333,24.02242 32.8333333,23.6388889 L32.8333333,22.194=
4444 C32.8333333,21.8109134 33.1442467,21.5 33.5277778,21.5 L37.0823333,21.=
499 L37.0833333,17.9444444 C37.0833333,17.5609134 37.3942467,17.25 37.77777=
78,17.25 L39.2222222,17.25 Z" fill=3D"#111319" fill-rule=3D"nonzero"&gt;&lt=
;/path&gt;&lt;/g&gt;&lt;/svg&gt;'):n&amp;&amp;e.html(t?'&lt;svg viewBox=3D"=
0 0 60 60"&gt;&lt;circle fill=3D"#fff" cx=3D"30" cy=3D"30" r=3D"30"&gt;&lt;=
/circle&gt;&lt;path d=3D"M29.3,17.25C29.7,17.25,30,17.56,30,17.94V19.38C30,=
19.77,29.7,20.08,29.3,20.08H22.91V39.72L28.64,34.95C29.37,34.34,30.41,34.3,=
31.18,34.82L37.08,39.72V33.52C37.08,33.14,37.39,32.83,37.77,32.83H39.22C39.=
6,32.83,39.91,33.14,39.91,33.52V41.23C39.91,42.41,38.96,43.36,37.79,43.36C3=
7.36,43.36,36.95,43.23,36.6,42.99L30,37.5L23.56,42.87C22.72,43.57,21.49,43.=
51,20.72,42.75C20.3,42.27,20.13,41.87,20.08,41.23V20.08C20.08,18.58,21.23,1=
7.36,22.7,17.25H29.3Z" fill=3D"#111319" fill-rule=3D"nonzero"&gt;&lt;/path&=
gt;&lt;path d=3D"M33 23L37 27L44 18" stroke=3D"#111319" stroke-width=3D"3" =
fill=3D"none" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;/pa=
th&gt;&lt;/svg&gt;':'&lt;svg width=3D"60px" height=3D"60px" viewBox=3D"0 0 =
60 60"&gt;&lt;g stroke=3D"none" stroke-width=3D"1" fill=3D"none" fill-rule=
=3D"evenodd"&gt;&lt;circle fill=3D"#FFFFFF" cx=3D"30" cy=3D"30" r=3D"30"&gt=
;&lt;/circle&gt;&lt;path d=3D"M29.3055556,17.25 C29.6890866,17.25 30,17.560=
9134 30,17.9444444 L30,19.3888889 C30,19.77242 29.6890866,20.0833333 29.305=
5556,20.0833333 L22.9166667,20.0833333 L22.9166667,39.724 L28.6396082,34.95=
62398 C29.3713667,34.346441 30.4106369,34.302884 31.1863257,34.8255686 L31.=
3603918,34.9562398 L37.0833333,39.7254167 L37.0833333,33.5277778 C37.083333=
3,33.1442467 37.3942467,32.8333333 37.7777778,32.8333333 L39.2222222,32.833=
3333 C39.6057533,32.8333333 39.9166667,33.1442467 39.9166667,33.5277778 L39=
.9166667,41.2376789 C39.9166667,42.4112764 38.9652794,43.3627321 37.7916667=
,43.3627321 C37.3655561,43.3627321 36.9510168,43.2346313 36.6007867,42.9976=
358 L36.4312748,42.8701491 L30,37.50975 L23.5687252,42.8701491 C22.7234861,=
43.574515 21.4929682,43.5114751 20.7233835,42.7579578 L20.5758631,42.598070=
7 C20.3030814,42.2707327 20.1360669,41.8703014 20.0939154,41.4495208 L20.08=
33333,41.2376789 L20.0833333,20.0833333 C20.0833333,18.5896541 21.2391602,1=
7.3659327 22.7052117,17.2577715 L22.9166667,17.25 L29.3055556,17.25 Z M39.2=
222222,17.25 C39.6057533,17.25 39.9166667,17.5609134 39.9166667,17.9444444 =
L39.9163333,21.499 L43.4722222,21.5 C43.8557533,21.5 44.1666667,21.8109134 =
44.1666667,22.1944444 L44.1666667,23.6388889 C44.1666667,24.02242 43.855753=
3,24.3333333 43.4722222,24.3333333 L39.9163333,24.333 L39.9166667,27.888888=
9 C39.9166667,28.27242 39.6057533,28.5833333 39.2222222,28.5833333 L37.7777=
778,28.5833333 C37.3942467,28.5833333 37.0833333,28.27242 37.0833333,27.888=
8889 L37.0823333,24.333 L33.5277778,24.3333333 C33.1442467,24.3333333 32.83=
33333,24.02242 32.8333333,23.6388889 L32.8333333,22.1944444 C32.8333333,21.=
8109134 33.1442467,21.5 33.5277778,21.5 L37.0823333,21.499 L37.0833333,17.9=
444444 C37.0833333,17.5609134 37.3942467,17.25 37.7777778,17.25 L39.2222222=
,17.25 Z" fill=3D"#111319" fill-rule=3D"nonzero"&gt;&lt;/path&gt;&lt;/g&gt;=
&lt;/svg&gt;'),e.toggleClass("added",t)},window.initializeAllButtonStates=
=3D()=3D&gt;{$(".add-list-btn, .slider-btn.add-btn, #preview-popup .watchli=
st-btn").each(function(){updateButtonState($(this))})},$(document).on("clic=
k",".add-list-btn, .slider-btn.add-btn, #preview-popup .watchlist-btn",func=
tion(e){e.preventDefault();let t=3D$(this),a=3D{id:t.attr("data-post-id"),t=
itle:t.attr("data-post-title"),url:t.attr("data-post-url"),image:t.attr("da=
ta-post-image")};a.id&amp;&amp;a.title&amp;&amp;(isItemInWatchlist(a.id)?re=
moveFromWatchlist(a.id):addToWatchlist(a),$('[data-post-id=3D"'+a.id+'"]').=
each(function(){updateButtonState($(this))}),updateWatchlistBadge())}),$("#=
watchlist-items-list").on("click",".watchlist-delete-btn",function(e){e.sto=
pPropagation(),removeFromWatchlist($(this).data("id")),renderWatchlistPanel=
(),initializeAllButtonStates()}),$("#clear-watchlist-btn").on("click",funct=
ion(e){e.preventDefault(),e.stopPropagation(),getWatchlist().length&gt;0&am=
p;&amp;c.addClass("is-visible")}),$("#confirm-clear-btn").on("click",functi=
on(){saveWatchlist([]),renderWatchlistPanel(),initializeAllButtonStates(),c=
.removeClass("is-visible")}),$("#cancel-clear-btn, #clear-watchlist-modal-o=
verlay").on("click",function(e){e.target=3D=3D=3Dthis&amp;&amp;c.removeClas=
s("is-visible")}),$(document).on("abefilm:preview_shown",function(e,t){upda=
teButtonState(t.$button)}),initializeAllButtonStates();let _;_=3D$("#clear-=
watchlist-modal-overlay"),window.updateHistoryBadge=3D()=3D&gt;{let e=3DJSO=
N.parse(localStorage.getItem("watchHistoryIDs")||"[]").length,t=3D$(".histo=
ry-badge");e&gt;0?t.text(e).css("display","flex"):t.hide()},window.displayH=
istory=3Dasync()=3D&gt;{let e=3D$("#history-items-list"),t=3D$("#history-em=
pty-message");if(!e.length)return;let a=3DJSON.parse(localStorage.getItem("=
watchHistoryIDs")||"[]"),i=3Da.length,n=3Da.slice(0,4),s=3DJSON.parse(local=
Storage.getItem("abefilmWatchProgress")||"{}");if(0=3D=3D=3Dn.length){e.emp=
ty(),t.show(),$(".view-all-history-link").remove();return}t.hide(),e.html("=
&lt;li&gt;Loading...&lt;/li&gt;");let l=3Dwindow.location.origin,r=3D{};awa=
it Promise.all(n.map(e=3D&gt;fetch(l+"/feeds/posts/default/"+e+"?alt=3Djson=
").then(e=3D&gt;e.ok?e.json():null).then(t=3D&gt;{if(t&amp;&amp;t.entry){le=
t a=3Dt.entry,i=3Ddocument.createElement("div");i.innerHTML=3Da.content.$t;=
let n=3Di.querySelector("span.slider-backdrop"),s=3Di.querySelector('img[al=
t=3D"poster"]'),l=3Dn&amp;&amp;n.textContent.trim()||s&amp;&amp;s.src||"x",=
o=3Di.querySelector("#episodes-data ul[data-server-name]");r[e]=3D{title:a.=
title.$t,link:a.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel).href,thumb:l,t=
otalEpisodes:o?o.querySelectorAll("a").length:0}}}).catch(t=3D&gt;console.w=
arn("Failed to fetch post "+e,t))));let o=3D"";n.forEach(e=3D&gt;{let t=3Dr=
[e];if(t){let a=3D"";if(t.totalEpisodes&gt;0){let i=3D(s["post-"+e]||0)+1;a=
=3D'&lt;div class=3D"history-item-progress-info"&gt;&lt;span class=3D"ep-cu=
rrent"&gt;EP '+i+'&lt;/span&gt;&lt;span class=3D"ep-count"&gt;&lt;span clas=
s=3D"current"&gt;'+i+"&lt;/span&gt; / "+t.totalEpisodes+'&lt;/span&gt;&lt;/=
div&gt;&lt;div class=3D"progress-bar-container"&gt;&lt;div class=3D"progres=
s-bar-fill" style=3D"width: '+i/t.totalEpisodes*100+'%;"&gt;&lt;/div&gt;&lt=
;/div&gt;'}o+=3D'&lt;li id=3D"history-item-'+e+'"&gt;&lt;a href=3D"'+t.link=
+'" title=3D"'+t.title+'"&gt;&lt;img class=3D"watchlist-item-image" src=3D"=
'+t.thumb+'" alt=3D"'+t.title+'" loading=3D"lazy"/&gt;&lt;/a&gt;&lt;div cla=
ss=3D"history-item-details"&gt;&lt;a href=3D"'+t.link+'" class=3D"watchlist=
-item-title" title=3D"'+t.title+'"&gt;'+t.title+"&lt;/a&gt;"+a+'&lt;/div&gt=
;&lt;button class=3D"watchlist-delete-btn" data-id=3D"'+e+'"&gt;&lt;svg vie=
wBox=3D"0 0 24 24" width=3D"18" height=3D"18" fill=3D"none"&gt;&lt;path d=
=3D"M19.5 5.5L19.0982 12.0062M4.5 5.5L5.10461 15.5248C5.25945 18.0922 5.336=
88 19.3759 5.97868 20.299C6.296 20.7554 6.7048 21.1407 7.17905 21.4302C7.85=
035 21.84 8.68108 21.9631 10 22" stroke=3D"currentColor" stroke-width=3D"1.=
5" stroke-linecap=3D"round"/&gt;&lt;path d=3D"M20 15L13 21.9995M20 22L13 15=
.0005" stroke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round=
"/&gt;&lt;path d=3D"M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 1=
4.6928 2.68852 14.3017 2.39681C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.4=
36 2 9.99568 2.23412C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292=
 5.5" stroke=3D"currentColor" stroke-width=3D"1.5" stroke-linecap=3D"round"=
/&gt;&lt;/svg&gt;&lt;/button&gt;&lt;/li&gt;'}}),e.html(o||""),e.html().trim=
()||t.show(),$(".view-all-history-link").remove(),i&gt;4&amp;&amp;e.after('=
&lt;a class=3D"view-all-history-link" href=3D"/p/history.html"&gt;See All &=
lt;svg xmlns=3D"http://www.w3.org/2000/svg" width=3D"12" height=3D"12" fill=
=3D"currentColor" viewBox=3D"0 0 16 16" style=3D"vertical-align: middle;"&g=
t;&lt;path fill-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5=
.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0=
-.708z"/&gt;&lt;/svg&gt;&lt;/a&gt;')},$("#history-items-list").on("click","=
.watchlist-delete-btn",function(e){e.stopPropagation(),window.removeFromHis=
tory($(this).data("id"))}),$("#clear-history-btn").on("click",function(e){i=
f(e.preventDefault(),e.stopPropagation(),JSON.parse(localStorage.getItem("w=
atchHistoryIDs")||"[]").length&gt;0){var t;t=3D()=3D&gt;{localStorage.setIt=
em("watchHistoryIDs","[]"),displayHistory(),updateHistoryBadge()},_.find("h=
3").text("Clear History"),_.find("p").text("Are you sure you want to clear =
your viewing history?"),$("#confirm-clear-btn").off("click").on("click",()=
=3D&gt;{t(),_.removeClass("is-visible")}),_.addClass("is-visible")}}),funct=
ion(){!function e(){$("select.goog-te-combo").length&gt;0?function e(){let =
t=3D$(".language-btn"),a=3D$("#langMenu");if(!t.length||!a.length)return;le=
t i=3D[{code:"af",name:"Afrikaans",country:"za"},{code:"sq",name:"Albanian"=
,country:"al"},{code:"ar",name:"Arabic",country:"sa"},{code:"hy",name:"Arme=
nian",country:"am"},{code:"az",name:"Azerbaijani",country:"az"},{code:"eu",=
name:"Basque",country:"es"},{code:"be",name:"Belarusian",country:"by"},{cod=
e:"bn",name:"Bengali",country:"bd"},{code:"bs",name:"Bosnian",country:"ba"}=
,{code:"bg",name:"Bulgarian",country:"bg"},{code:"ca",name:"Catalan",countr=
y:"es"},{code:"zh-CN",name:"Chinese (Simplified)",country:"cn"},{code:"zh-T=
W",name:"Chinese (Traditional)",country:"tw"},{code:"hr",name:"Croatian",co=
untry:"hr"},{code:"cs",name:"Czech",country:"cz"},{code:"da",name:"Danish",=
country:"dk"},{code:"nl",name:"Dutch",country:"nl"},{code:"en",name:"Englis=
h",country:"us"},{code:"et",name:"Estonian",country:"ee"},{code:"tl",name:"=
Filipino",country:"ph"},{code:"fi",name:"Finnish",country:"fi"},{code:"fr",=
name:"French",country:"fr"},{code:"gl",name:"Galician",country:"es"},{code:=
"ka",name:"Georgian",country:"ge"},{code:"de",name:"German",country:"de"},{=
code:"el",name:"Greek",country:"gr"},{code:"gu",name:"Gujarati",country:"in=
"},{code:"ht",name:"Haitian Creole",country:"ht"},{code:"iw",name:"Hebrew",=
country:"il"},{code:"hi",name:"Hindi",country:"in"},{code:"hu",name:"Hungar=
ian",country:"hu"},{code:"is",name:"Icelandic",country:"is"},{code:"id",nam=
e:"Indonesian",country:"id"},{code:"ga",name:"Irish",country:"ie"},{code:"i=
t",name:"Italian",country:"it"},{code:"ja",name:"Japanese",country:"jp"},{c=
ode:"kn",name:"Kannada",country:"in"},{code:"ko",name:"Korean",country:"kr"=
},{code:"la",name:"Latin",country:"va"},{code:"lv",name:"Latvian",country:"=
lv"},{code:"lt",name:"Lithuanian",country:"lt"},{code:"mk",name:"Macedonian=
",country:"mk"},{code:"ms",name:"Malay",country:"my"},{code:"mt",name:"Malt=
ese",country:"mt"},{code:"no",name:"Norwegian",country:"no"},{code:"fa",nam=
e:"Persian",country:"ir"},{code:"pl",name:"Polish",country:"pl"},{code:"pt"=
,name:"Portuguese",country:"pt"},{code:"ro",name:"Romanian",country:"ro"},{=
code:"ru",name:"Russian",country:"ru"},{code:"sr",name:"Serbian",country:"r=
s"},{code:"sk",name:"Slovak",country:"sk"},{code:"sl",name:"Slovenian",coun=
try:"si"},{code:"es",name:"Spanish",country:"es"},{code:"sw",name:"Swahili"=
,country:"ke"},{code:"sv",name:"Swedish",country:"se"},{code:"ta",name:"Tam=
il",country:"in"},{code:"te",name:"Telugu",country:"in"},{code:"th",name:"T=
hai",country:"th"},{code:"tr",name:"Turkish",country:"tr"},{code:"uk",name:=
"Ukrainian",country:"ua"},{code:"ur",name:"Urdu",country:"pk"},{code:"vi",n=
ame:"Vietnamese",country:"vn"},{code:"cy",name:"Welsh",country:"gb"},{code:=
"yi",name:"Yiddish",country:"il"}];t.on("click",function(e){e.preventDefaul=
t(),e.stopPropagation();let t;(t=3D$("#langList")).children().length&gt;0||=
i.forEach(e=3D&gt;{let i=3D$('&lt;li&gt;&lt;a href=3D"#"&gt;&lt;img class=
=3D"flag-icon"/&gt;&lt;span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;');i.find(=
"span").text(e.name),i.find("a").on("click",function(t){t.preventDefault();=
var i,n=3D$("select.goog-te-combo");n.length&amp;&amp;(n.val(e.code),docume=
nt.createEvent?((i=3Ddocument.createEvent("HTMLEvents")).initEvent("change"=
,!0,!0),n[0].dispatchEvent(i)):((i=3Ddocument.createEventObject()).eventTyp=
e=3D"change",n[0].fireEvent("on"+i.eventType,i))),a.removeClass("lang-menu-=
visible")}),t.append(i)}),a.toggleClass("lang-menu-visible")}),$("#langSear=
ch").on("input",function(){let e=3D$(this).val().toLowerCase();$("#langList=
 li").each(function(){$(this).css("display",$(this).text().toLowerCase().in=
cludes(e)?"":"none")})}),$(document).on("click",function(e){$(e.target).clo=
sest(".language-btn, .language-dropdown-menu").length||a.removeClass("lang-=
menu-visible")})}():setTimeout(e,150)}();let e=3DsetInterval(function(){let=
 t=3Ddocument.querySelector(".goog-te-gadget-icon");if(t){t.style.display=
=3D"none",t.style.visibility=3D"hidden";let a=3Dt.parentElement;a&amp;&amp;=
a.classList.contains("skiptranslate")&amp;&amp;(a.style.display=3D"none",a.=
style.visibility=3D"hidden"),clearInterval(e)}},200),t,a;t=3D$(".notificati=
on-badge, .mobile-notification-badge"),(a=3D$("#header-notifications .noti-=
item").length)&gt;0?t.text(a).show():t.hide();var i=3D$(".head-container, .=
mobile-header-container");function n(){i.toggleClass("scrolled",$(window).s=
crollTop()&gt;50)}if(n(),$(window).on("scroll",n),window.innerWidth&gt;1023=
){let s=3Dfunction(e){if(!e.hasClass("continue-watching-item")){var t=3De.f=
ind("a").attr("href");if(t){_&amp;&amp;_.abort(),new URL(t).pathname;var a=
=3De[0].getBoundingClientRect(),i=3Dwindow.scrollX+a.left+a.width/2-d.width=
()/2,n=3Dwindow.scrollY+a.top+a.height/2-d.height()/2;i&lt;10&amp;&amp;(i=
=3D10),i+d.width()&gt;$(window).width()-10&amp;&amp;(i=3D$(window).width()-=
d.width()-10),d.addClass("loading").css({top:n+"px",left:i+"px",display:"bl=
ock"}).addClass("visible"),d.off("click.cardnav"),d.on("click.cardnav",func=
tion(e){if($(e.target).closest(".action-buttons, .more-info-link").length&g=
t;0)return;let t=3D$("#preview-more-link").attr("href");t&amp;&amp;"#"!=3D=
=3Dt&amp;&amp;(window.location.href=3Dt)}),d.data("current-url")!=3D=3Dt?($=
("#preview-title, #preview-synopsis, #preview-rating, #preview-year, #previ=
ew-genres").empty(),$("#preview-image").css("background-image",""),_=3D$.ge=
t(t,function(a){if(c&amp;&amp;c.is(e)){var i=3D$("&lt;div/&gt;").html(a),n=
=3Di.find("#extra-meta"),s=3Di.find("span.slider-backdrop").text().trim(),l=
=3Di.find('img[alt=3D"poster"]').attr("src"),r=3Di.find(".entry-title").tex=
t().trim(),o=3Di.find(".post-body p").first().text().trim(),_=3Dn.find(".me=
ta-rating").text().trim(),p=3Dn.find(".meta-year").text().trim(),m=3Dn.find=
(".meta-genre").map(function(){return $(this).text().trim()}).get(),u=3D$("=
#preview-popup .watchlist-btn");_&amp;&amp;$("#preview-rating").html('\n   =
             &lt;svg xmlns=3D"http://www.w3.org/2000/svg" width=3D"14" heig=
ht=3D"14" fill=3D"currentColor" viewBox=3D"0 0 16 16" style=3D"vertical-ali=
gn: text-bottom; margin-right: 4px;"&gt;\n                    &lt;path d=3D=
"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314=
-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4=
.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.=
592L8 13.187l-4.389 2.256z"/&gt;\n                &lt;/svg&gt; \n          =
  '+_),u.attr({"data-post-id":e.data("post-id"),"data-post-title":r,"data-p=
ost-url":t,"data-post-image":s||l}),$("#preview-image").css("background-ima=
ge","url("+(s||l)+")"),$("#preview-title").text(r),$("#preview-synopsis").t=
ext(o),$("#preview-year").text(p),$("#preview-genres").html(m.map(e=3D&gt;'=
&lt;span class=3D"genre-tag"&gt;'+e+"&lt;/span&gt;").join("")),$("#preview-=
play-btn, #preview-more-link").attr("href",t),d.data("current-url",t).remov=
eClass("loading"),$(document).trigger("abefilm:preview_shown",{$button:u})}=
}).fail(function(e,t){"abort"!=3D=3Dt&amp;&amp;l()})):(d.removeClass("loadi=
ng"),$(document).trigger("abefilm:preview_shown",{$button:$("#preview-popup=
 .watchlist-btn")}))}}},l=3Dfunction(){clearTimeout(r),clearTimeout(o),d.re=
moveClass("visible"),setTimeout(function(){c||d.hide().removeClass("loading=
").data("current-url","")},200)};var r,o,d=3D$("#preview-popup"),c=3Dnull,_=
=3Dnull;$("body").on("mouseenter",".index-post, #preview-popup",function(){=
if(clearTimeout(o),$(this).hasClass("index-post")){var e=3D$(this);c=3De,r=
=3DsetTimeout(function(){c&amp;&amp;c.is(e)&amp;&amp;s(e)},400)}}),$("body"=
).on("mouseleave",".index-post, #preview-popup",function(){clearTimeout(r),=
o=3DsetTimeout(l,200)}),$(document).on("mouseover",function(e){$(e.target).=
closest(".index-post, .preview-card-popup").length||(c=3Dnull,l())})}let p=
=3D$(".head-widget .BlogSearch input"),m=3D$("#search-suggestions-container=
"),u=3D"bloggerSearchHistory",g=3D"bloggerPopularCache",h=3Dnull,v=3D()=3D&=
gt;{m.empty().show(),k(),C()},f=3D()=3D&gt;{m.hide()},y=3De=3D&gt;{$.ajax({=
url:"/feeds/posts/default?alt=3Djson-in-script&amp;q=3D"+encodeURIComponent=
(e)+"&amp;max-results=3D10",type:"get",dataType:"jsonp",success:function(t)=
{let a=3Dt.feed.entry||[];if(m.empty().show(),0=3D=3D=3Da.length){m.html('&=
lt;div class=3D"suggestion-item no-results"&gt;No results&lt;/div&gt;');ret=
urn}m.append('&lt;ul class=3D"suggestions-list"&gt;'+a.map(t=3D&gt;{let a=
=3Dt.title.$t,i=3Da.toLowerCase().indexOf(e.toLowerCase()),n=3Da;if(-1!=3D=
=3Di){let s=3Da.substring(i,i+e.length);n=3Da.substring(0,i)+"&lt;strong&gt=
;"+s+"&lt;/strong&gt;"+a.substring(i+e.length)}return'&lt;li class=3D"sugge=
stion-item"&gt;&lt;a href=3D"'+t.link.find(e=3D&gt;"alternate"=3D=3D=3De.re=
l).href+'"&gt;'+n+"&lt;/a&gt;&lt;/li&gt;"}).join("")+"&lt;/ul&gt;")},error:=
function(){m.html('&lt;div class=3D"no-results"&gt;Error&lt;/div&gt;')}})},=
b=3D()=3D&gt;JSON.parse(localStorage.getItem(u))||[],w=3De=3D&gt;{if(!e.tri=
m())return;let t=3Db().filter(t=3D&gt;t.toLowerCase()!=3D=3De.toLowerCase()=
);t.unshift(e),t.length&gt;3&amp;&amp;(t.length=3D3),localStorage.setItem(u=
,JSON.stringify(t))},k=3D()=3D&gt;{let e=3Db();e.length&gt;0&amp;&amp;m.app=
end('&lt;div class=3D"suggestions-header"&gt;&lt;span&gt;Search history&lt;=
/span&gt;&lt;span class=3D"delete-all-icon" title=3D"Clear"&gt;&lt;svg view=
Box=3D"0 0 24 24"&gt;&lt;path d=3D"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6=
v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/spa=
n&gt;&lt;/div&gt;&lt;ul class=3D"suggestions-list"&gt;'+e.map(e=3D&gt;'&lt;=
li class=3D"suggestion-item history-item"&gt;&lt;a href=3D"/search?q=3D'+en=
codeURIComponent(e)+'" class=3D"history-item-text"&gt;'+e+'&lt;/a&gt;&lt;sp=
an class=3D"remove-history-item" data-term=3D"'+e+'"&gt;&amp;#10005;&lt;/sp=
an&gt;&lt;/li&gt;').join("")+"&lt;/ul&gt;")},C=3D()=3D&gt;{let e=3DsessionS=
torage.getItem(g);if(e){let t=3DJSON.parse(e);if(Date.now()-t.timestamp&lt;=
9e5){L(t.html);return}}$.ajax({url:"/feeds/posts/default?alt=3Djson-in-scri=
pt&amp;max-results=3D7",type:"get",dataType:"jsonp",success:function(e){if(=
!e.feed.entry||0=3D=3D=3De.feed.entry.length)return;let t=3D'&lt;div class=
=3D"suggestions-header"&gt;&lt;span&gt;\uD83D\uDD25 Latest Posts&lt;/span&g=
t;&lt;/div&gt;&lt;ul class=3D"suggestions-list"&gt;'+e.feed.entry.map((e,t)=
=3D&gt;'&lt;li class=3D"suggestion-item popular-item"&gt;&lt;a href=3D"'+e.=
link.find(e=3D&gt;"alternate"=3D=3D=3De.rel).href+'"&gt;&lt;span class=3D"p=
opular-rank '+(t&lt;3?"top-3":"")+'"&gt;'+(t+1)+'&lt;/span&gt;&lt;span clas=
s=3D"popular-title"&gt;'+e.title.$t+"&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;").j=
oin("")+"&lt;/ul&gt;";sessionStorage.setItem(g,JSON.stringify({html:t,times=
tamp:Date.now()})),L(t)}})},L=3De=3D&gt;{b().length&gt;0&amp;&amp;m.append(=
'&lt;div class=3D"suggestions-divider"&gt;&lt;/div&gt;'),m.append(e)};p.on(=
"focus",v).on("keyup",function(){let e=3D$(this).val().trim();if(clearTimeo=
ut(h),e.length&lt;2){v();return}h=3DsetTimeout(()=3D&gt;y(e),300)}),$(docum=
ent).on("click",function(e){$(e.target).closest(".BlogSearch").length||f()}=
),$(".head-widget .BlogSearch form").on("submit",function(){w(p.val())}),m.=
on("click",".remove-history-item",function(e){e.stopPropagation();let t=3Db=
().filter(e=3D&gt;e!=3D=3D$(this).data("term"));localStorage.setItem(u,JSON=
.stringify(t)),v()}),m.on("click",".delete-all-icon",function(e){e.stopProp=
agation(),localStorage.removeItem(u),v()}),$(document).on("click",function(=
e){let t=3D$(e.target),a=3Dt.closest("[data-panel-target]");if(!a.length&am=
p;&amp;!t.closest(".header-dropdown-panel").length){$(".header-dropdown-pan=
el").removeClass("is-visible");return}if(a.length){e.preventDefault(),e.sto=
pPropagation();let i=3Da.data("panel-target"),n=3D$(i),s=3Dn.hasClass("is-v=
isible");$(".header-dropdown-panel").removeClass("is-visible"),s||(n.addCla=
ss("is-visible"),"#notification-panel"=3D=3D=3Di&amp;&amp;$("#notification-=
panel-content").html($("#header-notifications").html()))}}),setTimeout(func=
tion e(){var t=3D$("#celebrity-carousel-widgets"),a=3D$(".celebrity-carouse=
l-wrapper"),i=3Dt.find(".widget.Image");if(i.length&gt;0){var n=3D$('&lt;di=
v class=3D"owl-carousel owl-theme" id=3D"celebrity-carousel"&gt;&lt;/div&gt=
;');if(i.each(function(){var e=3D$(this),t=3De.find(".data-title").text().t=
rim(),a=3De.find(".data-caption").text().trim(),i=3De.find("img").attr("src=
"),s=3De.find("a").attr("href");i&amp;&amp;n.append('&lt;div class=3D"celeb=
rity-item"&gt;&lt;a href=3D"'+(s||"#")+'"&gt;&lt;img class=3D"celebrity-ima=
ge" src=3D"'+i.replace(/\/s\d+(-[a-z0-9]+)*\//,"/s150-c/")+'" alt=3D"'+t+'"=
 loading=3D"lazy" width=3D"100" height=3D"100"/&gt;&lt;span class=3D"celebr=
ity-name"&gt;'+t+"&lt;/span&gt;"+(a?'&lt;span class=3D"celebrity-role"&gt;'=
+a+"&lt;/span&gt;":"")+"&lt;/a&gt;&lt;/div&gt;")}),n.children().length&gt;0=
){a.empty().append(n),n.owlCarousel({loop:!1,margin:16,nav:!0,dots:!1,navTe=
xt:['&lt;svg viewBox=3D"0 0 16 16"&gt;&lt;path d=3D"M11.354 1.646a.5.5 0 0 =
1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6=
a.5.5 0 0 1 .708 0z"/&gt;&lt;/svg&gt;','&lt;svg viewBox=3D"0 0 16 16"&gt;&l=
t;path d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 =
0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&lt;/svg&gt;']=
,responsive:{0:{items:3,margin:12},480:{items:4},768:{items:6},1024:{items:=
8}}});var s=3Da.find(".owl-nav .owl-prev");s.length&amp;&amp;s.removeAttr("=
role").attr("aria-label","Previous items");var l=3Da.find(".owl-nav .owl-ne=
xt");l.length&amp;&amp;l.removeAttr("role").attr("aria-label","Next items")=
}}},200)}(),function e(){var t=3DdecodeURIComponent(window.location.pathnam=
e);if("/"=3D=3D=3Dt){$('#main-menu #LinkList1 .tm-channel a[href=3D"/"]').a=
ddClass("menu_0");return}$("#main-menu #LinkList1 .tm-channel a").each(func=
tion(){var e=3D$(this).attr("href");"/"!=3D=3De&amp;&amp;t=3D=3D=3De?$(this=
).addClass("menu_0"):$(this).removeClass("menu_0")})}(),"object"=3D=3Dtypeo=
f blogger&amp;&amp;blogger.widgets&amp;&amp;blogger.widgets.makePostsExpand=
able&amp;&amp;blogger.widgets.makePostsExpandable(),"undefined"!=3Dtypeof _=
WidgetManager&amp;&amp;_WidgetManager.init&amp;&amp;_WidgetManager.init(),e=
(),function e(){let t=3D$("#dynamic-main-slider");if(!t.length)return;let a=
=3Dnull,i=3Dwindow.location.pathname;if(i.startsWith("/search/label/")&amp;=
&amp;(a=3DdecodeURIComponent(i.split("/search/label/")[1].replace(/\/$/,"")=
)),"/"!=3D=3Di&amp;&amp;!a){t.closest(".content-slider").hide();return}let =
n=3Da?"slider_cache_"+a:"slider_cache_homepage",s=3Da?"/feeds/posts/default=
/-/"+encodeURIComponent(a)+"?alt=3Djson-in-script&amp;max-results=3D5":"/fe=
eds/posts/default?alt=3Djson-in-script&amp;max-results=3D5",l=3D'&lt;svg wi=
dth=3D"60px" height=3D"60px" viewBox=3D"0 0 60 60"&gt;&lt;g stroke=3D"none"=
 stroke-width=3D"1" fill=3D"none" fill-rule=3D"evenodd"&gt;&lt;circle fill=
=3D"#FFFFFF" cx=3D"30" cy=3D"30" r=3D"30"&gt;&lt;/circle&gt;&lt;path d=3D"M=
29.3055556,17.25 C29.6890866,17.25 30,17.5609134 30,17.9444444 L30,19.38888=
89 C30,19.77242 29.6890866,20.0833333 29.3055556,20.0833333 L22.9166667,20.=
0833333 L22.9166667,39.724 L28.6396082,34.9562398 C29.3713667,34.346441 30.=
4106369,34.302884 31.1863257,34.8255686 L31.3603918,34.9562398 L37.0833333,=
39.7254167 L37.0833333,33.5277778 C37.0833333,33.1442467 37.3942467,32.8333=
333 37.7777778,32.8333333 L39.2222222,32.8333333 C39.6057533,32.8333333 39.=
9166667,33.1442467 39.9166667,33.5277778 L39.9166667,41.2376789 C39.9166667=
,42.4112764 38.9652794,43.3627321 37.7916667,43.3627321 C37.3655561,43.3627=
321 36.9510168,43.2346313 36.6007867,42.9976358 L36.4312748,42.8701491 L30,=
37.50975 L23.5687252,42.8701491 C22.7234861,43.574515 21.4929682,43.5114751=
 20.7233835,42.7579578 L20.5758631,42.5980707 C20.3030814,42.2707327 20.136=
0669,41.8703014 20.0939154,41.4495208 L20.0833333,41.2376789 L20.0833333,20=
.0833333 C20.0833333,18.5896541 21.2391602,17.3659327 22.7052117,17.2577715=
 L22.9166667,17.25 L29.3055556,17.25 Z M39.2222222,17.25 C39.6057533,17.25 =
39.9166667,17.5609134 39.9166667,17.9444444 L39.9163333,21.499 L43.4722222,=
21.5 C43.8557533,21.5 44.1666667,21.8109134 44.1666667,22.1944444 L44.16666=
67,23.6388889 C44.1666667,24.02242 43.8557533,24.3333333 43.4722222,24.3333=
333 L39.9163333,24.333 L39.9166667,27.8888889 C39.9166667,28.27242 39.60575=
33,28.5833333 39.2222222,28.5833333 L37.7777778,28.5833333 C37.3942467,28.5=
833333 37.0833333,28.27242 37.0833333,27.8888889 L37.0823333,24.333 L33.527=
7778,24.3333333 C33.1442467,24.3333333 32.8333333,24.02242 32.8333333,23.63=
88889 L32.8333333,22.1944444 C32.8333333,21.8109134 33.1442467,21.5 33.5277=
778,21.5 L37.0823333,21.499 L37.0833333,17.9444444 C37.0833333,17.5609134 3=
7.3942467,17.25 37.7777778,17.25 L39.2222222,17.25 Z" fill=3D"#111319" fill=
-rule=3D"nonzero"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt;';function r(e){t.h=
tml(e),function e(){if("function"!=3Dtypeof window.isItemInWatchlist){setTi=
meout(e,100);return}$("#dynamic-main-slider .slider-btn.add-btn").each(func=
tion(){let e=3D$(this),t=3De.attr("data-post-id");window.isItemInWatchlist(=
t)?e.addClass("added").html('&lt;svg viewBox=3D"0 0 60 60"&gt;&lt;circle fi=
ll=3D"#fff" cx=3D"30" cy=3D"30" r=3D"30"&gt;&lt;/circle&gt;&lt;path d=3D"M2=
9.3,17.25C29.7,17.25,30,17.56,30,17.94V19.38C30,19.77,29.7,20.08,29.3,20.08=
H22.91V39.72L28.64,34.95C29.37,34.34,30.41,34.3,31.18,34.82L37.08,39.72V33.=
52C37.08,33.14,37.39,32.83,37.77,32.83H39.22C39.6,32.83,39.91,33.14,39.91,3=
3.52V41.23C39.91,42.41,38.96,43.36,37.79,43.36C37.36,43.36,36.95,43.23,36.6=
,42.99L30,37.5L23.56,42.87C22.72,43.57,21.49,43.51,20.72,42.75C20.3,42.27,2=
0.13,41.87,20.08,41.23V20.08C20.08,18.58,21.23,17.36,22.7,17.25H29.3Z" fill=
=3D"#111319" fill-rule=3D"nonzero"&gt;&lt;/path&gt;&lt;path d=3D"M33 23L37 =
27L44 18" stroke=3D"#111319" stroke-width=3D"3" fill=3D"none" stroke-lineca=
p=3D"round" stroke-linejoin=3D"round"&gt;&lt;/path&gt;&lt;/svg&gt;'):e.remo=
veClass("added").html(l)})}(),t.owlCarousel({items:1,loop:!0,autoplay:!0,au=
toplayTimeout:5e3,dots:!0,nav:!0,startPosition:0,navText:['&lt;button type=
=3D"button" class=3D"owl-prev" aria-label=3D"Previous Slide"&gt;&lt;svg xml=
ns=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24"&gt;&lt;path d=3D"M1=
5.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/&gt;&lt;/svg&gt;&lt;/button&gt=
;','&lt;button type=3D"button" class=3D"owl-next" aria-label=3D"Next Slide"=
&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 24 24"&gt;&=
lt;path d=3D"M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/&gt;&lt;/svg&gt=
;&lt;/button&gt;']}),t.trigger("refresh.owl.carousel");let a=3Dfunction(e){=
var t=3D$(e.target).find(".owl-item").eq(e.item.index);t.add(t.next()).add(=
t.prev()).each(function(){var e=3D$(this).find(".lazy-bg");e.length&amp;&am=
p;e.data("bg-image")&amp;&amp;e.css("background-image","url("+e.data("bg-im=
age")+")").removeClass("lazy-bg")})};t.on("initialized.owl.carousel transla=
ted.owl.carousel",a)}function o(){$.ajax({url:s,type:"get",dataType:"jsonp"=
,success:function(e){if(!e.feed.entry||0=3D=3D=3De.feed.entry.length){t.clo=
sest(".content-slider").hide();return}var a=3De.feed.entry.map(function(e,t=
){var a=3De.link.find(e=3D&gt;"alternate"=3D=3De.rel).href;if(!a)return $.D=
eferred().reject().promise();var i=3De.id.$t.split(".post-")[1];return $.ge=
t(a).then(function(e){var n=3D$(e),s=3Dn.find("span.slider-backdrop").text(=
).trim()||n.find('img[alt=3D"poster"]').attr("src");s&amp;&amp;=3Ds.replace=
(/\/s\d+(-[a-z0-9]+)*\//,"/w1280-h720-c/").replace(/\/t\/p\/w\d+[^/]*\//,"/=
t/p/original/");var r=3Dn.find(".entry-title").text().trim(),o=3Dn.find(".p=
ost-body p").first().text().trim(),d=3Dn.find(".meta-title-logo"),c=3Dd.fin=
d("img").attr("src")||d.text().trim(),_=3D{titleLogo:c,rating:n.find(".meta=
-rating").text().trim(),year:n.find(".meta-year").text().trim(),pg:n.find("=
.meta-pg").text().trim(),country:n.find(".meta-country").text().trim(),genr=
es:n.find(".meta-genre").map(function(){return $(this).text().trim()}).get(=
),imdb:n.find(".meta-imdb").text().trim(),language:n.find(".meta-language")=
.text().trim()},p=3D'&lt;div class=3D"slider-item"&gt;'+(0=3D=3D=3Dt?'&lt;d=
iv class=3D"slider-background-image" style=3D"background-image: url(\''+s+"=
');\"&gt;&lt;/div&gt;":'&lt;div class=3D"slider-background-image lazy-bg" d=
ata-bg-image=3D"'+s+'"&gt;&lt;/div&gt;')+'&lt;div class=3D"slider-shadow-ov=
erlay"&gt;&lt;/div&gt;&lt;div class=3D"slider-info-container"&gt;';return _=
.titleLogo&amp;&amp;_.titleLogo.startsWith("http")?p+=3D'&lt;img src=3D"'+_=
.titleLogo.replace("/original/","/w300/")+'" alt=3D"'+r+' Logo" class=3D"sl=
ider-title-logo"&gt;':p+=3D'&lt;h2 class=3D"slider-title-main"&gt;'+r+"&lt;=
/h2&gt;",p+=3D'&lt;div class=3D"slider-styled-badge"&gt;&lt;span class=3D"b=
adge-part-one"&gt;TOP '+(t+1)+'&lt;/span&gt;&lt;span class=3D"badge-part-tw=
o"&gt;Featured&lt;/span&gt;&lt;/div&gt;',p+=3D'&lt;div class=3D"slider-meta=
-line"&gt;',_.imdb?p+=3D'&lt;span class=3D"meta-item imdb-rating"&gt;&lt;di=
v class=3D"imdb-logo-bg"&gt;&lt;/div&gt;'+_.imdb+"&lt;/span&gt;":_.rating&a=
mp;&amp;(p+=3D'&lt;span class=3D"meta-item star"&gt;=E2=98=85 '+_.rating+"&=
lt;/span&gt;"),_.year&amp;&amp;(p+=3D'&lt;span class=3D"meta-item"&gt;'+_.y=
ear+"&lt;/span&gt;"),_.pg&amp;&amp;(p+=3D'&lt;span class=3D"meta-item"&gt;'=
+_.pg+"&lt;/span&gt;"),_.country&amp;&amp;(p+=3D'&lt;span class=3D"meta-ite=
m"&gt;'+_.country+"&lt;/span&gt;"),p+=3D"&lt;/div&gt;",p+=3D'&lt;div class=
=3D"slider-meta-line genres"&gt;',_.genres.length&gt;0&amp;&amp;_.genres.fo=
rEach(function(e){p+=3D'&lt;span class=3D"genre-tag"&gt;'+e+"&lt;/span&gt;"=
}),p+=3D"&lt;/div&gt;",p+=3D'&lt;p class=3D"slider-caption"&gt;'+(o?o.subst=
ring(0,150)+"...":"")+"&lt;/p&gt;",p+=3D'&lt;div class=3D"slider-buttons"&g=
t;&lt;a href=3D"'+a+'" class=3D"slider-btn play-btn" title=3D"Watch Now"&gt=
;&lt;svg viewBox=3D"0 0 60 60"&gt;&lt;g fill=3D"none" fill-rule=3D"evenodd"=
 stroke=3D"none" stroke-width=3D"1"&gt;&lt;circle cx=3D"30" cy=3D"30" fill=
=3D"transparent" r=3D"30"&gt;&lt;/circle&gt;&lt;path d=3D"M35.7461509,22.49=
42263 L45.1405996,36.5858994 C46.059657,37.9644855 45.6871354,39.8270935 44=
.3085493,40.7461509 C43.8157468,41.0746859 43.2367237,41.25 42.6444487,41.2=
5 L23.8555513,41.25 C22.198697,41.25 20.8555513,39.9068542 20.8555513,38.25=
 C20.8555513,37.657725 21.0308654,37.078702 21.3594004,36.5858994 L30.75384=
91,22.4942263 C31.6729065,21.1156403 33.5355145,20.7431187 34.9141006,21.66=
2176 C35.2436575,21.8818806 35.5264463,22.1646695 35.7461509,22.4942263 Z" =
fill=3D"#FFFFFF" transform=3D"translate(33.250000, 30.000000) rotate(-270.0=
00000) translate(-33.250000, -30.000000) "&gt;&lt;/path&gt;&lt;/g&gt;&lt;/s=
vg&gt;&lt;/a&gt;&lt;a href=3D"#" class=3D"slider-btn add-btn" title=3D"Add =
to Watchlist" aria-label=3D"Add to Watchlist" data-post-id=3D"'+i+'" data-p=
ost-title=3D"'+r+'" data-post-url=3D"'+a+'" data-post-image=3D"'+s+'"&gt;'+=
l+"&lt;/a&gt;&lt;/div&gt;",p+=3D"&lt;/div&gt;&lt;/div&gt;"})});$.when.apply=
($,a).done(function(){var e=3DArray.prototype.slice.call(arguments).join(""=
);let t=3D{timestamp:Date.now(),slidesHtml:e};localStorage.setItem(n,JSON.s=
tringify(t)),r(e)})},error:function(){t.closest(".content-slider").hide()}}=
)}let d=3DlocalStorage.getItem(n);if(d){let c=3DJSON.parse(d);r(c.slidesHtm=
l),Date.now()-c.timestamp&gt;864e5&amp;&amp;o()}else t.html('&lt;div class=
=3D"slider-item is-loading"&gt;&lt;div class=3D"slider-background-image"&gt=
;&lt;/div&gt;&lt;/div&gt;').owlCarousel({items:1}),o()}(),i(),$(window).on(=
"scroll resize",i),$(document).on("translated.owl.carousel changed.owl.caro=
usel",".owl-carousel",i),$(document).on("translated.owl.carousel",".owl-car=
ousel",function(){i()}),setTimeout(i,200),a("#Blog1"),$("#Blog1 .index-post=
-wrap").addClass("posts-loaded"),s(),function e(){var t=3D$("#PopularPosts1=
");if(!t.length)return;var a=3Dt.find(".popular-posts-skeleton"),n=3Dt.find=
("#popular-posts-carousel");if(!n.length||!a.length)return;var s=3D"popular=
_posts_top10_html_cache_v2";function r(e){if(!(e.parent().find(".header-car=
ousel-nav").length&gt;0)){var t=3De.attr("id");e.parent().append('\n       =
     &lt;div class=3D"header-carousel-nav"&gt;\n                &lt;button =
class=3D"header-nav-btn prev" aria-label=3D"Previous" data-target=3D"#'+t+'=
"&gt;&lt;svg fill=3D"none" viewBox=3D"0 0 24 24"&gt;&lt;path stroke-linecap=
=3D"round" stroke-linejoin=3D"round" d=3D"M15 18l-6-6 6-6"/&gt;&lt;/svg&gt;=
&lt;/button&gt;\n                &lt;button class=3D"header-nav-btn next" a=
ria-label=3D"Next" data-target=3D"#'+t+'"&gt;&lt;svg fill=3D"none" viewBox=
=3D"0 0 24 24"&gt;&lt;path stroke-linecap=3D"round" stroke-linejoin=3D"roun=
d" d=3D"M9 6l6 6-6 6"/&gt;&lt;/svg&gt;&lt;/button&gt;\n            &lt;/div=
&gt;')}}let d=3D{loop:!1,margin:16,nav:!1,dots:!1,smartSpeed:250,responsive=
:{0:{autoWidth:!0,margin:8},768:{items:4,margin:16},1024:{items:6}},onIniti=
alized:l,onResized:l};try{let c=3DlocalStorage.getItem(s);if(c){let _=3DJSO=
N.parse(c);if(Date.now()-_.timestamp&lt;216e5){n.html(_.html),a.remove(),n.=
show(),n.owlCarousel(d),r(n),i(),o(),"function"=3D=3Dtypeof applySafeMode&a=
mp;&amp;applySafeMode();return}}}catch(p){console.error("Could not read pop=
ular posts cache.",p)}!function e(){var l=3Dn.children().get();if(0=3D=3D=
=3Dl.length){t.hide();return}Promise.all(l.map(function(e){var t=3D$(e),a=
=3Dt.data("post-id");return a?fetch("/feeds/posts/default/"+a+"?alt=3Djson"=
).then(e=3D&gt;e.ok?e.json():Promise.reject("Failed to fetch")).then(e=3D&g=
t;{if(!e.entry)return;e.entry.category&amp;&amp;e.entry.category.some(e=3D&=
gt;"Mature"=3D=3D=3De.term)&amp;&amp;t.addClass("is-mature");let a=3De.entr=
y.category&amp;&amp;e.entry.category.find(e=3D&gt;"Mature"!=3D=3De.term)?.t=
erm||"",i=3Dt.find(".entry-label");a?i.text(a).show():i.hide();let n=3Ddocu=
ment.createElement("div");n.innerHTML=3De.entry.content.$t;let s=3D(n.query=
Selector('img[alt=3D"poster"]')?.src||"https://resources.blogblog.com/img/b=
lank.gif").replace(/\/s\d+(-[a-z0-9]+)*\//,"/w400-h600-c-rw/");t.find(".ent=
ry-image").attr("data-image",s)}).catch(()=3D&gt;{}):Promise.resolve()})).f=
inally(function(){let e=3Dn.html();localStorage.setItem(s,JSON.stringify({h=
tml:e,timestamp:Date.now()})),a.remove(),n.show(),n.owlCarousel(d),r(n),set=
Timeout(i,100),o(),"function"=3D=3Dtypeof applySafeMode&amp;&amp;applySafeM=
ode()})}()}(),function e(){let t=3D$("#HTML8");if(!t.length)return;let a=3D=
t.find(".trending-filter-dropdown"),i=3Dt.find(".trending-filter-btn"),s=3D=
t.find("#trending-filter-label"),l=3Dt.find(".trending-filter-menu"),r=3Dt.=
find(".widget-content");function o(e,t){s.text(t),n(r,{label:"_all_"=3D=3D=
=3De?null:e,maxResults:10,style:"top-list",sortBy:"rating"})}i.on("click",f=
unction(e){e.stopPropagation(),a.toggleClass("is-open")}),l.on("click","li"=
,function(){let e=3D$(this),t=3De.data("label"),i=3De.text();l.find("li.act=
ive").removeClass("active"),e.addClass("active"),o(t,i),a.removeClass("is-o=
pen")}),$(document).on("click",function(){a.hasClass("is-open")&amp;&amp;a.=
removeClass("is-open")}),l.find('li[data-label=3D"_all_"]').addClass("activ=
e"),o("_all_","All")}(),function e(){let t=3D$(".widget.HTML h3.title:conta=
ins('Continue Watching')").closest(".widget");if(!t.length)return;let a=3Dt=
.find(".widget-header");a.length&amp;&amp;0=3D=3D=3Da.find(".header-control=
s").length&amp;&amp;a.append("\n            &lt;div class=3D'header-control=
s'&gt;\n              &lt;a class=3D'carousel-view-switch' href=3D'/p/histo=
ry.html'&gt;\n                &lt;span&gt;View All&lt;/span&gt;\n          =
      &lt;svg fill=3D'none' viewBox=3D'0 0 24 24'&gt;&lt;path stroke=3D'cur=
rentColor' stroke-linecap=3D'round' stroke-linejoin=3D'round' stroke-width=
=3D'2' d=3D'M9 18l6-6-6-6'/&gt;&lt;/svg&gt;\n              &lt;/a&gt;\n    =
        &lt;/div&gt;");let n=3Dt.find(".widget-content"),s=3DJSON.parse(loc=
alStorage.getItem("watchHistoryIDs")||"[]");if(0=3D=3D=3Ds.length){t.hide()=
;return}t.show();let l=3D$(".sidebar-logo .logo-text").text().trim()||"Load=
ing...",r=3D'&lt;div class=3D"popular-posts-skeleton"&gt;'+Array.from({leng=
th:Math.min(s.length,6)},()=3D&gt;'&lt;div class=3D"skeleton-post-item"&gt;=
&lt;div class=3D"skeleton-image-placeholder"&gt;&lt;span class=3D"skeleton-=
card-text"&gt;'+l+'&lt;/span&gt;&lt;/div&gt;&lt;div class=3D"skeleton-title=
-placeholder"&gt;&lt;/div&gt;&lt;/div&gt;').join("")+"&lt;/div&gt;";n.html(=
r),new IntersectionObserver((e,a)=3D&gt;{e.forEach(e=3D&gt;{e.isIntersectin=
g&amp;&amp;(Promise.all(s.slice(0,10).map(e=3D&gt;$.ajax({url:"/feeds/posts=
/default/"+e+"?alt=3Djson-in-script",dataType:"jsonp"}).then(t=3D&gt;{if(!t=
.entry)return window.removeFromHistory(e),null;let a=3Dt.entry,i=3Ddocument=
.createElement("div");i.innerHTML=3Da.content.$t;let n=3D(i.querySelector('=
img[alt=3D"poster"]')?.src||"").replace(/\/s\d+(-[a-z0-9]+)*\//,"/s400-rw/"=
),s=3D$(i).find("#extra-meta .meta-type").text().trim(),l=3D$(i).find("#ext=
ra-meta .meta-rating").text().trim(),r=3D$(i).find("#extra-meta .meta-year"=
).text().trim(),o=3DJSON.parse(localStorage.getItem("abefilmWatchProgress")=
||"{}"),d=3Di.querySelector("#episodes-data ul[data-server-name]"),c=3Dd?d.=
querySelectorAll("a").length:0,_=3Do["post-"+e]||0;return{id:e,title:a.titl=
e.$t,url:a.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel).href,imageUrl:n||"h=
ttps://resources.blogblog.com/img/blank.gif",type:"TV Series"=3D=3D=3Ds?"TV=
":"MOVIE",totalEpisodes:c,currentEpisode:_+1,progressPercent:c&gt;0?Math.mi=
n(100,(_+1)/c*100):100,rating:l,year:r}}).fail(()=3D&gt;(window.removeFromH=
istory(e),null)))).then(e=3D&gt;{let a=3De.filter(Boolean);if(0=3D=3D=3Da.l=
ength){t.hide();return}let s=3D"";a.forEach(e=3D&gt;{let t=3D"",a=3D"";e.pr=
ogressPercent&gt;0&amp;&amp;e.totalEpisodes&gt;0&amp;&amp;(t=3D'&lt;div cla=
ss=3D"cw-progress-info"&gt;&lt;div class=3D"cw-progress-meta"&gt;&lt;span c=
lass=3D"ep-current"&gt;EP '+e.currentEpisode+'&lt;/span&gt;&lt;span class=
=3D"ep-count"&gt;&lt;span class=3D"current"&gt;'+e.currentEpisode+"&lt;/spa=
n&gt; / "+e.totalEpisodes+'&lt;/span&gt;&lt;/div&gt;&lt;div class=3D"progre=
ss-bar-container"&gt;&lt;div class=3D"progress-bar-fill" style=3D"width: '+=
e.progressPercent+'%;"&gt;&lt;/div&gt;&lt;/div&gt;',a=3D'&lt;div class=3D"p=
rogress-bar-overlay"&gt;&lt;div class=3D"progress-bar-fill" style=3D"width:=
 '+e.progressPercent+'%;"&gt;&lt;/div&gt;&lt;/div&gt;'),s+=3D'\n    &lt;art=
icle class=3D"index-post continue-watching-item" data-post-id=3D"'+e.id+'"&=
gt;\n                                &lt;a class=3D"entry-image-wrap" href=
=3D"'+e.url+'" title=3D"'+e.title+'"&gt;\n                                 =
   &lt;span class=3D"entry-image" data-image=3D"'+e.imageUrl+'"&gt;&lt;/spa=
n&gt;\n                                    &lt;span class=3D"cw-type-tag"&g=
t;'+e.type+'&lt;/span&gt;\n                                    &lt;button c=
lass=3D"cw-remove-btn" title=3D"Remove from History"&gt;&amp;times;&lt;/but=
ton&gt;\n                                    '+a+'\n                       =
             &lt;div class=3D"thumb-meta-overlay"&gt;\n                    =
                    '+(e.rating?'\n                                        =
    &lt;span class=3D"thumb-rating"&gt;\n                                  =
              &lt;svg xmlns=3D"http://www.w3.org/2000/svg" viewBox=3D"0 0 1=
6 16" fill=3D"currentColor" style=3D"width: 11px; height: 11px; vertical-al=
ign: text-bottom; margin-right: 4px;"&gt;\n                                =
                    &lt;path d=3D"M3.612 15.443c-.386.198-.824-.149-.746-.5=
92l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.1=
97-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.=
356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/&gt;\n        =
                                        &lt;/svg&gt; \n                    =
                            '+e.rating+"\n                                 =
           &lt;/span&gt;\n                                        ":"&lt;sp=
an&gt;&lt;/span&gt;")+"\n                                        "+(e.year?=
'&lt;span class=3D"thumb-year"&gt;'+e.year+"&lt;/span&gt;":"")+'\n         =
                           &lt;/div&gt;\n                                &l=
t;/a&gt;\n                                &lt;div class=3D"entry-header"&gt=
;\n                                    &lt;h2 class=3D"entry-title"&gt;&lt;=
a href=3D"'+e.url+'"&gt;'+e.title+"&lt;/a&gt;&lt;/h2&gt;\n                 =
                   "+t+"\n                                &lt;/div&gt;\n   =
                         &lt;/article&gt;"}),n.html('&lt;div class=3D"index=
-post-wrap owl-carousel owl-theme" id=3D"continue-watching-carousel"&gt;'+s=
+"&lt;/div&gt;"),i(),n.find(".owl-carousel").owlCarousel({loop:!1,margin:10=
,nav:!0,dots:!1,navText:['&lt;svg fill=3D"none" viewBox=3D"0 0 24 24"&gt;&l=
t;path stroke=3D"currentColor" stroke-linecap=3D"round" stroke-linejoin=3D"=
round" stroke-width=3D"2" d=3D"M15 18l-6-6 6-6"/&gt;&lt;/svg&gt;','&lt;svg =
fill=3D"none" viewBox=3D"0 0 24 24"&gt;&lt;path stroke=3D"currentColor" str=
oke-linecap=3D"round" stroke-linejoin=3D"round" stroke-width=3D"2" d=3D"M9 =
6l6 6-6 6"/&gt;&lt;/svg&gt;'],responsive:{0:{autoWidth:!0,margin:8,stagePad=
ding:16},768:{items:4,margin:10,stagePadding:0},1024:{items:6,stagePadding:=
0}}})}),a.unobserve(e.target))})},{rootMargin:"0px 0px 300px 0px"}).observe=
(t[0]),n.on("click",".cw-remove-btn",function(e){e.preventDefault(),e.stopP=
ropagation();var a=3D$(this).closest(".continue-watching-item"),i=3Da.data(=
"post-id");i&amp;&amp;"function"=3D=3Dtypeof window.removeFromHistory&amp;&=
amp;window.removeFromHistory(i);var n=3D$("#continue-watching-carousel"),s=
=3Dn.data("owl.carousel");if(s&amp;&amp;s.items().length&gt;0){if(1=3D=3D=
=3Ds.items().length)t.hide();else{var l=3Da.closest(".owl-item").index();n.=
trigger("remove.owl.carousel",[l]).trigger("refresh.owl.carousel")}}})}(),f=
unction e(){var t=3D$(".homepage-filter-buttons");if(!t.length)return;var a=
=3D$("#filtered-posts-container");if(!a.length)return;var n=3D$("#filtered-=
posts-wrap"),s=3D$(".sidebar-logo .logo-text").text().trim();let l=3D["Acti=
on","Action &amp; Adventure","Adventure","Animation","Comedy","Crime","Docu=
mentary","Drama","Family","Fantasy","History","Horror","Kids","Music","Myst=
ery","Reality","Romance","Sci-Fi &amp; Fantasy","Science Fiction","Thriller=
","War","Western"];function r(e){if(e){var t=3D"/search/label/"+encodeURICo=
mponent(e)+"?max-results=3D12";a.show();for(var r=3D"",d=3D0;d&lt;6;d++)r+=
=3D'&lt;div class=3D"skeleton-post-item"&gt;&lt;div class=3D"skeleton-image=
-placeholder"&gt;&lt;span class=3D"skeleton-card-text"&gt;'+s+'&lt;/span&gt=
;&lt;/div&gt;&lt;div class=3D"skeleton-title-placeholder"&gt;&lt;/div&gt;&l=
t;/div&gt;';n.addClass("is-loading").html(r),n.find(".owl-carousel").length=
&amp;&amp;n.find(".owl-carousel").trigger("destroy.owl.carousel"),$.get(t,f=
unction(e){var t=3D$(e).find("#Blog1 .index-post");if(0=3D=3D=3Dt.length){n=
.removeClass("is-loading").html('&lt;p class=3D"error-msg"&gt;No posts foun=
d for this genre.&lt;/p&gt;');return}var a=3Dt.map(function(){var e=3D$(thi=
s),t=3De.find("a.entry-image-wrap").attr("href"),a=3De.data("post-id");retu=
rn t&amp;&amp;a?$.ajax({url:"/feeds/posts/default/"+a+"?alt=3Djson",dataTyp=
e:"json"}).then(function(e){if(!e.entry)return null;let i=3Ddocument.create=
Element("div");i.innerHTML=3De.entry.content.$t;let n=3D(i.querySelector('i=
mg[alt=3D"poster"]')?.src||"").replace(/\/s\d+(-[a-z0-9]+)*\//,"/s400-rw/")=
,s=3D(e.entry.category||[]).map(e=3D&gt;e.term).find(e=3D&gt;l.includes(e))=
||"";return{id:a,link:t,title:e.entry.title.$t,label:s,imageUrl:n||"https:/=
/resources.blogblog.com/img/blank.gif"}}):$.Deferred().reject().promise()})=
.get();$.when.apply($,a).done(function(){var e=3D"",t=3DArray.prototype.sli=
ce.call(arguments);t.forEach(function(t){if(t&amp;&amp;t.link&amp;&amp;t.im=
ageUrl){var a=3Dt.label?'&lt;span class=3D"entry-label"&gt;'+t.label+"&lt;/=
span&gt;":"";e+=3D'&lt;article class=3D"index-post" data-post-id=3D"'+t.id+=
'"&gt;&lt;a class=3D"entry-image-wrap" href=3D"'+t.link+'" title=3D"'+t.tit=
le+'"&gt;&lt;span class=3D"entry-image" data-image=3D"'+t.imageUrl+'"&gt;&l=
t;/span&gt;'+a+'&lt;div class=3D"thumb-meta-overlay"&gt;&lt;span class=3D"t=
humb-meta thumb-duration"&gt;&lt;/span&gt;&lt;span class=3D"thumb-meta thum=
b-rating"&gt;&lt;/span&gt;&lt;/div&gt;&lt;/a&gt;&lt;div class=3D"entry-head=
er"&gt;&lt;h2 class=3D"entry-title"&gt;&lt;a href=3D"'+t.link+'"&gt;'+t.tit=
le+'&lt;/a&gt;&lt;/h2&gt;&lt;div class=3D"card-sub-meta"&gt;&lt;div class=
=3D"sub-meta-left"&gt;&lt;span class=3D"sub-meta-type"&gt;&lt;/span&gt;&lt;=
span class=3D"sub-meta-year"&gt;&lt;/span&gt;&lt;/div&gt;&lt;div class=3D"s=
ub-meta-right"&gt;&lt;span class=3D"sub-meta-cc"&gt;&lt;/span&gt;&lt;span c=
lass=3D"sub-meta-mic"&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&=
lt;/article&gt;'}});var a=3D'&lt;div class=3D"index-post-wrap owl-carousel =
owl-theme"&gt;'+e+"&lt;/div&gt;";n.removeClass("is-loading").html(a),i(),o(=
),n.find(".owl-carousel").owlCarousel({loop:!1,margin:16,nav:!0,navText:['&=
lt;button type=3D"button" class=3D"owl-prev" aria-label=3D"Previous Posts"&=
gt;&lt;svg viewBox=3D"0 0 16 16"&gt;&lt;path d=3D"M11.354 1.646a.5.5 0 0 1 =
0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.=
5.5 0 0 1 .708 0z"/&gt;&lt;/svg&gt;&lt;/button&gt;','&lt;button type=3D"but=
ton" class=3D"owl-next" aria-label=3D"Next Posts"&gt;&lt;svg viewBox=3D"0 0=
 16 16"&gt;&lt;path d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .7=
08l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&=
lt;/svg&gt;&lt;/button&gt;'],dots:!1,responsive:{0:{items:3,margin:8},768:{=
items:4,margin:16},1024:{items:6}}})}).fail(function(){n.removeClass("is-lo=
ading").html('&lt;p class=3D"error-msg"&gt;Error loading post details.&lt;/=
p&gt;')})}).fail(function(){n.removeClass("is-loading").html('&lt;p class=
=3D"error-msg"&gt;Could not load posts.&lt;/p&gt;')})}}t.on("click",".filte=
r-btn",function(){var e=3D$(this);if(!e.hasClass("active")){var a=3De.data(=
"label");t.find(".filter-btn").removeClass("active"),e.addClass("active"),r=
(a)}});var d=3Dt.find(".filter-btn.active").data("label");d&amp;&amp;r(d)}(=
);let p,m,u;if(p=3Ddocument.querySelectorAll('.widget-content[data-shortcod=
e*=3D"{lazyPosts}"]'),m=3D(e,t)=3D&gt;{e.forEach(e=3D&gt;{if(e.isIntersecti=
ng){let a=3De.target,s=3D$(a),l=3Ds.data("shortcode");if(t.unobserve(a),!l)=
return;let r=3D{label:(l.match(/\$label=3D\{([^}]+)\}/)||[])[1],maxResults:=
parseInt((l.match(/\$results=3D\{([^}]+)\}/)||[])[1],10)||6,style:(l.match(=
/\$style=3D\{([^}]+)\}/)||[])[1]||"nowrap",sortBy:(l.match(/\$sortBy=3D\{([=
^}]+)\}/)||[])[1]};var d=3Ds.closest(".widget").find(".widget-header");if(d=
.length&gt;0&amp;&amp;r.label&amp;&amp;"filtered-switch"!=3D=3Dr.style&amp;=
&amp;0=3D=3D=3Dd.find(".carousel-view-switch").length){var c=3D"/p/leaderbo=
ard.html?filter=3D"+encodeURIComponent(r.label);0=3D=3D=3Dd.find(".header-c=
ontrols").length&amp;&amp;d.append('&lt;div class=3D"header-controls"&gt;&l=
t;/div&gt;'),d.find(".header-controls").append('&lt;a class=3D"carousel-vie=
w-switch" href=3D"'+c+'"&gt;&lt;span&gt;View All&lt;/span&gt;&lt;svg fill=
=3D"none" viewBox=3D"0 0 24 24"&gt;&lt;path stroke=3D"currentColor" stroke-=
linecap=3D"round" stroke-linejoin=3D"round" stroke-width=3D"2" d=3D"M9 18l6=
-6-6-6"/&gt;&lt;/svg&gt;&lt;/a&gt;')}"filtered-switch"=3D=3D=3Dr.style?func=
tion e(t,a){let n=3D[],s=3Dt.find(".switch-grid"),l=3Dt.find(".switch-butto=
n"),r=3Da.maxResults||6,d=3Da.label;function c(){if(0=3D=3D=3Dn.length)retu=
rn;let e=3D[...n].sort(()=3D&gt;.5-Math.random()).slice(0,r).map(e=3D&gt;{l=
et t=3De.isMature?" is-mature":"",a=3De.label?'&lt;span class=3D"entry-labe=
l"&gt;'+e.label+"&lt;/span&gt;":"";return'\n            &lt;article class=
=3D"index-post'+t+'" data-post-id=3D"'+e.id+'"&gt;\n              &lt;a cla=
ss=3D"entry-image-wrap" href=3D"'+e.url+'" title=3D"'+e.title+'"&gt;\n     =
           &lt;span class=3D"entry-image" data-image=3D"'+e.imageUrl+'"&gt;=
&lt;/span&gt;\n                '+a+'\n                &lt;div class=3D"thum=
b-meta-overlay"&gt;\n                  &lt;span class=3D"thumb-meta thumb-d=
uration"&gt;&lt;/span&gt;\n                  &lt;span class=3D"thumb-meta t=
humb-rating"&gt;&lt;/span&gt;\n                &lt;/div&gt;\n              =
&lt;/a&gt;\n              &lt;div class=3D"entry-header"&gt;\n             =
   &lt;h2 class=3D"entry-title"&gt;&lt;a href=3D"'+e.url+'"&gt;'+e.title+'&=
lt;/a&gt;&lt;/h2&gt;\n                &lt;div class=3D"card-sub-meta"&gt;\n=
                  &lt;div class=3D"sub-meta-left"&gt;&lt;span class=3D"sub-=
meta-type"&gt;&lt;/span&gt;&lt;span class=3D"sub-meta-year"&gt;&lt;/span&gt=
;&lt;/div&gt;\n                  &lt;div class=3D"sub-meta-right"&gt;&lt;sp=
an class=3D"sub-meta-cc"&gt;&lt;/span&gt;&lt;span class=3D"sub-meta-mic"&gt=
;&lt;/span&gt;&lt;/div&gt;\n                &lt;/div&gt;\n              &lt=
;/div&gt;\n            &lt;/article&gt;'}).join("");s.html(e),i(),o()}l.on(=
"click",c),function e(){if(!d){s.html('&lt;p class=3D"error-msg"&gt;Error: =
No label specified for this widget.&lt;/p&gt;');return}$.ajax({url:"/feeds/=
posts/default/-/"+encodeURIComponent(d)+"?alt=3Djson-in-script&amp;max-resu=
lts=3D50",dataType:"jsonp",success:function(e){if(e.feed.entry){let t=3D["A=
ction","Action &amp; Adventure","Adventure","Animation","Comedy","Crime","D=
ocumentary","Drama","Family","Fantasy","History","Horror","Kids","Music","M=
ystery","Reality","Romance","Sci-Fi &amp; Fantasy","Science Fiction","Thril=
ler","War","Western"];(n=3De.feed.entry.map(function(e){let a=3Ddocument.cr=
eateElement("div");a.innerHTML=3De.content.$t;let i=3D($(a).find('img[alt=
=3D"poster"]').attr("src")||"https://resources.blogblog.com/img/blank.gif")=
.replace(/\/s\d+(-[a-z0-9]+)*\//,"/w400-rw/"),n=3D(e.category||[]).map(e=3D=
&gt;e.term).find(e=3D&gt;t.includes(e))||"";return{id:e.id.$t.split(".post-=
")[1],url:e.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel).href,title:e.title=
.$t,imageUrl:i,label:n,isMature:!!e.category&amp;&amp;e.category.some(e=3D&=
gt;"Mature"=3D=3D=3De.term)}})).length&gt;r&amp;&amp;l.show(),c()}else s.ht=
ml('&lt;p class=3D"error-msg"&gt;No posts found for this category.&lt;/p&gt=
;')},error:function(){s.html('&lt;p class=3D"error-msg"&gt;Error loading po=
sts.&lt;/p&gt;')}})}()}(s,r):n(s,r)}})},u=3Dnew IntersectionObserver(m,{roo=
tMargin:"0px 0px 250px 0px"}),p.forEach(e=3D&gt;{let t=3D$(e),a=3Dt.data("s=
hortcode")||"",i=3D(a.match(/\$style=3D\{([^}]+)\}/)||[])[1]||"nowrap";var =
n,s=3D$(".sidebar-logo .logo-text").text().trim()||"ABEFILM",l=3D"";if("wid=
e-list"=3D=3D=3Di){n=3D3,l=3D'&lt;div class=3D"popular-posts-skeleton"&gt;'=
;for(var r=3D0;r&lt;n;r++)l+=3D'\n            &lt;div class=3D"skeleton-wid=
e-item"&gt;\n                &lt;div class=3D"skeleton-wide-thumb"&gt;\n   =
                 &lt;div class=3D"skeleton-rank-badge"&gt;&lt;/div&gt;\n   =
             &lt;/div&gt;\n                &lt;div class=3D"skeleton-wide-i=
nfo"&gt;\n                    &lt;div class=3D"skeleton-line title"&gt;&lt;=
/div&gt;\n                    &lt;div class=3D"skeleton-meta-group"&gt;\n  =
                      &lt;span class=3D"skeleton-meta-tag"&gt;&lt;/span&gt;=
\n                        &lt;span class=3D"skeleton-meta-tag"&gt;&lt;/span=
&gt;\n                        &lt;span class=3D"skeleton-meta-tag"&gt;&lt;/=
span&gt;\n                    &lt;/div&gt;\n                    &lt;div cla=
ss=3D"skeleton-genre-group"&gt;\n                        &lt;span class=3D"=
skeleton-genre-tag"&gt;&lt;/span&gt;\n                        &lt;span clas=
s=3D"skeleton-genre-tag"&gt;&lt;/span&gt;\n                    &lt;/div&gt;=
\n                    &lt;div class=3D"skeleton-synopsis-group"&gt;\n      =
                  &lt;div class=3D"skeleton-line synopsis-line"&gt;&lt;/div=
&gt;\n                        &lt;div class=3D"skeleton-line synopsis-line =
short"&gt;&lt;/div&gt;\n                    &lt;/div&gt;\n                &=
lt;/div&gt;\n            &lt;/div&gt;';l+=3D"&lt;/div&gt;"}else if("ranked-=
grid-alt"=3D=3D=3Di){n=3DparseInt((a.match(/\$results=3D\{([^}]+)\}/)||[])[=
1],10)||9,l=3D'&lt;div class=3D"popular-posts-skeleton"&gt;';for(var r=3D0;=
r&lt;n;r++)l+=3D'&lt;div class=3D"skeleton-ranked-item"&gt;&lt;div class=3D=
"skeleton-ranked-thumb"&gt;&lt;/div&gt;&lt;div class=3D"skeleton-ranked-ran=
k"&gt;&lt;/div&gt;&lt;div class=3D"skeleton-ranked-info"&gt;&lt;div class=
=3D"skeleton-line title"&gt;&lt;/div&gt;&lt;div class=3D"skeleton-line tags=
"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';l+=3D"&lt;/div&gt;"}else if("fil=
tered-switch"=3D=3D=3Di){let o=3DparseInt((a.match(/\$results=3D\{([^}]+)\}=
/)||[])[1],10)||6,d=3D"";for(let c=3D0;c&lt;o;c++)d+=3D'&lt;div class=3D"sk=
eleton-post-item"&gt;&lt;div class=3D"skeleton-image-placeholder"&gt;&lt;sp=
an class=3D"skeleton-card-text"&gt;'+s+'&lt;/span&gt;&lt;/div&gt;&lt;div cl=
ass=3D"skeleton-title-placeholder"&gt;&lt;/div&gt;&lt;/div&gt;';l=3D'\n    =
            &lt;div class=3D"filtered-switch-widget"&gt;\n                 =
 &lt;div class=3D"index-post-wrap switch-grid"&gt;'+d+'&lt;/div&gt;\n      =
            &lt;div class=3D"switch-footer"&gt;\n                    &lt;bu=
tton class=3D"switch-button" style=3D"display: none;"&gt;\n                =
      &lt;svg fill=3D"currentColor" height=3D"18" viewBox=3D"0 0 24 24" wid=
th=3D"18"&gt;&lt;path d=3D"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12=
A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 1=
2,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4=
L17.65,6.35Z"&gt;&lt;/path&gt;&lt;/svg&gt;\n                      &lt;span&=
gt;Switch&lt;/span&gt;\n                    &lt;/button&gt;\n              =
    &lt;/div&gt;\n                &lt;/div&gt;'}else{n=3Dwindow.innerWidth&=
lt;768?3:window.innerWidth&lt;1024?4:6,l=3D'&lt;div class=3D"popular-posts-=
skeleton is-carousel"&gt;';for(var r=3D0;r&lt;n;r++)l+=3D'&lt;div class=3D"=
skeleton-post-item"&gt;&lt;div class=3D"skeleton-image-placeholder"&gt;&lt;=
span class=3D"skeleton-card-text"&gt;'+s+'&lt;/span&gt;&lt;/div&gt;&lt;div =
class=3D"skeleton-title-placeholder"&gt;&lt;/div&gt;&lt;/div&gt;';l+=3D"&lt=
;/div&gt;"}t.html(l),u.observe(e)}),function e(){var t=3D$("#abefilm-load-m=
ore-link");if(t.length){var n=3D$("#blog-pager .loading"),l=3D$("#blog-page=
r .no-more"),r=3D$("#Blog1 .index-post-wrap");n.hide(),l.hide(),t.on("click=
",function(e){e.preventDefault();var d=3D$(this).attr("data-load");if(!d||"=
"=3D=3D=3Dd.trim()){t.hide(),l.css("display","flex");return}t.hide(),n.show=
(),$.ajax({url:d,success:function(e){var n=3D$(e).find("#Blog1 .index-post"=
),d=3D$(e).find("#abefilm-load-more-link");n.length&gt;0&amp;&amp;(r.append=
(n),a("#Blog1"),i(),s(),o()),d.length&gt;0&amp;&amp;d.attr("data-load")?(t.=
attr("data-load",d.attr("data-load")),t.css("display","flex"),l.hide()):(t.=
hide(),l.css("display","flex"))},error:function(){t.css("display","flex"),l=
.hide()},complete:function(){n.hide()}})}),t.attr("data-load")&amp;&amp;""!=
=3D=3Dt.attr("data-load").trim()?(t.css("display","flex"),l.hide()):(t.hide=
(),l.css("display","flex"))}}(),function e(){let t=3D$(".homepage-filter-bu=
ttons");if(!t.length)return;let a=3Dt.find(".scroll-area"),i=3Dt.find(".pre=
v-btn"),n=3Dt.find(".next-btn"),s=3Da[0];function l(){setTimeout(function()=
{let e=3Ds.scrollLeft,t=3Ds.scrollWidth,a=3Ds.clientWidth;i.css("visibility=
",e&gt;5?"visible":"hidden"),n.css("visibility",t-e-a&gt;5?"visible":"hidde=
n")},150)}l(),a.on("scroll",l),$(window).on("resize",l),n.on("click",functi=
on(){a.animate({scrollLeft:s.scrollLeft+s.clientWidth},300)}),i.on("click",=
function(){a.animate({scrollLeft:s.scrollLeft-s.clientWidth},300)})}(),o(),=
function e(){if($("body").find(".item-post").length){var t=3D$(".recommenda=
tion-posts-grid");if(t.length){var a=3D$("#abefilm-related-posts .widget-co=
ntent").text().trim().match(/\$results=3D\{([^}]+)\}/),n=3Da?parseInt(a[1],=
10):6,s=3Dt.data("label"),l=3DString(t.data("postId"));if(!s){$(".recommend=
ation-section").hide();return}var r=3D"/feeds/posts/default/-/"+encodeURICo=
mponent(s)+"?alt=3Djson-in-script&amp;max-results=3D"+(n+1);$.ajax({url:r,t=
ype:"get",dataType:"jsonp",success:function(e){if(!e.feed||!e.feed.entry||e=
.feed.entry.length&lt;1){$(".recommendation-section").hide();return}var a=
=3De.feed.entry.filter(e=3D&gt;e.id.$t.split(".post-")[1]!=3D=3Dl).slice(0,=
n);if(0=3D=3D=3Da.length){$(".recommendation-section").hide();return}var s=
=3Da.map(function(e){let t=3De.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel)=
.href,a=3De.title.$t,i=3De.id.$t.split(".post-")[1],n=3Ddocument.createElem=
ent("div");n.innerHTML=3De.content.$t;let s=3D(n.querySelector('img[alt=3D"=
poster"]')?.src||"").replace(/\/s\d+(-[a-z0-9]+)*\//,"/s400-rw/"),l=3De.cat=
egory&amp;&amp;e.category.length&gt;0?e.category[0].term:"";return'&lt;arti=
cle class=3D"index-post'+(e.category&amp;&amp;e.category.some(e=3D&gt;"Matu=
re"=3D=3D=3De.term)?" is-mature":"")+'" data-post-id=3D"'+i+'"&gt;\n       =
            &lt;a class=3D"entry-image-wrap" href=3D"'+t+'" title=3D"'+a+'"=
&gt;\n                       &lt;span class=3D"entry-image" data-image=3D"'=
+s+'"&gt;&lt;/span&gt;\n                       '+(l?'&lt;span class=3D"entr=
y-label"&gt;'+l+"&lt;/span&gt;":"")+' \n                       &lt;div clas=
s=3D"thumb-meta-overlay"&gt;\n                           &lt;span class=3D"=
thumb-meta thumb-duration"&gt;&lt;/span&gt;\n                           &lt=
;span class=3D"thumb-meta thumb-rating"&gt;&lt;/span&gt;\n                 =
      &lt;/div&gt;\n                   &lt;/a&gt;\n                   &lt;d=
iv class=3D"entry-header"&gt;\n                       &lt;h2 class=3D"entry=
-title"&gt;&lt;a href=3D"'+t+'"&gt;'+a+'&lt;/a&gt;&lt;/h2&gt;\n            =
           &lt;div class=3D"card-sub-meta"&gt;\n                           =
&lt;div class=3D"sub-meta-left"&gt;&lt;span class=3D"sub-meta-type"&gt;&lt;=
/span&gt;&lt;span class=3D"sub-meta-year"&gt;&lt;/span&gt;&lt;/div&gt;\n   =
                        &lt;div class=3D"sub-meta-right"&gt;&lt;span class=
=3D"sub-meta-cc"&gt;&lt;/span&gt;&lt;span class=3D"sub-meta-mic"&gt;&lt;/sp=
an&gt;&lt;/div&gt;\n                       &lt;/div&gt;\n                  =
 &lt;/div&gt;\n               &lt;/article&gt;'}).join("");t.removeClass("i=
s-loading").html(s),i(),o(),applySafeMode()},error:function(){$(".recommend=
ation-section").hide()}})}}}(),$('div[data-shortcode*=3D"$style=3D"]').each=
(function(){var e=3D$(this).data("shortcode");e.includes("$style=3D{grid}")=
?$(this).parent(".widget").addClass("abefilm-static-grid"):e.includes("$sty=
le=3D{nowrap}")?$(this).parent(".widget").addClass("abefilm-carousel-widget=
"):e.includes("$style=3D{wide-list}")?$(this).parent(".widget").addClass("a=
befilm-wide-list"):e.includes("$style=3D{ranked-grid-alt}")&amp;&amp;$(this=
).parent(".widget").addClass("abefilm-ranked-grid")}),$("#back-top").on("cl=
ick",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},5=
00)}),$(window).on("scroll",function(){$(this).scrollTop()&gt;300?$("#back-=
top").addClass("on"):$("#back-top").removeClass("on")}),"function"=3D=3Dtyp=
eof updateWatchlistBadge&amp;&amp;updateWatchlistBadge(),"function"=3D=3Dty=
peof updateHistoryBadge&amp;&amp;updateHistoryBadge(),"function"=3D=3Dtypeo=
f updateNotificationCount&amp;&amp;updateNotificationCount(),$(".leaderboar=
d-page-container").length){let g=3Dfunction(){w&amp;&amp;w.disconnect();let=
 e=3Ddocument.querySelectorAll("img.lazy-load:not(.loaded)");"IntersectionO=
bserver"in window?(w=3Dnew IntersectionObserver((e,t)=3D&gt;{e.forEach(e=3D=
&gt;{if(e.isIntersecting){let a=3De.target;a.src=3Da.dataset.src,a.onload=
=3D()=3D&gt;a.classList.add("loaded"),a.classList.remove("lazy-load"),t.uno=
bserve(a)}})},{rootMargin:"0px 0px 250px 0px"}),e.forEach(e=3D&gt;w.observe=
(e))):e.forEach(e=3D&gt;e.src=3De.dataset.src)},h=3Ddocument.querySelector(=
".leaderboard-filters");if(h){let v=3D!1,f,y;h.addEventListener("mousedown"=
,e=3D&gt;{v=3D!0,h.classList.add("active"),f=3De.pageX-h.offsetLeft,y=3Dh.s=
crollLeft,e.preventDefault()}),h.addEventListener("mouseleave",()=3D&gt;{v=
=3D!1,h.classList.remove("active")}),h.addEventListener("mouseup",()=3D&gt;=
{v=3D!1,h.classList.remove("active")}),h.addEventListener("mousemove",e=3D&=
gt;{if(!v)return;e.preventDefault();let t=3D(e.pageX-h.offsetLeft-f)*2;h.sc=
rollLeft=3Dy-t})}let b=3D$(".leaderboard-filters");$(".leaderboard-list"),[=
{name:"Latest Post",type:"latest"},{name:"Hot Updates",type:"trending"},{na=
me:"Top Rating",type:"top-rating"},{name:"Movie",type:"label"},{name:"TV Se=
ries",type:"label"},{name:"Action",type:"label"},{name:"Romance",type:"labe=
l"},{name:"Horror",type:"label"},{name:"Comedy",type:"label"},{name:"Thrill=
er",type:"label"},{name:"Fantasy",type:"label"},{name:"Animation",type:"lab=
el"},{name:"Adventure",type:"label"},{name:"Crime",type:"label"},{name:"Doc=
umentary",type:"label"},{name:"Drama",type:"label"},{name:"Family",type:"la=
bel"},{name:"History",type:"label"},{name:"Music",type:"label"},{name:"Myst=
ery",type:"label"},{name:"Science Fiction",type:"label"},{name:"War",type:"=
label"},{name:"Western",type:"label"}].forEach(e=3D&gt;{b.append('&lt;butto=
n class=3D"filter-btn" data-type=3D"'+e.type+'" data-name=3D"'+e.name+'"&gt=
;'+e.name+"&lt;/button&gt;")});let w;async function k(e){let t=3D1,a=3D!1,i=
=3D!1,n=3D[],s=3D$(".leaderboard-list"),l=3D$(".leaderboard-header");async =
function r(t){if(a||i)return;if(a=3D!0,0=3D=3D=3Ds.find(".loader").length&a=
mp;&amp;s.append('&lt;div class=3D"loader" style=3D"margin: 20px auto; grid=
-column: 1 / -1;"&gt;&lt;/div&gt;'),"top-rating"=3D=3D=3De.type&amp;&amp;n.=
length&gt;0){let l=3Dt-1,r=3Dl+10,d=3Dn.slice(l,r);r&gt;=3Dn.length&amp;&am=
p;(i=3D!0),o(d,t),a=3D!1;return}let c=3D"",_=3D"top-rating"=3D=3D=3De.type?=
150:10;c=3D"/feeds/posts/default"+(("label"=3D=3D=3De.type||"top-rating"=3D=
=3D=3De.type)&amp;&amp;e.name?"/-/"+encodeURIComponent(e.name):"")+"?alt=3D=
json-in-script&amp;max-results=3D"+_+"&amp;start-index=3D"+t+("latest"=3D=
=3D=3De.type||"trending"=3D=3D=3De.type?"&amp;orderby=3D"+("latest"=3D=3D=
=3De.type?"published":"updated"):"");try{let p=3D(await $.ajax({url:c,dataT=
ype:"jsonp"})).feed.entry||[];p.length&lt;_&amp;&amp;"top-rating"!=3D=3De.t=
ype&amp;&amp;(i=3D!0);let m=3D(await Promise.all(p.map(e=3D&gt;$.get(e.link=
.find(e=3D&gt;"alternate"=3D=3D=3De.rel).href).then(t=3D&gt;{let a=3D$(t),i=
=3Da.find("#extra-meta");return{title:e.title.$t,url:e.link.find(e=3D&gt;"a=
lternate"=3D=3D=3De.rel).href,imageUrl:a.find('img[alt=3D"poster"]').attr("=
src"),backdropUrl:a.find("span.slider-backdrop").text().trim(),rating:parse=
Float(i.find(".meta-rating").text().trim())||0,year:i.find(".meta-year").te=
xt().trim(),genres:i.find(".meta-genre").map((e,t)=3D&gt;$(t).text().trim()=
).get(),synopsis:a.find("#overview-data").text().trim()}}).fail(()=3D&gt;nu=
ll)))).filter(Boolean);if("top-rating"=3D=3D=3De.type){m.sort((e,t)=3D&gt;t=
.rating-e.rating);let u=3D(n=3Dm).slice(0,10);o(u,1),10&gt;=3Dn.length&amp;=
&amp;(i=3D!0)}else o(m,t)}catch(g){console.error("Error fetching leaderboar=
d data:",g),s.find(".loader").remove()}finally{a=3D!1}}function o(e,a){if(s=
.find(".loader").remove(),0=3D=3D=3De.length&amp;&amp;1=3D=3D=3Da){s.html('=
&lt;p style=3D"text-align:center; padding: 40px 0; grid-column: 1 / -1;"&gt=
;No posts found for this category.&lt;/p&gt;');return}let i=3D"";e.forEach(=
(e,t)=3D&gt;{i+=3D'\n                &lt;a href=3D"'+e.url+'" class=3D"lead=
erboard-item"&gt;\n                    &lt;div class=3D"rank-number"&gt;'+(=
a+t)+'&lt;/div&gt;\n                    &lt;div class=3D"item-thumb"&gt;&lt=
;img class=3D"lazy-load" src=3D"data:image/gif;base64,R0lGODlhAQABAIAAAP///=
wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=3D=3D" data-src=3D"'+e.imageUrl+'" al=
t=3D"'+e.title+'"/&gt;&lt;/div&gt;\n                    &lt;div class=3D"it=
em-info"&gt;\n                        &lt;h4 class=3D"item-title"&gt;'+e.ti=
tle+'&lt;/h4&gt;\n                        &lt;div class=3D"item-meta"&gt;\n=
                            '+(e.rating?'&lt;span class=3D"rating"&gt;=E2=
=AD=90 '+e.rating.toFixed(1)+"&lt;/span&gt;":"")+"\n                       =
     "+(e.year?"&lt;span&gt;\xb7&lt;/span&gt;&lt;span&gt;"+e.year+"&lt;/spa=
n&gt;":"")+'\n                            &lt;span class=3D"item-genres"&gt=
;'+e.genres.slice(0,2).join(" \xb7 ")+'&lt;/span&gt;\n                     =
   &lt;/div&gt;\n                        &lt;p class=3D"item-synopsis"&gt;'=
+e.synopsis+"&lt;/p&gt;\n                    &lt;/div&gt;\n                =
&lt;/a&gt;"}),s.append(i),t=3Da+e.length,"function"=3D=3Dtypeof g&amp;&amp;=
g()}$(window).off("scroll.leaderboard"),s.html(""),await r(1),setTimeout(()=
=3D&gt;{let e=3Ds.find(".leaderboard-item:first");e.length&amp;&amp;$.get(e=
.attr("href")).then(e=3D&gt;{let t=3D$(e).find("span.slider-backdrop").text=
().trim();t&amp;&amp;l.css("background-image","url("+t+")")})},500),$(windo=
w).on("scroll.leaderboard",function(){!a&amp;&amp;!i&amp;&amp;s.is(":visibl=
e")&amp;&amp;$(window).scrollTop()+$(window).height()&gt;=3D$(document).hei=
ght()-400&amp;&amp;r(t)})}b.on("click",".filter-btn",function(){let e=3D$(t=
his),t=3D{name:e.data("name"),type:e.data("type")};JSON.stringify(t)!=3D=3D=
JSON.stringify(null)&amp;&amp;(b.find(".active").removeClass("active"),e.ad=
dClass("active"),e[0].scrollIntoView({behavior:"smooth",inline:"center",blo=
ck:"nearest"}),k(t))});let C=3Dnew URLSearchParams(window.location.search).=
get("filter"),L=3D!1;if(C){let x=3D$('.filter-btn[data-name*=3D"'+decodeURI=
Component(C)+'"]');x.length&amp;&amp;(x.trigger("click"),L=3D!0)}L||b.find(=
".filter-btn").first().trigger("click")}}),document.addEventListener("DOMCo=
ntentLoaded",t),function(){let e=3D"abefilm_favorites",t=3D()=3D&gt;JSON.pa=
rse(localStorage.getItem(e)||"[]"),a=3Dt=3D&gt;localStorage.setItem(e,JSON.=
stringify(t)),i=3De=3D&gt;t().includes(String(e));function n(e){let t=3D$(e=
);i(t.attr("data-post-id"))?(t.addClass("favorited").attr("title","Remove f=
rom Favorites"),t.html('&lt;svg viewBox=3D"0 0 24 24"&gt;&lt;path d=3D"M12 =
21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81=
 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-=
8.55 11.54L12 21.35z"/&gt;&lt;/svg&gt;&lt;span&gt;Favorited&lt;/span&gt;'))=
:(t.removeClass("favorited").attr("title","Add to Favorites"),t.html('&lt;s=
vg viewBox=3D"0 0 24 24"&gt;&lt;path d=3D"M16.5 3c-1.74 0-3.41.81-4.5 2.09C=
10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 2=
1.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.5=
5l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.5=
7 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-=
7.9 10.05z"/&gt;&lt;/svg&gt;&lt;span&gt;Favorite&lt;/span&gt;'))}function s=
(){$(".favorite-btn").each(function(){let e=3D$(this);if(!e.attr("data-post=
-id")){let t=3De.siblings(".add-list-btn");e.attr("data-post-id",t.attr("da=
ta-post-id"))}n(this)})}$(document).on("click",".favorite-btn",function(e){=
e.preventDefault();let s=3D$(this).attr("data-post-id");if(!s)return;let l=
=3Dt();i(s)?l=3Dl.filter(e=3D&gt;e!=3D=3DString(s)):l.unshift(String(s)),a(=
l),$('.favorite-btn[data-post-id=3D"'+s+'"]').each(function(){n(this)})}),$=
(document).ready(function(){s()}),$(document).on("abefilm:postDataReady",fu=
nction(){s()})}(),document.addEventListener("DOMContentLoaded",function(){l=
et e=3Ddocument.getElementById("dynamic-share-btn");if(!e)return;let t=3Ddo=
cument.getElementById("share-fallback-modal");if(t){let a=3Dt.querySelector=
(".share-modal-close"),i=3Dt.querySelector("#share-copy-btn"),n=3Dt.querySe=
lector("#share-url-input"),s=3D()=3D&gt;t.classList.remove("is-visible");a.=
addEventListener("click",s),t.addEventListener("click",e=3D&gt;{e.target=3D=
=3D=3Dt&amp;&amp;s()}),i.addEventListener("click",()=3D&gt;{n.select(),docu=
ment.execCommand("copy"),i.textContent=3D"Copied!",setTimeout(()=3D&gt;{i.t=
extContent=3D"Copy"},2e3)})}e.addEventListener("click",async e=3D&gt;{e.pre=
ventDefault();let a=3Ddocument.title,i=3Dwindow.location.href;if(navigator.=
share)try{await navigator.share({title:a,text:a,url:i}),console.log("Conten=
t shared successfully")}catch(n){console.error("Error sharing:",n)}else t?o=
penFallbackModal(a,i):console.warn("Share API not supported and fallback mo=
dal not found.")})}),document.addEventListener("DOMContentLoaded",function(=
){let e=3Ddocument.getElementById("trailer-btn"),t=3Ddocument.getElementByI=
d("trailer-modal");if(!e||!t)return;let a=3Dt.querySelector("iframe"),i=3Dt=
.querySelector(".trailer-modal-close"),n=3D()=3D&gt;{let e=3Ddocument.getEl=
ementById("source-data-container");if(!e){alert("Trailer data not found.");=
return}let i=3De.querySelector("#trailer-data");if(!i||!i.textContent.trim(=
)){alert("Trailer not available for this item.");return}let n=3Di.textConte=
nt.trim();n+=3D(n.includes("?")?"&amp;":"?")+"autoplay=3D1",a.setAttribute(=
"src",n),t.classList.add("is-visible")},s=3D()=3D&gt;{t.classList.remove("i=
s-visible"),a.setAttribute("src","")};e.addEventListener("click",e=3D&gt;{e=
.preventDefault(),n()}),i.addEventListener("click",s),t.addEventListener("c=
lick",e=3D&gt;{e.target=3D=3D=3Dt&amp;&amp;s()})}),document.addEventListene=
r("DOMContentLoaded",function(){let e=3D(e,t)=3D&gt;{let a=3Ddocument.getEl=
ementById(e),i=3Ddocument.getElementById(t);!a&amp;&amp;i&amp;&amp;(a=3Di.c=
losest(".trigger-rating-link, .action-btn"));let n=3Ddocument.getElementByI=
d("post-review-data");if(!a||!n)return;let s=3D"sb_rated_"+n.getAttribute("=
data-post-id");function l(){if(!i)return;let e=3Dnull!=3D=3DlocalStorage.ge=
tItem(s);i.textContent=3De?"My Rating":"Rate now"}l(),a.addEventListener("c=
lick",function(e){e.preventDefault();let t=3Ddocument.getElementById("revie=
w-system");if(t){if(window.innerWidth&lt;=3D767&amp;&amp;document.body.clas=
sList.contains("item-view")){let a=3Ddocument.querySelector('.mobile-tab-bt=
n[data-tab-target=3D"#comment-tab-content"]');a&amp;&amp;!a.classList.conta=
ins("active")&amp;&amp;a.click(),setTimeout(()=3D&gt;{t.scrollIntoView({beh=
avior:"smooth",block:"center"})},100)}else t.scrollIntoView({behavior:"smoo=
th",block:"center"})}});let r=3Ddocument.getElementById("review-summary-wra=
pper");r&amp;&amp;new MutationObserver(l).observe(r,{childList:!0,subtree:!=
0})};e("rating-shortcut-btn","rating-shortcut-text"),e("mobile-rating-trigg=
er","rating-trigger-text")}),document.addEventListener("DOMContentLoaded",f=
unction(){let e=3Ddocument.querySelector(".share-btn");if(!e)return;let t=
=3De.querySelectorAll(".share-icon-wrapper");if(0=3D=3D=3Dt.length)return;l=
et a=3D0;function i(){t.forEach(e=3D&gt;{e.classList.remove("is-active","is=
-next")});let e=3Dt[a],i=3Dt[(a+1)%t.length];e.classList.add("is-active"),i=
.classList.add("is-next"),a=3D(a+1)%t.length}i(),setInterval(i,3e3)}),docum=
ent.addEventListener("DOMContentLoaded",function(){let e=3Ddocument.body,t=
=3Ddocument.getElementById("open-theme-settings-modal"),a=3Ddocument.getEle=
mentById("theme-settings-overlay"),i=3Ddocument.getElementById("ts-close-bt=
n"),n=3Ddocument.getElementById("light-mode-btn"),s=3Ddocument.getElementBy=
Id("dark-mode-btn"),l=3Ddocument.querySelectorAll("#gradient-colors .ts-swa=
tch"),r=3Ddocument.getElementById("custom-color-input"),o=3Ddocument.getEle=
mentById("custom-color-preview"),d=3Ddocument.getElementById("custom-color-=
hex");if(document.getElementById("safe-mode-button"),document.getElementByI=
d("safe-mode-status"),t&amp;&amp;a){t.addEventListener("click",e=3D&gt;{e.p=
reventDefault(),a.style.display=3D"flex",setTimeout(()=3D&gt;a.classList.ad=
d("is-visible"),10)});let c=3D()=3D&gt;{a.classList.remove("is-visible"),se=
tTimeout(()=3D&gt;a.style.display=3D"none",200)};i.addEventListener("click"=
,c),a.addEventListener("click",e=3D&gt;{e.target=3D=3D=3Da&amp;&amp;c()})}f=
unction _(t){e.classList.toggle("dark-mode",t),n.classList.toggle("active",=
!t),s.classList.toggle("active",t),localStorage.setItem("themeMode",t?"dark=
":"light")}function p(e,t=3Dnull){if(!e)return;let a=3Dt||e,i=3Ddocument.do=
cumentElement;i.style.setProperty("--keycolor",e),i.style.setProperty("--ke=
ygradient",a);let n=3D0,s=3D0,l=3D0;e.startsWith("#")&amp;&amp;7=3D=3D=3De.=
length&amp;&amp;(n=3DparseInt(e.slice(1,3),16),s=3DparseInt(e.slice(3,5),16=
),l=3DparseInt(e.slice(5,7),16)),i.style.setProperty("--keycolor-rgb",n+","=
+s+","+l),localStorage.setItem("themeColor",e),localStorage.setItem("themeG=
radient",a),o&amp;&amp;(o.style.background=3Da),d&amp;&amp;(d.textContent=
=3De),document.querySelectorAll(".ts-swatch").forEach(e=3D&gt;e.classList.r=
emove("active"));let r=3Ddocument.querySelector('.ts-swatch[data-color=3D"'=
+e+'"]');r&amp;&amp;r.classList.add("active")}n&amp;&amp;s&amp;&amp;(n.addE=
ventListener("click",()=3D&gt;_(!1)),s.addEventListener("click",()=3D&gt;_(=
!0)),_("dark"=3D=3D=3DlocalStorage.getItem("themeMode")));let m=3DlocalStor=
age.getItem("themeColor"),u=3DlocalStorage.getItem("themeGradient");functio=
n g(e){let t=3Ddocument.getElementById("safe-mode-status"),a=3Ddocument.get=
ElementById("safe-mode-status-mobile");localStorage.setItem("matureFilterAc=
tive",e),document.body.classList.toggle("mature-filter-active",e);let i=3De=
?"On":"Off";t&amp;&amp;(t.textContent=3Di),a&amp;&amp;(a.textContent=3Di)}m=
?p(m,u):p("#c8204e","linear-gradient(to right, #c8204e, #9a1ba7)"),l.forEac=
h(e=3D&gt;e.addEventListener("click",()=3D&gt;p(e.dataset.color,e.dataset.g=
radient))),r&amp;&amp;r.addEventListener("input",()=3D&gt;p(r.value)),g("tr=
ue"=3D=3D=3DlocalStorage.getItem("matureFilterActive")),document.body.addEv=
entListener("click",function(e){e.target.closest("#safe-mode-button, #safe-=
mode-button-mobile")&amp;&amp;(e.preventDefault(),g("true"!=3D=3DlocalStora=
ge.getItem("matureFilterActive")))});let h=3Ddocument.getElementById("comme=
nts");h&amp;&amp;h.addEventListener("click",function(e){let t=3De.target.cl=
osest(".qa-footer");if(t){e.preventDefault();let a=3Dt.closest(".qa-card");=
if(a){let i=3Ddocument.querySelector('.comment[data-qa-id=3D"'+a.dataset.qa=
Id+'"]');if(i){let n=3Di.querySelector(".comment-actions a.comment-reply");=
n&amp;&amp;n.click()}}}});let v=3Ddocument.getElementById("sidebarToggle");=
setTimeout(()=3D&gt;{e.classList.remove("no-transition")},100),v&amp;&amp;v=
.addEventListener("click",()=3D&gt;{e.classList.toggle("sidebar-collapsed")=
,localStorage.setItem("sidebarState",e.classList.contains("sidebar-collapse=
d")?"collapsed":"expanded"),setTimeout(function(){"undefined"!=3Dtypeof $&a=
mp;&amp;$.fn.owlCarousel&amp;&amp;$("#dynamic-main-slider, #PopularPosts1 .=
owl-carousel").trigger("refresh.owl.carousel")},350)});let f=3D[].slice.cal=
l(document.querySelectorAll(".lazy-bg"));if("IntersectionObserver"in window=
){let y=3Dnew IntersectionObserver(function(e,t){e.forEach(function(e){if(e=
.isIntersecting){let t=3De.target,a=3Dt.getAttribute("data-bg-image");a&amp=
;&amp;(t.style.backgroundImage=3D"url("+a+")",t.classList.remove("lazy-bg")=
,y.unobserve(t))}})},{rootMargin:"0px 0px 200px 0px"});f.forEach(function(e=
){y.observe(e)})}else f.forEach(function(e){let t=3De.getAttribute("data-bg=
-image");t&amp;&amp;(e.style.backgroundImage=3D"url("+t+")")})}),function(e=
){e(document).ready(function(){!function e(){let t=3Ddocument.getElementByI=
d("popular-posts-carousel");if(!t){console.log("Ranking Number script: Caro=
usel not found.");return}let a=3D()=3D&gt;{t.querySelectorAll(".owl-item .i=
ndex-post").forEach((e,t)=3D&gt;{if(e.querySelector(".ranking-number"))retu=
rn;let a=3De.querySelector(".entry-image-wrap");if(a){let i=3Ddocument.crea=
teElement("span");i.className=3D"ranking-number",i.textContent=3Dt+1,a.prep=
end(i)}})};new MutationObserver((e,t)=3D&gt;{for(let i of e)"childList"=3D=
=3D=3Di.type&amp;&amp;i.addedNodes.length&gt;0&amp;&amp;a()}).observe(t,{ch=
ildList:!0,subtree:!0}),a()}();let t=3Ddocument.getElementById("filtered-po=
sts-wrap");if(!t)return;let a=3Dfunction(t){let a=3De(t).find("button.owl-p=
rev"),i=3De(t).find("button.owl-next");a.length&amp;&amp;(a.removeAttr("rol=
e"),a.attr("aria-label","Previous Posts")),i.length&amp;&amp;(i.removeAttr(=
"role"),i.attr("aria-label","Next Posts"))};new MutationObserver(function(e=
){for(let t of e)"childList"=3D=3D=3Dt.type&amp;&amp;t.addedNodes.length&gt=
;0&amp;&amp;t.addedNodes.forEach(function(e){1=3D=3D=3De.nodeType&amp;&amp;=
a(e)})}).observe(t,{childList:!0,subtree:!0})})}(jQuery),document.addEventL=
istener("DOMContentLoaded",function(){let e=3Dwindow.innerWidth&lt;=3D767,t=
=3Dwindow.location.pathname.includes("/p/my-account.html"),n=3Ddocument.que=
rySelector(".post-page-final-container"),s=3D"abefilm_simple_user",l=3Ddocu=
ment.getElementById("theme-icon-source"),r=3Dl?l.dataset.guestIcon:"",o=3Dl=
?l.dataset.userIcon:"",d=3Dl?l.dataset.loggedOutIcon:"",c=3Ddocument.getEle=
mentById("generic-modal"),_=3Ddocument.getElementById("toastNotification"),=
p=3Ddocument.getElementById("toastMessage");if(c){let m=3Ddocument.getEleme=
ntById("generic-modal-title"),u=3Ddocument.getElementById("generic-modal-me=
ssage"),g=3Ddocument.getElementById("generic-modal-input"),h=3Ddocument.get=
ElementById("generic-modal-ok"),v=3Ddocument.getElementById("generic-modal-=
cancel"),f=3Dnull;window.hideGenericModal=3Dfunction(){c.classList.remove("=
is-visible"),f=3Dnull},window.showCustomConfirm=3Dfunction(e,t,a){m.textCon=
tent=3De,u.textContent=3Dt,g.classList.add("is-hidden"),v.style.display=3D"=
inline-block",h.textContent=3D"OK",f=3Da,c.classList.add("is-visible")},win=
dow.showCustomAlert=3Dfunction(e,t){m.textContent=3De,u.textContent=3Dt,g.c=
lassList.add("is-hidden"),v.style.display=3D"none",h.textContent=3D"OK",f=
=3Dnull,c.classList.add("is-visible")},window.showCustomPrompt=3Dfunction(e=
,t,a,i){m.textContent=3De,u.textContent=3Dt,g.value=3Da,g.classList.remove(=
"is-hidden"),v.style.display=3D"inline-block",h.textContent=3D"Save",f=3Di,=
c.classList.add("is-visible"),setTimeout(()=3D&gt;g.focus(),100)},h.addEven=
tListener("click",()=3D&gt;{"function"=3D=3Dtypeof f&amp;&amp;f(g.value),hi=
deGenericModal()}),v.addEventListener("click",hideGenericModal),c.addEventL=
istener("click",e=3D&gt;{e.target=3D=3D=3Dc&amp;&amp;hideGenericModal()})}i=
f(n){if(e){document.body.classList.add("item-view");let y=3Ddocument.queryS=
elector(".recommendation-section"),b=3Ddocument.querySelector(".abefilm-blo=
g-post-comments"),w=3Ddocument.querySelector(".mobile-reaction-title"),k=3D=
document.querySelector(".reaction-container"),C=3Ddocument.querySelector(".=
review-system-container"),L=3Ddocument.getElementById("video-tab-content"),=
x=3Ddocument.getElementById("comment-tab-content");y&amp;&amp;L&amp;&amp;L.=
appendChild(y),x&amp;&amp;(w&amp;&amp;x.appendChild(w),k&amp;&amp;x.appendC=
hild(k),C&amp;&amp;x.appendChild(C),b&amp;&amp;x.appendChild(b));let E=3Ddo=
cument.querySelectorAll(".mobile-tab-btn"),S=3Ddocument.querySelectorAll(".=
mobile-tab-panel");E.length&gt;0&amp;&amp;S.length&gt;0&amp;&amp;E.forEach(=
function(e){e.addEventListener("click",function(){let t=3De.getAttribute("d=
ata-tab-target"),a=3Ddocument.querySelector(t);a&amp;&amp;(E.forEach(e=3D&g=
t;e.classList.remove("active")),S.forEach(e=3D&gt;e.classList.remove("activ=
e")),e.classList.add("active"),a.classList.add("active"),document.body.clas=
sList.toggle("comment-tab-active","#comment-tab-content"=3D=3D=3Dt))})})}if=
(e){let I=3Ddocument.getElementById("mobile-comment-trigger");if(I){let M=
=3DI.querySelector(".trigger-discussion-link"),B=3DI.querySelector(".trigge=
r-rating-link"),q=3Ddocument.getElementById("close-comment-form");M&amp;&am=
p;q&amp;&amp;(M.addEventListener("click",e=3D&gt;{e.preventDefault(),docume=
nt.body.classList.add("comment-form-active")}),q.addEventListener("click",(=
)=3D&gt;{document.body.classList.remove("comment-form-active")})),B&amp;&am=
p;B.addEventListener("click",e=3D&gt;{e.preventDefault(),document.getElemen=
tById("review-system")?.scrollIntoView({behavior:"smooth",block:"center"})}=
)}}if(e&amp;&amp;document.body.classList.contains("item-view")){let A=3Ddoc=
ument.querySelector(".player-column-final"),H=3Ddocument.querySelector(".co=
mment-form");if(A&amp;&amp;H){let T=3Dfunction(){H.style.top=3DA.offsetHeig=
ht+"px"};T(),window.addEventListener("resize",T)}}if(e){let j=3Ddocument.qu=
erySelector("#celebrity-data"),D=3Ddocument.getElementById("video-tab-conte=
nt");if(j&amp;&amp;D){let z=3Dj.querySelectorAll("li");if(z.length&gt;0){le=
t F=3Ddocument.createElement("div");F.className=3D"section-final mobile-cel=
ebrity-section";let V=3Ddocument.createElement("h3");V.textContent=3D"Cast"=
,F.appendChild(V);let P=3Ddocument.createElement("div");P.className=3D"cele=
brity-carousel-mobile",z.forEach(e=3D&gt;{let t=3De.querySelector("img")?.s=
rc||"",a=3De.querySelector("span")?.textContent||"";P.innerHTML+=3D'\n     =
           &lt;div class=3D"celebrity-item-mobile"&gt;\n                  &=
lt;img src=3D"'+t+'" alt=3D"'+a+'" loading=3D"lazy"/&gt;\n                 =
 &lt;span class=3D"name"&gt;'+a+"&lt;/span&gt;\n                &lt;/div&gt=
;"}),F.appendChild(P);let W=3DD.querySelector(".recommendation-section");W?=
D.insertBefore(F,W):D.appendChild(F)}}}if(e){let R=3Ddocument.querySelector=
("#post-page-sidebar #HTML8"),N=3Ddocument.getElementById("video-tab-conten=
t");if(R&amp;&amp;N){let G=3DN.querySelector(".recommendation-section");G?N=
.insertBefore(R,G):N.appendChild(R)}}}let U=3Ddocument.getElementById("comm=
ents");if(U){let O=3Dfunction(){let e=3Ddocument.getElementById("top-ce"),t=
=3Ddocument.querySelector(".comments .comment-form");e&amp;&amp;t&amp;&amp;=
(t.appendChild(e),clearInterval(Y))},Z=3Ddocument.getElementById("comment-h=
elper");Z&amp;&amp;new MutationObserver(e=3D&gt;{for(let t of e)for(let a o=
f t.addedNodes)if(1=3D=3D=3Da.nodeType&amp;&amp;"comment-editor"=3D=3D=3Da.=
id){a.parentNode&amp;&amp;a.parentNode.insertBefore(Z,a);return}}).observe(=
U,{childList:!0,subtree:!0});let K=3Ddocument.getElementById("sort-select")=
,J=3Ddocument.getElementById("top-ra");K&amp;&amp;J&amp;&amp;K.addEventList=
ener("change",function(){J.style.flexDirection=3D"newest"=3D=3D=3Dthis.valu=
e?"column-reverse":"column"});let Y=3DsetInterval(O,100);setTimeout(()=3D&g=
t;{clearInterval(Y)},1e4);let Q=3Ddocument.querySelector(".comment-count-ba=
dge");if(Q)try{let X=3DparseInt(Q.textContent,10);isNaN(X)||(X&gt;=3D1e3?Q.=
textContent=3D(X/1e3).toFixed(1).replace(".0","")+"k":0!=3D=3DX||(Q.style.d=
isplay=3D"none"))}catch(ee){console.error("Error formatting comment badge:"=
,ee)}}let et=3D"https://rolnwztgzdhnshiorzoy.supabase.co";if("undefined"!=
=3Dtypeof supabase&amp;&amp;et.startsWith("http")){let ea=3Dsupabase.create=
Client(et,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvbG53enRnemRobnNoaW9yem95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MDEyMDEsImV4cCI6MjA5NzA3NzIwMX0.9lxyKQ9D4pbdbPrtSC8rSz6qeq_VM0G9VcY44pZMgaY");(()=
=3D&gt;{let e=3Ddocument.getElementById("post-review-data");if(!e)return;if=
(!document.getElementById("rating-feedback-popup")){let t=3Ddocument.create=
Element("div");t.id=3D"rating-feedback-popup",t.className=3D"rating-feedbac=
k-container",t.innerHTML=3D'&lt;div class=3D"feedback-content"&gt;&lt;h3 cl=
ass=3D"popup-text"&gt;You rated&lt;/h3&gt;&lt;div class=3D"popup-stars" id=
=3D"popup-stars-content"&gt;&lt;/div&gt;&lt;/div&gt;',document.body.appendC=
hild(t)}let a=3De.getAttribute("data-post-id"),i=3D"sb_rated_"+a,n=3Ddocume=
nt.getElementById("review-summary-wrapper"),s=3Dnull,l=3DlocalStorage.getIt=
em("supabase_client_id");l||(l=3Dself.crypto.randomUUID(),localStorage.setI=
tem("supabase_client_id",l));let r=3De=3D&gt;e&gt;=3D1e3?(e/1e3).toFixed(e%=
1e3!=3D0?1:0)+"K":e,o=3D()=3D&gt;{let e=3Ddocument.getElementById("rating-s=
hortcut-text");e&amp;&amp;(e.textContent=3Dnull!=3D=3DlocalStorage.getItem(=
i)?"My rating":"Rate now")},d=3De=3D&gt;{s=3De;let t=3DlocalStorage.getItem=
(i),a=3Dnull!=3D=3Dt,l=3De?.total_ratings||0,o=3De?.average_rating||0,d=3De=
?.rating_counts||{1:0,2:0,3:0,4:0,5:0},c=3D"",_=3D"";for(let p=3D1;p&lt;=3D=
5;p++)c+=3D'&lt;span class=3D"star '+(p&lt;=3DMath.round(o)?"filled":"")+'"=
 data-value=3D"'+p+'"&gt;&amp;#9733;&lt;/span&gt;';for(let m=3D5;m&gt;=3D1;=
m--)_+=3D'&lt;div class=3D"breakdown-row"&gt;&lt;span&gt;'+m+'.0&lt;/span&g=
t;&lt;div class=3D"progress-bar-container"&gt;&lt;div class=3D"progress-bar=
" style=3D"width:'+(l&gt;0?(d[String(m)]||0)/l*100:0)+'%;"&gt;&lt;/div&gt;&=
lt;/div&gt;&lt;span class=3D"review-count"&gt;'+(d[String(m)]||0)+" reviews=
&lt;/span&gt;&lt;/div&gt;";n.innerHTML=3D'&lt;div class=3D"review-summary-l=
eft"&gt;&lt;div class=3D"average-rating-score"&gt;'+o.toFixed(1)+'&lt;/div&=
gt;&lt;div&gt;&lt;div class=3D"average-rating-stars '+(a?"rated":"")+'" id=
=3D"interactive-stars"&gt;'+c+'&lt;/div&gt;&lt;div class=3D"total-ratings"&=
gt;'+r(l)+' ratings&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=3D"rev=
iew-summary-right"&gt;'+_+"&lt;/div&gt;";let u=3Ddocument.getElementById("u=
ser-rating-display-container");if(u||((u=3Ddocument.createElement("div")).i=
d=3D"user-rating-display-container",n.after(u)),a){let g=3DparseInt(t,10),h=
=3D"";for(let v=3D1;v&lt;=3D5;v++)h+=3Dv&lt;=3Dg?'&lt;span class=3D"star fi=
lled"&gt;&amp;#9733;&lt;/span&gt;':'&lt;span class=3D"star"&gt;&amp;#9734;&=
lt;/span&gt;';u.innerHTML=3D'&lt;div class=3D"user-rating-display"&gt;&lt;s=
pan&gt;You rated:&lt;/span&gt;&lt;div&gt;'+h+"&lt;/div&gt;&lt;/div&gt;"}els=
e u.innerHTML=3D""},c=3Dasync()=3D&gt;{let{data:e,error:t}=3Dawait ea.from(=
"review_summaries").select("*").eq("post_id",a).single();t&amp;&amp;"PGRST1=
16"!=3D=3Dt.code&amp;&amp;console.error("Supabase Error:",t),d(e),o()},_=3D=
e=3D&gt;{let t=3Ddocument.getElementById("rating-feedback-popup"),a=3Dt.que=
rySelector(".feedback-content"),i=3Ddocument.getElementById("popup-stars-co=
ntent");if(t&amp;&amp;i){a.querySelectorAll(".sparkle").forEach(e=3D&gt;e.r=
emove()),i.innerHTML=3DArray.from({length:5},(t,a)=3D&gt;a&lt;e?'&lt;span c=
lass=3D"star-filled"&gt;&amp;#9733;&lt;/span&gt;':'&lt;span class=3D"star-e=
mpty"&gt;&amp;#9734;&lt;/span&gt;').join("");for(let n=3D0;n&lt;12;n++){let=
 s=3Ddocument.createElement("div");s.className=3D"sparkle";let l=3D360*Math=
.random(),r=3D80*Math.random()+60,o=3DMath.cos(l*Math.PI/180)*r,d=3DMath.si=
n(l*Math.PI/180)*r;s.style.setProperty("--sparkle-transform-end","translate=
("+o+"px, "+d+"px)"),s.style.animationDelay=3D.3*Math.random()+"s",a.append=
Child(s)}t.classList.add("show"),setTimeout(()=3D&gt;t.classList.remove("sh=
ow"),2500)}},p=3Dasync e=3D&gt;{if(null!=3D=3DlocalStorage.getItem(i))retur=
n;_(e),localStorage.setItem(i,e),o();let t=3Ds?.total_ratings||0,n=3D(s?.av=
erage_rating||0)*t,r=3Ds?.rating_counts||{1:0,2:0,3:0,4:0,5:0};d({total_rat=
ings:t+1,average_rating:(n+e)/(t+1),rating_counts:{...r,[String(e)]:(r[Stri=
ng(e)]||0)+1}});let{error:p}=3Dawait ea.from("reviews").insert({post_id:a,r=
ating:e,client_id:l});p&amp;&amp;(console.error("Error submitting review:",=
p),localStorage.removeItem(i),c())};n.addEventListener("click",e=3D&gt;{let=
 t=3De.target.closest(".star"),a=3De.target.closest(".average-rating-stars"=
);t&amp;&amp;a&amp;&amp;!a.classList.contains("rated")&amp;&amp;p(parseInt(=
t.getAttribute("data-value")))}),c()})(),(()=3D&gt;{let e=3Ddocument.getEle=
mentById("post-review-data")||document.getElementById("post-id"),t=3Ddocume=
nt.getElementById("reaction-container");if(!e||!t)return;let a=3De.getAttri=
bute("data-post-id");if(!a){console.error("Reaction system: Post ID not fou=
nd.");return}let i=3D"sb_reacted_"+a,n=3D[{type:"like",label:"Upvote",icon:=
"\uD83D\uDC4D"},{type:"love",label:"Love",icon:"\uD83D\uDE0D"},{type:"haha"=
,label:"Funny",icon:"\uD83D\uDE06"},{type:"wow",label:"Surprised",icon:"\uD=
83D\uDE32"},{type:"sad",label:"Sad",icon:"\uD83D\uDE22"},{type:"angry",labe=
l:"Angry",icon:"\uD83D\uDE24"}],s=3DlocalStorage.getItem("supabase_client_i=
d");s||(s=3Dself.crypto.randomUUID(),localStorage.setItem("supabase_client_=
id",s));let l=3D{},r=3Dnull,o=3D(e,a)=3D&gt;{t.innerHTML=3Dn.map(t=3D&gt;{l=
et i=3De?.[t.type]||0;return'&lt;button class=3D"reaction-btn '+(a=3D=3D=3D=
t.type?"selected":"")+'" data-reaction=3D"'+t.type+'"&gt;&lt;div class=3D"r=
eaction-icon-wrapper"&gt;&lt;span class=3D"reaction-icon"&gt;'+t.icon+'&lt;=
/span&gt;&lt;span class=3D"reaction-count"&gt;'+(i&gt;0?i:"")+'&lt;/span&gt=
;&lt;/div&gt;&lt;span class=3D"reaction-label"&gt;'+t.label+"&lt;/span&gt;&=
lt;/button&gt;"}).join("")},d=3Dasync()=3D&gt;{try{let[e,t]=3Dawait Promise=
.all([ea.from("reaction_summaries").select("counts").eq("post_id",a).single=
(),ea.from("reactions").select("reaction_type").eq("post_id",a).eq("client_=
id",s).single()]);l=3De.data?.counts||{},(r=3Dt.data?.reaction_type||null)?=
localStorage.setItem(i,r):localStorage.removeItem(i),o(l,r)}catch(n){consol=
e.error("Error fetching reaction data:",n)}},c=3Dasync e=3D&gt;{let t=3Dr;t=
=3D=3D=3De?(l[t]&amp;&amp;l[t]--,r=3Dnull,localStorage.removeItem(i)):(t&am=
p;&amp;l[t]&amp;&amp;l[t]--,l[e]=3D(l[e]||0)+1,r=3De,localStorage.setItem(i=
,e)),o(l,r);try{let n=3D{post_id:a,client_id:s};t=3D=3D=3De?await ea.from("=
reactions").delete().match(n):await ea.from("reactions").upsert({post_id:a,=
client_id:s,reaction_type:e},{onConflict:"post_id, client_id"})}catch(c){co=
nsole.error("Error updating reaction:",c),await d()}};t.addEventListener("c=
lick",e=3D&gt;{let t=3De.target.closest(".reaction-btn");t&amp;&amp;c(t.dat=
aset.reaction)}),d()})()}else console.warn("Supabase client not loaded or c=
onfigured. Interactive features will be disabled.");let ei=3Ddocument.getEl=
ementById("watchlist-container");if(ei){let en=3Dfunction(e){ed.innerHTML=
=3D"";let t=3Ddocument.querySelector(".sidebar-logo .logo-text")?.textConte=
nt.trim()||"";for(let a=3D0;a&lt;e;a++)ed.innerHTML+=3D'&lt;div class=3D"sk=
eleton-grid-item"&gt;&lt;div class=3D"skeleton-poster"&gt;'+t+'&lt;/div&gt;=
&lt;div class=3D"skeleton-info"&gt;&lt;div class=3D"skeleton-line title"&gt=
;&lt;/div&gt;&lt;div class=3D"skeleton-line type"&gt;&lt;/div&gt;&lt;/div&g=
t;&lt;/div&gt;';ed.style.display=3D"grid",ec.style.display=3D"none"},es=3Df=
unction(e,t){e$&amp;&amp;(em.has(e)?(em.delete(e),t.classList.remove("selec=
ted")):(em.add(e),t.classList.add("selected")),er())},el=3Dfunction(e){e$=
=3Dvoid 0!=3D=3De?e:!e$,ei.classList.toggle("edit-mode",e$),em.clear(),e0.c=
hecked=3D!1,eu()},er=3Dfunction(){ep.disabled=3D0=3D=3D=3Dem.size,ep.style.=
opacity=3D0=3D=3D=3Dem.size?.5:1;let e=3Ddocument.querySelectorAll(".watchl=
ist-item");e0.checked=3De.length&gt;0&amp;&amp;em.size=3D=3D=3De.length},eo=
=3D"abefilmUserWatchlist",ed=3Dei.querySelector("#watchlist-grid"),ec=3Dei.=
querySelector("#watchlist-empty-state"),e_=3Dei.querySelector("#edit-watchl=
ist-btn"),e1=3Dei.querySelector("#cancel-edit-btn"),ep=3Dei.querySelector("=
#delete-selected-btn"),e0=3Dei.querySelector("#select-all-checkbox"),e$=3D!=
1,em=3Dnew Set;async function eu(){let e=3D[];try{e=3DJSON.parse(localStora=
ge.getItem(eo))||[]}catch{}0=3D=3D=3De.length?(ec.style.display=3D"flex",ed=
.style.display=3D"none",ei.classList.remove("has-content"),el(!1),e_.style.=
display=3D"none"):(ec.style.display=3D"none",ei.classList.add("has-content"=
),en(e.length),e_.style.display=3D"block");let t=3Dawait Promise.all(e.map(=
e=3D&gt;fetch(e.url).then(e=3D&gt;e.ok?e.text():null).then(t=3D&gt;{if(!t)r=
eturn e;let a=3Dnew DOMParser().parseFromString(t,"text/html"),i=3Da.queryS=
elector('img[alt=3D"poster"]')?.src,n=3Da.querySelector("#extra-meta .meta-=
type")?.textContent.trim();return{...e,poster:i||e.image,type:n||"Movie"}})=
.catch(()=3D&gt;e)));e.length&gt;0&amp;&amp;(ed.innerHTML=3D"",t.forEach(e=
=3D&gt;{let t=3Ddocument.createElement("div");t.className=3D"watchlist-item=
 grid-item",t.dataset.id=3De.id,t.innerHTML=3D'&lt;a href=3D"'+(e$?"javascr=
ipt:void(0);":e.url||"#")+'" class=3D"poster-wrapper" title=3D"'+e.title+'"=
&gt;&lt;img src=3D"'+e.poster+'" alt=3D"'+e.title+'" class=3D"poster"&gt;&l=
t;div class=3D"play-icon-overlay"&gt;&lt;svg class=3D"play-button" viewBox=
=3D"0 0 60 60"&gt;&lt;g fill=3D"none"&gt;&lt;circle fill=3D"var(--keycolor)=
" cx=3D"30" cy=3D"30" r=3D"30"&gt;&lt;/circle&gt;&lt;path d=3D"M35.75,22.5 =
L45.14,36.58 C46.06,37.96 45.69,39.83 44.31,40.75 C43.82,41.07 43.24,41.25 =
42.64,41.25 L23.86,41.25 C22.20,41.25 20.86,39.91 20.86,38.25 C20.86,37.66 =
21.03,37.08 21.36,36.59 L30.75,22.5 C31.67,21.12 33.54,20.74 34.91,21.66 C3=
5.24,21.88 35.53,22.16 35.75,22.5 Z" fill=3D"#FFFFFF" transform=3D"translat=
e(33.25, 30) rotate(-270) translate(-33.25, -30)"&gt;&lt;/path&gt;&lt;/g&gt=
;&lt;/svg&gt;&lt;/div&gt;&lt;div class=3D"selection-overlay"&gt;&lt;div cla=
ss=3D"checkmark"&gt;&lt;i class=3D"fas fa-check"&gt;&lt;/i&gt;&lt;/div&gt;&=
lt;/div&gt;&lt;/a&gt;&lt;div class=3D"item-info"&gt;&lt;div class=3D"title"=
&gt;'+e.title+'&lt;/div&gt;&lt;p class=3D"type"&gt;'+e.type+"&lt;/p&gt;&lt;=
/div&gt;",ed.appendChild(t),t.querySelector(".poster-wrapper").addEventList=
ener("click",a=3D&gt;{e$&amp;&amp;(a.preventDefault(),es(e.id,t))})})),er()=
}e_.addEventListener("click",()=3D&gt;el(!0)),e1.addEventListener("click",(=
)=3D&gt;el(!1)),e0.addEventListener("change",()=3D&gt;{let e=3De0.checked;d=
ocument.querySelectorAll(".watchlist-item").forEach(t=3D&gt;{let a=3Dt.data=
set.id,i=3Dem.has(a);e&amp;&amp;!i?(em.add(a),t.classList.add("selected")):=
!e&amp;&amp;i&amp;&amp;(em.delete(a),t.classList.remove("selected"))}),er()=
}),ep.addEventListener("click",()=3D&gt;{0!=3D=3Dem.size&amp;&amp;showCusto=
mConfirm("Delete Items","Are you sure you want to delete "+em.size+" select=
ed item(s)?",()=3D&gt;{let e=3D(JSON.parse(localStorage.getItem(eo))||[]).f=
ilter(e=3D&gt;!em.has(e.id));localStorage.setItem(eo,JSON.stringify(e)),"fu=
nction"=3D=3Dtypeof window.renderWatchlistPanel&amp;&amp;window.renderWatch=
listPanel(),"function"=3D=3Dtypeof window.updateWatchlistBadge&amp;&amp;win=
dow.updateWatchlistBadge(),el(!1)})}),eu(),window.addEventListener("storage=
",e=3D&gt;{e.key=3D=3D=3Deo&amp;&amp;eu()})}let eg=3Ddocument.getElementByI=
d("history-container");if(eg){let eh=3Dfunction(e){ey.innerHTML=3D"";let t=
=3Ddocument.querySelector(".sidebar-logo .logo-text")?.textContent.trim()||=
"";for(let a=3D0;a&lt;e;a++)ey.innerHTML+=3D'&lt;div class=3D"skeleton-grid=
-item"&gt;&lt;div class=3D"skeleton-poster"&gt;'+t+'&lt;/div&gt;&lt;div cla=
ss=3D"skeleton-info"&gt;&lt;div class=3D"skeleton-line title"&gt;&lt;/div&g=
t;&lt;div class=3D"skeleton-line type"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&=
gt;';ey.style.display=3D"grid",e3.style.display=3D"none"},ev=3Dfunction(e,t=
){ew&amp;&amp;(ek.has(String(e))?(ek.delete(String(e)),t.classList.remove("=
selected")):(ek.add(String(e)),t.classList.add("selected")),e4())},ef=3Dfun=
ction(e){ew=3Dvoid 0!=3D=3De?e:!ew,eg.classList.toggle("edit-mode",ew),ek.c=
lear(),eb.checked=3D!1,eC()},e4=3Dfunction(){e7.disabled=3D0=3D=3D=3Dek.siz=
e,e7.style.opacity=3D0=3D=3D=3Dek.size?.5:1;let e=3Ddocument.querySelectorA=
ll(".history-item");eb.checked=3De.length&gt;0&amp;&amp;ek.size=3D=3D=3De.l=
ength},e2=3D"watchHistoryIDs",ey=3Deg.querySelector("#history-grid"),e3=3De=
g.querySelector("#history-empty-state"),e5=3Deg.querySelector("#edit-histor=
y-btn"),e6=3Deg.querySelector("#cancel-edit-btn"),e7=3Deg.querySelector("#d=
elete-selected-btn"),eb=3Deg.querySelector("#select-all-checkbox"),ew=3D!1,=
ek=3Dnew Set;async function eC(){let e=3D[];try{e=3DJSON.parse(localStorage=
.getItem(e2))||[]}catch{}let t=3DJSON.parse(localStorage.getItem("abefilmWa=
tchProgress")||"{}");0=3D=3D=3De.length?(e3.style.display=3D"flex",ey.style=
.display=3D"none",eg.classList.remove("has-content"),ef(!1),e5.style.displa=
y=3D"none"):(e3.style.display=3D"none",eg.classList.add("has-content"),eh(e=
.length),e5.style.display=3D"block");let a=3D(await Promise.all(e.map(e=3D&=
gt;fetch("/feeds/posts/default/"+e+"?alt=3Djson").then(e=3D&gt;e.ok?e.json(=
):null).then(a=3D&gt;{if(!a||!a.entry)return null;let i=3Da.entry,n=3Ddocum=
ent.createElement("div");n.innerHTML=3Di.content.$t;let s=3Dn.querySelector=
("span.slider-backdrop")?.textContent.trim(),l=3Dn.querySelector('img[alt=
=3D"poster"]')?.src,r=3Dn.querySelector("#extra-meta .meta-type")?.textCont=
ent.trim(),o=3Dn.querySelector("#episodes-data ul[data-server-name]"),d=3Do=
?o.querySelectorAll("a").length:0,c=3Dt["post-"+e]||0,_=3D0;return d&gt;1?_=
=3D(c+1)/d*100:(1=3D=3D=3Dd||0=3D=3D=3Dd&amp;&amp;"TV Series"!=3D=3Dr)&amp;=
&amp;(_=3D100),{id:e,url:i.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel).hre=
f,title:i.title.$t,image:s||l,type:r||"Movie",progressPercent:_}}).catch(()=
=3D&gt;null)))).filter(Boolean);a.length&gt;0&amp;&amp;(ey.innerHTML=3D"",a=
.forEach(e=3D&gt;{let t=3Ddocument.createElement("div");t.className=3D"hist=
ory-item grid-item",t.dataset.id=3De.id,t.innerHTML=3D'&lt;a href=3D"'+(ew?=
"javascript:void(0);":e.url||"#")+'" class=3D"poster-wrapper"&gt;&lt;img sr=
c=3D"'+e.image+'" alt=3D"'+e.title+'" class=3D"poster"&gt;&lt;div class=3D"=
play-icon-overlay"&gt;&lt;svg class=3D"play-button" viewBox=3D"0 0 60 60"&g=
t;&lt;g fill=3D"none"&gt;&lt;circle fill=3D"var(--keycolor)" cx=3D"30" cy=
=3D"30" r=3D"30"&gt;&lt;/circle&gt;&lt;path d=3D"M35.75,22.5 L45.14,36.58 C=
46.06,37.96 45.69,39.83 44.31,40.75 C43.82,41.07 43.24,41.25 42.64,41.25 L2=
3.86,41.25 C22.20,41.25 20.86,39.91 20.86,38.25 C20.86,37.66 21.03,37.08 21=
.36,36.59 L30.75,22.5 C31.67,21.12 33.54,20.74 34.91,21.66 C35.24,21.88 35.=
53,22.16 35.75,22.5 Z" fill=3D"#FFFFFF" transform=3D"translate(33.25, 30) r=
otate(-270) translate(-33.25, -30)"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt;&=
lt;/div&gt;&lt;div class=3D"selection-overlay"&gt;&lt;div class=3D"checkmar=
k"&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=3D"progress-bar-overlay"&gt;&lt=
;div class=3D"progress-bar-fill" style=3D"width: '+e.progressPercent+'%;"&g=
t;&lt;/div&gt;&lt;/div&gt;&lt;/a&gt;&lt;div class=3D"item-info"&gt;&lt;div =
class=3D"title"&gt;'+e.title+'&lt;/div&gt;&lt;p class=3D"type"&gt;'+e.type+=
"&lt;/p&gt;&lt;/div&gt;",ey.appendChild(t),t.querySelector(".poster-wrapper=
").addEventListener("click",a=3D&gt;{ew&amp;&amp;(a.preventDefault(),ev(e.i=
d,t))})})),e4()}e5.addEventListener("click",()=3D&gt;ef(!0)),e6.addEventLis=
tener("click",()=3D&gt;ef(!1)),eb.addEventListener("change",()=3D&gt;{let e=
=3Ddocument.querySelectorAll(".history-item");eb.checked?e.forEach(e=3D&gt;=
{e.classList.contains("selected")||ev(e.dataset.id,e)}):e.forEach(e=3D&gt;{=
e.classList.contains("selected")&amp;&amp;ev(e.dataset.id,e)})}),e7.addEven=
tListener("click",()=3D&gt;{0!=3D=3Dek.size&amp;&amp;showCustomConfirm("Del=
ete History","Are you sure you want to delete "+ek.size+" selected item(s) =
from your history?",()=3D&gt;{let e=3D(JSON.parse(localStorage.getItem(e2))=
||[]).filter(e=3D&gt;!ek.has(String(e)));localStorage.setItem(e2,JSON.strin=
gify(e)),"function"=3D=3Dtypeof window.displayHistory&amp;&amp;window.displ=
ayHistory(),"function"=3D=3Dtypeof window.updateHistoryBadge&amp;&amp;windo=
w.updateHistoryBadge(),ef(!1)})}),eC(),window.addEventListener("storage",e=
=3D&gt;{e.key=3D=3D=3De2&amp;&amp;eC()})}let eL=3Ddocument.getElementById("=
favorites-container");if(eL){let ex=3Dfunction(e){eB.innerHTML=3D"";for(let=
 t=3D0;t&lt;e;t++)eB.innerHTML+=3D'&lt;div class=3D"skeleton-list-item"&gt;=
&lt;div class=3D"skeleton-poster"&gt;&lt;/div&gt;&lt;div class=3D"skeleton-=
details"&gt;&lt;div class=3D"skeleton-line title"&gt;&lt;/div&gt;&lt;div cl=
ass=3D"skeleton-line meta"&gt;&lt;/div&gt;&lt;div class=3D"skeleton-line te=
xt"&gt;&lt;/div&gt;&lt;div class=3D"skeleton-line text short"&gt;&lt;/div&g=
t;&lt;div class=3D"skeleton-line button"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/di=
v&gt;';eB.style.display=3D"grid",eq.style.display=3D"none"},eE=3Dfunction(e=
,t,a){eD&amp;&amp;(a?(ez.add(String(e)),t.classList.add("selected")):(ez.de=
lete(String(e)),t.classList.remove("selected")),eI())},eS=3Dfunction(e){eD=
=3Dvoid 0!=3D=3De?e:!eD,eL.classList.toggle("edit-mode",eD),eD||(ez.clear()=
,ej&amp;&amp;(ej.checked=3D!1),document.querySelectorAll(".favorite-item.se=
lected").forEach(e=3D&gt;{e.classList.remove("selected");let t=3De.querySel=
ector(".item-checkbox");t&amp;&amp;(t.checked=3D!1)})),eI()},eI=3Dfunction(=
){if(!eT)return;eT.disabled=3D0=3D=3D=3Dez.size,eT.style.opacity=3D0=3D=3D=
=3Dez.size?.5:1;let e=3Ddocument.querySelectorAll(".favorite-item");ej&amp;=
&amp;(ej.checked=3De.length&gt;0&amp;&amp;ez.size=3D=3D=3De.length)},eM=3D"=
abefilm_favorites",eB=3DeL.querySelector("#favorites-list"),eq=3DeL.querySe=
lector("#favorites-empty-state"),eA=3DeL.querySelector("#edit-favorites-btn=
"),eH=3DeL.querySelector("#cancel-edit-btn"),eT=3DeL.querySelector("#delete=
-selected-btn"),ej=3DeL.querySelector("#select-all-checkbox"),eD=3D!1,ez=3D=
new Set;async function eF(){let e=3D[];try{e=3DJSON.parse(localStorage.getI=
tem(eM))||[]}catch{}0=3D=3D=3De.length?(eq.style.display=3D"flex",eB.style.=
display=3D"none",eL.classList.remove("has-content"),eS(!1),eA&amp;&amp;(eA.=
style.display=3D"none")):(eq.style.display=3D"none",eL.classList.add("has-c=
ontent"),ex(e.length),eA&amp;&amp;(eA.style.display=3D"block"));let t=3D(aw=
ait Promise.all(e.map(e=3D&gt;fetch("/feeds/posts/default/"+e+"?alt=3Djson"=
).then(e=3D&gt;e.ok?e.json():null).then(t=3D&gt;{if(!t||!t.entry)return nul=
l;let a=3Dt.entry,i=3Ddocument.createElement("div");i.innerHTML=3Da.content=
.$t;let n=3Di.querySelector('img[alt=3D"poster"]')?.src,s=3Di.querySelector=
("#extra-meta .meta-type")?.textContent.trim(),l=3Di.querySelector("#extra-=
meta .meta-year")?.textContent.trim(),r=3Di.querySelector("#extra-meta .met=
a-rating")?.textContent.trim(),o=3Di.querySelector("#overview-data")?.textC=
ontent.trim();return{id:e,url:a.link.find(e=3D&gt;"alternate"=3D=3D=3De.rel=
).href,title:a.title.$t,poster:n,type:s,year:l,rating:r,synopsis:o}}).catch=
(()=3D&gt;null)))).filter(Boolean);t.length&gt;0&amp;&amp;(eB.innerHTML=3D"=
",t.forEach(e=3D&gt;{let t=3Ddocument.createElement("div");t.className=3D"f=
avorite-item",t.dataset.id=3De.id,t.innerHTML=3D'&lt;a href=3D"'+e.url+'" c=
lass=3D"item-poster-link"&gt;&lt;img src=3D"'+e.poster+'" alt=3D"'+e.title+=
'"&gt;&lt;/a&gt;&lt;div class=3D"item-details"&gt;&lt;div class=3D"title-wr=
apper"&gt;&lt;h3 class=3D"title"&gt;'+e.title+'&lt;/h3&gt;&lt;label class=
=3D"selection-checkbox-wrapper"&gt;&lt;input type=3D"checkbox" class=3D"ite=
m-checkbox" data-id=3D"'+e.id+'"&gt;&lt;span class=3D"custom-checkbox"&gt;&=
lt;/span&gt;&lt;/label&gt;&lt;/div&gt;&lt;div class=3D"item-meta"&gt;'+(e.r=
ating?'&lt;span class=3D"rating"&gt;&lt;svg xmlns=3D"http://www.w3.org/2000=
/svg" width=3D"16" height=3D"16" fill=3D"currentColor" viewBox=3D"0 0 16 16=
" style=3D"vertical-align: text-bottom;"&gt;&lt;path d=3D"M3.612 15.443c-.3=
86.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95=
l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.=
612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.38=
9 2.256z"/&gt;&lt;/svg&gt; '+e.rating+"&lt;/span&gt;":"")+(e.year?"&lt;span=
&gt;"+e.year+"&lt;/span&gt;":"")+(e.type?"&lt;span&gt;"+e.type+"&lt;/span&g=
t;":"")+'&lt;/div&gt;&lt;p class=3D"item-synopsis"&gt;'+(e.synopsis||"")+'&=
lt;/p&gt;&lt;div class=3D"item-actions"&gt;&lt;a href=3D"'+e.url+'" class=
=3D"btn play-btn"&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" width=3D"=
20" height=3D"20" fill=3D"currentColor" viewBox=3D"0 0 16 16" style=3D"vert=
ical-align: -2px;"&gt;&lt;path d=3D"M10.804 8 5 4.633v6.734L10.804 8zm.792-=
.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.30=
8c0-.653.713-.998 1.233-.696l6.363 3.692z"/&gt;&lt;/svg&gt; Play&lt;/a&gt;&=
lt;/div&gt;&lt;/div&gt;',eB.appendChild(t);let a=3Dt.querySelector(".item-c=
heckbox");t.addEventListener("click",t=3D&gt;{eD?t.target.closest("a")||(t.=
preventDefault(),a.checked=3D!a.checked,a.dispatchEvent(new Event("change")=
)):t.target.closest("a")||(window.location.href=3De.url)}),a.addEventListen=
er("change",()=3D&gt;{eE(e.id,t,a.checked)})})),eI()}eA&amp;&amp;eA.addEven=
tListener("click",()=3D&gt;eS(!0)),eH&amp;&amp;eH.addEventListener("click",=
()=3D&gt;eS(!1)),ej&amp;&amp;ej.addEventListener("change",()=3D&gt;{let e=
=3Dej.checked;document.querySelectorAll(".item-checkbox").forEach(t=3D&gt;{=
t.checked!=3D=3De&amp;&amp;(t.checked=3De,t.dispatchEvent(new Event("change=
")))})}),eT&amp;&amp;eT.addEventListener("click",()=3D&gt;{0!=3D=3Dez.size&=
amp;&amp;showCustomConfirm("Delete Favorites","Are you sure you want to del=
ete "+ez.size+" selected item(s)?",()=3D&gt;{let e=3D(JSON.parse(localStora=
ge.getItem(eM))||[]).filter(e=3D&gt;!ez.has(String(e)));localStorage.setIte=
m(eM,JSON.stringify(e)),eS(!1),eF()})}),eF(),window.addEventListener("stora=
ge",e=3D&gt;{e.key=3D=3D=3DeM&amp;&amp;eF()})}if(t){let e8=3Ddocument.getEl=
ementById("my-account-app");if(e8){let eV=3Dfunction(){let e=3D0;for(let t =
in localStorage)localStorage.hasOwnProperty(t)&amp;&amp;(e+=3D(localStorage=
[t].length+t.length)*2);for(let a in sessionStorage)sessionStorage.hasOwnPr=
operty(a)&amp;&amp;(e+=3D(sessionStorage[a].length+a.length)*2);return e&lt=
;1024?"0 KB":e&lt;1048576?(e/1024).toFixed(2)+" KB":(e/1048576).toFixed(2)+=
" MB"},eP=3Dfunction(){let e=3DeV(),t=3Ddocument.querySelector("#clear-cach=
e-btn span");t&amp;&amp;(t.textContent=3De)},eW=3Dfunction(){let e=3DJSON.p=
arse(localStorage.getItem(s)),t=3Ddocument.querySelector(".account-profile-=
section");if(e&amp;&amp;e.name){t.classList.remove("is-logged-out");let a=
=3D!!e.isGuest,i=3Da?r:e.avatar||o;eK.src=3Di,eJ.innerHTML=3De.name,eY.text=
Content=3De.name,eQ.src=3Di,eX.style.display=3D"block",te.style.display=3D"=
flex",tt.style.display=3D"flex",ta.style.display=3D"flex",ti.style.display=
=3D"block";let n=3Ddocument.querySelector("#edit-username-btn svg"),l=3Ddoc=
ument.querySelector("#edit-avatar-btn svg");if(tn.style.cursor=3Da?"default=
":"pointer",tr.style.cursor=3Da?"default":"pointer",n&amp;&amp;(n.style.dis=
play=3Da?"none":"inline-block"),l&amp;&amp;(l.style.display=3Da?"none":"inl=
ine-block"),"a"!=3D=3Dt.tagName.toLowerCase()||!t.href.includes("/p/my-acco=
unt.html")){let c=3Ddocument.createElement("a");for(c.href=3D"/p/my-account=
.html",c.className=3Dt.className;t.firstChild;)c.appendChild(t.firstChild);=
t.parentNode.replaceChild(c,t)}}else if(t.classList.add("is-logged-out"),eK=
.src=3Dd,eJ.innerHTML=3D'Login &lt;svg xmlns=3D"http://www.w3.org/2000/svg"=
 viewBox=3D"0 0 24 24" fill=3D"none" stroke=3D"currentColor" stroke-width=
=3D"2.5" stroke-linecap=3D"round" stroke-linejoin=3D"round" style=3D"width:=
 0.8em; height: 0.8em; vertical-align: middle; margin-left: 4px;"&gt;&lt;pa=
th d=3D"M9 18l6-6-6-6"/&gt;&lt;/svg&gt;',eY.textContent=3D"Not logged in",e=
X.style.display=3D"block",te.style.display=3D"flex",tt.style.display=3D"non=
e",ti.style.display=3D"none",ta.style.display=3D"none","a"!=3D=3Dt.tagName.=
toLowerCase()||"showLoginModalBtn"!=3D=3Dt.id){let _=3Ddocument.createEleme=
nt("a");for(_.href=3D"#",_.id=3D"showLoginModalBtn",_.className=3Dt.classNa=
me;t.firstChild;)_.appendChild(t.firstChild);t.parentNode.replaceChild(_,t)=
}let p=3D{watchlist:(JSON.parse(localStorage.getItem("abefilmUserWatchlist"=
))||[]).length,history:(JSON.parse(localStorage.getItem("watchHistoryIDs"))=
||[]).length,favorite:(JSON.parse(localStorage.getItem("abefilm_favorites")=
)||[]).length};for(let m in p){let u=3Dp[m],g=3Ddocument.querySelector('.it=
em-count[data-count-for=3D"'+m+'"]');g&amp;&amp;(u&gt;0?(g.textContent=3Du,=
g.style.display=3D"inline-block"):g.style.display=3D"none")}eP()},eR=3Dfunc=
tion(e,t){t_.innerHTML=3D"";let a=3Dt[e];a&amp;&amp;(a.avatars.forEach(e=3D=
&gt;{let t=3Ddocument.createElement("div");t.className=3D"avatar-choice",t.=
innerHTML=3D'&lt;img src=3D"'+e+'" alt=3D"Avatar"&gt;',t.addEventListener("=
click",()=3D&gt;eN(e)),t_.appendChild(t)}),document.querySelectorAll(".avat=
ar-category-tab").forEach((t,a)=3D&gt;t.classList.toggle("active",a=3D=3D=
=3De)))},eN=3Dfunction(e){let t=3DJSON.parse(localStorage.getItem(s));t&amp=
;&amp;!t.isGuest&amp;&amp;(t.avatar=3De,localStorage.setItem(s,JSON.stringi=
fy(t)),sessionStorage.setItem("showToastAfterReload","Avatar updated succes=
sfully."),location.reload())},e9=3Dfunction(){to.classList.add("is-visible"=
)},eG=3Dfunction(){to.classList.remove("is-visible")},eU=3Ddocument.getElem=
entById("community-section-source");e8.innerHTML=3D'&lt;div class=3D"accoun=
t-page-container"&gt;&lt;div class=3D"account-profile-section"&gt;&lt;div c=
lass=3D"account-profile-avatar-wrapper"&gt;&lt;img id=3D"account-page-avata=
r-img" src=3D"" alt=3D"User Avatar" /&gt;&lt;/div&gt;&lt;div class=3D"accou=
nt-profile-info"&gt;&lt;h2 id=3D"account-page-name" class=3D"account-profil=
e-name"&gt;&lt;/h2&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=3D"account-list=
-section" id=3D"account-section-header"&gt;&lt;h3 class=3D"section-header"&=
gt;Account&lt;/h3&gt;&lt;div class=3D"account-list-item" id=3D"username-lis=
t-item"&gt;&lt;span class=3D"item-label"&gt;&lt;svg fill=3D"#fff" width=3D"=
20px" height=3D"20px" viewBox=3D"0 0 24 24" xmlns=3D"http://www.w3.org/2000=
/svg"&gt;&lt;g id=3D"SVGRepo_bgCarrier" stroke-width=3D"0"&gt;&lt;/g&gt;&lt=
;g id=3D"SVGRepo_tracerCarrier" stroke-linecap=3D"round" stroke-linejoin=3D=
"round"&gt;&lt;/g&gt;&lt;g id=3D"SVGRepo_iconCarrier"&gt;&lt;path id=3D"sec=
ondary" d=3D"M3.29,16.09,8.2,21H11V18.2L6.09,13.29a1,1,0,0,0-1.4,0l-1.4,1.4=
A1,1,0,0,0,3.29,16.09Z" style=3D"fill: none; stroke: var(--keycolor); strok=
e-linecap: round; stroke-linejoin: round; stroke-width: 2;"&gt;&lt;/path&gt=
;&lt;path id=3D"primary" d=3D"M13,13h1a7,7,0,0,1,7,7,1,1,0,0,1-1,1H15" styl=
e=3D"fill: none; stroke: #fff; stroke-linecap: round; stroke-linejoin: roun=
d; stroke-width: 2;"&gt;&lt;/path&gt;&lt;circle id=3D"primary-2" data-name=
=3D"primary" cx=3D"13" cy=3D"8" r=3D"5" style=3D"fill: none; stroke: #fff; =
stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"&gt;&lt;/ci=
rcle&gt;&lt;/g&gt;&lt;/svg&gt; Username&lt;/span&gt;&lt;a href=3D"javascrip=
t:void(0)" class=3D"item-action" id=3D"edit-username-btn"&gt;&lt;span id=3D=
"account-page-username-value" class=3D"item-value"&gt;&lt;/span&gt;&lt;svg =
xmlns=3D"http://www.w3.org/2000/svg" width=3D"16" height=3D"16" fill=3D"cur=
rentColor" viewBox=3D"0 0 16 16"&gt;&lt;path fill-rule=3D"evenodd" d=3D"M4.=
646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708=
L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/di=
v&gt;&lt;div class=3D"account-list-item" id=3D"avatar-list-item"&gt;&lt;spa=
n class=3D"item-label"&gt;&lt;svg fill=3D"#fff" width=3D"20px" height=3D"20=
px" viewBox=3D"0 0 24 24" xmlns=3D"http://www.w3.org/2000/svg"&gt;&lt;g id=
=3D"SVGRepo_bgCarrier" stroke-width=3D"0"&gt;&lt;/g&gt;&lt;g id=3D"SVGRepo_=
tracerCarrier" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;/g=
&gt;&lt;g id=3D"SVGRepo_iconCarrier"&gt;&lt;path id=3D"secondary" d=3D"M13,=
7.13A3.66,3.66,0,0,0,12,7a4,4,0,1,0,3.46,6" style=3D"fill: none; stroke: va=
r(--keycolor); stroke-linecap: round; stroke-linejoin: round; stroke-width:=
 2;"&gt;&lt;/path&gt;&lt;path id=3D"secondary-2" data-name=3D"secondary" d=
=3D"M12,15a5,5,0,0,0-5,4.5,9,9,0,0,0,9.94,0A5,5,0,0,0,12,15Zm5-6h4M19,7v4" =
style=3D"fill: none; stroke: var(--keycolor); stroke-linecap: round; stroke=
-linejoin: round; stroke-width: 2;"&gt;&lt;/path&gt;&lt;path id=3D"primary"=
 d=3D"M20.48,15a8.86,8.86,0,0,1-2.12,3.36A9,9,0,1,1,16,3.94" style=3D"fill:=
 none; stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-=
width: 2;"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt; Avatar&lt;/span&gt;&lt;a =
href=3D"javascript:void(0)" class=3D"item-action avatar-action" id=3D"edit-=
avatar-btn"&gt;&lt;div class=3D"item-avatar-preview"&gt;&lt;img id=3D"accou=
nt-page-avatar-preview-img" src=3D"" alt=3D"Current Avatar" /&gt;&lt;/div&g=
t;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" width=3D"16" height=3D"16" f=
ill=3D"currentColor" viewBox=3D"0 0 16 16"&gt;&lt;path fill-rule=3D"evenodd=
" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1=
-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&lt;/svg&gt;&lt;/a&=
gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=3D"account-list-section" id=3D"my-=
content-section"&gt;&lt;h3 class=3D"section-header"&gt;My Content&lt;/h3&gt=
;&lt;div class=3D"account-list-item"&gt;&lt;div class=3D"item-label-group"&=
gt;&lt;span class=3D"item-label"&gt;&lt;svg fill=3D"#fff" width=3D"20px" he=
ight=3D"20px" viewBox=3D"0 0 24 24" xmlns=3D"http://www.w3.org/2000/svg"&gt=
;&lt;g id=3D"SVGRepo_bgCarrier" stroke-width=3D"0"&gt;&lt;/g&gt;&lt;g id=3D=
"SVGRepo_tracerCarrier" stroke-linecap=3D"round" stroke-linejoin=3D"round"&=
gt;&lt;/g&gt;&lt;g id=3D"SVGRepo_iconCarrier"&gt;&lt;polygon id=3D"secondar=
y" points=3D"5.76 16.3 3 16.67 5 18.47 4.53 21 7 19.8 9.47 21 9 18.47 11 16=
.67 8.24 16.3 7 14 5.76 16.3" style=3D"fill: none; stroke: var(--keycolor);=
 stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"&gt;&lt;/p=
olygon&gt;&lt;path id=3D"primary" d=3D"M7,10V4A1,1,0,0,1,8,3h9l4,4V20a1,1,0=
,0,1-1,1H14" style=3D"fill: none; stroke: #fff; stroke-linecap: round; stro=
ke-linejoin: round; stroke-width: 2;"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt=
; Watchlist&lt;/span&gt;&lt;span class=3D"item-count" data-count-for=3D"wat=
chlist"&gt;&lt;/span&gt;&lt;/div&gt;&lt;a href=3D"/p/watchlist.html" class=
=3D"item-action"&gt;&lt;span&gt;View All&lt;/span&gt;&lt;svg xmlns=3D"http:=
//www.w3.org/2000/svg" width=3D"16" height=3D"16" fill=3D"currentColor" vie=
wBox=3D"0 0 16 16"&gt;&lt;path fill-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5=
 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.64=
6 2.354a.5.5 0 0 1 0-.708z"/&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/div&gt;&lt;div c=
lass=3D"account-list-item"&gt;&lt;div class=3D"item-label-group"&gt;&lt;spa=
n class=3D"item-label"&gt;&lt;svg fill=3D"#ffffff" width=3D"20px" height=3D=
"20px" viewBox=3D"0 0 24 24" xmlns=3D"http://www.w3.org/2000/svg"&gt;&lt;g =
id=3D"SVGRepo_bgCarrier" stroke-width=3D"0"&gt;&lt;/g&gt;&lt;g id=3D"SVGRep=
o_tracerCarrier" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;=
/g&gt;&lt;g id=3D"SVGRepo_iconCarrier"&gt;&lt;polyline id=3D"secondary" poi=
nts=3D"8 12 12 12 12 7" style=3D"fill: none; stroke: var(--keycolor); strok=
e-linecap: round; stroke-linejoin: round; stroke-width: 2;"&gt;&lt;/polylin=
e&gt;&lt;path id=3D"primary" d=3D"M12,3a9,9,0,1,1-9,9" style=3D"fill: none;=
 stroke: #fff; stroke-linecap: round; stroke-linejoin: round; stroke-width:=
 2;"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt; Watch History&lt;/span&gt;&lt;s=
pan class=3D"item-count" data-count-for=3D"history"&gt;&lt;/span&gt;&lt;/di=
v&gt;&lt;a href=3D"/p/history.html" class=3D"item-action"&gt;&lt;span&gt;Vi=
ew All&lt;/span&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" width=3D"16=
" height=3D"16" fill=3D"currentColor" viewBox=3D"0 0 16 16"&gt;&lt;path fil=
l-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .70=
8l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&l=
t;/svg&gt;&lt;/a&gt;&lt;/div&gt;&lt;div class=3D"account-list-item"&gt;&lt;=
div class=3D"item-label-group"&gt;&lt;span class=3D"item-label"&gt;&lt;svg =
fill=3D"#fff" width=3D"20px" height=3D"20px" viewBox=3D"0 0 24 24" xmlns=3D=
"http://www.w3.org/2000/svg"&gt;&lt;g id=3D"SVGRepo_bgCarrier" stroke-width=
=3D"0"&gt;&lt;/g&gt;&lt;g id=3D"SVGRepo_tracerCarrier" stroke-linecap=3D"ro=
und" stroke-linejoin=3D"round"&gt;&lt;/g&gt;&lt;g id=3D"SVGRepo_iconCarrier=
"&gt;&lt;path id=3D"secondary" d=3D"M16.84,13.72l-.34.34-.34-.34a2.43,2.43,=
0,0,0-3.45,0,2.47,2.47,0,0,0,0,3.47l1,1L16.5,21l2.75-2.77,1-1a2.47,2.47,0,0=
,0,0,3.47A2.43,2.43,0,0,0,16.84,13.72Z" style=3D"fill: none; stroke: var(--=
keycolor); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"=
&gt;&lt;/path&gt;&lt;path id=3D"primary" d=3D"M10,20H4a1,1,0,0,1-1-1V4A1,1,=
0,0,1,4,3h8.59a1,1,0,0,1,.7.29l3.42,3.42a1,1,0,0,1,.29.7V9" style=3D"fill: =
none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; strok=
e-width: 2;"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt; Favorite&lt;/span&gt;&l=
t;span class=3D"item-count" data-count-for=3D"favorite"&gt;&lt;/span&gt;&lt=
;/div&gt;&lt;a href=3D"/p/favorite.html" class=3D"item-action"&gt;&lt;span&=
gt;View All&lt;/span&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" width=
=3D"16" height=3D"16" fill=3D"currentColor" viewBox=3D"0 0 16 16"&gt;&lt;pa=
th fill-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1=
 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/=
&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=3D"account-=
list-section"&gt;&lt;h3 class=3D"section-header"&gt;Settings &amp; Data&lt;=
/h3&gt;&lt;div class=3D"account-list-item"&gt;&lt;span class=3D"item-label"=
&gt;&lt;svg fill=3D"#000000" width=3D"20px" height=3D"20px" viewBox=3D"0 0 =
24 24" xmlns=3D"http://www.w3.org/2000/svg" class=3D"icon flat-color"&gt;&l=
t;g id=3D"SVGRepo_bgCarrier" stroke-width=3D"0"&gt;&lt;/g&gt;&lt;g id=3D"SV=
GRepo_tracerCarrier" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;=
&lt;/g&gt;&lt;g id=3D"SVGRepo_iconCarrier"&gt;&lt;circle id=3D"primary" cx=
=3D"12" cy=3D"12" r=3D"10" style=3D"fill: #fff;"&gt;&lt;/circle&gt;&lt;path=
 id=3D"secondary" d=3D"M22,12A10,10,0,0,1,12,22V2A10,10,0,0,1,22,12Z" style=
=3D"fill: var(--keycolor);"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt; Theme&lt=
;/span&gt;&lt;a href=3D"javascript:void(0)" class=3D"item-action" id=3D"ope=
n-theme-settings-modal-mobile"&gt;&lt;span class=3D"item-value"&gt;Customiz=
e&lt;/span&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" width=3D"16" hei=
ght=3D"16" fill=3D"currentColor" viewBox=3D"0 0 16 16"&gt;&lt;path fill-rul=
e=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 =
6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&lt;/sv=
g&gt;&lt;/a&gt;&lt;/div&gt;&lt;div class=3D"account-list-item mobile-only-s=
etting" id=3D"safe-mode-button-mobile"&gt;&lt;span class=3D"item-label"&gt;=
&lt;svg class=3D\'safe-mode-icon\' fill=3D\'none\' viewBox=3D\'0 0 24 24\' =
xmlns=3D\'http://www.w3.org/2000/svg\' style=3D"width: 20px; height: 20px; =
stroke: #fff;"&gt;&lt;path class=3D\'lightning\' d=3D\'M8.12901 11.1313L12.=
128 6.1907C12.4408 5.80431 13.027 6.0448 13.027 6.55951V10.3836C13.027 10.6=
919 13.2569 10.9419 13.5405 10.9419H15.4855C15.9274 10.9419 16.1629 11.5083=
 15.871 11.8689L11.872 16.8095C11.5592 17.1959 10.973 16.9554 10.973 16.440=
7V12.6167C10.973 12.3083 10.7431 12.0584 10.4595 12.0584H8.51449C8.07264 12=
.0584 7.83711 11.4919 8.12901 11.1313Z\' stroke-linecap=3D\'round\' stroke-=
linejoin=3D\'round\' stroke-width=3D\'1.5\'/&gt;&lt;path class=3D\'shield\'=
 d=3D\'M21 11.1835V8.28041C21 6.64041 21 5.82041 20.5959 5.28541C20.1918 4.=
75042 19.2781 4.49068 17.4507 3.97122C16.2022 3.61632 15.1016 3.18875 14.22=
23 2.79841C13.0234 2.26622 12.424 2.00012 12 2.00012C11.576 2.00012 10.9766=
 2.26622 9.77771 2.79841C8.89839 3.18875 7.79784 3.61619 6.54933 3.9711C4.7=
2193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V=
11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22=
 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085=
 21 11.1833Z\' stroke-linecap=3D\'round\' stroke-width=3D\'1.5\'/&gt;&lt;/s=
vg&gt; Safe Mode&lt;/span&gt;&lt;a href=3D"javascript:void(0)" class=3D"ite=
m-action"&gt;&lt;span class=3D"item-value toggle-status" id=3D"safe-mode-st=
atus-mobile"&gt;Off&lt;/span&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg=
" width=3D"16" height=3D"16" fill=3D"currentColor" viewBox=3D"0 0 16 16"&gt=
;&lt;path fill-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.=
5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-=
.708z"/&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/div&gt;&lt;div class=3D"account-list-=
item"&gt;&lt;span class=3D"item-label"&gt;&lt;svg fill=3D"#fff" width=3D"20=
px" height=3D"20px" viewBox=3D"0 0 24 24" xmlns=3D"http://www.w3.org/2000/s=
vg"&gt;&lt;g id=3D"SVGRepo_bgCarrier" stroke-width=3D"0"&gt;&lt;/g&gt;&lt;g=
 id=3D"SVGRepo_tracerCarrier" stroke-linecap=3D"round" stroke-linejoin=3D"r=
ound"&gt;&lt;/g&gt;&lt;g id=3D"SVGRepo_iconCarrier"&gt;&lt;path id=3D"secon=
dary" d=3D"M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7m4,4v6" style=3D"fill: no=
ne; stroke: var(--keycolor); stroke-linecap: round; stroke-linejoin: round;=
 stroke-width: 2;"&gt;&lt;/path&gt;&lt;path id=3D"primary" d=3D"M4,7H20M17.=
07,20.07,18,7H6l.93,13.07a1,1,0,0,0,1,.93h8.14A1,1,0,0,0,17.07,20.07Z" styl=
e=3D"fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: r=
ound; stroke-width: 2;"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt; Clear Cache&=
lt;/span&gt;&lt;a href=3D"javascript:void(0)" class=3D"item-action" id=3D"c=
lear-cache-btn"&gt;&lt;span class=3D"item-value"&gt;0 KB&lt;/span&gt;&lt;sv=
g xmlns=3D"http://www.w3.org/2000/svg" width=3D"16" height=3D"16" fill=3D"c=
urrentColor" viewBox=3D"0 0 16 16"&gt;&lt;path fill-rule=3D"evenodd" d=3D"M=
4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.7=
08L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/=
div&gt;&lt;div class=3D"account-list-item" id=3D"logout-list-item"&gt;&lt;s=
pan class=3D"item-label"&gt;&lt;svg fill=3D"#fff" width=3D"20px" height=3D"=
20px" viewBox=3D"0 0 24 24" xmlns=3D"http://www.w3.org/2000/svg"&gt;&lt;g i=
d=3D"SVGRepo_bgCarrier" stroke-width=3D"0"&gt;&lt;/g&gt;&lt;g id=3D"SVGRepo=
_tracerCarrier" stroke-linecap=3D"round" stroke-linejoin=3D"round"&gt;&lt;/=
g&gt;&lt;g id=3D"SVGRepo_iconCarrier"&gt;&lt;polyline id=3D"secondary" poin=
ts=3D"10 15 7 12 10 9" style=3D"fill: none; stroke: var(--keycolor); stroke=
-linecap: round; stroke-linejoin: round; stroke-width: 2;"&gt;&lt;/polyline=
&gt;&lt;line id=3D"secondary-2" data-name=3D"secondary" x1=3D"7" y1=3D"12" =
x2=3D"21" y2=3D"12" style=3D"fill: none; stroke: var(--keycolor); stroke-li=
necap: round; stroke-linejoin: round; stroke-width: 2;"&gt;&lt;/line&gt;&lt=
;path id=3D"primary" d=3D"M14,16v3a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,=
1,4,4h9a1,1,0,0,1,1,1V8" style=3D"fill: none; stroke: #ffffff; stroke-linec=
ap: round; stroke-linejoin: round; stroke-width: 2;"&gt;&lt;/path&gt;&lt;/g=
&gt;&lt;/svg&gt; Logout&lt;/span&gt;&lt;a href=3D"javascript:void(0)" class=
=3D"item-action" id=3D"account-page-logout-btn"&gt;&lt;span class=3D"item-v=
alue"&gt;Proceed&lt;/span&gt;&lt;svg xmlns=3D"http://www.w3.org/2000/svg" w=
idth=3D"16" height=3D"16" fill=3D"currentColor" viewBox=3D"0 0 16 16"&gt;&l=
t;path fill-rule=3D"evenodd" d=3D"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0=
 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.70=
8z"/&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;';let eO=
=3D"true"=3D=3D=3DlocalStorage.getItem("matureFilterActive"),eZ=3Ddocument.=
getElementById("safe-mode-status-mobile");eZ&amp;&amp;(eZ.textContent=3DeO?=
"On":"Off"),eU&amp;&amp;(eU.style.display=3D"flex",e8.querySelector(".accou=
nt-page-container").appendChild(eU)),e8.insertAdjacentHTML("afterend",'&lt;=
div class=3D"avatar-modal-overlay" id=3D"avatar-modal"&gt;&lt;div class=3D"=
avatar-modal-box"&gt;&lt;div class=3D"avatar-modal-header"&gt;&lt;h3&gt;Cho=
ose Your Avatar&lt;/h3&gt;&lt;button class=3D"avatar-modal-close" id=3D"ava=
tar-modal-close"&gt;&amp;times;&lt;/button&gt;&lt;/div&gt;&lt;div class=3D"=
avatar-category-tabs" id=3D"avatar-category-tabs"&gt;&lt;/div&gt;&lt;div cl=
ass=3D"avatar-grid" id=3D"avatar-grid"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&=
gt;');let eK=3Ddocument.getElementById("account-page-avatar-img"),eJ=3Ddocu=
ment.getElementById("account-page-name"),eY=3Ddocument.getElementById("acco=
unt-page-username-value"),eQ=3Ddocument.getElementById("account-page-avatar=
-preview-img"),eX=3Ddocument.getElementById("account-section-header"),te=3D=
document.getElementById("username-list-item"),tt=3Ddocument.getElementById(=
"avatar-list-item"),ta=3Ddocument.getElementById("logout-list-item"),ti=3Dd=
ocument.getElementById("my-content-section"),tn=3Ddocument.getElementById("=
edit-username-btn"),ts=3Ddocument.getElementById("clear-cache-btn"),tl=3Ddo=
cument.getElementById("account-page-logout-btn"),tr=3Ddocument.getElementBy=
Id("edit-avatar-btn"),to=3Ddocument.getElementById("avatar-modal"),td=3Ddoc=
ument.getElementById("avatar-modal-close"),tc=3Ddocument.getElementById("av=
atar-category-tabs"),t_=3Ddocument.getElementById("avatar-grid"),t1=3Ddocum=
ent.getElementById("open-theme-settings-modal-mobile"),tp=3Ddocument.getEle=
mentById("theme-settings-overlay");tr.addEventListener("click",()=3D&gt;{le=
t e=3DJSON.parse(localStorage.getItem(s));e&amp;&amp;!e.isGuest&amp;&amp;e9=
()}),td.addEventListener("click",eG),to.addEventListener("click",e=3D&gt;{e=
.target=3D=3D=3Dto&amp;&amp;eG()}),tn.addEventListener("click",e=3D&gt;{e.p=
reventDefault();let t=3DJSON.parse(localStorage.getItem(s));t&amp;&amp;!t.i=
sGuest&amp;&amp;showCustomPrompt("Edit Username","Enter your new display na=
me:",t.name,e=3D&gt;{e&amp;&amp;""!=3D=3De.trim()?(t.name=3De.trim(),localS=
torage.setItem(s,JSON.stringify(t)),sessionStorage.setItem("showToastAfterR=
eload","Username updated successfully."),location.reload()):null!=3D=3De&am=
p;&amp;showCustomAlert("Invalid Name","Display name cannot be empty.")})}),=
ts.addEventListener("click",e=3D&gt;{e.preventDefault(),showCustomConfirm("=
Confirm Clear Cache","This will clear your watch history, favorites, and wa=
tchlist. Are you sure?",()=3D&gt;{let e=3D[s,"sidebarState","supabase_clien=
t_id"];for(let t=3DlocalStorage.length-1;t&gt;=3D0;t--){let a=3DlocalStorag=
e.key(t);e.includes(a)||a.startsWith("slider_cache_")||localStorage.removeI=
tem(a)}sessionStorage.clear(),sessionStorage.setItem("showToastAfterReload"=
,"Cache has been cleared."),location.reload()})}),tl.addEventListener("clic=
k",e=3D&gt;{e.preventDefault(),showCustomConfirm("Confirm Logout","Are you =
sure you want to log out?",()=3D&gt;{localStorage.removeItem(s),sessionStor=
age.setItem("showToastAfterReload","You have been logged out."),location.re=
load()})}),t1&amp;&amp;tp&amp;&amp;t1.addEventListener("click",e=3D&gt;{e.p=
reventDefault(),tp.style.display=3D"flex",setTimeout(()=3D&gt;tp.classList.=
add("is-visible"),10)}),eW(),function(){let e=3Ddocument.getElementById("av=
atar-data-source");if(!e)return;let t=3DArray.from(e.children).map(e=3D&gt;=
({name:e.dataset.name,avatars:Array.from(e.querySelectorAll("img")).map(e=
=3D&gt;e.src)}));tc.innerHTML=3D"",t.forEach((e,a)=3D&gt;{let i=3Ddocument.=
createElement("button");i.className=3D"avatar-category-tab",i.textContent=
=3De.name,i.addEventListener("click",()=3D&gt;eR(a,t)),tc.appendChild(i)}),=
t.length&gt;0&amp;&amp;eR(0,t)}(),window.addEventListener("storage",e=3D&gt=
;{e.key=3D=3D=3Ds&amp;&amp;eW()})}}let t0=3Ddocument.getElementById("loginM=
odalOverlay"),t$=3Ddocument.getElementById("user-logged-out"),tm=3Ddocument=
.getElementById("user-logged-in");if(t0){let tu=3Dfunction(){t0.classList.r=
emove("hidden"),t4&amp;&amp;t4.focus()},tg=3Dfunction(){t0.classList.add("h=
idden")},th=3Ddocument.getElementById("cancelLoginBtn"),tv=3Ddocument.getEl=
ementById("loginWithDisplayNameBtn"),tf=3Ddocument.getElementById("loginAsG=
uestBtn"),t4=3Ddocument.getElementById("displayNameInput");document.addEven=
tListener("click",function(e){("showLoginModalBtn"=3D=3D=3De.target.id||e.t=
arget.closest("#showLoginModalBtn"))&amp;&amp;(e.preventDefault(),tu())}),t=
h&amp;&amp;th.addEventListener("click",tg),t0.addEventListener("click",e=3D=
&gt;{e.target=3D=3D=3Dt0&amp;&amp;tg()}),tv&amp;&amp;tv.addEventListener("c=
lick",()=3D&gt;{let e=3Dt4.value.trim();e?(localStorage.setItem(s,JSON.stri=
ngify({name:e,isGuest:!1})),sessionStorage.setItem("showToastAfterReload","=
Logged in as "+e),location.reload()):window.showCustomAlert?showCustomAlert=
("Login Error","Please enter a display name."):alert("Please enter a displa=
y name.")}),tf&amp;&amp;tf.addEventListener("click",()=3D&gt;{localStorage.=
setItem(s,JSON.stringify({name:"Guest",isGuest:!0})),sessionStorage.setItem=
("showToastAfterReload","Logged in as Guest."),location.reload()})}let t2=
=3Ddocument.getElementById("modalClearDataBtn"),ty=3Ddocument.getElementByI=
d("modalLogoutBtn");ty&amp;&amp;ty.addEventListener("click",e=3D&gt;{e.prev=
entDefault(),window.showCustomConfirm&amp;&amp;showCustomConfirm("Confirm L=
ogout","Are you sure you want to log out?",()=3D&gt;{localStorage.removeIte=
m(s),sessionStorage.setItem("showToastAfterReload","You have been logged ou=
t."),location.reload()})}),t2&amp;&amp;t2.addEventListener("click",e=3D&gt;=
{e.preventDefault(),window.showCustomConfirm&amp;&amp;showCustomConfirm("Co=
nfirm Clear Cache","This will clear your watch history, favorites, and watc=
hlist. Are you sure?",()=3D&gt;{let e=3D[s,"sidebarState","supabase_client_=
id"];for(let t=3DlocalStorage.length-1;t&gt;=3D0;t--){let a=3DlocalStorage.=
key(t);e.includes(a)||a.startsWith("slider_cache_")||localStorage.removeIte=
m(a)}sessionStorage.clear(),sessionStorage.setItem("showToastAfterReload","=
Cache has been cleared."),location.reload()})});let t3=3Ddocument.querySele=
ctorAll("[data-panel-target]"),t5=3Ddocument.getElementById("notification-o=
verlay");function t6(e,t){let a=3De.getBoundingClientRect(),i=3Dt.offsetWid=
th,n=3Da.left+a.width/2,s=3Dn-i/2;s&lt;20&amp;&amp;(s=3D20),s+i&gt;window.i=
nnerWidth-20&amp;&amp;(s=3Dwindow.innerWidth-i-20),t.style.left=3Ds+"px",t.=
style.right=3D"auto",t.style.setProperty("--arrow-position-left",n-s+"px")}=
if(t3.forEach(e=3D&gt;{e.addEventListener("click",function(e){e.preventDefa=
ult(),e.stopPropagation();let t=3Dthis.getAttribute("data-panel-target"),a=
=3Ddocument.querySelector(t);if(!a)return;let i=3Da.classList.contains("is-=
visible");if(document.querySelectorAll(".header-dropdown-panel.is-visible")=
.forEach(e=3D&gt;{e!=3D=3Da&amp;&amp;e.classList.remove("is-visible")}),t5&=
amp;&amp;t5.classList.remove("is-visible"),!i){if(a.classList.add("is-visib=
le"),"#notification-panel"=3D=3D=3Dt&amp;&amp;window.innerWidth&lt;=3D767&a=
mp;&amp;t5&amp;&amp;t5.classList.add("is-visible"),window.innerWidth&gt;767=
&amp;&amp;t6(this,a),"#notification-panel"=3D=3D=3Dt){let n=3Ddocument.getE=
lementById("notification-panel-content"),s=3Ddocument.getElementById("heade=
r-notifications");n&amp;&amp;s&amp;&amp;(n.innerHTML=3Ds.innerHTML)}"#histo=
ry-panel"=3D=3D=3Dt&amp;&amp;"function"=3D=3Dtypeof displayHistory&amp;&amp=
;displayHistory(),"#watchlist-panel"=3D=3D=3Dt&amp;&amp;"function"=3D=3Dtyp=
eof renderWatchlistPanel&amp;&amp;renderWatchlistPanel()}})}),document.addE=
ventListener("click",function(e){e.target.closest("[data-panel-target]")||e=
.target.closest(".header-dropdown-panel")||(document.querySelectorAll(".hea=
der-dropdown-panel.is-visible").forEach(e=3D&gt;e.classList.remove("is-visi=
ble")),t5&amp;&amp;t5.classList.remove("is-visible"))}),window.innerWidth&g=
t;767){let t7;t3.forEach(e=3D&gt;{let t=3De.getAttribute("data-panel-target=
"),a=3Ddocument.querySelector(t);a&amp;&amp;(e.addEventListener("mouseenter=
",()=3D&gt;{if(clearTimeout(t7),document.querySelectorAll(".header-dropdown=
-panel.is-visible").forEach(e=3D&gt;e.classList.remove("is-visible")),t6(e,=
a),a.classList.add("is-visible"),"#notification-panel"=3D=3D=3Dt){let i=3Dd=
ocument.getElementById("notification-panel-content"),n=3Ddocument.getElemen=
tById("header-notifications");i&amp;&amp;n&amp;&amp;(i.innerHTML=3Dn.innerH=
TML)}"#history-panel"=3D=3D=3Dt&amp;&amp;"function"=3D=3Dtypeof displayHist=
ory&amp;&amp;displayHistory(),"#watchlist-panel"=3D=3D=3Dt&amp;&amp;"functi=
on"=3D=3Dtypeof renderWatchlistPanel&amp;&amp;renderWatchlistPanel()}),e.ad=
dEventListener("mouseleave",()=3D&gt;{t7=3DsetTimeout(()=3D&gt;a.classList.=
remove("is-visible"),200)}),a.addEventListener("mouseenter",()=3D&gt;clearT=
imeout(t7)),a.addEventListener("mouseleave",()=3D&gt;a.classList.remove("is=
-visible")))})}let tb=3Ddocument.body,tw=3Ddocument.getElementById("sidebar=
Toggle");tw&amp;&amp;("collapsed"=3D=3D=3DlocalStorage.getItem("sidebarStat=
e")&amp;&amp;tb.classList.add("sidebar-collapsed"),tb.classList.add("no-tra=
nsition"),setTimeout(()=3D&gt;{tb.classList.remove("no-transition")},100),t=
w.addEventListener("click",()=3D&gt;{tb.classList.toggle("sidebar-collapsed=
");let e=3Dtb.classList.contains("sidebar-collapsed")?"collapsed":"expanded=
";localStorage.setItem("sidebarState",e),setTimeout(function(){"undefined"!=
=3Dtypeof $&amp;&amp;$.fn.owlCarousel&amp;&amp;$("#dynamic-main-slider, #Po=
pularPosts1 .owl-carousel").trigger("refresh.owl.carousel")},350)}));let tk=
=3DsessionStorage.getItem("showToastAfterReload");if(tk){var tC;tC=3Dtk,_&a=
mp;&amp;p&amp;&amp;(p.textContent=3DtC,_.classList.remove("hidden"),setTime=
out(()=3D&gt;_.classList.add("show"),10),setTimeout(()=3D&gt;{_.classList.r=
emove("show"),setTimeout(()=3D&gt;_.classList.add("hidden"),500)},3e3)),ses=
sionStorage.removeItem("showToastAfterReload")}a(),function e(){let t=3DJSO=
N.parse(localStorage.getItem(s));if(t&amp;&amp;t.name){let a=3Ddocument.get=
ElementById("loggedInUserName"),i=3Ddocument.getElementById("userAvatar"),n=
=3Ddocument.getElementById("modalUserName"),l=3Ddocument.getElementById("mo=
dalUserAvatar"),c=3Dt.isGuest?r:t.avatar||o;a.textContent=3Dt.name,i.src=3D=
c,n.textContent=3Dt.name,l.src=3Dc,tm.classList.remove("hidden"),t$.classLi=
st.add("hidden")}else{let _=3Ddocument.getElementById("logged-out-avatar"),=
p=3Ddocument.getElementById("logged-out-name");_&amp;&amp;(_.src=3Dd),p&amp=
;&amp;(p.textContent=3D"Me"),tm.classList.add("hidden"),t$.classList.remove=
("hidden")}}(),t&amp;&amp;i()}),document.addEventListener("DOMContentLoaded=
",function(){function e(){var e=3Ddocument.querySelector(".upcoming-carouse=
l-wrapper"),t=3Ddocument.getElementById("upcoming-carousel-widgets"),a=3Ddo=
cument.querySelector(".upcoming-carousel-section");if(!e||!t||!a){a&amp;&am=
p;(a.style.display=3D"none");return}e.id=3D"upcoming-carousel";var i=3Dt.qu=
erySelectorAll(".widget.Image");if(0=3D=3D=3Di.length){a.style.display=3D"n=
one";return}var n=3D"";i.forEach(function(e){if("none"!=3D=3De.style.displa=
y&amp;&amp;!e.classList.contains("hidden")){var t=3De.querySelector(".hidde=
n-widget-data");if(t){var a=3D(t.querySelector(".data-title")||{}).textCont=
ent||"",i=3D(t.querySelector(".data-caption")||{}).textContent||"",s=3D(e.q=
uerySelector("a")||{}).href||"#",l=3D(e.querySelector("img")||{}).src||"";i=
f(l){let r=3Di.match(/^\[(TV|Movie)\]\s*\[(.*?)\]\s*(.*)$/s),o=3D"",d=3D"",=
c=3Di;if(r){let _=3Dr[1],p=3Dr[2].trim();c=3Dr[3].trim(),o=3D'&lt;span clas=
s=3D"upcoming-thumb-type '+("tv"=3D=3D=3D_.toLowerCase()?"type-tv":"type-mo=
vie")+'"&gt;'+_+"&lt;/span&gt;",p&amp;&amp;(d=3D'&lt;span class=3D"upcoming=
-date"&gt;'+p+"&lt;/span&gt;")}n+=3D'&lt;div class=3D"item"&gt;&lt;a class=
=3D"upcoming-card" href=3D"'+s+'"&gt;&lt;div class=3D"upcoming-image"&gt;'+=
o+'&lt;img alt=3D"'+a+'" src=3D"'+l.replace(/\/s\d+(-[a-z0-9]+)*\//,"/w200-=
h300-c/")+'" loading=3D"lazy"/&gt;&lt;/div&gt;&lt;div class=3D"upcoming-con=
tent"&gt;&lt;h4 class=3D"upcoming-title"&gt;'+a+"&lt;/h4&gt;"+d+'&lt;p clas=
s=3D"upcoming-description"&gt;'+c+'&lt;/p&gt;&lt;div class=3D"upcoming-butt=
on"&gt;More Details&lt;/div&gt;&lt;/div&gt;&lt;/a&gt;&lt;/div&gt;'}}}}),""!=
=3D=3Dn.trim()?(e.innerHTML=3Dn,$(e).addClass("owl-carousel owl-theme").owl=
Carousel({loop:!1,margin:16,nav:!0,dots:!1,navText:['&lt;svg fill=3D"none" =
viewBox=3D"0 0 24 24"&gt;&lt;path stroke=3D"currentColor" stroke-linecap=3D=
"round" stroke-linejoin=3D"round" stroke-width=3D"2" d=3D"M15 18l-6-6 6-6"/=
&gt;&lt;/svg&gt;','&lt;svg fill=3D"none" viewBox=3D"0 0 24 24"&gt;&lt;path =
stroke=3D"currentColor" stroke-linecap=3D"round" stroke-linejoin=3D"round" =
stroke-width=3D"2" d=3D"M9 6l6 6-6 6"/&gt;&lt;/svg&gt;'],responsive:{0:{aut=
oWidth:!0,stagePadding:20,margin:12},768:{items:2,slideBy:2},1200:{items:3,=
slideBy:3}}})):a.style.display=3D"none"}window.jQuery&amp;&amp;jQuery.fn.ow=
lCarousel?e():setTimeout(e,500)}),document.addEventListener("DOMContentLoad=
ed",function(){let e=3Ddocument.getElementById("mobile-genre-trigger"),t=3D=
document.getElementById("mobile-genre-sidebar"),a=3Ddocument.getElementById=
("mobile-genre-overlay"),i=3Ddocument.getElementById("mobile-genre-close"),=
n=3Ddocument.getElementById("mobile-genre-list-container");if(e&amp;&amp;t&=
amp;&amp;a&amp;&amp;i&amp;&amp;n){let s=3D()=3D&gt;{if(0=3D=3D=3Dn.children=
.length){let e=3Ddocument.querySelector(".genre-dropdown-trigger .widget-co=
ntent ul");if(e){let t=3De.cloneNode(!0);t.className=3D"mobile-genre-list",=
n.appendChild(t)}else n.innerHTML=3D'&lt;p style=3D"color: #888;"&gt;Could =
not load genres.&lt;/p&gt;'}document.body.classList.add("genre-sidebar-open=
")},l=3D()=3D&gt;{document.body.classList.remove("genre-sidebar-open")};e.a=
ddEventListener("click",e=3D&gt;{e.preventDefault(),s()}),i.addEventListene=
r("click",l),a.addEventListener("click",l)}})})();
</pre></body></html>
------MultipartBoundary--pNkmEE7gAxWLUoiDj9yTteEpZMrC5Jd0L8nuZUDBx6----
Content-Type: text/css
Content-Transfer-Encoding: quoted-printable
Content-Location: cid:css-b0ab6bca-4f23-4a0e-8d87-70ae983a5c78@mhtml.blink

@charset "utf-8";

ins[class*=3D"adsbygoogle"], ins[class*=3D"adsbyadop"], [id*=3D"div-gpt-ad"=
], amp-ad { display: none !important; }
------MultipartBoundary--pNkmEE7gAxWLUoiDj9yTteEpZMrC5Jd0L8nuZUDBx6------
