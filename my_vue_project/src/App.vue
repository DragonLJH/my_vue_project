<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          router
          :default-active="thisPath"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item disabled>Dragon</el-menu-item>
          <el-menu-item index="/homepage">
            <i class="el-icon-s-home"></i>首页
          </el-menu-item>
          <el-menu-item index="/user">
            <i class="el-icon-s-custom"></i>用户
          </el-menu-item>
          <el-menu-item index="/Login">登录/注册</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view class="routerView" />
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      thisPath: this.$route.path,
      queryUser: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.queryUser = this.$route.query.user;
    }
  },
  beforeCreate() {
    console.log("vueapp-beforeCreate");
  },
  created() {
    console.log("vueapp-created");
  },
  beforeMount() {
    console.log("vueapp-beforeMount");
  },
  mounted() {
    console.log("vueapp-mounted");
    console.log("this.$route.path", this.$route.path);
  }
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-main {
  overflow: hidden;
}

.LoginRegister {
  margin-top: 50px;
}

.LoginRegister a {
  color: #fff;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
}

.LoginRegister > .el-row {
  width: 30%;
}

.el-input-group__prepend {
  width: 70px;
}
</style>
