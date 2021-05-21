<template>
  <div id="app">
    <h1 style="font-size: 24px;text-align: center;padding: 20px 0">
      CPT304 Assignment2
    </h1>
    <el-row class="tac" :gutter="20">
      <el-col :span="4">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            router
            active-text-color="#ffd04b">
          <el-menu-item index="2" title="1" route="/hotel">
            <i class="el-icon-menu"></i>
            <span slot="title">Hotel</span>
          </el-menu-item>
          <el-menu-item index="3" title="holiday" route="/holiday">
            <i class="el-icon-document"></i>
            <span slot="title">Holiday</span>
          </el-menu-item>
          <el-menu-item index="4" title="weather" route="/weather">
            <i class="el-icon-setting"></i>
            <span slot="title">Weather</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>

  </div>
</template>

<style lang="less">
</style>
