import create from 'zustand'
import { devtools } from 'zustand/middleware'


// const useStore = create(set => ({
//     initNumber: 0,
//     onIncrease: () => set(state => ({ initNumber: state.initNumber + 1 })),
//     onReset: () => set({ initNumber: 0 })
// }))

const useStore = create()(devtools((set) => ({
    initNumber: 0,
    onIncrease: () => set(state => ({ initNumber: state.initNumber + 1 })),
    onReset: () => set({ initNumber: 0 })
})))

// const useStore = create(devtools(store, { name: "soob" }))

export default useStore