<template>
<div  >
  <el-dialog title="新增测试系统" :visible="this.visible" label-width="100px" :append-to-body="true" @close="handleClose" customClass="customWidth" >
    <el-form  :inline="true" >
      <el-form-item  label="项目类型" style="width: 465px" >
        <el-select id="typeselect" value-key="label" v-model="testlistData.projectType"  placeholder="请选择项目类型" >
          <el-option
            v-for="item in projectTypeoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="单位名称" >
        <el-input  v-model="testlistData.componeyName" style="width: 400px" ></el-input>
      </el-form-item>
      <el-form v-for="(item,index) in testlistData.address" :key="index"  >
        <el-form-item   label="系统名称">
          <el-input v-model="testlistData.address[index].name"  placeholder="请输入系统名称" style="width: 400px" @input="change(e)">
          </el-input>
        </el-form-item>
        <el-form-item  label="测试地址">
          <el-input v-model="testlistData.address[index].website" placeholder="请输入测试地址" style="width: 400px" @input="change(e)" >
          </el-input>
        </el-form-item>
        <el-button type="danger" size="medium" class="el-icon-delete" @click="deleteadressitem(index)" ></el-button>
      </el-form>
      <el-form>
        <el-form-item >
          <el-button type="text" class="addadress" @click="addadressitem">添加更多</el-button>
        </el-form-item>
      </el-form>
      <el-form-item label="测试负责人" >
        <el-input value-key="label" v-model="testlistData.person"  placeholder="请输入测试负责人">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-form-item  label="备注" >
          <el-input  v-model="testlistData.remarks" style="width: 550px" ></el-input>
        </el-form-item>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button v-on:click="$emit('close-page')">取 消</el-button>
      <el-button type="primary"  @click="$emit('save-page',testlistData)" >确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>


<style>
  .customWidth
  {
    width:75%;
  }

</style>


<script type="text/javascript" >
  import axios from 'axios';
  export default
  {
    props:{
      //标题
      title:{
        default:'新增',
        type:String,
      },
      action:{
        type:String,
        default:'add',
      },

      //是否可见的属性
      visible:{
        type: Boolean,
        default: false
      },

      //被选中的数据
      item:{
        type:Object,
        default()
        {
        },
      },
    },


    created()//初始化
    {
      this.initdata();

    },
    methods:
      {
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
          this.$confirm('是否删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if(index==0)return;
            this.testlistData.address.splice(index,1);
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        //窗口关闭触发
        handleClose(){
          // 子组件调用父组件方法，并传递参数
          this.$emit('close-pageX')
        },


        //初始化当前表单
        initdata()
        {
          this.initForm();
        },

        //初始化表单
        initForm() {
          // 取出这一行的数据里的数据,填入表单中显示
          const {
            componeyName = null,
            address = null,
            person = null,
            remarks = null,
            projectType = null,
            id=null,

          } =
          this.item || {}
          switch (this.action) {
            case 'add':
              break
            case 'edit':
              this.testlistData = {
                componeyName,
                address,
                person,
                remarks,
                projectType,
                id,
              };
              break
            default:
              break
          }
        },
      },

    data: function () {
      return {
        currentprojectType:"",
        showDialog:false,
        testlistData: {
          componeyName: '',//公司名称
          person: '',
          id:'',
          address:[{
            name:"",
            website:"",
          }],
          remarks:"",
          projectType:"",
        },


        projectTypeoptions:[{
          value: '演示专用系统',
          label: '演示专用系统'
        }, {
          value: '综合管理系统',
          label: '综合管理系统',
        }, {
          value: '广西院系统',
          label: '广西院系统'
        }, {
          value: '图档系统',
          label: '图档系统'
        }, {
          value: '办公和网站',
          label: '办公和网站'
        }, {
          value: '移动APP',
          label: '移动APP'
        }, {
          value: '内部研发',
          label: '内部研发'
        },{
          value: '禅道',
          label: '禅道'
        }, {
          value: '界面规范示例',
          label: '界面规范示例'
        },{
          value: '其他系统',
          label: '其他系统'
        },],
      }
    }
  }

</script>
