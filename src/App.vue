<template>
  <div class="app-container">
    <!-- <h1>App</h1> -->

    <mt-header fixed title="黑马程序员·Vue项目"></mt-header>


    <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
          </router-link>
          <router-link class="mui-tab-item" to="/shopcar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
              <span class="mui-badge">0</span>
            </span>
            <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
          </router-link>
      </nav>

    <h1>app</h1>
    
  </div>
</template>

<script>
 
</script>

<style scoped>
  .app-container{
    padding-top: 40px;
  }
</style>
