import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutation: {
        increment() {
            state.count++
        }
    },
    actions: {
        addCount() {
            this.state.count--
        }
    },
    getter: {
        // doSomething
    }
})