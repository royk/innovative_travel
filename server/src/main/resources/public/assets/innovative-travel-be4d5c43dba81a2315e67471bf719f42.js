"use strict";define("innovative-travel/adapters/application",["exports","ember-data"],function(e,t){e["default"]=t["default"].RESTAdapter.extend({namespace:"api"})}),define("innovative-travel/app",["exports","ember","ember/resolver","ember/load-initializers","innovative-travel/config/environment"],function(e,t,n,a,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("innovative-travel/components/app-version",["exports","ember-cli-app-version/components/app-version","innovative-travel/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]=t["default"].extend({version:l,name:r})}),define("innovative-travel/components/auto-complete",["exports","ember-cli-auto-complete/components/auto-complete"],function(e,t){e["default"]=t["default"]}),define("innovative-travel/components/entry-icon",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({assetsPrefix:"assets/icon-",iconUrl:function(){return this.get("type")?this.get("assetsPrefix")+this.get("type")+".png":""}.property("type")})}),define("innovative-travel/components/hotel-auto-complete",["exports","innovative-travel/components/input-auto-complete"],function(e,t){e["default"]=t["default"].extend({valueProperty:"name",nameProperty:"name"})}),define("innovative-travel/components/input-auto-complete",["exports","ember","ember-cli-auto-complete/components/auto-complete"],function(e,t,n){e["default"]=n["default"].extend({suggestions:function(){var e=this,n=this.get("options"),a=this.get("inputVal")||"",r=n.filter(function(t){return t.get(e.get("nameProperty")).toLowerCase().indexOf(a.toLowerCase())>-1});return t["default"].A(r)}.property("options.@each","inputVal")})}),define("innovative-travel/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("innovative-travel/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("innovative-travel/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","innovative-travel/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,l=a.version;e["default"]={name:"App Version",initialize:t["default"](r,l)}}),define("innovative-travel/initializers/export-application-global",["exports","ember","innovative-travel/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("innovative-travel/models/hotel",["exports","ember-data"],function(e,t){e["default"]=t["default"].Model.extend({name:t["default"].attr(),hotelCount:t["default"].attr(),type:t["default"].attr(),subtype:t["default"].attr()})}),define("innovative-travel/router",["exports","ember","innovative-travel/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("innovative-travel/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return t["default"].RSVP.hash({model:t["default"].Object.extend({name:""}).create(),hotels:this.store.find("hotel")})},setupController:function(e,t){e.set("model",t.model),e.set("hotels",t.hotels)}})}),define("innovative-travel/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"innovative-travel/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("\n    Find a hotel!\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),a},statements:[["content","outlet",["loc",[null,[5,0],[5,10]]]]],locals:[],templates:[]}}())}),define("innovative-travel/templates/components/auto-complete",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:6,column:4},end:{line:10,column:4}},moduleName:"innovative-travel/templates/components/auto-complete.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(3);return r[0]=e.createAttrMorph(a,"class"),r[1]=e.createElementMorph(a),r[2]=e.createMorphAt(a,1,1),r},statements:[["attribute","class",["concat",["tt-suggestion ",["subexpr","if",[["get","result.highlight",["loc",[null,[7,37],[7,53]]]],"tt-cursor"],[],["loc",[null,[7,32],[7,67]]]]]]],["element","action",["selectItem",["get","result",["loc",[null,[7,91],[7,97]]]]],[],["loc",[null,[7,69],[7,100]]]],["inline","yield",[["get","result",["loc",[null,[8,16],[8,22]]]]],[],["loc",[null,[8,8],[8,24]]]]],locals:["result"],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:10,column:4},end:{line:14,column:4}},moduleName:"innovative-travel/templates/components/auto-complete.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","message");var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1,1]),0,0),a},statements:[["content","noMesssagePlaceHolderText",["loc",[null,[12,11],[12,40]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:19,column:0}},moduleName:"innovative-travel/templates/components/auto-complete.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","typeahead-wrap");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createElement("span"),r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","tt-dataset-states");var l=e.createTextNode("\n    ");e.appendChild(r,l);var l=e.createElement("span");e.setAttribute(l,"class","tt-suggestions");var o=e.createTextNode("\n");e.appendChild(l,o);var o=e.createComment("");e.appendChild(l,o);var o=e.createTextNode("    ");e.appendChild(l,o),e.appendChild(r,l);var l=e.createTextNode("\n  ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[3]),l=new Array(3);return l[0]=e.createMorphAt(a,1,1),l[1]=e.createAttrMorph(r,"class"),l[2]=e.createMorphAt(e.childAt(r,[1,1]),1,1),l},statements:[["inline","input",[],["class",["subexpr","@mut",[["get","inputClazz",["loc",[null,[2,14],[2,24]]]]],[],[]],"value",["subexpr","@mut",[["get","selectedValue",["loc",[null,[2,31],[2,44]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeHolderText",["loc",[null,[2,57],[2,72]]]]],[],[]],"autocomplete","off","spellcheck","false"],["loc",[null,[2,0],[2,112]]]],["attribute","class",["concat",["tt-dropdown-menu ",["get","visibility",["loc",[null,[3,32],[3,42]]]]]]],["block","each",[["get","suggestions",["loc",[null,[6,12],[6,23]]]]],[],0,1,["loc",[null,[6,4],[14,13]]]]],locals:[],templates:[e,t]}}())}),define("innovative-travel/templates/components/entry-icon",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"innovative-travel/templates/components/entry-icon.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("img");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=new Array(3);return r[0]=e.createAttrMorph(a,"src"),r[1]=e.createAttrMorph(a,"title"),r[2]=e.createMorphAt(t,2,2,n),r},statements:[["attribute","src",["concat",[["get","iconUrl",["loc",[null,[1,12],[1,19]]]]]]],["attribute","title",["concat",[["get","type",["loc",[null,[1,32],[1,36]]]]]]],["content","yield",["loc",[null,[2,0],[2,9]]]]],locals:[],templates:[]}}())}),define("innovative-travel/templates/components/hotel-auto-complete",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"innovative-travel/templates/components/hotel-auto-complete.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),a},statements:[["content","input-auto-complete",["loc",[null,[1,0],[1,23]]]],["content","yield",["loc",[null,[2,0],[2,9]]]]],locals:[],templates:[]}}())}),define("innovative-travel/templates/components/input-auto-complete",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:5,column:6},end:{line:9,column:6}},moduleName:"innovative-travel/templates/components/input-auto-complete.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n            ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n          ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(3);return r[0]=e.createAttrMorph(a,"class"),r[1]=e.createElementMorph(a),r[2]=e.createMorphAt(a,1,1),r},statements:[["attribute","class",["concat",["tt-suggestion"," ",["subexpr","if",[["get","result.highlight",[]],"tt-cursor",""],[],[]]]]],["element","action",["selectItem",["get","result",["loc",[null,[6,101],[6,107]]]]],[],["loc",[null,[6,79],[6,110]]]],["inline","yield",[["get","result",["loc",[null,[7,20],[7,26]]]]],[],["loc",[null,[7,12],[7,28]]]]],locals:["result"],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:9,column:6},end:{line:13,column:6}},moduleName:"innovative-travel/templates/components/input-auto-complete.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","message");var a=e.createTextNode("\n              ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n          ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1,1]),0,0),a},statements:[["content","noMesssagePlaceHolderText",["loc",[null,[11,17],[11,46]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:18,column:0}},moduleName:"innovative-travel/templates/components/input-auto-complete.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","tt-dropdown-menu");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","tt-dataset-states");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","tt-suggestions");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("    ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(4);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createAttrMorph(a,"style"),r[2]=e.createMorphAt(e.childAt(a,[1,1]),1,1),r[3]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,0),r},statements:[["inline","input",[],["value",["subexpr","@mut",[["get","selectedValue",["loc",[null,[1,14],[1,27]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholderText",["loc",[null,[1,40],[1,55]]]]],[],[]],"autocomplete","off","spellcheck","false"],["loc",[null,[1,0],[1,95]]]],["attribute","style",["get","visibility",["loc",[null,[2,49],[2,59]]]]],["block","each",[["get","suggestions",["loc",[null,[5,14],[5,25]]]]],[],0,1,["loc",[null,[5,6],[13,15]]]],["content","yield",["loc",[null,[17,0],[17,9]]]]],locals:[],templates:[e,t]}}())}),define("innovative-travel/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"innovative-travel/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(e.childAt(t,[3]),1,1),a},statements:[["inline","entry-icon",[],["type",["subexpr","@mut",[["get","result.subtype",["loc",[null,[2,20],[2,34]]]]],[],[]]],["loc",[null,[2,2],[2,36]]]],["content","result.name",["loc",[null,[4,4],[4,19]]]]],locals:["result"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"innovative-travel/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,1,1,n),e.insertBoundary(t,0),a},statements:[["block","hotel-auto-complete",[],["options",["subexpr","@mut",[["get","hotels",["loc",[null,[1,31],[1,37]]]]],[],[]],"selectedValue",["subexpr","@mut",[["get","model.name",["loc",[null,[1,52],[1,62]]]]],[],[]],"placeHolderText","Start typing to search...","noMesssagePlaceHolderText","No hotels found"],0,null,["loc",[null,[1,0],[6,24]]]],["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[e]}}())}),define("innovative-travel/config/environment",["ember"],function(e){var t="innovative-travel";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("innovative-travel/tests/test-helper"):require("innovative-travel/app")["default"].create({name:"innovative-travel",version:"0.0.0+1704d443"});