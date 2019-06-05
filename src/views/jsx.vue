<script lang="tsx">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component({

})
export default class FilterItem extends Vue {

  private ceshiMsg: string = 'testString'
  private inputMsg: string = '2352354'
  private placeholder: string = 'placeholder'
  private ceshis: number[] = [100, 220, 5, 30];
  @Prop() private param!: number
  private divClick(con: string = '333') {
    console.log(con);
    return con;
  }
  private mounted() {}
  private render(h: any) {
    return (
      <div class='testClass'>
        <div>这条是jsx{ this.param }</div>
        <input placeholder={ this.placeholder } value={ this.inputMsg } on-keyup={(val: any) => {
            this.inputMsg = val.target.value.trim()
            const temp = this.inputMsg + 'sd'
            if (val.keyCode === 13 ) {
              this.divClick(temp)
            }
          }}/>
        <div on-click={() => { this.divClick('bbbbb') }}>11111111111111111</div>
        {
          this.ceshis.map((it, index) => {
            if (index !== 1) {
              return h('div',
                { class: [ {323: true, ceshi: true}, 'asdfasd' ],
                  attrs: {dataParm: 'csss'},
                  key: index,
                  on: { click: () => {
                      this.$emit('emites', this.ceshis[index]);
                    }}
                }, `heel${ it }`);
            }  else {
              return <li key={ index } on-click={() => { console.log(this.ceshis); }}>{it},,,,haha, { `heel${it}`}</li>;
            }
          })
        }
      </div>
    );
  }
}
</script>
<style lang="scss">
.testClass > * {
  margin: 20px auto;
}
</style>

