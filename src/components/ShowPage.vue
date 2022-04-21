<template >
  <div style="background-color: rgb(255,255,255)">
<!--    <el-container style=" border: 1px solid #eee">-->
      <el-header style="border: #2c3e50;height: 80px"  >
        <el-row>
          <el-col span="12" class="col" style="height: 80px; text-align:left;   ">
          </el-col>
        </el-row>
        <el-row style="height:35px;margin-top: 25px" >
          <div class="bodyTip" >
            <div style="width: 800px">
            </div>
            <div style="float:right" >
              <el-input id="uuida9937b2c-fb4d-4ea7-84a2-0cca76828ea0"  v-model="searchContant"  style="width: 400px; height: 50px;alignment: right; font-size: 12px;margin-left: 30px"placeholder="请输入单位名称或系统名称" ></el-input>
            </div>
            <div style="float: left">
              <el-button id="uuid5dd302a9-5b35-40d7-9fb1-44449c8a4226"   style="alignment: left;margin-left: 20px" type="primary" icon="el-icon-search"  v-on:click="searchclick">搜索</el-button>
            </div>
          </div>
        </el-row>
        <el-divider></el-divider>
      </el-header>
      <el-container style="background-color: rgb(255,255,255)">
        <el-aside width="180px"style="background-color: rgb(255,255,255);margin-top: 15px" >
          <el-menu :default-openeds="['1', '3']" style="text-align: left;">
            <el-menu-item index="1" v-model="projectType" v-on:click="slecttype(projectType='演示专用系统')" >
              <i class="el-icon-document" style="color: #3a8ee6"></i>
              <span slot="title">演示专用系统</span>
            </el-menu-item>
            <el-menu-item index="2" v-model="projectType" v-on:click="slecttype(projectType='综合管理系统')">
              <i class="el-icon-menu" style="color: #3a8ee6"></i>
              <span slot="title">综合管理系统</span>
            </el-menu-item>

            <el-menu-item index="3" v-model="projectType" v-on:click="slecttype(projectType='广西院系统')" >
              <i class="el-icon-s-home" style="color: #3a8ee6"></i>
              <span slot="title">广西院系统</span>
            </el-menu-item>
            <el-menu-item index="4"  v-model="projectType" v-on:click="slecttype(projectType='图档系统')">
              <i class="el-icon-notebook-2" style="color: #3a8ee6"></i>
              <span slot="title">图档系统</span>
            </el-menu-item>
            <el-menu-item index="5"  v-model="projectType" v-on:click="slecttype(projectType='办公和网站')">
              <i class="el-icon-user-solid" style="color: #3a8ee6"></i>
              <span slot="title">办公和网站</span>
            </el-menu-item>
            <el-menu-item index="6" v-model="projectType" v-on:click="slecttype(projectType='移动APP')">
              <i class="el-icon-phone" style="color: #3a8ee6"></i>
              <span slot="title">移动APP</span>
            </el-menu-item>
            <el-menu-item index="7" v-model="projectType" v-on:click="slecttype(projectType='内部研发')">
              <i class="el-icon-s-order" style="color: #3a8ee6"></i>
              <span slot="title">内部研发</span>
            </el-menu-item>
            <el-menu-item index="8"  v-model="projectType" v-on:click="slecttype(projectType='禅道')">
              <i class="el-icon-s-help" style="color: #3a8ee6"></i>
              <span slot="title">禅道</span>
            </el-menu-item>
            <el-menu-item index="9" v-model="projectType" v-on:click="slecttype(projectType='界面规范示例')">
              <i class="el-icon-upload" style="color: #3a8ee6"></i>
              <span slot="title">界面规范示例</span>
            </el-menu-item>
            <el-menu-item index="10" v-model="projectType" v-on:click="slecttype(projectType='其他系统')">
              <i class="el-icon-s-platform" style="color: #3a8ee6"></i>
              <span slot="title">其他系统</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main   style="width:100%">
          <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%" :row-style="{height:'15px'}" :cell-style="{padding:'5px'}">
            <el-table-column
              prop="componeyName"
              label="单位名称"
              width="300" header-align="center">
            </el-table-column>
            <el-table-column
              prop="address"
              label="系统名称"
              header-align="center">
              <template slot-scope="id"  >
                <el-link  id="id.row.id" type="primary" target="_blank"  v-for="(user,i) in id.row.address":key="i" :href="user.website" :underline="false" >{{ user.name+'、'}}</el-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="person"
              label="测试负责人"
              width="300" header-align="center">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <el-footer style="height: 5%">
        <el-pagination style="border:0;"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[15, 30, 50, 100]"
                       :page-size="pagesize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="tableData.length">
        </el-pagination>
      </el-footer>
<!--    </el-container>-->
  </div>
</template>


<style>
  .span {
    color:#409EFF;
  }
  .el-aside {
    background-color: #B3C0D1;
    color: #333;
  }
  inputadreaa{
    display: inline;
  }

  .bodyTip
  {
    display: flex;
    flex-direction: row;
  }


  .col {
    background: url('../assets/8桂能软件LOGO.png')   no-repeat;
    position: fixed;
    left: 0px;
  }


</style>



<script  type="text/javascript"  >

  import axios from 'axios';
  export default {
    components:
      {},
    data() {
      return {
        tableData: [],
        //按什么搜索
        searchType: 1,
        //搜索内容
        searchContant: "",
        projectType: "",


        //分页相关数据
        currentPage:1, //初始页
        pagesize:15,    //    每页的数据
      }
    },
    created()//初始化
    {
      this.getdata();

    },
    methods: {
      //获取数据
      getdata: function () {
        axios.get("/API/apiSearch",
          {
            params:
              {
                searchContant: "",
                searchType: 1,
              }
          }
        ).then(res => {
          this.getadressinfo(res.data.result);
        })
      },
      //搜索
      searchclick: function (e) {
        axios.get("/API/apiSearch", {
          params:
            {
              searchContant: this.searchContant,
              searchType: 2,
            }
        }).then(res => {
          this.getadressinfo(res.data.result);
        })
      },
      skip: function (url, id) {
        debugger;
        window.location.href = url;
      },

      //侧边栏分类
      slecttype: function (id) {
        axios.get("/API/apiSearch", {
          params:
            {
              searchContant: id,
              searchType: 3,
            }
        }).then(res => {
          this.getadressinfo(res.data.result);
        })
      },
      //处理地址数据
      getadressinfo:function (sourcedata)
      {
        this.tableData=sourcedata;
        for ( let i = 0; i <sourcedata.length; i++)
        {
          //字符串第一次切割
          let adresses=sourcedata[i].address.split("$");
          let resultadress=[];
          adresses.forEach(function(value,j)
          {
            let obj = {
              name:"",
              website:"",
            };
            //字符串第二次切割
            let adressinfo=value.split(";");
            if(adressinfo[0]===''||adressinfo[1]==='')
            {
              return;
            }
            obj.name=adressinfo[0];
            obj.website=adressinfo[1];
            resultadress.push(obj);
          });
          this.tableData[i].address= resultadress;
        };
      },

      //分页事件响应
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
    }
  }

</script>
