<template>
  <div id="user">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="用户信息" name="1">
        <el-card shadow="hover">
          <div>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>name</h1>
              </el-col>
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>{{user.name == null ? "null" : user.name}}</h1>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>age</h1>
              </el-col>
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>{{user.age == 0 ? "null" : user.age}}</h1>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>number</h1>
              </el-col>
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>{{user.number == "" ? "null" : user.number}}</h1>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>email</h1>
              </el-col>
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <h1>{{user.email == "" ? "null" : user.email}}</h1>
              </el-col>
            </el-row>
          </div>
          <el-button type="primary" @click="centerDialogVisible = true">修改用户信息</el-button>
          <el-dialog title="修改用户信息" :visible.sync="centerDialogVisible" width="100%" center>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <el-form label-position="left" label-width="80px" :model="user">
                  <el-form-item label="age">
                    <el-input v-model="user.age"></el-input>
                  </el-form-item>
                  <el-form-item label="number">
                    <el-input v-model="user.number"></el-input>
                  </el-form-item>
                  <el-form-item label="email">
                    <el-input type="email" v-model="user.email"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="changeUser">确 定</el-button>
            </span>
          </el-dialog>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="收藏" name="2"></el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "user",
  data() {
    return {
      centerDialogVisible: false,
      activeNames: ["1", "2"],
      user: { name: "", age: 0, number: "", email: "" }
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    //将路由传来的参数（用户名）加载
    this.$set(this.user, "name", this.$route.query.user);
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    console.log("this.user", this.user);
  },

  methods: {
    change(e) {
      console.log(e);
    },
    handleChange(val) {
      console.log(val);
    },
    changeUser() {
      if (this.user.name != null) {
        // this.$set(this.user, "age", this.user.age);
        // this.$set(this.user, "name", this.user.name);
        // this.$set(this.user, "email", this.user.email);
      } else {
        alert("用户未登陆修改失败");
        this.$set(this.user, "age", 0);
        this.$set(this.user, "number", "");
        this.$set(this.user, "email", "");
      }
      this.centerDialogVisible = false;
    }
  }
};
</script>



<style scoped>
</style>
