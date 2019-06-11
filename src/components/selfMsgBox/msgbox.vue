<template>
  <transition name="fade">
    <div v-if="show" class="msgbox" @click="confirm === '查看解析' ? closeBack() : closeLayer()">
      <div :class="{anima:anim.enter,leave:anim.leave}" class="modal fade dialog-modal" role="dialog" data-backdrop="false" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header row">
              <div class="modal-title col-md-4">提示</div>
              <div class="close" aria-label="Close" @click="close">
                <span aria-hidden="true">×</span>
              </div>
            </div>
            <div class="modal-body">
              <div class="col-xs-offset-1">{{ message }}</div>
            </div>
            <div class="modal-footer" @click.stop>
              <div class="btn btn-primary" @click="close">{{ confirm }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MsgBox',
  data() {
    return {
      message: 'sserwe',
      confirm: '确定',
      show: false,
      anim: {
        enter: true,
        leave: false
      }
    }
  },
  methods: {
    closeLayer() {
      const self = this
      this.anim.enter = false
      this.anim.leave = true
      setTimeout(() => {
        self.show = false
      }, 300)
    },
    closeBack() {
      const self = this
      this.anim.enter = false
      this.anim.leave = true
      setTimeout(() => {
        self.show = false
        window.history.go(-1)
      }, 300)
    },
    close() {
      const self = this
      this.conf('back info')
      this.anim.enter = false
      this.anim.leave = true
      setTimeout(() => {
        self.show = false
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.msgbox{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  z-index: 1001;
  .modal{
    align-self: center;
    position: relative;
    width: 7rem;
    top: 0rem;
    height: 5.2rem;
    margin: 1.5rem;
    z-index: 200;
    background: white;
    overflow: hidden;
    color: white;
    text-align: center;
    border-radius: 0.2rem;
    &-content{
      height: 5.2rem;
      display: flex;
      flex-direction: column;
    }
    &-title{
      font-weight: 600;
      font-size: 0.5rem;
      padding-top: 0.4rem;
      // line-height: 1.5rem;
      height: 0.8rem;
      color: #2F2F2F;
    }
    .close{
      position: absolute;
      right: 0.3rem;
      top: 0;
      width: 0.6rem;
      height: 0.6rem;
    }
    &-body{
      flex: 1;
      // align-self: center;
      display: flex;
      padding: 0 0.3rem;
      font-size: 0.45rem;
      color: #2F2F2F;
      >div{
        align-self: center;
        text-align: center;
        width: 100%;
      }
    }
    &-footer{
      // position: absolute;
      // bottom: 0;
      border-top: 1px solid #CECECE;
      height: 1.3rem;
      width: 100%;
      background: #48BCAB;
      text-align: center;
      line-height: 1.3rem;
      font-size: 0.45rem;
      color: black;
      // display: flex;
      // justify-content: space-around;
      // >div{
      //   width: 50%;
      // }
      // .btn-gray{
      //   background: white;
      // }
    }
  }
}

</style>
