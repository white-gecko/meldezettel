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
             height="50"
             width="50">
      </div>

      <div class="headerWrapper"
           style="
            border-right: 10px solid var(--mainColor);
            min-width: 215px;
            margin: 0 0 0 0;">
        Nachrichtenkom. für das THW
      </div>

    </div>

    <div class="headerWrapper">
      {{this.user.operation.operationName}}
    </div>

    <div class="headerWrapper">
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
               height="50"
               width="50">
        </div>

        <div class="headerWrapper"
             style="
              width: 215px;
              margin: 0 0 0 0;">
          {{this.user.role}} {{this.user.position}}
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

export default {
  name: 'THWHeader',

  data: () => {
    return {
      headerDropDownCollapsed: false
    }
  },

  computed: {
    user () {
      return this.$store.state.user
    },

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
    height: 5%;
    width: 100%;
    border-top: 10px solid var(--secondaryTextColor);
    border-bottom: 10px solid var(--formBlueColor);
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--regularTextColor);
    overflow: visible;
    padding-top: 0%;
    position: fixed;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .headerWrapper {
    height: 50%;
    min-width: 150px;
    background-color: var(--semiLightNeutralColor);
    border-bottom: 10px solid var(--mainColor);
    padding: 7px 10px 3px 10px;
    margin: 0 1% 0 1%;
    text-align: center;
    white-space: nowrap;
    z-index: 1;
    -webkit-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    box-shadow: inset 5px 5px 10px -5px var(--lightShadowColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .logoHeader {
    background-color: var(--darkNeutralColor);
    height: 50px;
    width: 60px;
    border-bottom: 10px solid var(--mainColor);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .THWlogoWrapper {
    margin-left: 10%;
    margin-right: 10%;
    z-index: 10;
  }
  .menuWrapper {
    position: relative;
    margin-left: 1%;
    margin-right: 10%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .roleLogoWrapper {
    z-index: 10;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .headerDropDown {
    width: 285px;
    background-color: var(--semiLightNeutralColor);
    overflow: visible;
    position: absolute;
    margin: 0 0 0 10px;
    left: 0;
    z-index: 1;
    border-left: 10px solid var(--formBlueColor);
    animation: dropDownBlendIn 0.4s ease 0s 1 normal both;
  }
  .headerMenuItem {
    height: 40px;
    width: 265px;
    background-color: var(--semiLightNeutralColor);
    position: absolute;
    margin: 0 0 20px 0;
    padding: 20px 20px 0 0;
    border-right: 10px solid var(--formBlueColor);
    text-align: center;
  }
  .headerMenuItem:hover {
    border-right: 10px solid var(--mainColor);
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
