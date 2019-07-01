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
    "type": "HTML5",
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
<p>5、闭包</p><p>闭包是前端经常出现的一个东西。简单来说，闭包就是可以访问到其他函数内部变量的一个特殊函数。</p>
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
<p>to be continue...</p>`,
    "time": "2019",
    "type": "Javascript",
    "copyright": "original",
    "query": {
      "name": "js基础复习"
    },
    "link": "/blogDetail",
    "summary": "在js里面，除了6种基本类型之外，其他的都是对象类型",
    "tag": [
      "javascript"
    ]
  }
]