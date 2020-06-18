<template>
  <div class="navbar">
    <!--  default-active :　默认选中的菜单
            :router="true" true表示开启路由模式,开启之后, index值代表的就是路由地址
    -->
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/BaseModel">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>基础信息模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/BaseModel/proinfo">产品信息窗口</el-menu-item>
          <el-menu-item index="/BaseModel/trayinfo">托盘信息窗口</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/PersonnelModel">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>人事信息模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/PersonnelModel/staffing">岗位配置窗口</el-menu-item>
          <el-menu-item index="/PersonnelModel/Jobset">工作设置窗口</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/ShopModel">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>积分商城模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ShopModel/proposal">用户建议窗口</el-menu-item>
          <el-menu-item index="/ShopModel/shopwish">用户愿望窗口</el-menu-item>
          <el-menu-item index="/ShopModel/exchangeshop">用户兑换窗口</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/AchievementsModel">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>绩效模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/AchievementsModel/Personnel">人事绩效窗口</el-menu-item>
          <el-menu-item index="/AchievementsModel/Quality">质量部绩效窗口</el-menu-item>
          <el-menu-item index="/AchievementsModel/Data">数据运营部绩效窗口</el-menu-item>
          <el-menu-item index="/AchievementsModel/Equipment">设备部绩效窗口</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>


<style scoped>
.el-menu {
  border-right: none;
}
</style>