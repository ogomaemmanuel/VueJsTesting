import my_notes from '../../../src/components/notes/my-notes.vue'
import { shallow } from 'vue-test-utils'

describe('my_notes.js', () => {
    let cmp

    beforeEach(() => {
        cmp = shallow(my_notes, { // Create a shallow instance of the component
            data: {
                searchterm: 'Html5'
            }
        })
    })

    it('equals messages to ["Cat"]', () => {
        // Within cmp.vm, we can access all Vue instance methods
        expect(cmp.vm.searchterm).toEqual('Html5')
    })

    it('has the expected html structure', () => {
        expect(cmp.element).toMatchSnapshot()
    })
})