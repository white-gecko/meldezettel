<template>

  <div class="
        header
        hasShadowHeaderA
        flexContainerHeaderA">

    <div class="
          THWlogoWrapper
          hasShadowHeaderB
          flexContainerHeaderA
          flexChildHeaderB">
      <img src="@/assets/thw-logo.png"
           height="70"
           width="70">
    </div>

    <div class="fillerWrapper"></div>

    <div class="
          headerWrapper
          hasShadowHeaderB">
      Einsatz
    </div>

    <div class="
          headerWrapper
          hasShadowHeaderB">
      Zeichen
    </div>

    <div class="
          roleLogoWrapper
          hasShadowHeaderB">
    </div>

  </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'THWHeader',

  computed: {
    ...mapGetters({
      role: 'getRole'
    }),

    computedRole: function () {
      if (this.role === 'Sichter') {
        return 'Sichter'
      } else if (this.role === 'LdF') {
        return 'LdF'
      } else if (this.role === 'Fernmelder') {
        return 'Fernmelder'
      } else if (this.role === 'SGL') {
        return 'SGL'
      } else if (this.role === 'Fachberater') {
        return 'Fachberater'
      } else if (this.role === 'Verbindungsstelle') {
        return 'Verbindungsstelle'
      } else {
        return 'undefined Role'
      }
    }

  }
}
</script>

<style>
  .header {
    background-color: var(--semiLightNeutralColor);
    height: 50px;
    width: 100%;
    border-radius: 0px 0px 0px 0px;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--regularTextColor);
    overflow: visible;
    padding-top: 0%;
  }
  .headerWrapper {
    height: 40px;
    background-color: var(--semiLightNeutralColor);
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-radius: 0px 0px 5px 5px;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10px;
    margin-left: 1%;
    margin-right: 1%
  }
  .THWlogoWrapper {
    background-color: var(--darkNeutralColor);
    min-height: 70px;
    min-width: 80px;
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-radius: 0px 0px 5px 5px;
    margin-left: 10%;
    margin-right: 1%;
  }
  .roleLogoWrapper {
    background-color: var(--semiLightNeutralColor);
    min-height: 60px;
    min-width: 70px;
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-radius: 0px 0px 5px 5px;
    margin-left: 1%;
    margin-right: 10%;
  }
  .fillerWrapper {
    background-color: var(--semiLightNeutralColor);
    width: 14%;
  }

  /*
  flex-settings:
    different settings for the flex attribute
  */
  .flexContainerHeaderA{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .flexChildHeaderA{
  }

  /*
  shadow-settings:
    different shadow settings
  */
  .hasShadowHeaderA {
    box-shadow: 0px 5px 10px 0px var(--lightShadowColor);
  }
  .hasShadowHeaderB {
    box-shadow: 0px 10px 20px 1px var(--lightShadowColor);
  }

  /*temp*/
  .testSquare1 {
    background-color: white;
    height: 70px;
    width: 10%;
    margin-left: 2%;
    margin-right: 2%;
  }
  .testSquare2 {
    background-color: white;
    height: 70px;
    width: 40%;
    margin-left: 2%;
    margin-right: 2%;
  }
</style>
