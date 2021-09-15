<template>
  <div id="datatable">
    <div class="btn">
      <el-button
        @click="dialogFormVisible = true"
        size="small"
        type="primary"
        icon="el-icon-circle-plus"
        >{{ tilname }}</el-button
      >
      <!-- <el-dialog title="新增菜单" :visible.sync="dialogFormVisible">
        <div slot="title" class="dialog-title">
          <i class="el-icon-s-home"></i>
          <span>新增菜单</span>
        </div>
        <el-form :model="form" :rules="rules" :inline="true" size="small">
          <el-form-item label="菜单编号" prop="menuId" label-width="120px">
            <el-input v-model="form.menuId" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="菜单名称" prop="menuName" label-width="120px">
            <el-input v-model="form.menuName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="机构类型"
            prop="menuType"
            :label-width="formLabelWidth"
          >
            <el-select placeholder="" v-model="form.menuType" clearable>
              <el-option
                v-for="item in optionType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜单URL" prop="menuUrl" label-width="120px">
            <el-input v-model="form.menuUrl" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="菜单等级"
            prop="menuLeavel"
            :label-width="formLabelWidth"
          >
            <el-select placeholder="" v-model="form.menuLeavel" clearable>
              <el-option
                v-for="item in optionLeavel"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="父级菜单"
            prop="parentName"
            :label-width="formLabelWidth"
          >
            <el-select placeholder="" v-model="form.parentName" clearable>
              <el-option
                v-for="item in parentMenu"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancleInsert">取 消</el-button>
          <el-button type="primary" @click="insertData">确 定</el-button
          >
        </div>
      </el-dialog> -->

      <v-dialog :dialogShow="dialogFormVisible">
        <template v-slot:content>
          <el-form :model="form" :rules="rules" :inline="true" size="small">
            <el-form-item label="菜单编号" prop="menuId" label-width="120px">
              <el-input v-model="form.menuId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="菜单名称" prop="menuName" label-width="120px">
              <el-input v-model="form.menuName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="机构类型"
              prop="menuType"
              :label-width="formLabelWidth"
            >
              <el-select placeholder="" v-model="form.menuType" clearable>
                <el-option
                  v-for="item in optionType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="菜单URL" prop="menuUrl" label-width="120px">
              <el-input v-model="form.menuUrl" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="菜单等级"
              prop="menuLeavel"
              :label-width="formLabelWidth"
            >
              <el-select placeholder="" v-model="form.menuLeavel" clearable>
                <el-option
                  v-for="item in optionLeavel"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="父级菜单"
              prop="parentName"
              :label-width="formLabelWidth"
            >
              <el-select placeholder="" v-model="form.parentName" clearable>
                <el-option
                  v-for="item in parentMenu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </template>
        <template #footer>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancleInsert">取 消</el-button>
            <el-button type="primary" @click="insertData">确 定</el-button>
          </div>
        </template>
      </v-dialog>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="data"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="序号" width="120">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="menuId" label="菜单编号" width="120">
        </el-table-column>
        <el-table-column prop="menuName" label="菜单名称" width="120">
        </el-table-column>
        <el-table-column prop="menuType" label="机构类型" width="120">
        </el-table-column>
        <el-table-column prop="menuUrl" label="菜单URL" width="120">
        </el-table-column>
        <el-table-column prop="menuLeavel" label="菜单等级" width="120">
        </el-table-column>
        <el-table-column prop="parentNum" label="父菜单编号" width="150">
        </el-table-column>
        <el-table-column prop="parentName" label="父菜单名称" width="120">
        </el-table-column>
        <el-table-column label="操作" width="210">
          <template slot-scope="scope">
            <el-button type="text" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
            <el-button type="text" @click="showUpdatedialog(scope.row)"
              >修改</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 修改对话框 -->
      <v-dialog
        :dialogShow="updateVisible"
        titleName="修改菜单"
        titleIcon="el-icon-office-building"
      >
        <template v-slot:content>
          <el-form
            :model="formupdate"
            :rules="rules"
            :inline="true"
            size="small"
          >
            <el-form-item label="菜单编号" prop="menuId" label-width="120px">
              <el-input v-model="formupdate.menuId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="菜单名称" prop="menuName" label-width="120px">
              <el-input v-model="formupdate.menuName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="机构类型"
              prop="menuType"
              :label-width="formLabelWidth"
            >
              <el-select placeholder="" v-model="formupdate.menuType" clearable>
                <el-option
                  v-for="item in optionType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="菜单URL" prop="menuUrl" label-width="120px">
              <el-input v-model="formupdate.menuUrl" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="菜单等级"
              prop="menuLeavel"
              :label-width="formLabelWidth"
            >
              <el-select placeholder="" v-model="formupdate.menuLeavel" clearable>
                <el-option
                  v-for="item in optionLeavel"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="父级菜单"
              prop="parentName"
              :label-width="formLabelWidth"
            >
              <el-select placeholder="" v-model="formupdate.parentName" clearable>
                <el-option
                  v-for="item in parentMenu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </template>
        <template #footer>
          <div slot="footer" class="dialog-footer">
            <el-button @click="updateVisible = false">取 消</el-button>
            <el-button type="primary" @click="updateInfo">确 定</el-button>
          </div>
        </template>
      </v-dialog>
    </div>
    <div class="page">
      <v-page></v-page>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "datatable",
  props: {
    tilname: String,
    data: Array,
  },
  components: {
    "v-page": () => import("@/components/small/Pageaction.vue"),
    "v-dialog": () => import("@/components/small/Dialog.vue"),
  },
  data() {
    return {
      updateVisible: false,
      dialogFormVisible: false,
      multipleSelection: [],
      form: {
        menuId: "",
        menuName: "",
        menuType: "",
        menuUrl: "",
        menuLeavel: "",
        parentName: "",
      },
      formupdate: {
        menuId: "",
        menuName: "",
        menuType: "",
        menuUrl: "",
        menuLeavel: "",
        parentName: "",
      },
      optionType: [
        {
          value: "运营中心",
          label: "运营中心",
        },
        {
          value: "顶层公司/集团",
          label: "顶层公司/集团",
        },
        {
          value: "交易商",
          label: "交易商",
        },
      ],
      optionLeavel: [
        {
          value: "一级菜单",
          label: "一级菜单",
        },
        {
          value: "二级菜单",
          label: "二级菜单",
        },
        {
          value: "三级菜单",
          label: "三级菜单",
        },
      ],
      parentMenu: [
        {
          value: "公司管理",
          label: "公司管理",
        },
        {
          value: "机构权限管理",
          label: "机构权限管理",
        },
        {
          value: "客户账户列表",
          label: "客户账户列表",
        },
        {
          value: "系统操作用户管理",
          label: "系统操作用户管理",
        },
        {
          value: "产品管理",
          label: "产品管理",
        },
        {
          value: "客户管理",
          label: "客户管理",
        },
      ],
      formLabelWidth: "120px",
      rules: {
        menuId: [
          { required: true, message: "请输入菜单编号", trigger: "blur" },
          // { min: 3, max: 7, message: "长度在 3 到 7 个字符", trigger: "blur" },
        ],
        menuName: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          // { min: 4, max: 7, message: "长度在 3 到 7 个字符", trigger: "blur" },
        ],
        menuType: [
          // { required: true, message: "请选择机构类型", trigger: "change" },
        ],
        menuUrl: [
          { required: true, message: "请输入菜单URL", trigger: "blur" },
          // { min: 5, max: 5, message: "长度为5个字符", trigger: "blur" },
        ],
        menuLeavel: [
          // { required: true, message: "请选择菜单等级", trigger: "change" },
        ],
        parentName: [
          // { required: true, message: "请选择父级菜单", trigger: "change" },
        ],
      },
      /* tableData: [
        {
          id: 1,
          menuId: "admin",
          menuName: "系统管理",
          menuType: "交易商",
          menuUrl: "/admin",
          menuLeavel: "一级菜单",
          parentNum: "Padmin",
          parentName: "管理",
        },
      ], */
    };
  },
  methods: {
    ...mapMutations({
      insert_data: "insert_allData",
      update_data:"update_allData",
      delete_data:"delete_allData",
    }),
    handleDelete(index,row){
      this.data.splice(index,1);
      this.delete_data(row);
    },
    showUpdatedialog(row) {
      this.updateVisible = true;
      this.formupdate = row;
      // console.log(this.formupdate);
      /* this.$nextTick(()=>{
        this.isUpdate=true;
      }) */
    },
    updateInfo() {
      this.updateVisible = false;
      //修改数据
      console.log(this.formupdate); 
      this.update_data(this.formupdate);
    },
    cancleInsert() {
      this.dialogFormVisible = false;
      this.form = {
        menuId: "",
        menuName: "",
        menuType: "",
        menuUrl: "",
        menuLeavel: "",
        parentName: "",
      };
    },
    insertData() {
      // this.dialogFormVisible = false;
      // console.log(this.form);
      if(this.form.menuId&&this.form.menuName&&this.form.menuType&&this.form.menuUrl&&this.form.menuLeavel&&this.form.parentName){
        this.insert_data(this.form);
        this.cancleInsert();
      }
      else{
        this.$message.error('请输入完整信息！');
      }
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      }
      return "";
    },
    handleSelectionChange(val) {
      this.multipleSelection = val; //选中数据的集合
    },
  },
};
</script>
<style scoped lang='less'>
#datatable {
  .btn {
    margin-bottom: 15px;
    .el-button--primary {
      background-color: #5786e7;
      font-size: 14px;
    }
  }
  .table {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    font-size: 14px;
    color: #606266;
    /deep/ .el-table th {
      background-color: #d2ddf2;
      color: #4d4d4d;
      font-weight: 800;
      text-align: center;
    }
    /deep/ .el-table .warning-row {
      background: #e3e6ed;
    }
    /deep/ .el-table__row > td {
      text-align: center;
      .cell {
        .el-button {
          font-size: 12px;
          color: #5786e7;
        }
      }
    }
  }
  .page {
    margin-top: 15px;
    text-align: center;
  }

  /deep/ .dialog-footer {
    margin-top: 10px;
    text-align: center;
  }
  /deep/ .el-form-item__content .el-input .el-input__inner {
    width: 200px;
  }
  /deep/ label {
    font-weight: 700;
  }
}
</style>