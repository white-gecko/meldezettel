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
        <img src="@/assets/placeholderIcon.png"
             height="70"
             width="70">
      </div>

      <div class="
            headerWrapper
            hasShadowHeaderB"
           style="
            min-width: 215px;
            margin: 0 0 0 0;">
        Nachrichtenkom. für das THW
      </div>

    </div>

    <div class="
          headerWrapper
          hasShadowHeaderB">
      {{this.user.operation.operationName}}
    </div>

    <div class="
          headerWrapper
          hasShadowHeaderB">
      {{this.user.identification}}
    </div>

    <div class="
          menuWrapper
          flexContainerHeaderC"
         @mouseover="showDropDownMenu"
         @mouseout="hideDropDownMenu">

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
              width: 215px;
              margin: 0 0 0 0;">
          {{this.user.role}}
        </div>
      </div>

      <div class="
        headerDropDown
        hasShadowHeaderB
        flexContainerHeaderD"
           v-show="headerDropDownCollapsed">
        <div class="
              headerMenuItem
              hasShadowHeaderB"
             @click="showLandingPage">
          Nutzerdaten auswählen
        </div>
      </div>

    </div>

  </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'THWHeader',

  data: () => {
    return {
      headerDropDownCollapsed: false
    }
  },

  computed: {
    ...mapGetters({
      user: 'getUser'
    }),

    selectIcon: function () {
      if (this.user.role === 'Sichter') {
        return require('@/assets/sichterIcon.png')
      } else if (this.user.role === 'LdF') {
        return require('@/assets/LdFIcon.png')
      } else if (this.user.role === 'Fernmelder') {
        return require('@/assets/fernmelderIcon.png')
      } else if (this.user.role === 'SGL') {
        return require('@/assets/SGLIcon.png')
      } else if (this.user.role === 'Fachberater') {
        return require('@/assets/fachberaterIcon.png')
      } else if (this.user.role === 'Verbindungsstelle') {
        return require('@/assets/placeholderIcon.png') /* require('@/assets/verbindungsstelleIcon.png') */
      } else {
        return require('@/assets/placeholderIcon.png')
      }
    }
  },

  methods: {
    goTo: function (path, params) {
      this.$router.push({name: path, params: params})
    },
    showDropDownMenu: function () {
      this.headerDropDownCollapsed = true
    },
    hideDropDownMenu: function () {
      this.headerDropDownCollapsed = false
    },
    printStuff: function () {
      console.log('SUCCESS!')
    },
    showLandingPage: function () {
      this.$store.commit('resetShowLandingPage')
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
    min-width: 150px;
    background-color: var(--semiLightNeutralColor);
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    margin-left: 1%;
    margin-right: 1%;
    text-align: center;
    white-space: nowrap;
  }
  .logoHeader {
    background-color: var(--darkNeutralColor);
    height: 70px;
    width: 80px;
    border-bottom: var(--mainColor);
    border-bottom-style: solid;
    border-bottom-width: 10px;
  }
  .THWlogoWrapper {
    margin-left: 10%;
    margin-right: 10%;
  }
  .menuWrapper {
    position: relative;
    margin-left: 1%;
    margin-right: 10%;
  }
  .roleLogoWrapper {
    z-index: 2;
    cursor: pointer;
  }
  .headerDropDown {
    width: 285px;
    background-color: var(--semiLightNeutralColor);
    overflow: visible;
    position: absolute;
    margin: 0 0 0 10px;
    left: 0;
    z-index: 1;
    border-left: var(--formBlueColor);
    border-left-style: solid;
    border-left-width: 10px;
    animation: dropDownBlendIn 0.4s ease 0s 1 normal both;
  }
  .headerMenuItem {
    height: 40px;
    width: 265px;
    background-color: var(--semiLightNeutralColor);
    position: absolute;
    margin: 0 0 20px 0;
    padding: 20px 20px 0 0;
    border-right: var(--formBlueColor);
    border-right-style: solid;
    border-right-width: 10px;
    text-align: center;
  }
  .headerMenuItem:hover {
    border-right: var(--mainColor);
    border-right-style: solid;
    border-right-width: 10px;
    cursor: pointer;
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
  .flexContainerHeaderC{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .flexContainerHeaderD{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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

  /*
  animations:
  */
  @keyframes dropDownBlendIn {
    0% {
      height: 50px;
    }

    100% {
      height: 180px;
    }
  }
</style>
