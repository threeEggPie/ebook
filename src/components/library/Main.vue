<template>
  <div>
  <el-row>
    <Search @OnSearch="searchResult" ></Search>
  </el-row>
  <el-row >
    <el-col v-for="(item,i) in books" :key="i">
      <div class="grid-content bg-purple">
      <el-tooltip class="item" effect="dark" placement="right" :enterable="false" >
        <p slot="content" style="font-weight:bold;margin-bottom: 10px">{{item.title}}</p>
        <p slot="content" style="margin-bottom: 10px">{{item.author}}/{{item.date}}/{{item.press}}</p>
        <p slot="content" style="width: 200px; letter-spacing: 2px">{{item.abs}}</p>
        <el-card style="float:left;padding: 0px; margin: 0px" >
          <a :href="'content/'+item.conId.toString()">
            <img :src="item.cover" alt="" id="img">
          </a>
          <span><a :href="'content/'+item.conId.toString()" style="text-decoration: none">{{item.title}}</a></span><br>
          <span>{{item.author}}</span>
        </el-card>
      </el-tooltip>
    </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
  import {search} from "../../api/index";
  import Search from './Search'
  import {initBook} from '../../api/index'
  export default {
    name: 'App',
    data(){
      return {
        books:[
          {cover:'https://img3.doubanio.com/view/subject/m/public/s33514921.jpg'
            ,title:'java程序设计',author:'余建青',date:'2018月5月12日',press:'清华大学出版社',
            conId:'111111111',
            abs:'◆ 来了来了！福尔摩斯大战克苏鲁！跑团必备！双倍快乐！\n' +
                '\n' +
                '◆ 克苏鲁神话与福尔摩斯推理的完美结合。\n' +
                '\n' +
                '◆ 福尔摩斯，我亲爱的伙伴，是时候让我讲述你真正做过的事了。——华生\n' +
                '\n' +
                '◆ 离奇的命案其实是一场召唤远古神衹的祭祀仪式。\n' +
                '\n' +
                '◆ 这是什么好东西！\n' +
                '\n' +
                '◆ 你以为，你以为的福尔摩斯，就是你以为的福尔摩斯吗？\n' +
                '\n' +
                '◆ 带触须的福尔摩斯剪影太可了！',
          },

        ]
      }
    },
    components:{
      Search,
    },
    methods:{
      searchResult(meg){
        search(meg).then(res=>{
          if (res.code===200){
            this.books=res.data
          }
        }).catch(error=>{
          console.log("查询错误");
        })
      },
    },
    mounted(){
      initBook().then(res=>{
        this.books=res.data;
      }).catch(error=>{
        console.log("初始化错误");
      })
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
    margin-right: 50px;
    margin-bottom: 50px;
    width:115px ;
    height: 220px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  img {
    width: 115px;
    height: 172px;
  }
  a:visited {
    font-size: 12px;
    color: blue;
    text-decoration: none;
  }
</style>
