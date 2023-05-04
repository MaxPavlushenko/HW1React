import {cards} from '../../Data/cards';
import styles from "./Cards.module.css"
import buttonStyles from "../Button/Button.module.css";

import {Button} from "../Button/Button.jsx";

export const Cards = () => {

    return (
        <div className={styles.container}>
            {
                cards.map(item =>
                    <div key={item.id} className={styles.item}>
                        {item.popular ?
                            <div className={styles.title__container}>
                                <span className={styles.popular}>popular </span>
                                <h3 className={styles.item__title}>{item.title}</h3>
                            </div> :
                            <h3 className={styles.item__title}>{item.title}</h3>
                        }
                        <p className={item.sale ? [styles.item__price, styles.item__priceSale].join(' ') : styles.item__price}>{item.price}</p>
                        <p className={styles.item__text}>{item.text}</p>
                        <p className={styles.item__memory}>{item.memory}</p>
                        <Button className={item.sale ? [buttonStyles.buttonSale, buttonStyles.button].join(' ') : buttonStyles.button} value={item.buttonText} />
                    </div>
                )
            }
        </div>
    )
}
