<template>
  <div>
    <el-row class="header" justify="center" type="flex">
      <el-col :span="3" class="headerCol">
        <img src="@/assets/placeholderIcon.png" class="logoHeader" />
        Meldezettel
      </el-col>
      <el-col :span="4" class="headerCol">
        Einsatz:
        <el-tag>{{this.user.operation.operationName}}</el-tag>
      </el-col>
      <el-col :span="3" class="headerCol">
        Handzeichen:
        <el-tag>{{this.user.identification}}</el-tag>
      </el-col>
      <el-col :span="3" class="headerCol">
        <img :src="selectIcon" class="logoHeader" />
        <el-tag>{{this.user.role}} {{this.user.position}}</el-tag>
      </el-col>
      <el-col :span="2">
        <el-button @click="showLandingPage" class="clickWrapper headerCol"
          icon="el-icon-setting" type="info" plain>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'THWHeader',

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
        return require('@/assets/verbStelleIcon.png')
      } else {
        return require('@/assets/placeholderIcon.png')
      }
    }
  },
  methods: {
    showLandingPage: function () {
      this.$store.commit('resetShowLandingPage')
    }
  }
}
</script>

<style>
  .header {
    background-color: var(--semiLightNeutralColor);
    padding-top: 3px;
    padding-bottom: 3px;
    border-bottom: 5px solid var(--mainColor);
    overflow: visible;
  }
  .clickWrapper {
    cursor: pointer;
  }
  .logoHeader {
    background-color: var(--secondaryTextColor);
    height: 40px;
    width: 40px;
  }
  .headerCol {
    display: flex;
    align-items: center;
    justify-content:center
  }
</style>
