<template>
  <div id="login">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <el-tabs v-model="activeName" type="border-card" stretch>
          <el-tab-pane label="login" name="login">
            <el-card class="view-shadow" shadow="hover">
              <h1>Login</h1>
              <el-form label-position="right" label-width="80px" :model="formLogin">
                <el-form-item label="number">
                  <el-input
                    prefix-icon="el-icon-user"
                    placeholder="测试用户admit"
                    v-model="formLogin.number"
                    required
                  ></el-input>
                </el-form-item>
                <el-form-item label="password">
                  <el-input
                    placeholder="测试用户密码admit"
                    prefix-icon="el-icon-lock"
                    type="password"
                    v-model="formLogin.password"
                    required
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="toLogin">submit</el-button>
                  <el-button @click="reset">reset</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="register" name="register">
            <el-card class="view-shadow" shadow="hover">
              <h1>Register</h1>
              <el-form label-position="right" label-width="80px" :model="formRegister">
                <el-form-item label="number">
                  <el-input prefix-icon="el-icon-user" v-model="formRegister.number" required></el-input>
                </el-form-item>
                <el-form-item label="password">
                  <el-input
                    prefix-icon="el-icon-lock"
                    type="password"
                    v-model="formRegister.password"
                    required
                  ></el-input>
                </el-form-item>
                <el-form-item label="rpassword">
                  <el-input
                    prefix-icon="el-icon-refresh-left"
                    type="password"
                    v-model="formRegister.rpassword"
                    required
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="toRegister">submit</el-button>
                  <el-button @click="reset">reset</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      activeName: "login",
      formLogin: {
        number: "",
        password: ""
      },
      formRegister: {
        number: "",
        password: "",
        rpassword: ""
      }
    };
  },
  methods: {
    toLogin() {
      this.$axios
        .get("/dargon/login")
        .then(response => {
          if (
            this.formLogin.number == response.data.user &&
            this.formLogin.password == response.data.password
          ) {
            this.$router.push({
              path: "user",
              query: { user: response.data.user }
            });
          } else {
            alert("账号或密码错误");
            this.formLogin.number = "";
            this.formLogin.password = "";
            this.formRegister.number = "";
            this.formRegister.password = "";
            this.formRegister.rpassword = "";
          }
        })
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
    toRegister() {
      this.$axios
        .get("/dargon/login")
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
    reset() {
      this.formLogin.number = "";
      this.formLogin.password = "";
      this.formRegister.number = "";
      this.formRegister.password = "";
      this.formRegister.rpassword = "";
    }
  }
};
</script>

<style scoped>
</style>
