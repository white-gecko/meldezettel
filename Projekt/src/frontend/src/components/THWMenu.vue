<template>
  <div class="
        menu
        hasShadowMenuA
        flexContainerMenuA">

    <div class="
          menuItem
          flexContainerMenuB">
      <div class="
            menuLogo
            hasShadowMenuA"
           @click="goTo('Home')"
           @mouseover="showOverviewDesc"
           @mouseout="hideOverviewDesc">
        <img src="@/assets/homeIcon.png"
             height="70"
             width="70">
      </div>
      <div class="menuDesc"
           v-show="overviewDesc">
        Übersicht
      </div>
    </div>

    <div class="
          menuItem
          flexContainerMenuB">
      <div class="
            menuLogo
            hasShadowMenuA"
           @click="goTo('Create')"
           @mouseover="showNewFormDesc"
           @mouseout="hideNewFormDesc">
        <img src="@/assets/formIcon.png"
             height="70"
             width="70">
      </div>
      <div class="menuDesc"
           v-show="newFormDesc">
        Neues Formular
      </div>
    </div>

    <div class="
          menuItem
          flexContainerMenuB">
      <div class="
            menuLogo
            hasShadowMenuA"
           @click="goTo('Create', {id: 'draft'})"
           @mouseover="showDraftDesc"
           @mouseout="hideDraftDesc">
        <img src="@/assets/draftIcon.png"
             height="70"
             width="70">
      </div>
      <div class="menuDesc"
           v-show="draftDesc">
        Entwurf öffnen
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: 'THWMenu',

  data: () => {
    return {
      isCollapsed: false,
      activeLink: null,
      overviewDesc: false,
      newFormDesc: false,
      draftDesc: false
    }
  },

  methods: {
    goTo: function (path, params) {
      this.$router.push({name: path, params: params})
    },
    showOverviewDesc: function () {
      this.overviewDesc = true
    },
    hideOverviewDesc: function () {
      this.overviewDesc = false
    },
    showNewFormDesc: function () {
      this.newFormDesc = true
    },
    hideNewFormDesc: function () {
      this.newFormDesc = false
    },
    showDraftDesc: function () {
      this.draftDesc = true
    },
    hideDraftDesc: function () {
      this.draftDesc = false
    }
  }
}

</script>

<style>
  .menu {
    height: 402px;
    background-color: var(--semiLightNeutralColor);
    padding-bottom: 40px;
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
  }
  .menuItem {
    position: relative;
  }
  .menuLogo {
    background-color: var(--darkNeutralColor);
    position: relative;
    left: 10px;
    z-index: 11;
    border-right: var(--formBlueColor);
    border-right-style: solid;
    border-right-width: 10px;
  }
  .menuDesc {
    height: 40px;
    width: 220px;
    background-color: var(--semiLightNeutralColor);
    padding: 20px 20px 0 0;
    border-right: var(--mainColor);
    border-right-style: solid;
    border-right-width: 10px;
    position: absolute;
    z-index: 10;
    font-family: var(--mainFont);
    font-size: var(--titleSize);
    color: var(--primaryTextColor);
    text-align: right;
    animation: descBlendIn 0.3s ease 0.1s 1 normal backwards;
  }

  /*
  hover-settings:
    settings for elements, when they are hovered over
  */
  .menuItem:hover {
    cursor: pointer;
  }
  .menuLogo:hover {
    border-right-style: none;
    left: 0;
  }

  /*
  shadow-settings:
  different shadow settings
   */
  .hasShadowMenuA {
    box-shadow: 0px 5px 10px 0px var(--lightShadowColor);
  }
  .hasShadowMenuB {
    box-shadow: 0px 10px 20px 1px var(--lightShadowColor);
  }

  /*
  flex-settings:
    different settings for the flex attribute
  */
  .flexContainerMenuA {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
  }
  .flexContainerMenuB {
    display: flex;
    flex-direction: row;
  }
  .flexChildMenuA {
    align-self: center;
  }

  /*
  animations
  */
  @keyframes descBlendIn {
    0%  { width: 50px;
          height: 50px;
          background-color: var(--semiLightNeutralColor);
          font-size: 0;}
    40% { width: 50px;
          height: 40px;
          background-color: var(--semiLightNeutralColor);
          font-size: 0;}
    46% { width: 60px;
          height: 40px;
          background-color: var(--semiLightNeutralColor);
          font-size: 0;}
    47% { width: 61.7px;
          height: 40px;
          background-color: var(--semiLightNeutralColor);
          font-size: var(--titleSize);}
    100%  { width: 220px;
            height: 40px;
            background-color: var(--semiLightNeutralColor);}
  }

</style>
