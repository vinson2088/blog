(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fc0fb5c"],{"00e6":function(t,s,e){"use strict";e.d(s,"a",function(){return a});var a=[{title:"初探event loop",content:"<p>先来看一道题，看看输出结果是什么</p>\n<pre class=\"ql-syntax\">console.log('1');\nsetTimeout(() =&gt; {\n  console.log('2');\n  new Promise((resolve, reject) =&gt; {\n    console.log('3');\n    resolve()\n  }).then(() =&gt; {\n    console.log('4');\n  })\n}, 0)\nsetTimeout(() =&gt; {\n  console.log('5');\n}, 0)\nnew Promise((resolve, reject) =&gt; {\n  console.log('6');\n  resolve()\n}).then(() =&gt; {\n  console.log('7')\n})\nconsole.log('8') </pre>\n<p>为了搞清楚这些语句执行的先后顺序，我们就必须要知道event loop机制。</p>\n<p> 我们都知道， js是单线程的， 而为了不让某一步卡死页面而做出来一个称为“ 异步” 的东西。 实际上所谓的异步， 就是将语句从主线程上拎出来放在旁边一个队列里， 等待主线程里的东西执行完毕， 再执行这里的东西。 于是我们可以知道， 在主线程之外， 还有一个任务队列的存在。</p>\n<p>而js任务又有着“宏任务(task)”和“微任务(Microtasks)”的分别。一般微任务会紧跟在宏任务后面执行。宏任务一般包括script语句，setTimeout，setInterval，requestAnimationFrame。微任务则包括Promise的then和catc还有finally，MutationObserver。知道了这些，我们就可以对上面的题目进行解析了。</p>\n<p> 首先js遇到了console.log语句， 便打印一个1出来， 然后遇到了setTimeout语句， 这是异步操作， 所以在旁边的任务队列创建了一个任务。 紧接着又是一个setTimeout， 所以又在任务队列里创建了另一个任务。 然后继续往下遇到Promise， 注意这里是下方的promise， 上方的promise因为包含在setTimeout里， 现在还在任务队列里排队呢。 继续刚才的分析， js进入promise打印出来6。 然后在promise出来， 打印一个8。 此时主线程上的宏任务就执行完毕了。 那此时有没有微任务？ 当然是有的， 刚刚说了promise.then就是微任务， 于是js执行微任务打印出来7。 然后微任务执行完毕。 这是主线程上就真的没东西了。 所以任务队列里排第一个的任务进行主线程。 也就是刚刚因为setTimeout一直在排队的语句现在开始执行。 首先先是打印出来2， 然后又是promise， 同样道理， 进入promise打印出来3， 此时主线程的宏任务执行完毕， 再执行微任务打印出来4。 这时主线程又空了， 所以任务队列下一个任务进来， 打印出来5。 所以最后的结果就是 1 6 8 7 2 3 4 5。</p>",type:"HTML5",copyright:"original",query:{name:"初探event loop"},link:"/blogDetail",summary:"先来看一道题，看看输出结果是什么",tag:["event loop","javascript","promise"]},{title:"js基础复习",content:"<p>1、js原始类型</p><p>js基本类型有Number，String，Boolean，Undefined，Null，Symbol这6种。</p>\n<p>2、js对象类型</p>\n<p>在js里面，除了6种基本类型之外，其他的都是对象类型。他们之间的区别是原始类型存储的是值，而对象类型存储的是指针。当我们将对象类型的变量赋值给其他变量的时候，实际上是将它的指针赋值给了另外那个变量。因此如果那个被赋值的变量数据被修改，也会导致这个变量的值被修改。\n</p><pre class=\"ql-syntax\">let a = [];\nlet b = a;\nb.push(1);\nconsole.log(a)  // 结果是 [1]\n</pre>\n<p>3、typeof，instanceof</p>\n<p>对typeof来说，它可以正确判断除了null之外的所有原始类型。而instanceof则可用于判断对象类型</p>\n<pre class=\"ql-syntax\">typeof 123 // 'number'\ntype 'abc' // 'string'\nlet test = function(){}\ntest instanceof Function // true\nlet arr = []\narr instanceof Array // true\n</pre>\n<p>4、类型转换</p>\n<p>4.1 转换为字符串</p>\n<p>可以使用String()，.toString()，隐式转换等方式</p>\n<pre class=\"ql-syntax\">String(123)  //  '123'  都可以转\n123.toString() // '123'  除了null和undefined都可以转。\n123 + ''    // '123'  都可以转\n</pre>\n<p>4.2 转换为数值</p>\n<p>可以使用Number()，parseInt()，parseFloat()，隐式转换等</p>\n<pre class=\"ql-syntax\">Number(true) // 1\nparseInt('127yt')  // 127\nparseFloat('0908.5fgy')  // 908.5\n'8765' - 0 //  8765\n</pre>\n<p>其中parseInt和parseFloat都是解析到无法继续解析的位置。parseInt可传入2个参数，可以对数值进行进制转换如 parseInt('10',8)就是将10变成8进制。</p>\n<p>4.3 转换成布尔值</p>\n<p>可以使用Boolean()，隐式转换等</p>\n<pre class=\"ql-syntax\">Boolean('false')  // true\n!! null           // false\n</pre>\n<p> to be continue</p>",time:"2019",type:"Javascript",copyright:"original",query:{name:"js基础复习"},link:"/blogDetail",summary:"在js里面，除了6种基本类型之外，其他的都是对象类型",tag:["javascript"]}]},"0cc5":function(t,s,e){},2016:function(t,s,e){"use strict";var a=e("0cc5"),n=e.n(a);n.a},"3d01":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"nav"},[e("el-menu",{staticClass:"el-menu-demo",attrs:{router:"","default-active":t.index,mode:"horizontal","background-color":"#409eff","text-color":"#fff","active-text-color":"#fff"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1),e("el-menu-item",{attrs:{index:"/"}},[e("i",{staticClass:"el-icon-house"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("主页")])]),e("el-menu-item",{attrs:{index:"3"}},[e("i",{staticClass:"el-icon-user"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("关于我")])]),e("el-menu-item",{attrs:{index:"/blog"}},[e("i",{staticClass:"el-icon-date"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("博客")])])],1)],1)},n=[],l={props:{index:{type:String,default:"/"}},name:"navigation",data:function(){return{activeIndex:"2",search:""}},methods:{handleOpen:function(){},handleClose:function(){},handleSelect:function(){}}},i=l,o=(e("acd5"),e("2877")),r=Object(o["a"])(i,a,n,!1,null,"7af324aa",null);s["a"]=r.exports},6098:function(t,s,e){},acd5:function(t,s,e){"use strict";var a=e("6098"),n=e.n(a);n.a},bb51:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("navigation",{attrs:{index:"/"}}),a("el-row",{staticClass:"main",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"box"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"img",attrs:{src:e("cf05"),alt:"avatar"}})]),a("p",{staticClass:"name"},[t._v("Vinson")]),a("p",{staticClass:"introduction"},[t._v("君子终日乾乾  夕惕若厉  无咎")]),a("p",[t._v("博客数")]),a("p",{staticClass:"num"},[a("span",[t._v(t._s(t.blogNum))])])]),a("div",{staticClass:"box tag-list"},t._l(t.tagList,function(s,e){return a("el-tag",{key:e,attrs:{effect:"plain"}},[t._v(t._s(s.tag))])}),1),a("div",{staticClass:"box"},[a("p",{staticClass:"blog-type-title"},[t._v("文章类别：")]),a("ul",{staticClass:"blog-type"},[a("li",{staticClass:"types"},[a("router-link",{staticClass:"links",attrs:{to:{path:"/blog",query:{type:"HTML5"}}}},[t._v("HTML5")])],1),a("li",{staticClass:"types"},[a("router-link",{staticClass:"links",attrs:{to:{path:"/blog",query:{type:"CSS3"}}}},[t._v("CSS3")])],1),a("li",{staticClass:"types"},[a("router-link",{staticClass:"links",attrs:{to:{path:"/blog",query:{type:"Javascript"}}}},[t._v("Javascript")])],1),a("li",{staticClass:"types"},[a("router-link",{staticClass:"links",attrs:{to:{path:"/blog",query:{type:"canvas"}}}},[t._v("canvas")])],1),a("li",{staticClass:"types"},[a("router-link",{staticClass:"links",attrs:{to:{path:"/blog",query:{type:"webpack"}}}},[t._v("webpack")])],1)])])]),a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"box center"},[a("el-col",{attrs:{span:4}},[a("img",{staticClass:"top-img",attrs:{src:e("cf05"),alt:"avatar"}})]),a("el-col",{staticClass:"btn",attrs:{span:20}},[a("router-link",{attrs:{to:"/blog"}},[a("el-button",{attrs:{type:"primary"}},[t._v("查看博客")])],1)],1)],1),t._l(t.blogList,function(s,e){return a("div",{key:e,staticClass:"box"},[a("router-link",{staticClass:"blog-list",attrs:{to:{path:s.link,query:s.query}}},[a("p",{staticClass:"title"},[t._v(t._s(s.title))]),a("p",{staticClass:"summary"},[t._v(t._s(s.summary))]),a("div",{staticClass:"tag"},t._l(s.tag,function(s,e){return a("el-tag",{key:e,attrs:{effect:"plain",type:"info",color:"#e1e1e1"}},[t._v(t._s(s))])}),1)])],1)})],2)],1)],1)},n=[],l=e("3d01"),i=e("00e6"),o={name:"home",components:{navigation:l["a"]},data:function(){return{tagList:[{tag:"js"},{tag:"html"},{tag:"css"},{tag:"webpack"},{tag:"es6"},{tag:"Vue.js"},{tag:"jQuery"}],blogNum:123}},computed:{blogList:function(){return i["a"]}}},r=o,c=(e("2016"),e("2877")),p=Object(c["a"])(r,a,n,!1,null,"ee839810",null);s["default"]=p.exports},cf05:function(t,s,e){t.exports=e.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-4fc0fb5c.11228720.js.map