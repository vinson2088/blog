<template>
  <div class="me">
    <navigation index="/me"></navigation>
    <div class="resume">
      <div class="module about-me">
        <p class="line"><span class="name">陈文鑫</span></p>
        <p class="line"><span class="item">136-3128-3956</span><span class="item">vinson2088@163.com</span><span class="item">深圳市福田区金沙花园7栋B座704</span></p>
        <p class="line"><a href="https://github.com/vinson2088" target="_blank" class="link">https://github.com/vinson2088</a></p>
        <p class="line">求职意向：前端工程师</p>
      </div>
      <div class="module skill">
        <p class="title">专业技能</p>
        <ul class="list">
          <li v-for="(item, index) in skillList" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="module experience">
        <p class="title">工作经历</p>
        <div class="company">
          <p><span class="company-name bold">深圳市交投信息科技有限公司</span><span class="time fr">2018.10 - 至今</span></p>
          <p><span class="department">前端工程师 工程研发部</span><span class="location fr">深圳</span></p>
          <p><i>深圳市交投信息科技有限公司是一家专业提供信息系统资讯，设计，软件开发以及运营维护等服务的企业，主要致力于智能交通领域</i></p>
          <ul class="list">
            <li v-for="(itemsjt, indexsjt) in sjt" :key="indexsjt">{{itemsjt}}</li>
          </ul>
          <p class="bold">部分项目经验：</p>
          <ul class="list">
            <li v-for="(itemsjtproject, indexsjtproject) in stjProject" :key="indexsjtproject">
              <p>{{itemsjtproject.project}}</p>
              <ul class="list second">
                <li v-for="(project, indexs) in itemsjtproject.description" :key="indexs">{{project}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="company">
          <p><span class="company-name bold">深圳市佰裕行科技有限公司</span><span class="time fr">2017.04 - 2018.06</span></p>
          <p><span class="department">前端工程师 设计部</span><span class="location fr">深圳</span></p>
          <p><i>深圳市佰裕行科技有限公司是一家提供软件规划、设计、开发等服务的企业</i></p>
          <ul class="list">
            <li v-for="(itembyh, indexbyh) in byh" :key="indexbyh">{{itembyh}}</li>
          </ul>
          <p class="bold">部分项目经验：</p>
          <ul class="list">
            <li v-for="(itembyhproject, indexbyhproject) in byhProject" :key="indexbyhproject">
              <p>{{itembyhproject.project}}</p>
              <ul class="list second">
                <li v-for="(project, indexs) in itembyhproject.description" :key="indexs">{{project}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="company">
          <p><span class="company-name bold">深圳三九金融服务有限公</span><span class="time fr">2015.11 - 2017.03</span></p>
          <p><span class="department">前端工程师 网络部</span><span class="location fr">深圳</span></p>
          <p><i>深圳三九金融服务有限公司是一家提供金融贷款服务，是服务于客户和银行的中间商。主要做的银行贷款咨询服务</i></p>
          <ul class="list">
            <li v-for="(itemsj, indexsj) in sj" :key="indexsj">{{itemsj}}</li>
          </ul>
          <p class="bold">部分项目经验：</p>
          <ul class="list">
            <li v-for="(itemsjproject, indexsjproject) in sjProject" :key="indexsjproject">
              <p>{{itemsjproject.project}}</p>
              <ul class="list second">
                <li v-for="(project, indexs) in itemsjproject.description" :key="indexs">{{project}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="module">
        <p class="title">开源项目及作品</p>
        <div class="project">
          <p><span class="project-name bold">vue组件</span><span class="fr">2019.06 - 2019.06</span></p>
          <p><span class="identity">前端工程师</span><span class="location fr">深圳</span></p>
          <p><a href="https://github.com/vinson2088/components-list" target="_blank" class="link">https://github.com/vinson2088/components-list</a></p>
          <ul class="list">
            <li>抽离一些常用的vue组件，方便以后开发使用</li>
            <li>锻炼自己抽离组件的能力</li>
            <li>复习代码</li>
          </ul>
        </div>
      </div>
      <div class="module education">
        <p class="title">教育经历</p>
        <div class="school">
          <p><span class="school-name bold">北京理工大学珠海学院</span><span class="fr">2011.09 - 2015.07</span></p>
          <p><span class="profession">信息工程 本科 信息学院</span><span class="location fr">珠海</span></p>
        </div>
      </div>
      <div class="module summary">
        <p class="title">个人总结</p>
        <ul class="list number-list">
          <li v-for="(itemSummary, indexSu) in summaryList" :key="indexSu">{{itemSummary}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from './../components/nav'
export default {
  name: 'me',
  components: {
    navigation
  },
  data() {
    return {
      skillList: [
        'Web开发：精通HTML5/CSS3/JavaScript前端三剑客，熟练使用es6开发',
        '前端css框架：熟练使用bootstrap框架进行自适应宽度页面的开发，动画效果制作',
        '前端js框架：熟练使用Vue框架开发响应式页面，搭配elementUI/iView组件库开发PC页面，vux组件库开发手机页面',
        '前端工具：掌握webpack打包工具，提高工作效率。掌握jQuery库',
        '版本控制：掌握SVN/Git版本管理控制工具',
        '其他：熟悉PhotoShop，Adobe Illustrator等绘图软件'
      ],
      sjt: [
        '页面开发：使用HTML(5)/CSS(3)/JavaScript，Vue.js，jQuery等技术开发项目前端页面，使用webpack打包，Git管理版本',
        '技术分析：组织开展技术分享会议，分享已接触学习的前端知识。如TypeScript，iframe跨域通信等',
        '方向制定：试用新出现的前端技术如新框架uniapp，评估是否作为公司后期使用的主力框架。寻找发现好用易用的vue组件库如vueawesome-swiper，在公司推广使用',
        '组件开发维护：在工作中发现经常出现的页面组件，将其提取封装成组件，方便后面项目直接使用。维护公司已有的组件库，及时发现不足并予以完善'
      ],
      stjProject: [
        {
          project: '交通在手H5项目',
          description: [
            '项目描述：针对app开发对应版本的H5页面',
            '项目职责：构建基于 Vue.js 的前端页面，提取常见组件。配合后端开发人员进行数据接口调试。优化页面加载，解决浏览器兼容问题',
            '项目业绩：实现了地图打点定位，线路规划，多终端兼容页面（包括Android，IOS，PC端）的开发，城市路况查询，火车票务查询，航班动态查询，快递查询等功能，也可查找附近可用的充电桩位置信息，附近可用的停车场位置信息，附近汽车维修点位置信息'
          ]
        },
        {
          project: '交委数据中心项目',
          description: [
            '项目描述： 建立数据中心监控数据的采集共享状况，对数据的质量进行评估分析，剔除无效数据，建立数据标准化。对以获取的数据进行分析，输出各种交通类报表',
            '项目职责：构建基于 Vue.js 的前端页面，提取常见组件。配合后端开发人员进行数据接口调试，与后端交互请求数据进行数据可视化操作。优化页面加载，解决浏览器兼容问题',
            '项目业绩：实现了多用户登录不同权限控制，对无效数据的清洗筛除，数据变动的监控，变动任务的监控，管理数据的申请与审批，批量管理操作数据的任务，分析数据起落，并对展示出来的数据进行可视化操作，使其转变为柱形图，折线图，饼图等形式'
          ]
        }
      ],
      byh: [
        '主要负责使用 HTML(5)/CSS(3)/Javascript，jQuery 等技术开发项目前端页面',
        '负责开展技术分享会议，帮带新人学习接触前端知识'
      ],
      byhProject: [
        {
          project: 'P&J项目',
          description: [
            '项目描述： 建立购物类网站前端页面，对销售产品进行推介，对比和筛选，阐述公司专门店地址及公司简介等，吸引顾客前去查看点击购买产品',
            '项目职责：基于bootstrap框架结合jQuery库进行页面开发。制作动画效果。优化页面加载，解决浏览器兼容问题',
            '项目业绩：实现了宽度自适应的购物类网站，以及对产品的分类以及全方位展示和对比'
          ]
        },
        {
          project: 'DSD项目',
          description: [
            '项目描述： 建立香港渠务署网站页面，展示香港多条河涌地理位置状况及生态状况。以图片的形式展示河涌上下游的环境，举例展示河涌生物的具体情况及生活条件',
            '项目职责：基于bootstrap框架结合jQuery库进行页面开发。制作动画效果。修改jQuery插件适配显示效果，优化页面加载，解决浏览器兼容问题',
            '项目业绩：实现了宽度自适应的图片展示河涌环境情况，以及河涌分布情况。轮播图的方式展示河涌整治前后的环境状况，还有以视频的方式讲解河涌整治的情况以及必要性'
          ]
        }
      ],
      sj: [
        '主要负责三九金服PC网站页面和手机网站页面的开发'
      ],
      sjProject: [
        {
          project: '三九金服网站',
          description: [
            '项目描述： 建立三九金服公司网站，全面介绍三九金服公司的详细情况，推介三九金服公司的产品',
            '项目职责：负责网站页面开发，主要使用html/css/Javascript，使用jQuery库制作动画效果',
            '项目业绩：实现了宽度自适应的公司产品展示类网站'
          ]
        }
      ],
      summaryList: [
        '四年前端工作经验，精通 HTML(5)/CSS(3)/Javascript 等前端技术，熟练使用 es6 开发',
        '熟练使用 Vue 框架开发响应式页面。搭配 elementUI/iview 组件库开发 pc 页面，vux 组件库开发手机页面',
        '掌握 webpack 打包工具，掌握 jQuery 库，熟悉 echarts.js',
        '掌握 Svn/ Git 进行版本控制',
        '熟悉 PhotoShop，Adobe Illustrator 软件等绘图软件'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.resume{
  color: #666;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  .module{
    text-align: left;
    .title{
      font-weight: bold;
      font-size: 19px;
      padding: 8px 0;
      border-bottom: 1px solid #666;
    }
    .list{
      margin: 0;
      padding-left: 20px;
    }
    .number-list{
      list-style: decimal;
    }
    .company,.project,.school{
      .fr{
        float: right;
      }
      .bold{
        font-weight: bold;
      }
    }
    .link{
      text-decoration: none;
      color: #666;
    }
  }
  .about-me{
    text-align: center;
    .line{
      margin: 5px 0;
      .name{
        display: inline-block;
        font-size: 26px;
        font-weight: bold;
        margin: 6px 0;
      }
      .item{
        padding: 0 5px;
        border-right: 1px solid #666;
      }
      .item:last-child{
        border-right: none;
      }
      .link{
        text-decoration: none;
        color: #666;
      }
    }
  }
  .summary{
    padding-bottom: 20px;
  }
}
</style>
