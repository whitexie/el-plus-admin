<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <div class="main-header">
          <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>年度协议管理</el-breadcrumb-item>
            <el-breadcrumb-item>二级商协议</el-breadcrumb-item>
            <el-breadcrumb-item>新增二级商协议</el-breadcrumb-item>
          </el-breadcrumb>
          <h1>新增二级商协议</h1>
        </div>
        <el-main class="main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.aside,
.header {
  background-color: #2A3138;
}

.aside {
  height: 100vh;
}

.main {
  background-color: #f5f5f5;
}

.main-header {
  padding: 10px 10px 0;
  background-color: white;
}
</style>
