<template>
  <div >
    <el-container>
      <el-header height="90px">
        <THWHeader/>
      </el-header>
      <el-container style="padding-right: 150px; padding-left: 150px">
        <el-aside width="220px">
          <THWMenu/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import THWHeader from '@/components/THWHeader'
import THWMenu from '@/components/THWMenu'

export default {
  name: 'Layout',
  components: {
    THWHeader,
    THWMenu
  }
}
</script>

<style>
  :root {
    /*colors*/
    /*main colors*/
    --mainColor: #3d6cb8;
    --formBlueColor: #9cb7e2;
    --formGreenColor: "";
    --formRedColor: "";
    --formYellowColor: "";

    /*secondary colors*/
    --successColor: #67C23A;
    --warningColor: #E6A23C;
    --dangerColor: #F56C6C;
    --infoColor: #909399;

    /*neutral colors*/
    --darkNeutralColor: #DCDFE6;
    --middleNeutralColor: #EBEEF5;
    --lightNeutralColor: white;

    /*shadow colors*/

    /*font-specific parameters*/
    /*font(s)*/
    --mainFont: Helvetica;

    /*font-sizes*/
    --bigTitleSize: 20px;
    --titleSize: 18px;
    --smallTitleSize: 16px;
    --bodySize: 14px;
    --smallBodySize: 13px;
    --supplementaryTextSize: 12px;

    /*font-colors*/
    --primaryTextColor: #303133;
    --regularTextColor: #606266;
    --secondaryTextColor: #909399;
    --placeholderTextColor: #C0C4CC;
  }

  /*
  wrapper
    different wrappers to enclose elements in,
    mainly for structural and design reasons
   */
  .outerWrapper {
    background-color: var(--darkNeutralColor);
    font-family: var(--mainFont);
    color: var(--primaryTextColor);
    border-bottom: var(--placeholderTextColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-radius: 0px;
  }

  .middleWrapper {
    background-color: var(--middleNeutralColor);
    font-family: var(--mainFont);
    color: var(--primaryTextColor);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .innerWrapper {
    background-color: var(--lightNeutralColor);
    font-family: var(--mainFont);
    color: var(--primaryTextColor);
    border-left: var(--formBlueColor);
    border-left-style: solid;
    border-left-width: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .el-header, .el-footer, .el-form-item, el-input, el-main, el-container {
    padding: 0;
    margin: 0;
  }
</style>
