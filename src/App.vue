<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view totalBox"/>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import router from './router';

@Component({
})
export default class App extends Vue {
  private transitionName: string = 'slide-left'
  @Watch('$route', { immediate: true })
  private changeRouter(route: any) {
    const isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
  }
  private mounted(): void {
  }
  private clicktest(): void {
  }
  private getEvent(pa: any): void {
  }
}
</script>

<style lang="scss">
#app{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
}
.totalBox{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
.child-view {
  position: absolute;
  width:100%;
  transition: transform .5s cubic-bezier(0.5,0,.1,1), opacity .5s cubic-bezier(0.5,0,.1,1);
  overflow: hidden;
}
.child-view::-webkit-scrollbar {
  display: none;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-50px, 0);
}
</style>
