// import { shallowEqual } from 'react-redux'
// import create from 'zustand'
// import { subscribeWithSelector } from 'zustand/middleware'

// import { devtools } from 'zustand/middleware'

// const useStore = create()(devtools((set) => ({
//     initNumber: 0,
//     onIncrease: () => set(state => ({ initNumber: state.initNumber + 1 })),
//     onReset: () => set({ initNumber: 0 })
// })))

// const types = { incease: 'INCREASE', decrease: 'DECREASE' }

// const reducer = (state, { type, by = 1 }) => {
//     switch (type) {
//         case types.incease:
//             return { grumpincess: state.grumpincess + by }
//         case types.decrease:
//             return { grumpincess: state.grumpincess - by }
//     }
// }

// const useGrumpyStore = create((set) => ({
//     grumpincess: 0,
//     dispatch: (args) => set((state) => reducer(state, args))
// }))

// const dispatch = useGrumpyStore((state)=> state.dispatch)
// dispatch({tpye : types.increase, by: 2})



// const userList = create(subscribeWithSelector(() => ({
//     firstName: "soob",
//     lastName: "bin",
//     age: 31
// })))

// const unsub1 = userList.subscribe(console.log)
// const unsub2 = userList.subscribe((state) => state.firstName, console.log)
// const unsub3 = userList.subscribe((state) => state.firstName, (firstName, previousFirstName) => console.log(firstName, previousFirstName))
// const unsub4 = userList.subscribe((state) => [state.firstName, state.lastName],console.log,{equalityFn : shallowEqual} )

// selector랑 비슷한 느낌
// const stateFirstName = userList.getState().firstName
// console.log("stateFirstName", stateFirstName)

// 변경될 때 subscribe 
// userList.setState({ firstName: "lim" })
// unsub1()
// unsub2()
// unsub3()

// const useStore = create()(devtools((set) => ({

// 로그인 토글, 카운터 버튼 함수
// const useStore = create()(devtools((set) => ({
//     isLogin: false,
//     toggleIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
//     count: 1,

//     onIncrease: () => { set((state) => ({ count: state.count + 1 })) },
//     setCount: (input) => { set({ count: input }) },
//     clearCount: () => { set((state) => ({ count: 0 })) }

// })))

// const useStore = create()(devtools((set) => ({
//     // testData: [1, 2, 3],
//     testData: [
//         { id: 1, idValue: "sooob", pwValue: "sooob" },
//         { id: 2, idValue: "serram", pwValue: "serram" },
//     ],
//     setTestData: (select) => {
//         set((state) => ({ ...state, testData: select }))
//     }

// })))


// export default useStore