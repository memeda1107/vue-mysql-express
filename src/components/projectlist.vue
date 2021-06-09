<template >
  <div>

    <el-container style="height: 700px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header   >
          <el-row>
            <el-col :xs="8" :sm="8" style="text-align: left; font-size: 25px">
              <span>技术质量部测试系统列表</span>
            </el-col>
            <el-col :xs="8" :sm="8" >
            </el-col>
            <el-col :xs="8" :sm="8">
              <el-col :xs="20" :sm="20">
                <el-input id="uuida9937b2c-fb4d-4ea7-84a2-0cca76828ea0"  v-model="searchContant"  style="height: 50px;alignment: left; font-size: 12px"placeholder="请输入内容"></el-input>
              </el-col>
              <el-col :xs="4" :sm="4">
                <el-button id="uuid5dd302a9-5b35-40d7-9fb1-44449c8a4226" style="margin-left:5px;alignment: left" type="primary" v-on:click="searchclick">搜索</el-button>
              </el-col>
            </el-col>
          </el-row>
          <el-row>
          </el-row>
        </el-header>
        <el-main >
          <el-table
            :data="tableData"
            border
            style="width: 100%" >
            <el-table-column
              prop="componeyName"
              label="单位名称"
              width="150">
            </el-table-column>
            <el-table-column
              prop="address"
              label="系统地址"
              width="120">
              <template slot-scope="id"  >
                <el-link  id="id.row.id" type="primary" target="_blank"  v-for="(user,i) in id.row.address":key="i" :href="user.website" :underline="false" >{{ user.name}}</el-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="person"
              label="测试负责人"
              width="120">
            </el-table-column>
            <el-table-column
              prop="id"
              label="操作"
              width="180"  >
              <template slot-scope="id"  >
                <el-col :xs="8" :sm="8">
                  <el-button size="mini" class="el-icon-edit" ></el-button>
                </el-col>
                <el-col :xs="8" :sm="8">
                  <el-button id="b1"  size="mini" class="el-icon-delete"   prop="id" v-on:click="deletelist(id.row.id)" ></el-button>
                </el-col>
                <el-col :xs="8" :sm="8">
                  <el-button size="mini" class="el-icon-plus" v-on:click="dialogFormVisible=true"></el-button>
                  <el-dialog title="新增测试系统" :visible.sync="dialogFormVisible" label-width="100px"  >
                    <el-form :inline="true">
                      <el-form-item  label="单位名称" >
                        <el-input  v-model="testlistData.componentName" style="width: 550px" ></el-input>
                      </el-form-item>
                      <el-form v-for="(item,index) in testlistData.address" :key="index"  >
                        <el-form-item   label="地址名称">
                          <el-input v-model="testlistData.address[index].name"  placeholder="请输入名称" style="width: 100px" @input="change(e)">
                          </el-input>
                        </el-form-item>
                        <el-form-item  label="测试地址">
                          <el-input v-model="testlistData.address[index].website" placeholder="请输入测试地址" style="width: 350px" @input="change(e)" >
                          </el-input>
                        </el-form-item>
<!--                        <el-button type="success" size="mini"  @click="addadressitem">添加</el-button>-->
                        <el-button type="danger" size="medium"  @click="deleteadressitem(index)" >删除</el-button>
                      </el-form>
                    <el-form>
                      <el-form-item >
                        <el-button type="text" class="addadress" @click="addadressitem">添加更多</el-button>
                      </el-form-item>
                    </el-form>
                      <el-form-item label="测试负责人" >
                        <el-select value-key="label" v-model="testlistData.person"  placeholder="请选择测试负责人">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="handleSave">确 定</el-button>
                    </div>
                  </el-dialog>
                </el-col>
              </template>

            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    background-color: #B3C0D1;
    color: #333;
  }
  inputadreaa{
    display: inline;
  }
</style>
<script  type="text/javascript"  >



  import axios from 'axios';
  export default {
    data() {
      // const item = {
      //   componeyName
      //   address
      //   person
      // };

      return {
        dialogFormVisible:false,
        // tableData: Array(20).fill(item),
        tableData:[],
        componentName: '',
        // address: '',
        person: '',
        id:'',
        address:[{
          name:"",
          website:"",
        }],


        //搜索内容
        searchContant:"",
        //测试列表数据
        testlistData: {
          componentName: '',//公司名称
          person: '',
          id:'',
          address:[{
            name:"",
            website:"",
          }]
        },


        options: [{
          value: '韦金节',
          label: '韦金节'
        }, {
          value: '李珊珊',
          label: '李珊珊',
        }, {
          value: '彭慧',
          label: '彭慧'
        }, {
          value: '黄银凤',
          label: '黄银凤'
        }, {
          value: '韦小珍',
          label: '韦小珍'
        }],
        value: ''
      }
    },
    created()//初始化
    {
      this.getdata();

    },

      methods: {
      //获取数据
      getdata:function()
      {
        debugger;
        axios.get("/API/apiSearch",
          {
            params:
              {
                searchContant: ""
              }
          }
        ).then(res=>{
          this.getadressinfo(res.data.result);
        })
      },
        //删除
        deletelist:function(deletId)
        {
          axios.get("/API/apiDelete",{
            params:
              {
                id:deletId
              }
          }).then(res=>{
            console.log("ok")
            this.getdata();
          })
          alert("删除成功！");
        },
        dialogFormVisible:function(e)
        {

        },
        //保存
        handleSave:function(e)
        {
          debugger;
          axios.get("/API/apiAdd",{
            params:
              {
                componentName:this.testlistData.componentName,
                address:this.testlistData.address,
                person:this.testlistData.person,
              }
          }).then(res=>{
            // debugger;
            console.log("ok")
            this.dialogFormVisible = false
            this.getdata();
          })
          alert("添加成功！");
        },
        //搜索
        searchclick:function (e)
        {
           debugger;
          axios.get("/API/apiSearch",{
            params:
              {
                searchContant:this.searchContant
              }
          }).then(res=>{
            debugger;
            console.log("ok")
            this.dialogFormVisible = false
            this.getadressinfo(res.data.result);
          })
        },
        skip:function (url,id)
        {
           debugger;
          window.location.href=url;
        },
        addadressitem:function ()
        {
          let obj = {
            name:"",
            website:"",
          }
          this.testlistData.address.push(obj)
        },
        deleteadressitem:function (index)
        {
          debugger;
          if(index==0)return;
          this.testlistData.address.splice(index,1)
        },

        change :function(e) {
          this.$forceUpdate()
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
        }
      }
  }
</script>










