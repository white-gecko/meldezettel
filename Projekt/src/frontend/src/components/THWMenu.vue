<template>
  <div class="
        menu
        hasShadowMenuA
        flexContainerMenuA">

    <div class="
          menu-item
          hasShadowMenuB
          flexContainerMenuB"
         index="home"
         @click="goTo('Home')">
      <div class="
            logoMenu
            hasShadowMenuA
            flexChildMenuA">
        <img src="@/assets/homeIcon.png"
             height="70"
             width="70">
      </div>
      <div class="flexChildMenuA"
           style="
            text-align: right;
            margin-left: 5%;
            margin-right: 5%;
            min-width: 150px;">Übersicht</div>
    </div>

    <div class="
          menu-item
          hasShadowMenuB
          flexContainerMenuB"
         index="create"
         @click="goTo('Create')">
      <div class="
            logoMenu
            hasShadowMenuA
            flexChildMenuA">
        <img src="@/assets/formIcon.png"
             height="70"
             width="70">
      </div>
      <div class="flexChildMenuA"
           style="
            text-align: right;
            margin-left: 5%;
            margin-right: 5%;
            min-width: 150px;">Neues Formular</div>
    </div>

    <div class="
          menu-item
          hasShadowMenuB
          flexContainerMenuB"
         index="role"
         @click="goTo('Role')">
      <div class="
            logoMenu
            hasShadowMenuA
            flexChildMenuA">
      </div>
      <div class="flexChildMenuA"
           style="
            text-align: right;
            margin-left: 5%;
            margin-right: 5%;
            min-width: 150px;">Nutzerdaten</div>
    </div>

    <div class="
          menu-item
          hasShadowMenuB
          flexContainerMenuB"
         index="create"
         @click="goTo('Create', {id: 'draft'})">
      <div class="
            logoMenu
            hasShadowMenuA
            flexChildMenuA">
      </div>
      <div class="flexChildMenuA"
           style="
            text-align: right;
            margin-left: 5%;
            margin-right: 5%;
            min-width: 150px;">Entwurf öffnen</div>
    </div>

  </div>
</template>

<script>

export default {

  name: 'THWMenu',

  data: () => {
    return {
      isCollapsed: false,
      activeLink: null
    }
  },

  methods: {
    goTo: function (path, params) {
      this.$router.push({name: path, params: params})
    }
  }
}

</script>

<style>
  .menu {
    background-color: var(--semiLightNeutralColor);
    overflow: visible;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--primaryTextColor);
    padding-top: 50px;
  }

  .menu-item {
    position: relative;
    left: 10px;
    background-color: var(--semiLightNeutralColor);
    overflow: visible;
    height: 60px;
    width: 82.9%;
    min-width: 240px;
    font-family: var(--mainFont);
    font-size: var(--titleSize);
    color: var(--primaryTextColor);
    border-right: var(--formBlueColor);
    border-right-style: solid;
    border-right-width: 10px;
    margin-bottom: 50px;
    white-space: nowrap;
  }
  .logoMenu{
    position: relative;
    top: 5px;
    background-color: var(--darkNeutralColor);
    min-height: 70px;
    min-width: 70px;
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
  hover-settings:
    settings for elements, when they are hovered over
  */
  .menu-item:hover {
    border-right: var(--mainColor);
    border-right-style: solid;
    border-right-width: 10px;
    cursor: pointer;
  }

  /*
  flex-settings:
    different settings for the flex attribute
  */
  .flexContainerMenuA {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .flexContainerMenuB {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .flexChildMenuA {
    align-self: center;
  }
</style>
