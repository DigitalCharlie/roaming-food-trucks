import styles from './PriceList.module.css';


export default function priceList({ resultPageState, setPriceRate, priceRate }) {

    const Click = (num) => {
        setPriceRate(num)
    }
    const clearPriceOption = () => {
        setPriceRate(0)
    }

    return (
        <div className={styles.pricelist}>
            <div>
                <h5>Price</h5>
               <button onClick={clearPriceOption} className={styles.clearButton}>Clear</button> 
            </div>
                
                <button className={`${styles.priceButton} ${priceRate === 1 ? styles.selectedPrice : ''}`} onClick={() => Click(1)}>$</button>
                <button className={`${styles.priceButton} ${priceRate === 2 ? styles.selectedPrice : ''}`} onClick={() => Click(2)}>$$</button>
                <button className={`${styles.priceButton} ${priceRate === 3 ? styles.selectedPrice : ''}`} onClick={() => Click(3)}>$$$</button>
                <button className={`${styles.priceButton} ${priceRate === 4 ? styles.selectedPrice : ''}`} onClick={() => Click(4)}>$$$$</button>
            
        </div>
    )
}

