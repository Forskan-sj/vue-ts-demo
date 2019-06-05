<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <JSX :param="forparam" @emites='getEvent'></JSX>
    <div class="sdf" @click="clicktest">{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { setAppName } from '@/store/methods'
import { getCate } from '@/api/mainpage'
import { setToken } from '@/utils/auth'
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import JSX from './jsx.vue'; // @ is an alias to /src
import { State,
  Getter,
  Action,
  Mutation,
  namespace } from 'vuex-class'
const appModule = namespace('app')

@Component({
  components: {
    HelloWorld,
    JSX
  },
})
export default class Home extends Vue {
  private msg: string = 'string test'
  private forparam: number = 1234556

  @State('app') private sname: any
  @Action('setName') private setNames: any
  @Mutation('TOGGLE_NAME') private TOGGLE_NAME: any
  @appModule.State('name') private aname: any
  @appModule.Mutation('TOGGLE_NAME') private TOGGLE_NAMESS: any
  @appModule.Action('setVal') private setVal: any
  private mounted(): void {
    // console.log(this.sname, this.aname);
    // this.TOGGLE_NAMESS('test1333')
    // this.setVal('3215233')
    setAppName('23')
    getCate('').then((response: object) => {
      console.log(response)
    })
  }
  private clicktest(): void {
  }
  private getEvent(pa: any): void {
  }
}
</script>
