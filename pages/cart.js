import styles from '../styles/Cart.module.css';
import Image from 'next/image';
import React from 'react'

function cart() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                            <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extra}>
                                Double ingredient, spice sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>KsH 1200</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>10</span>
                        </td>
                        <td>
                            <span className={styles.total}>KsH 2500</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                            <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>KsH 1200</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>10</span>
                        </td>
                        <td>
                            <span className={styles.total}>KsH 2500</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.TextTitle}>Subtotal:</b>
                    </div>
                    <div className={styles.Text}>
                    <b className={styles.TextTitle}>Discount:</b>
                    </div>
                    <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>KsH:2345
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    );
};

export default cart
