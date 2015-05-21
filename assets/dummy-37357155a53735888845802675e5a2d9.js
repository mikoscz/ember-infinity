define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]});n["default"](i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/infinity-loader",["exports","ember-infinity/components/infinity-loader"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!r){var d=n(i.toString());a["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/ember-faker",["exports"],function(e){"use strict";function t(){}e.initialize=t,e["default"]={name:"ember-faker",initialize:t}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/models/post",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({name:t["default"].attr("string"),category:t["default"].attr("string")})}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("demo",{path:"/"}),this.route("home",{path:"test"}),this.route("category",{path:"/category/:category"})}),e["default"]=n}),define("dummy/routes/category",["exports","ember","ember-infinity/mixins/route"],function(e,t,a){"use strict";e["default"]=t["default"].Route.extend(a["default"],{model:function(e){return this.infinityModel("post",{category:e.category,perPage:2})}})}),define("dummy/routes/demo",["exports","ember","ember-infinity/mixins/route","pretender","faker"],function(e,t,a,n,r){"use strict";function i(e){for(var t=[],a=0;e>a;a++)t.push({id:a,name:r["default"].company.companyName()});return t}e["default"]=t["default"].Route.extend(a["default"],{init:function(){this._super.apply(this,arguments);var e=i(104);this.set("pretender",new n["default"]),this.get("pretender").get("/posts",function(t){var a=(t.queryParams,e),n=parseInt(t.queryParams.page,10),r=parseInt(t.queryParams.per_page,10),i={posts:a.slice((n-1)*r,Math.min(n*r,a.length)),meta:{total_pages:Math.ceil(a.length/r)}};return[200,{},JSON.stringify(i)]},500)},tearDownPretender:t["default"].observer("deactivate",function(){this.set("pretender",void 0)}),model:function(){return this.infinityModel("post")}})}),define("dummy/routes/home",["exports","ember","ember-infinity/mixins/route"],function(e,t,a){"use strict";e["default"]=t["default"].Route.extend(a["default"],{model:function(){return this.infinityModel("post")}})}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.content;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n),this.cachedFragment&&n.repairClonedNode(d,[0]);var o=n.createMorphAt(d,0,1,a);return i(t,o,e,"outlet"),d}}}())}),define("dummy/templates/category",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("  ");e.appendChild(t,a);var a=e.createElement("li");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a,n){var r=t.dom,i=t.hooks,d=i.set,o=i.content;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var s=r.createMorphAt(r.childAt(c,[1]),-1,-1);return d(t,e,"item",n[0]),o(t,s,e,"item.name"),c}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","posts-title");var n=e.createTextNode("Listing Posts using Parameters");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("ul");e.setAttribute(a,"class","test-list");var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,i=a.hooks,d=i.get,o=i.block,c=i.inline;r.detectNamespace(n);var s;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(s=this.build(r),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=r.cloneNode(this.cachedFragment,!0))):s=this.build(r);var l=r.createMorphAt(r.childAt(s,[2]),0,-1),u=r.createMorphAt(s,3,4,n);return o(a,l,t,"each",[d(a,t,"model")],{},e,null),c(a,u,t,"infinity-loader",[],{infinityModel:d(a,t,"model")}),s}}}())}),define("dummy/templates/demo",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("li"),n=e.createTextNode(". ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a,n){var r=t.dom,i=t.hooks,d=i.set,o=i.content;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var s=r.childAt(c,[1]),l=r.createMorphAt(s,-1,0),u=r.createMorphAt(s,0,-1);return d(t,e,"item",n[0]),o(t,l,e,"item.id"),o(t,u,e,"item.name"),c}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createElement("div");e.setAttribute(t,"class","demo-view");var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","fixed-to-top jumbo-header text-center");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/hhff/ember-infinity");var r=e.createElement("img");e.setAttribute(r,"style","position: absolute; top: 0; right: 0; border: 0;"),e.setAttribute(r,"src","https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67"),e.setAttribute(r,"alt","Fork me on GitHub"),e.setAttribute(r,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"),e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h2");e.setAttribute(n,"id","title");var r=e.createTextNode("ember-infinity");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("ul");e.setAttribute(a,"class","demo-items");var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createTextNode("  ");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,i=a.hooks,d=i.get,o=i.block,c=i.inline;r.detectNamespace(n);var s;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(s=this.build(r),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=r.cloneNode(this.cachedFragment,!0))):s=this.build(r);var l=r.childAt(s,[3]),u=r.createMorphAt(l,0,1),m=r.createMorphAt(l,1,2);return o(a,u,t,"each",[d(a,t,"content")],{},e,null),c(a,m,t,"infinity-loader",[],{infinityModel:d(a,t,"content"),loadingText:"Loading more awesome records...",loadedText:"Loaded all the records!"}),s}}}())}),define("dummy/templates/home",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("  ");e.appendChild(t,a);var a=e.createElement("li");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a,n){var r=t.dom,i=t.hooks,d=i.set,o=i.content;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var s=r.createMorphAt(r.childAt(c,[1]),-1,-1);return d(t,e,"post",n[0]),o(t,s,e,"post.name"),c}}}();return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","posts-title");var n=e.createTextNode("Listing Posts");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("ul");e.setAttribute(a,"class","test-list");var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,i=a.hooks,d=i.get,o=i.block,c=i.inline;r.detectNamespace(n);var s;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(s=this.build(r),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=r.cloneNode(this.cachedFragment,!0))):s=this.build(r);var l=r.createMorphAt(r.childAt(s,[2]),0,-1),u=r.createMorphAt(s,3,4,n);return o(a,l,t,"each",[d(a,t,"model")],{},e,null),c(a,u,t,"infinity-loader",[],{infinityModel:d(a,t,"model")}),s}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-infinity",version:"0.0.7.93f3babf"});