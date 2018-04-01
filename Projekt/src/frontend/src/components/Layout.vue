<template>
  <div class="flexContainerLayoutA">
    <div style="z-index: 2">
      <THWHeader/>
    </div>

    <div class="
          flexContainerLayoutB"
         style="z-index: 1">
        <THWMenu style="
                  width: 20%;
                  margin-top: 90px;"/>
        <router-view style="
                      width: 78%;
                      margin-left: 40px;
                      margin-top: 140px;"/>

    </div>

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
    --lightMainColor: #799bd2;
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
    --semiLightNeutralColor: #fafafa;
    --lightNeutralColor: white;

    /*shadow colors*/
    --darkShadowColor: #666666;
    --middleShadowColor: #999999;
    --lightShadowColor: #cccccc;

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
  flex-settings:
  different settings for the flex attribute
   */
  .flexContainerLayoutA {
    display: flex;
    flex-direction: column;
  }
  .flexContainerLayoutB {
    display: flex;
    flex-direction: row;
  }

  /*
  wrapper
    different wrappers to enclose elements in,
    mainly for structural and design reasons
   */
  .outerWrapper {
    background-color: var(--darkNeutralColor);
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
    flex-grow: 1;
  }

  .middleWrapper {
    background-color: var(--middleNeutralColor);
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
    flex-grow: 1;
  }

  .innerWrapper {
    background-color: var(--semiLightNeutralColor);
    font-family: var(--mainFont);
    font-size: var(--smallTitleSize);
    color: var(--primaryTextColor);
    position: relative;
    flex-grow: 1;
  }

  /*CSS-reset:
      resets the whole standart css settings,
      to reduce problems with different browsers
     */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, el-header, el-footer,
  el-form-item, el-input, el-main, el-container{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
</style>
