<template>
  <div class="about">
    <h1 @click="goback">This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class About extends Vue {

  private goback(): void {
    this.$router.goBack()
    // console.log('object');
  }

}

</script>