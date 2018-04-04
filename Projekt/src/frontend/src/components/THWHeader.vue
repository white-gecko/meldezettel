<template>

  <div class="
        header
        hasShadowHeaderA
        flexContainerHeaderA">

    <div class="
          THWlogoWrapper
          flexContainerHeaderB">

      <div class="
          logoHeader
          hasShadowHeaderB
          flexContainerHeaderA
          flexChildHeaderB">
        <img src="@/assets/thwLogo.png"
             height="70"
             width="70">
      </div>

      <div class="
            headerWrapper
            hasShadowHeaderB"
           style="
            margin-left: 0%;
            padding-left: 10%;
            padding-right: 10%;
            margin-left: 0%;
            margin-right: 0%;">
        Technisches Hilfswerk
      </div>

    </div>

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
          flexContainerHeaderB">
      <div class="
          logoHeader
          hasShadowHeaderB
          flexContainerHeaderA">
        <img :src="selectIcon"
             height="70"
             width="70">
      </div>

      <div class="
            headerWrapper
            hasShadowHeaderB"
           style="
            margin-right: 0%;
            padding-left: 10%;
            padding-right: 10%;
            margin-left: 0%;
            margin-right: 0%;">
        {{this.user.role}}
      </div>

    </div>

  </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'THWHeader',
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),

    selectIcon: function () {
      /* if (this.role === 'Sichter') {
        return require('@/assets/sichterIcon.png')
      } else if (this.role === 'LdF') {
        return require('@/assets/LdFIcon.png')
      } else if (this.role === 'Fernmelder') {
        return require('@/assets/fernmelderIcon.png')
      } else if (this.role === 'SGL') {
        return require('@/assets/SGLIcon.png')
      } else if (this.role === 'Fachberater') {
        return require('@/assets/fachberaterIcon.png')
      } else if (this.role === 'Verbindungsstelle') {
        return require('@/assets/verbindungsstelleIcon.png')
      } else {
        return require('@/assets/placeholderIcon.png')
      } */
      return require('@/assets/sichterIcon.png')
      // return require('@/assets/LdFIcon.png')
      // return require('@/assets/fernmelderIcon.png')
      // return require('@/assets/SGLIcon.png')
      // return require('@/assets/fachberaterIcon.png')
      // return require('@/assets/verbindungsstelleIcon.png')
      // return require('@/assets/placeholderIcon.png')
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
    position: fixed;
  }
  .headerWrapper {
    height: 40px;
    background-color: var(--semiLightNeutralColor);
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 10px;
    margin-left: 1%;
    margin-right: 1%;
    white-space: nowrap;
  }
  .logoHeader {
    background-color: var(--darkNeutralColor);
    min-height: 70px;
    min-width: 80px;
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
  }
  .THWlogoWrapper {
    margin-left: 10%;
    margin-right: 18%;
  }
  .roleLogoWrapper {
    margin-left: 1%;
    margin-right: 10%;
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
  .flexContainerHeaderB{
    display: flex;
    flex-direction: row;
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
</style>
