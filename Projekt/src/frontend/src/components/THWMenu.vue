<template>
  <el-row index="home" class="menu" justify="center" type="flex">

    <el-col :span="3">
    <div class="menuItem">
      <div class="menuLogo" @click="goTo('Home')" >
        <img src="@/assets/homeIcon.png"
             height="40"
             width="40">
      </div>
      <div>
        Übersicht
      </div>
    </div>
    </el-col>

    <el-col :span="3">
    <div class="menuItem" index="create">
      <div class="menuLogo" @click="goTo('Create')" >
        <img src="@/assets/formIcon.png"
             height="40"
             width="40">
      </div>
      <div>
        Neues Formular
      </div>
    </div>
    </el-col>

    <el-col :span="3">
    <div class="menuItem" index="draft">
      <div class="menuLogo" @click="goTo('Create', {id: 'draft'})" >
        <img src="@/assets/draftIcon.png"
             height="40"
             width="40">
      </div>
      <div>
        Entwurf öffnen
      </div>
    </div>
    </el-col>

  </el-row>
</template>

<script>

export default {

  name: 'THWMenu',

  data: () => {
    return {
      isCollapsed: false,
      activeLink: null,
    }
  },

  methods: {
    goTo: function (path, params) {
      this.$router.push({name: path, params: params})
    },
  }
}

</script>

<style>
  .menu {
    background-color: var(--semiLightNeutralColor);
    overflow: visible;
    margin-bottom: 5px;
  }
  .menuItem {
    display: inline-block;
  }
  .menuLogo {
    background-color: var(--secondaryTextColor);
    border-right: var(--formBlueColor);
    border-right-style: solid;
    border-right-width: 10px;
  }
  /*
  hover-settings:
    settings for elements, when they are hovered over
  */
  .menuItem:hover {
    cursor: pointer;
  }
  .menuLogo:hover {
    border-right-color: var(--mainColor);
  }

</style>
