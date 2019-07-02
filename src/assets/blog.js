export let data = [
  {
    "title": "初探event loop",
    "content": `<p>先来看一道题，看看输出结果是什么</p>
<pre class="ql-syntax">console.log('1');
setTimeout(() =&gt; {
  console.log('2');
  new Promise((resolve, reject) =&gt; {
    console.log('3');
    resolve()
  }).then(() =&gt; {
    console.log('4');
  })
}, 0)
setTimeout(() =&gt; {
  console.log('5');
}, 0)
new Promise((resolve, reject) =&gt; {
  console.log('6');
  resolve()
}).then(() =&gt; {
  console.log('7')
})
console.log('8') </pre>
<p>为了搞清楚这些语句执行的先后顺序，我们就必须要知道event loop机制。</p>
<p> 我们都知道， js是单线程的， 而为了不让某一步卡死页面而做出来一个称为“ 异步” 的东西。 实际上所谓的异步， 就是将语句从主线程上拎出来放在旁边一个队列里， 等待主线程里的东西执行完毕， 再执行这里的东西。 于是我们可以知道， 在主线程之外， 还有一个任务队列的存在。</p>
<p>而js任务又有着“宏任务(task)”和“微任务(Microtasks)”的分别。一般微任务会紧跟在宏任务后面执行。宏任务一般包括script语句，setTimeout，setInterval，requestAnimationFrame。微任务则包括Promise的then和catc还有finally，MutationObserver。知道了这些，我们就可以对上面的题目进行解析了。</p>
<p> 首先js遇到了console.log语句， 便打印一个1出来， 然后遇到了setTimeout语句， 这是异步操作， 所以在旁边的任务队列创建了一个任务。 紧接着又是一个setTimeout， 所以又在任务队列里创建了另一个任务。 然后继续往下遇到Promise， 注意这里是下方的promise， 上方的promise因为包含在setTimeout里， 现在还在任务队列里排队呢。 继续刚才的分析， js进入promise打印出来6。 然后在promise出来， 打印一个8。 此时主线程上的宏任务就执行完毕了。 那此时有没有微任务？ 当然是有的， 刚刚说了promise.then就是微任务， 于是js执行微任务打印出来7。 然后微任务执行完毕。 这是主线程上就真的没东西了。 所以任务队列里排第一个的任务进行主线程。 也就是刚刚因为setTimeout一直在排队的语句现在开始执行。 首先先是打印出来2， 然后又是promise， 同样道理， 进入promise打印出来3， 此时主线程的宏任务执行完毕， 再执行微任务打印出来4。 这时主线程又空了， 所以任务队列下一个任务进来， 打印出来5。 所以最后的结果就是 1 6 8 7 2 3 4 5。</p>`,
    "time": "2019",
    "type": "Javascript",
    "copyright": "original",
    "query": {
      "name": "初探event loop"
    },
    "link": "/blogDetail",
    "summary": "先来看一道题，看看输出结果是什么",
    "tag": [
      "event loop",
      "javascript",
      "promise"
    ]
  },
  {
    "title": "js基础复习",
    "content": `<p>1、js原始类型</p><p>js基本类型有Number，String，Boolean，Undefined，Null，Symbol这6种。</p>
<p>2、js对象类型</p>
<p>在js里面，除了6种基本类型之外，其他的都是对象类型。他们之间的区别是原始类型存储的是值，而对象类型存储的是指针。当我们将对象类型的变量赋值给其他变量的时候，实际上是将它的指针赋值给了另外那个变量。因此如果那个被赋值的变量数据被修改，也会导致这个变量的值被修改。
</p><pre class="ql-syntax">let a = [];
let b = a;
b.push(1);
console.log(a)  // 结果是 [1]
</pre>
<p>3、typeof，instanceof</p>
<p>对typeof来说，它可以正确判断除了null之外的所有原始类型。而instanceof则可用于判断对象类型</p>
<pre class="ql-syntax">typeof 123 // 'number'
type 'abc' // 'string'
let test = function(){}
test instanceof Function // true
let arr = []
arr instanceof Array // true
</pre>
<p>4、类型转换</p>
<p>4.1 转换为字符串</p>
<p>可以使用String()，.toString()，隐式转换等方式</p>
<pre class="ql-syntax">String(123)  //  '123'  都可以转
123.toString() // '123'  除了null和undefined都可以转。
123 + ''    // '123'  都可以转
</pre>
<p>4.2 转换为数值</p>
<p>可以使用Number()，parseInt()，parseFloat()，隐式转换等</p>
<pre class="ql-syntax">Number(true) // 1
parseInt('127yt')  // 127
parseFloat('0908.5fgy')  // 908.5
'8765' - 0 //  8765
</pre>
<p>其中parseInt和parseFloat都是解析到无法继续解析的位置。parseInt可传入2个参数，可以对数值进行进制转换如 parseInt('10',8)就是将10变成8进制。</p>
<p>4.3 转换成布尔值</p>
<p>可以使用Boolean()，隐式转换等</p>
<pre class="ql-syntax">Boolean('false')  // true
!! null           // false
</pre>
<p>5、闭包</p>
<p>闭包是前端经常出现的一个东西。简单来说，闭包就是可以访问到其他函数内部变量的一个特殊函数。</p>
<pre class="ql-syntax">function a(){
  let inside = 0;
  function b(){
    console.log(inside)
  }
  return b
}
let test = a();
test()  // 0  打印出了a函数里面的变量inside
</pre>
<p>在函数a执行完后，inside因为b函数调用的关系没有被回收。这也是我们使用闭包时需要注意的地方。那就是不能滥用闭包，否则会影响页面性能。</p>
<p>6、 == 和 ===</p>
<p>使用==进行判断时，会发生隐式转换，即等式左右两边类型不一致时，会自动进行类型转换，然后再判断。</p>
<p>而===则是直接进行判断，不会自己转换类型。</p>
<pre class="ql-syntax">'7' == 7   // true
true == 1  // true
'2' === 2  // false
</pre>
<p>7、原型</p>
<p>js里，除了null之外，其他对象都有原型。这也是为什么我们新建了一个对象后就有一些方法可以调用。因为那是通过原型继承过来的。我们可以通过__proto__这个属性找到这个对象的原型。而这个对象的构造函数，可以通过__proto__的constructor属性找到。而构造函数本身也会有一个prototype属性指向原型。</p>
<p>8、var let const</p>
<p>首先这三个都是定义变量用的，但各有区别。</p>
<p>var的话会存在变量提升的问题，let和const不会。</p>
<pre class="ql-syntax">console.log(a)    // undefined
var a = 1
console.log(b)    // Cannot access 'b' before initialization
let b = 2
console.log(c)    // Cannot access 'c' before initialization
const c = 3
</pre>
<p>let和const在全局作用域下声明的变量，也不会挂载在window上。</p>
<pre class="ql-syntax">let abc = '123'
console.log(window.abc)  // undefined
</pre>
<p>let声明的变量值可以改变，const的不行。</p>
<pre class="ql-syntax">let abcd = 1234
abcd += 1
console.log(abcd)  // 1235
const dcba = 4321
dcba -= 1
console.log(dcba)  // Assignment to constant variable.
</pre>
<p>9、深浅拷贝</p>
<p>我们在拷贝对象类型的时候，实际上拷贝的是指针，所以当其中一个改变另外一个也会跟着改变。如何避免？我们可以使用浅拷贝。</p>
<p>浅拷贝可是使用Object.assign来解决。它会拷贝所有的属性到新对象。</p>
<pre class="ql-syntax">//浅拷贝
let a = {
  abc: 123
}
let b = Object.assign({}, a)
a.abc = 321
console.log(b.abc)  // 123

// es6可使用...运算符来实现浅拷贝
let c = {
  cba: 123
}
let d = {...c}
c.cba = 321
console.log(d.cba)  // 123
</pre>
<p>如果属性值是对象的话，此时浅拷贝的依然是地址，如果希望拷贝的也是对象的话，就需要使用深拷贝。</p>
<pre class="ql-syntax">//深拷贝
let deep = {
  abc: 123,
  bcd: {
    cdf: 321
  }
}
let deepcopy = JSON.parse(JSON.stringify(deep))
deep.bcd.cdf = 456
console.log(deepcopy.bcd.cdf)  // 321
</pre>
<p>使用这个方法的时候需要注意，undefined，Symbol和函数会被忽略。</p>`,
    "time": "2019",
    "type": "Javascript",
    "copyright": "original",
    "query": {
      "name": "js基础复习"
    },
    "link": "/blogDetail",
    "summary": "在js里面，除了6种基本类型之外，其他的都是对象类型",
    "tag": [
      "javascript",
      "es6"
    ]
  },
  {
    "title": "Vue相关",
    "content": `<p>Vue.js是我们常用的一个前端框架，下面我们就来复习一下它</p>
<p>1、生命周期钩子</p><p>1.1、beforeCreate</p>
<p>在这里初始化事件，生命周期。因为数据还没挂载，所以我们是获取不到props和data中的数据。</p>
<p>1.2、created</p>
<p>在这里挂载数据，绑定事件。所以可以获取到props和data了，但因为组件还没挂载，所以还不能看到。一般在这里去获取初始数据</p>
<p>1.3、beforeMount</p>
<p>在这里找实例或者组件对应的模板，编译模板成VDOM，放入render函数准备渲染。也在这里可以去获取初始数据</p>
<p>1.4、mounted</p>
<p>这里将VDOM渲染成真实DOM。此时组件已经挂载，数据，真实DOM也处理完成。</p>
<p>1.5、beforeUpdate</p>
<p>在数据更新之前会调用</p>
<p>1.6、updated</p>
<p>在数据更新之后调用</p>
<p>1.7、beforeDestroy</p>
<p>在调用$destroy方法后，会调用这个钩子函数。可以在这里清理计时器，移除事件等</p>
<p>1.8、destroyed</p>
<p>组件的绑定，监听等等去掉之后，会调用这个钩子。</p>
<p>1.0、keep-alive独有的生命周期</p>
<p>1.0.1、deactivated</p>
<p>用keep-alive包裹的组件在切换的时候不会销毁，它会缓存到内存里，然后执行deactivated。</p>
<p>1.0.2、activated</p>
<p>命中缓存渲染后会调用activated</p>
<p>2、父子组件通信</p>
<p>2.1、使用prop和emit</p>
<p>父组件通过prop向子组件通信</p>
<pre class="ql-syntax">// 父组件
&lt;template&gt;
  &lt;child :data="propData"&gt;&lt;/child&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data(){
    return{
      propData:'test'
    }
  }
}
&lt;/script&gt;

// 子组件
&lt;template&gt;
  &lt;div&gt;{{propData}}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  props: {
    propData: {
      type: String,
      default: ''
    }
  }
}
&lt;/script&gt;
</pre>
<p>子组件通过emit向父组件通信</p>
<pre class="ql-syntax">// 父组件
&lt;template&gt;
  &lt;child @chilClick="childClick"&gt;&lt;/child&gt;
&lt;/template&gt;
&lt;script&gt;
export default{
  data(){
    return{
      childData: ''
    }
  },
  methods: {
    childClick(data){
      this.childData = data
    }
  }
}
&lt;/script&gt;

// 子组件
&lt;template&gt;
  &lt;div @click="transport"&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default{
  data(){
    return{
      transportData: '123'
    }
  },
  methods:{
    transport(){
      this.$emit('childData', this.transportData)
    }
  }
}
&lt;/script&gt;
</pre>
<p>2.2使用provide和inject</p>
<p>父组件使用provide声明要传输的数据，子组件使用inject接收数据</p>
<pre class="ql-syntax">// 父组件
&lt;template&gt;
  &lt;child&gt;&lt;/child&gt;
&lt;/template&gt;
&lt;script&gt;
export default{
  data(){
    return{
      transportData: '123'
    }
  },
  provide(){
    return this.transportData
  }
}
&lt;/script&gt;

// 子组件
&lt;template&gt;
  &lt;div&gt;{{transportData}}&lt;div&gt;
&lt;/template&gt;
&lt;script&gt;
export default{
  data(){
    return{}
  }
  inject: [transportData]
}
&lt;/script&gt;
</pre>
<p>2.3使用vuex</p>
<pre class="ql-syntax">// 省略
</pre>
<p>3、兄弟组件通信</p>
<p>3.1、使用event bus</p>
<pre class="ql-syntax">// bus.js
import Vue form 'vue'
export default new Vue

// 组件1
import Bus from './bus.js'
export default{
  data(){
    return{
      msg: 'text'
    }
  },
  methods:{
    transport(){
      Bus.$emit('communicate', this.msg)
    }
  }
}

// 组件2
import Bus from './bus.js'
export default{
  data(){
    return{
      comData: ''
    }
  },
  mounted:{
    Bus.$on('communicate', (data) =&gt; {
      this.comData = data
    })
  }
}
</pre>
<p>3.2使用vuex</p>
<pre class="ql-syntax">// 省略
</pre>
<p>4、vuex状态管理</p>
<p>vuex可以统一管理一个大型项目的数据，下面是vuex一个简单的例子</p>
<pre class="ql-syntax">// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store{
  state: {
    num: 1
  },
  mutations:{
    increase(state){
      state.num++
    }
  },
  getters:{
    number: state =&gt; {
      return state.num+2
    }
  },
  actions:{
    increase(context){
      context.commit('increase')
    }
  }
}

// 组件
export default{
  data(){
    return{
      vuexData: ''
    }
  },
  mounted(){
    this.vuexData = this.$store.state.num
  },
  methods:{
    add(){
      this.$store.commit('increase') // 同步操作
      this.$store.dispatch('increase') // 异步操作
    }
  }
}
</pre>`,
    "time": "2019",
    "type": "HTML5",
    "copyright": "original",
    "query": {
      "name": "Vue相关"
    },
    "link": "/blogDetail",
    "summary": "Vue.js是我们常用的一个前端框架，下面我们就来复习一下它",
    "tag": [
      "javascript",
      "Vue.js"
    ]
  },
  {
    "title": "性能优化一二事",
    "content": `<blockquote class="reference">本文参考掘金小册《前端性能优化原理与实践》。以下是小册链接：<a class="link" href="https://juejin.im/book/5b936540f265da0a9624b04b" target="_blank">《前端性能优化原理与实践》</a></blockquote>
<p>前端页面打开很慢的原因有很多种。从页面数据请求的到渲染这个角度来看，打开一个网页，要经过这么几个步骤：</p>
<p>1、DNS解析</p>
<p>2、TCP请求</p>
<p>3、HTTP请求</p>
<p>4、服务端处理，返回HTTP响应</p>
<p>5、浏览器解析响应数据，渲染出来</p>
<p>这当中，前端工程师最需着力的是第3步和第5步。</p>
<p>首先先来看HTTP请求。</p>
<h3>优化HTTP请求</h3>
<p>有两个方向可以努力，一个是减少HTTP请求数，一个是减少单次请求所花费的时间。这两者我们都可以用压缩合并资源的方式去做。而压缩合并资源，就不能不提到webpack。</p>
<p>常见的webpack优化方式，有使用include和exclude来规避一些不必要的转译，还有开启缓存将转译结果缓存到文件系统。</p>
<pre class="ql-syntax">module:{
  rules:[
    {
      test:/.js$/,  //匹配js文件
      exclude:/(node_modules|bower_components)/,  //将这两个文件夹的文件除外
      use:{
        loader:'babel-loader?cacheDirectory=true',  //?cacheDirectory=true表示开启缓存
        options:{
          presets:['@babel/preset-env']
        }
      }
    }
  ]
}
</pre>
<p>此外还可以使用DllPlugin处理文件，让第三方库不会一起重新打包；使用happyHappypack将loader从单线程变成多线程；使用Tree-shaking删除冗余代码；</p>
<h3>使用缓存</h3>
<p>浏览器缓存机制有4种，分别是：</p>
<p>1、Memory Cache</p>
<p>2、Service Worker Cache</p>
<p>3、HTTP Cache</p><p>4、Push Cache</p>
<p>我们来看HTTP Cache</p>
<p>HTTP缓存分两种，一个是强缓存，一个是协商缓存。</p>
<p>强缓存是利用http头中的Expires和Cache-control来控制的。当有请求发出的时候，浏览器会根据这两个字段判断目标资源是否命中强缓存，如果命中了，则直接从缓存中拿数据。Expires是时间戳，Cache-control则是使用max-age来控制资源的有效期。</p>
<pre class="ql-syntax">expires: Tue Jul 02 2019 15:41:24 GMT+0800 (中国标准时间)
cache-control: max-age=31536000
</pre>
<p>协商缓存会跟服务器通信询问缓存信息，从而判断是从服务器下载数据还是从缓存中拿数据。</p>
<p>我们开启协商缓存之后，第一次请求数据，响应头会出现Last-Modified字段，它是一个时间戳。在下一次请求的时候，请求头都会带上一个叫if-Modified-Since的时间戳字段，服务器会对比这个时间戳与资源在服务器上的最后修改时间，如果不一致，便会返回资源，并在返回头带上新的Last-Modified。否则就返回304，返回头也不加Last-Modified。</p>
<p>使用这个方式获取缓存，会有一个bug，就是服务器无法正确感知文件是否改变，可能会在不需要返回资源时也返回，或者需要返回新资源时不返回。我们可以使用Etag字段来解决。</p>
<p><br></p>
<p>接下来来看浏览器解析部分。</p>
<p>要优化浏览器解析，首先就得知道浏览器是怎么一步步将页面加载出来的。一般浏览器是经过这么几个步骤：</p>
<p>1、解析HTML</p>
<p>2、计算样式</p>
<p>3、计算图层布局</p>
<p>4、绘制图层</p>
<p>5、整合图层</p>
<p>以上几个步骤，用文字描述就是：解析HTML得到DOM树，解析得到CSSOM树，合并DOM树和CSSOM树得到render树，从根节点开始计算每个元素的大小位置等信息，得到基于render树的布局渲染树。最后以布局渲染树为蓝本计算布局绘制图像。</p>
<p>后面当有新元素加入时，浏览器会通过css引擎查找css样式表，找到符合该元素的样式添加到它上面，然后重新绘制页面。这也就有了第一个优化点，css的优化。</p>
<p>css的匹配是从右往左的，因此我们需少用标签选择器，尤其是通配符*。关注可以通过继承实现的属性，避免重复匹配。还有就是减少嵌套层数。</p>
<p>css的解析也是会阻塞渲染的，因此要将它尽量往前放，尽早下载尽早解析。说到阻塞渲染，js也是会的。当浏览器遇到script标签，会暂停渲染过程，控制权去到js引擎，此时开始执行js语句。等执行完毕后，控制权再回到渲染引擎，此时再继续刚刚的渲染。因此，我们要将js代码尽量往后放，避免它阻塞渲染。或者是使用async模式或者defer模式加载js文件。async模式下，js不会阻塞浏览器做其他事，它的加载是异步的，在它加载结束的时候，会立即执行。defer模式下，加载也是异步的，但执行是推迟的。它会等整个文档解析完成，DOMContentLoaded事件触发前才会执行。</p>
<h3>回流与重绘</h3>
<p>我们知道js其实是很快的，但是操作DOM却不快。原因是因为js引擎和渲染引擎是相互独立的，两者通信需要特殊的桥接接口作为桥梁，因而会显得不快。再者，操作DOM可能会出现“回流”或者“重绘”，这也是拖慢速度的一个原因。</p>
<p>所谓的回流，指的是我们操作DOM的时候，元素发生了几何尺寸的变化，比如改变了宽度，使得浏览器要重新计算元素的几何属性再重新绘制出来。</p>
<p>而重绘则是指我们操作DOM的时候没有发生几何尺寸的变化，比如只是改变了颜色，浏览器不用重新计算元素几何属性，直接给那个元素绘制新的样式就可以。</p>
<p>两者相比较的话，明显是重绘对速度的影响要小。但这并不意味着可以随性任意去改，毕竟也是要耗性能的东西，能少则少。</p>
<p>会导致回流的操作</p>
<p>1、改变元素的几何属性</p>
<p>2、改变DOM树结构</p>
<p>3、获取一些需要实时计算的属性值比如offsetHeight之类的</p>
<h3>Event loop来看渲染时机</h3>
<p>一个event loop过程，一般有这么几个步骤</p>
<p>1、执行主线程任务</p>
<p>2、主线程任务执行完毕，查看当前有没有微任务</p>
<p>3、如果有微任务，执行微任务</p>
<p>4、<strong>渲染页面</strong></p>
<p>5、将任务队列中的第一个任务推入主线程</p>
<p>6、重复以上过程</p>
<p>所以说，如果我们想异步更新处理DOM，将它包装成微任务才是好选择。</p>
<h3>事件节流，防抖，lazyload</h3>
<p>后面再讲</p>`,
    "time": "2019",
    "type": "HTML5",
    "copyright": "original",
    "query": {
      "name": "性能优化一二事"
    },
    "link": "/blogDetail",
    "summary": "前端页面打开很慢的原因有很多种。从页面数据请求的到渲染这个角度来看，打开一个网页，要经过这么几个步骤",
    "tag": [
      "HTML",
      "CSS",
      "webpack"
    ]
  }
]