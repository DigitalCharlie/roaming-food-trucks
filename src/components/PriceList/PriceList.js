import styles from './PriceList.module.css';


export default function priceList({ resultPageState, setPriceRate }) {

    const Click = (num) => {
        setPriceRate(num)
    }
    const clearPriceOption = () => {
        setPriceRate(0)
    }

    return (
        <div className={styles.pricelist}>

            <div>
                <button className='clearButton' onClick={clearPriceOption}>Clear</button>
                <button className={`priceButton ${resultPageState.priceRating === 1 ? 'selectedPrice' : ''}`} onClick={() => Click(1)}>$</button>
                <button className={`priceButton ${resultPageState.priceRating === 2 ? 'selectedPrice' : ''}`} onClick={() => Click(2)}>$$</button>
                <button className={`priceButton ${resultPageState.priceRating === 3 ? 'selectedPrice' : ''}`} onClick={() => Click(3)}>$$$</button>
                <button className={`priceButton ${resultPageState.priceRating === 4 ? 'selectedPrice' : ''}`} onClick={() => Click(4)}>$$$$</button>
            </div>
        </div>
    )
}

