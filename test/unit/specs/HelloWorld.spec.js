import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})

// describe("Sum",function () {
//   it("Should return 25",function () {
//       expect(Multiply(5,5)).toEqual(25)
//   })
//
// })
//
// function Multiply(a,b) {
//   return a*b;
//
// }