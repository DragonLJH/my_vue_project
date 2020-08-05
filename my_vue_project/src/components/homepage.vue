<template>
  <div id="homepage">
    <el-carousel trigger="click" :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div class="show">
      <h1>推荐</h1>
      <el-row class="testOverclear" :gutter="50">
        <div v-for="(item,index) in list" :key="index">
          <div>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
              <el-card :body-style="{ padding: '10px' }" shadow="hover" style="position:relative">
                <el-image style="width: 100px; height: 100px" :src="item.img" fit="cover"></el-image>
                <div>商品名称:{{item.Pname}}</div>
                <div>商品价格:{{item.Pprice}}</div>
                <div>商品介绍:{{item.Pself}}</div>
                <el-button
                  @click="collect"
                  icon="el-icon-star-off"
                  circle
                  type="primary"
                  style="position:absolute; top:0px;right:0px"
                ></el-button>
              </el-card>
            </el-col>
          </div>
        </div>
      </el-row>
      <el-pagination
        :pager-count="5"
        @current-change="currentChange"
        :page-count="page"
        background
        layout="prev, pager, next"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "homepage",
  data() {
    return {
      allList: [],
      list: [],
      page: 0
    };
  },
  methods: {
    currentChange(e) {
      //e获取页码数
      let alist = this.allList;
      let allLenght = this.allList.length;
      let newList = [];
      this.list = [];
      for (let i = 0 + 12 * (e - 1); i < 12 * e; i++) {
        if (i > allLenght) {
          return;
        }
        newList.push(alist[i]);
      }
      this.list = newList;
    },
    collect() {}
  },
  beforeCreate() {
    console.log("home-beforeCreate");
  },
  created() {
    console.log("home-created");
  },
  beforeMount() {
    console.log("home-beforeMount");
  },
  mounted() {
    console.log("home-mounted");
    this.$axios
      .get("/dargon/pagehomeT")
      .then(response => {
        this.allList = response.data.list;
        let list = response.data.list;
        let length = response.data.list.length;
        let newList = [];
        let page = length / 12;
        if (length % 12 != 0) {
          this.page = parseInt(page) + 1;
        } else {
          this.page = parseInt(page);
        }

        for (let i = 0; i < 12; i++) {
          newList.push(list[i]);
        }
        this.list = newList;
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error);
      });
  }
};
</script>

<style scoped>
.el-carousel {
  padding-top: 100px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.testOverclear {
  overflow: hidden;
}
.testOverclear .el-col {
  margin-bottom: 20px;
}

.testOverclear .el-col .el-image {
  box-shadow: -5px 5px 5px #ccc;
}
</style>
