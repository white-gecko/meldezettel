<template>
  <div class="flexContainerLayoutA">
    <el-dialog :visible="showLandingPage"
               :show-close="false"
               :close-on-click-modal="false"
               :lock-scroll="false"
               top="5vh"
               style="
                width: 0;
                height: 0;
                overflow: visible;
                position: absolute;
                left: 25%;
                top: 0">
      <THWLandingPage/>
    </el-dialog>
    <div style="z-index: 2">
      <THWHeader/>
    </div>

    <div class="
          flexContainerLayoutB"
         style="z-index: 1">
        <THWMenu style="
                  width: 7%;
                  margin-top: 100px;"/>
       <router-view style="
                      width: 90%;
                      margin-left: 3%;
                      margin-top: 100px;"/>

    </div>

  </div>
</template>

<script>

import THWHeader from '@/components/THWHeader'
import THWMenu from '@/components/THWMenu'
import THWLandingPage from '@/components/THWLandingPage'

export default {
  name: 'Layout',
  components: {
    THWHeader,
    THWMenu,
    THWLandingPage
  },

  computed: {
    showLandingPage () {
      return this.$store.state.showLandingPage
    }
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
    --formGreenColor: #9ce2a4;
    --formRedColor: #e29c9c;
    --formYellowColor: #e2e29c;

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
    --darkShadowColor: rgba( 0, 0, 0, 0.3);
    --middleShadowColor: rgba( 0, 0, 0, 0.3);
    --lightShadowColor: rgba( 0, 0, 0, 0.3);

    /*font-specific parameters*/
    /*font(s)*/
    --mainFont: Helvetica;

    /*font-sizes*/
    --bigTitleSize: 110%;
    --titleSize: 100%;
    --smallTitleSize: 100%;
    --bodySize: 14px;
    --smallBodySize: 13px;
    --supplementaryTextSize: 12px;

    /*font-colors*/
    --primaryTextColor: #303133;
    --regularTextColor: #606266;
    --secondaryTextColor: #909399;
    --placeholderTextColor: #C0C4CC;
  }
  /* border-size setting(s) for defining overflow behaviour */
  .hasBorderSizeA {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
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
    font: var(--titleSize) var(--mainFont);
    color: var(--primaryTextColor);
    flex-grow: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .middleWrapper {
    background-color: var(--middleNeutralColor);
    font: var(--titleSize) var(--mainFont);
    color: var(--primaryTextColor);
    flex-grow: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .innerWrapper {
    background-color: var(--semiLightNeutralColor);
    font: var(--titleSize) var(--mainFont);
    color: var(--primaryTextColor);
    position: relative;
    flex-grow: 1;
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
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
