import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Find from '../components/Find/Find.vue'
import Mylisten from '../components/MyListen/Mylisten.vue'
import Declaim from '../components/Declaim.vue'
import My from '../components/My/My.vue'
import Search from '../components/Search/Search.vue'
import Langsong from '../components/Search/Langsong.vue'
import Poem from '../components/Search/Poem.vue'
import LangsongList from '../components/Find/LangsongList.vue'
import HotList from '../components/Find/HotList.vue'
import Detail from '../components/Poem/Detail.vue'
import Person from '../components/Person/Person.vue'
import Production from '../components/My/Production/Production.vue'
import ProLangsong from '../components/My/Production/ProLangsong.vue'
import ProPoem from '../components/My/Production/ProPoem.vue'
import Collect from '../components/My/Collect/Collect.vue'
import News from '../components/My/News/News.vue'
import Comment from '../components/My/Comment/Comment.vue'
import Fans from '../components/My/Fans/Fans.vue'
import WritePoem from '../components/WritePoem/Write.vue'
import Record from '../components/Record/Record.vue'
import SearchPoem from '../components/Search/SearchPoem.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},//默认访问home页面
    {path:'*',redirect:'/home'},//随便输入也走home
    {path:'/home',component:Home},
    {path:'/detail',component:Detail},
    {path:'/find',component:Find,name:'Find',
      children:[
        {path:'LangsongList',component:LangsongList},
        {path:'HotList',component:HotList},
      ]
    },
    {path:'/declaim',component:Declaim},
    {path:'/search',component:Search,name:'Search',
      children:[
        {path:'langsong',component:Langsong},
        {path:'poem',component:Poem}
      ]
    },
    {path:'/person',component:Person},
    {path:'/write',component:WritePoem},
    {path:'/Record',component:Record},
    {path:'/SearchPoem',component:SearchPoem},
    {path:'/mylisten',component:Mylisten},
    {path:'/my',component:My,},
    {path:'/production',component:Production,
      children:[
        {path:'proLangsong',component:ProLangsong},
        {path:'proPoem',component:ProPoem}
      ]
    },
    {path:'/Collect',component:Collect},
    {path:'/Fans',component:Fans},
    {path:'/News',component:News},
    {path:'/Comment',component:Comment},
  ]
})
