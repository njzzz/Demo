<template>
  <div class="d2-crud">
    <!-- 使用方法请参考文档和示例 -->
    <!-- 文档： https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/ -->
    <!-- 示例： https://d2-projects.github.io/d2-admin/#/demo/d2-crud/index -->
    <el-form :inline="true" :model="formInline"  :style="{marginTop: '30px', marginLeft: '20px'}">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      title="D2 CRUD"
      index-row
      add-mode
      :add-button="addButton"
      :rowHandle="rowHandle"
      :form-template="formTemplate"
      :edit-template="formTemplate"
      :form-rules="formRules"
      :form-options="formOptions"
      @row-add="handleRowAdd"
      @row-edit="handleRowEdit"
      @row-remove="handleRowRemove"
      @dialog-cancel="handleDialogCancel"
      @selection-change="handleSelectionChange">
    </d2-crud>
  </div>
</template>

<script>
import Vue from 'vue'
import D2Crud from '@d2-projects/d2-crud'

Vue.use(D2Crud)

export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      columns: [
        {
          title: '日期',
          key: 'date',
          width: '180'
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          forbidEdit: false,
          showEditButton: true,
          forbidRemove: true,
          showRemoveButton: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          forbidEdit: true,
          showEditButton: true,
          forbidRemove: false,
          showRemoveButton: true
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          forbidEdit: false,
          showEditButton: false,
          forbidRemove: false,
          showRemoveButton: false
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          forbidEdit: false,
          showEditButton: true,
          forbidRemove: false,
          showRemoveButton: true
        }
      ],
      addButton: {
        icon: 'el-icon-plus',
        size: 'small'
      },
      rowHandle: {
        columnHeader: '编辑表格',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small',
          show (index, row) {
            if (row.showEditButton) {
              return true
            }
            return false
          },
          disabled (index, row) {
            if (row.forbidEdit) {
              return true
            }
            return false
          }
        },
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show (index, row) {
            if (row.showRemoveButton) {
              return true
            }
            return false
          },
          disabled (index, row) {
            if (row.forbidRemove) {
              return true
            }
            return false
          }
        }
      },
      formTemplate: {
        date: {
          title: '日期',
          value: '',
          component: {
            span: 12
          }
        },
        name: {
          title: '姓名',
          value: '',
          component: {
            name: 'el-select',
            options: [
              {
                value: '王小虎',
                label: '王小虎'
              },
              {
                value: '王中虎',
                label: '王中虎'
              },
              {
                value: '王老虎',
                label: '王老虎'
              }
            ],
            clearable: true,
            span: 12
          }
        },
        address: {
          title: '地址',
          value: '',
          component: {
            span: 24
          }
        },
        forbidEdit: {
          title: '阻止编辑',
          value: false,
          component: {
            name: 'el-radio',
            options: [
              {
                value: true,
                label: '是'
              },
              {
                value: false,
                label: '否'
              }
            ],
            span: 12
          }
        },
        showEditButton: {
          title: '显示编辑',
          value: true,
          component: {
            name: 'el-radio',
            options: [
              {
                value: true,
                label: '是'
              },
              {
                value: false,
                label: '否'
              }
            ],
            span: 12
          }
        },
        forbidRemove: {
          title: '阻止删除',
          value: false,
          component: {
            name: 'el-radio',
            options: [
              {
                value: true,
                label: '是'
              },
              {
                value: false,
                label: '否'
              }
            ],
            span: 12
          }
        },
        showRemoveButton: {
          title: '显示删除',
          value: true,
          component: {
            name: 'el-radio',
            options: [
              {
                value: true,
                label: '是'
              },
              {
                value: false,
                label: '否'
              }
            ],
            span: 12
          }
        }
      },
      formRules: {
        date: [ { required: true, message: '请输入日期', trigger: 'blur' } ],
        name: [ { required: true, message: '请输入姓名', trigger: 'change' } ],
        address: [ { required: true, message: '请输入地址', trigger: 'blur' } ]
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false,
        gutter: 20
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.$message({
        message: '查询成功',
        type: 'success'
      });
    },
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        done()
        this.formOptions.saveLoading = false
      }, 300);
    },
    handleRowEdit ({index, row}, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        done()
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleRowRemove ({index, row}, done) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
      }, 300)
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      });
      done()
    },
    handleSelectionChange (selection) {
      console.log(selection)
       
    }
  }
}

</script>
<style>

</style>
