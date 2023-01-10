import Header from "../components/common/Header";
import useStore from "../store";

const Home = () => {
    const { initNumber, onIncrease, onReset } = useStore(state => state)

    return (
        <div>
            <Header />
            <div>
                카테고리를 선택해주세요.
            </div>
            <div>
                <h1>{initNumber}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onReset}>초기화</button>

            </div>
        </div>
    )
}

export default Home;

