<template>
  <div class="header">
    <!-- <el-row>
      <el-col :span="3">
        <el-row>
          <div class="wrapperTHWHeA" style="width: 120px;">
            <div class="wrapperTHWHeB"
                 style="padding-top: 0; height: 60px; width: 60px;">
             <img src="@/assets/PlaceholderMainIcon.png"
                   height="60"
                   width="60">
            </div>
          </div>
        </el-row>
      </el-col>

      <el-col :span="12">
        <el-row>
          <div style="height: 20px;">

          </div>
        </el-row>
      </el-col>

      <el-col :span="9">
        <el-row>
          <el-col :span="7.5">
            <div class="wrapperTHWHeA" style="width: 120px;">
              <div class="wrapperTHWHeB"
                   style="padding-top: 0; height: 60px; width: 60px;">
                <img src="@/assets/PlaceholderSichterIcon.png"
                     height="60"
                     width="60">
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="wrapperTHWHeA">
              <div class="wrapperTHWHeB">
                <div class="wrapperTHWHeC">
                  {{ this.role }}
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="wrapperTHWHeA">
              <div class="wrapperTHWHeB">
                <div class="wrapperTHWHeC">
                  Zeichen
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>

    </el-row> -->
    <!-- <img src="@/assets/thw-logo.png" height="60" width="60">-->
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'THWHeader',

  computed: {
    ...mapGetters({
      role: 'getRole'
    })
  }
}
</script>

<style>
  .header {
    background-color: var(--mainColor);
    height: 60px;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--regularTextColor);
    border-radius: 0px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
  }

  .wrapperTHWHeA {
    background-color: var(--darkNeutralColor);
    height: 60px;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--regularTextColor);
    border-radius: 5px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .wrapperTHWHeB {
    background-color: var(--middleNeutralColor);
    height: 50px;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    color: var(--regularTextColor);
    border-radius: 50px;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;

  }

  .wrapperTHWHeC {
    background-color: var(--lightNeutralColor);
    height: 40px;
    font-family: var(--mainFont);
    font-size: var(--bigTitleSize);
    font-weight: bold;
    color: var(--regularTextColor);

    border-radius: 5px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>
