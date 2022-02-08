import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
        inputValue4: '',
        inputValue5: '',
        list: [],
        list2: [],
        inputValue6: '',
        inputValue7: '',
        nextId: 2,
        inputValue8: '',
        inputValue9: '',
        inputValue10: '',
        inputValue11: '',
        inputValue12: '',
        inputValue13: '',
        inputValue14: '',
        inputValue15: '',
        flag: '0'



    },
    mutations: {
        add(state) {
            state.count++
        },
        sub(state) {
            state.count--
        },
        setInputValue1(state, val) {
            state.inputValue1 = val
        },
        setInputValue2(state, val) {
            state.inputValue2 = val
        },
        setInputValue3(state, val) {
            state.inputValue3 = val
        },
        setInputValue4(state, val) {
            state.inputValue4 = val
        },
        setInputValue5(state, val) {
            state.inputValue5 = val
        },
        setInputValue6(state, val) {
            state.inputValue6 = val
        },
        setInputValue7(state, val) {
            state.inputValue7 = val
        },
        setInputValue8(state, val) {
            state.inputValue8 = val
        },
        setInputValue9(state, val) {
            state.inputValue9 = val
        },
        setInputValue10(state, val) {
            state.inputValue10 = val
        },
        setInputValue11(state, val) {
            state.inputValue11 = val
        },
        setInputValue12(state, val) {
            state.inputValue12 = val
        },
        setInputValue13(state, val) {
            state.inputValue13 = val
        },
        setInputValue14(state, val) {
            state.inputValue14 = val
        },
        setInputValue15(state, val) {
            state.inputValue15 = val
        },
        addItem(state) {
            const m = {
                id: state.nextId,
                title: state.inputValue6.trim(),
                content: state.inputValue7.trim(),
                done: false

            }
            state.list.push(m)
            state.nextId++
                state.inputValue6 = ''
            state.inputValue7 = ''
        },
        addItem2(state) {
            const n = {

                id: state.inputValue10.trim(),
                password: state.inputValue11.trim(),
                phoneNumber: state.inputValue14.trim(),
                test: state.inputValue15.trim(),
                done: false

            }
            state.list2.push(n)
            state.inputValue10 = ''
            state.inputValue11 = ''
            state.inputValue14 = ''
            state.inputValue15 = ''
        },
        initList(state, list) {
            state.list = list

        },
        initList2(state, list2) {
            state.list2 = list2

        },
        backer(state, id) {
            const i = state.list.findIndex(x => x.id == id)
            if (i !== -1) {
                state.list.splice(i, 1)
            }
        },
        backer2(state, id) {
            const t = state.list.findIndex(y => y.id == id)
            if (t !== -1) {
                state.list.splice(t, 1)
                const n = {
                    id: id,
                    title: state.inputValue8.trim(),
                    content: state.inputValue9.trim(),
                    done: false

                }
                state.list.push(n)
                state.inputValue8 = ''
                state.inputValue9 = ''
            }

        },
        guard(state, f) {
            state.flag = f
            console.log(f)
            state.inputValue12 = ''
            state.inputValue13 = ''

        }

    },
    actions: {
        getList(context) {

            axios.get('/list.json').then(({ data }) => {
                console.log(data)

                context.commit('initList', data)

            })

        },
        getList2(context) {

            axios.get('/list2.json').then(({ data }) => {
                console.log(data)
                context.commit('initList2', data)


            })
        }
    },
    modules: {

    }
})