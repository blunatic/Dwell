CKEDITOR.dialog.add("link",function(e){function t(e){return e.replace(/'/g,"\\$&")}function a(e){var a,n,i,s=l;a=[o,"("];for(var r=0;r<s.length;r++)n=s[r].toLowerCase(),i=e[n],r>0&&a.push(","),a.push("'",i?t(encodeURIComponent(e[n])):"","'");return a.push(")"),a.join("")}function n(e){for(var t,a=e.length,n=[],i=0;a>i;i++)t=e.charCodeAt(i),n.push(t);return"String.fromCharCode("+n.join(",")+")"}function i(e){return(e=e.getAttribute("class"))?e.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var l,o,s=CKEDITOR.plugins.link,r=function(){var t=this.getDialog(),a=t.getContentElement("target","popupFeatures"),t=t.getContentElement("target","linkTargetName"),n=this.getValue();if(a&&t)switch(a=a.getElement(),a.hide(),t.setValue(""),n){case"frame":t.setLabel(e.lang.link.targetFrameName),t.getElement().show();break;case"popup":a.show(),t.setLabel(e.lang.link.targetPopupName),t.getElement().show();break;default:t.setValue(n),t.getElement().hide()}},d=/^javascript:/,c=/^mailto:([^?]+)(?:\?(.+))?$/,h=/subject=([^;?:@&=$,\/]*)/,u=/body=([^;?:@&=$,\/]*)/,p=/^#(.*)$/,m=/^((?:http|https|ftp|news):\/\/)?(.*)$/,g=/^(_(?:self|top|parent|blank))$/,f=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,y=/^javascript:([^(]+)\(([^)]+)\)$/,b=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,v=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,C=function(e,t){var a,n,s=t&&(t.data("cke-saved-href")||t.getAttribute("href"))||"",r={};if(s.match(d)&&("encode"==T?s=s.replace(f,function(e,t,a){return"mailto:"+String.fromCharCode.apply(String,t.split(","))+(a&&a.replace(/\\'/g,"'"))}):T&&s.replace(y,function(e,t,a){if(t==o){r.type="email";for(var n,i,e=r.email={},t=/(^')|('$)/g,a=a.match(/[^,\s]+/g),s=a.length,d=0;s>d;d++)n=decodeURIComponent,i=a[d].replace(t,"").replace(/\\'/g,"'"),i=n(i),n=l[d].toLowerCase(),e[n]=i;e.address=[e.name,e.domain].join("@")}})),!r.type)if(a=s.match(p))r.type="anchor",r.anchor={},r.anchor.name=r.anchor.id=a[1];else if(a=s.match(c)){n=s.match(h),s=s.match(u),r.type="email";var C=r.email={};C.address=a[1],n&&(C.subject=decodeURIComponent(n[1])),s&&(C.body=decodeURIComponent(s[1]))}else s&&(n=s.match(m))?(r.type="url",r.url={},r.url.protocol=n[1],r.url.url=n[2]):r.type="url";if(t){if(a=t.getAttribute("target"),r.target={},r.adv={},a)a.match(g)?r.target.type=r.target.name=a:(r.target.type="frame",r.target.name=a);else if(a=(a=t.data("cke-pa-onclick")||t.getAttribute("onclick"))&&a.match(b))for(r.target.type="popup",r.target.name=a[1];s=v.exec(a[2]);)"yes"!=s[2]&&"1"!=s[2]||s[1]in{height:1,width:1,top:1,left:1}?isFinite(s[2])&&(r.target[s[1]]=s[2]):r.target[s[1]]=!0;a=function(e,a){var n=t.getAttribute(a);null!==n&&(r.adv[e]=n||"")},a("advId","id"),a("advLangDir","dir"),a("advAccessKey","accessKey"),r.adv.advName=t.data("cke-saved-name")||t.getAttribute("name")||"",a("advLangCode","lang"),a("advTabIndex","tabindex"),a("advTitle","title"),a("advContentType","type"),CKEDITOR.plugins.link.synAnchorSelector?r.adv.advCSSClasses=i(t):a("advCSSClasses","class"),a("advCharset","charset"),a("advStyles","style"),a("advRel","rel")}a=r.anchors=[];var k;if(CKEDITOR.plugins.link.emptyAnchorFix)for(C=e.document.getElementsByTag("a"),s=0,n=C.count();n>s;s++)k=C.getItem(s),(k.data("cke-saved-name")||k.hasAttribute("name"))&&a.push({name:k.data("cke-saved-name")||k.getAttribute("name"),id:k.getAttribute("id")});else for(C=new CKEDITOR.dom.nodeList(e.document.$.anchors),s=0,n=C.count();n>s;s++)k=C.getItem(s),a[s]={name:k.getAttribute("name"),id:k.getAttribute("id")};if(CKEDITOR.plugins.link.fakeAnchor)for(C=e.document.getElementsByTag("img"),s=0,n=C.count();n>s;s++)(k=CKEDITOR.plugins.link.tryRestoreFakeAnchor(e,C.getItem(s)))&&a.push({name:k.getAttribute("name"),id:k.getAttribute("id")});return this._.selectedElement=t,r},k=function(e){e.target&&this.setValue(e.target[this.id]||"")},x=function(e){e.adv&&this.setValue(e.adv[this.id]||"")},w=function(e){e.target||(e.target={}),e.target[this.id]=this.getValue()||""},E=function(e){e.adv||(e.adv={}),e.adv[this.id]=this.getValue()||""},T=e.config.emailProtection||"";T&&"encode"!=T&&(o=l=void 0,T.replace(/^([^(]+)\(([^)]+)\)$/,function(e,t,a){o=t,l=[],a.replace(/[^,\s]+/g,function(e){l.push(e)})}));var S=e.lang.common,V=e.lang.link;return{title:V.title,minWidth:350,minHeight:230,contents:[{id:"info",label:V.info,title:V.info,elements:[{id:"linkType",type:"select",label:V.type,"default":"url",items:[[V.toUrl,"url"],[V.toAnchor,"anchor"],[V.toEmail,"email"]],onChange:function(){var t=this.getDialog(),a=["urlOptions","anchorOptions","emailOptions"],n=this.getValue(),i=t.definition.getContents("upload"),i=i&&i.hidden;for("url"==n?(e.config.linkShowTargetTab&&t.showPage("target"),i||t.showPage("upload")):(t.hidePage("target"),i||t.hidePage("upload")),i=0;i<a.length;i++){var l=t.getContentElement("info",a[i]);l&&(l=l.getElement().getParent().getParent(),a[i]==n+"Options"?l.show():l.hide())}t.layout()},setup:function(e){e.type&&this.setValue(e.type)},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:S.protocol,"default":"http://",items:[["http://\u200e","http://"],["https://\u200e","https://"],["ftp://\u200e","ftp://"],["news://\u200e","news://"],[V.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:S.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var e=this.getDialog().getContentElement("info","protocol"),t=this.getValue(),a=/^((javascript:)|[#\/\.\?])/i,n=/^(http|https|ftp|news):\/\/(?=.)/i.exec(t);n?(this.setValue(t.substr(n[0].length)),e.setValue(n[0].toLowerCase())):a.test(t)&&e.setValue(""),this.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var e=this.getDialog();return e.getContentElement("info","linkType")&&"url"!=e.getValueOf("info","linkType")?!0:/javascript\:/.test(this.getValue())?(alert(S.invalidValue),!1):this.getDialog().fakeObj?!0:CKEDITOR.dialog.validate.notEmpty(V.noUrl).apply(this)},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:S.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:V.selectAnchor,setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:V.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].name&&this.add(e.anchors[t].name);e.anchor&&this.setValue(e.anchor.name),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:V.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){this.clear(),this.add("");for(var t=0;t<e.anchors.length;t++)e.anchors[t].id&&this.add(e.anchors[t].id);e.anchor&&this.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(e){e.anchors.length>0?this.getElement().show():this.getElement().hide()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(V.noAnchors)+"</div>",focus:!0,setup:function(e){e.anchors.length<1?this.getElement().show():this.getElement().hide()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:V.emailAddress,required:!0,validate:function(){var e=this.getDialog();return e.getContentElement("info","linkType")&&"email"==e.getValueOf("info","linkType")?CKEDITOR.dialog.validate.notEmpty(V.noEmail).apply(this):!0},setup:function(e){e.email&&this.setValue(e.email.address),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:V.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:V.emailBody,rows:3,"default":"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:V.target,title:V.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:S.target,"default":"notSet",style:"width : 100%;",items:[[S.notSet,"notSet"],[V.targetFrame,"frame"],[V.targetPopup,"popup"],[S.targetNew,"_blank"],[S.targetTop,"_top"],[S.targetSelf,"_self"],[S.targetParent,"_parent"]],onChange:r,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),r.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:V.targetFrameName,"default":"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:V.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:V.popupResizable,setup:k,commit:w},{type:"checkbox",id:"status",label:V.popupStatusBar,setup:k,commit:w}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:V.popupLocationBar,setup:k,commit:w},{type:"checkbox",id:"toolbar",label:V.popupToolbar,setup:k,commit:w}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:V.popupMenuBar,setup:k,commit:w},{type:"checkbox",id:"fullscreen",label:V.popupFullScreen,setup:k,commit:w}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:V.popupScrollBars,setup:k,commit:w},{type:"checkbox",id:"dependent",label:V.popupDependent,setup:k,commit:w}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:S.width,id:"width",setup:k,commit:w},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:V.popupLeft,id:"left",setup:k,commit:w}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:S.height,id:"height",setup:k,commit:w},{type:"text",labelLayout:"horizontal",label:V.popupTop,widths:["50%","50%"],id:"top",setup:k,commit:w}]}]}]}]},{id:"upload",label:V.upload,title:V.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:S.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:S.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:V.advanced,title:V.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:V.id,setup:x,commit:E},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:V.langDir,"default":"",style:"width:110px",items:[[S.notSet,""],[V.langDirLTR,"ltr"],[V.langDirRTL,"rtl"]],setup:x,commit:E},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:V.acccessKey,maxLength:1,setup:x,commit:E}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:V.name,id:"advName",requiredContent:"a[name]",setup:x,commit:E},{type:"text",label:V.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:x,commit:E},{type:"text",label:V.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:x,commit:E}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:V.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:x,commit:E},{type:"text",label:V.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:x,commit:E}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:V.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:x,commit:E},{type:"text",label:V.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:x,commit:E}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:V.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:x,commit:E},{type:"text",label:V.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:x,commit:E}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),a=null;(a=s.getSelectedLink(e))&&a.hasAttribute("href")?t.getSelectedElement()||t.selectElement(a):a=null,this.setupContent(C.apply(this,[e,a]))},onOk:function(){var e={},i=[],l={},o=this.getParentEditor();switch(this.commitContent(l),l.type||"url"){case"url":var s=l.url&&void 0!=l.url.protocol?l.url.protocol:"http://",r=l.url&&CKEDITOR.tools.trim(l.url.url)||"";e["data-cke-saved-href"]=0===r.indexOf("/")?r:s+r;break;case"anchor":s=l.anchor&&l.anchor.id,e["data-cke-saved-href"]="#"+(l.anchor&&l.anchor.name||s||"");break;case"email":var d=l.email,s=d.address;switch(T){case"":case"encode":var r=encodeURIComponent(d.subject||""),c=encodeURIComponent(d.body||""),d=[];r&&d.push("subject="+r),c&&d.push("body="+c),d=d.length?"?"+d.join("&"):"","encode"==T?(s=["javascript:void(location.href='mailto:'+",n(s)],d&&s.push("+'",t(d),"'"),s.push(")")):s=["mailto:",s,d];break;default:s=s.split("@",2),d.name=s[0],d.domain=s[1],s=["javascript:",a(d)]}e["data-cke-saved-href"]=s.join("")}if(l.target)if("popup"==l.target.type){for(var s=["window.open(this.href, '",l.target.name||"","', '"],h=["resizable","status","location","toolbar","menubar","fullscreen","scrollbars","dependent"],r=h.length,d=function(e){l.target[e]&&h.push(e+"="+l.target[e])},c=0;r>c;c++)h[c]=h[c]+(l.target[h[c]]?"=yes":"=no");d("width"),d("left"),d("height"),d("top"),s.push(h.join(","),"'); return false;"),e["data-cke-pa-onclick"]=s.join(""),i.push("target")}else"notSet"!=l.target.type&&l.target.name?e.target=l.target.name:i.push("target"),i.push("data-cke-pa-onclick","onclick");l.adv&&(s=function(t,a){var n=l.adv[t];n?e[a]=n:i.push(a)},s("advId","id"),s("advLangDir","dir"),s("advAccessKey","accessKey"),l.adv.advName?e.name=e["data-cke-saved-name"]=l.adv.advName:i=i.concat(["data-cke-saved-name","name"]),s("advLangCode","lang"),s("advTabIndex","tabindex"),s("advTitle","title"),s("advContentType","type"),s("advCSSClasses","class"),s("advCharset","charset"),s("advStyles","style"),s("advRel","rel")),s=o.getSelection(),e.href=e["data-cke-saved-href"],this._.selectedElement?(o=this._.selectedElement,r=o.data("cke-saved-href"),d=o.getHtml(),o.setAttributes(e),o.removeAttributes(i),l.adv&&l.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector&&o.addClass(o.getChildCount()?"cke_anchor":"cke_anchor_empty"),(r==d||"email"==l.type&&-1!=d.indexOf("@"))&&(o.setHtml("email"==l.type?l.email.address:e["data-cke-saved-href"]),s.selectElement(o)),delete this._.selectedElement):(s=s.getRanges()[0],s.collapsed&&(o=new CKEDITOR.dom.text("email"==l.type?l.email.address:e["data-cke-saved-href"],o.document),s.insertNode(o),s.selectNodeContents(o)),o=new CKEDITOR.style({element:"a",attributes:e}),o.type=CKEDITOR.STYLE_INLINE,o.applyToRange(s),s.select())},onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced"),e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType");e&&"url"==e.getValue()&&(e=this.getContentElement("info","url"),e.select())}}});