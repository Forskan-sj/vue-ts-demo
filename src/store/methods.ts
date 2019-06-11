import store from './index'

export const setAppName = (name: string) => {
  store.dispatch('user/setVal', name).catch( (e) => {
    console.log('app/setName error' + e);
  })
}

export const setAppVal = (val: string) => {
  store.dispatch('user/setVal', val).catch( (e) => {
    console.log('app/setName error' + e);
  })
}

export const setUserName = (name: string) => {
  store.dispatch('user/setVal', name).catch( (e) => {
    console.log('user/setName error' + e);
  })
}

export const setUserVal = (val: string) => {
  store.dispatch('user/setVal', val).catch( (e) => {
    console.log('user/setName error' + e);
  })
}

// let s: number = 3
// let ss: string = 'sd'
// s ='ss'

interface Itest {
  id: number,
  name?: string,
  avatar?: string
}
let info: Itest 
// info.
let infotemp = {
  id: 1,
  name: '22'
}
let infotemp1 = {
  id: 1
}
info = infotemp
info = infotemp1


class Student {
  fullName: string;
  constructor(public firstName:string, public middleInitial:string, public lastName:string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
  private getA(): void {

  }
  protected getB(): void {

  }
  public getFN(par: number): string;
  public getFN(par: string): string;
  public getFN(par: any): string {
    return this.fullName
  }
  public getSN(par: number) {
    return this.middleInitial + this.lastName
  } 
}

let user = new Student('sdf', 'asdf', '')
user.getFN(2)


function gets(par1: string, par2: number, par3: number[], par4: Itest) {
  console.log('object');
}
// gets('1', 2, [3], 4)
// Math.pow(1, 2)


// 拥有函数和类的目的，是在不知道如何实现它们的情况下使用它们。换句话说，我们应该依赖于他们的接口，而不是他们的实现。