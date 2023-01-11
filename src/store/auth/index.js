import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useStore = create((devtools((set) => ({
    loginUser: null,
    setLoginUser: (state) => { set({ ...state, loginUser: state }) },

    // 로그인 성공
    // 로그인 실패

    // 회원가입 성공
    // 회원가입 실패

    // loginSuccess: false,
    // setLoginSuccess: () => { set((state) => ({ loginSuccess: !state.loginSuccess })) }
}))))


export default useStore
