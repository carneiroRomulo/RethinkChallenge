import React from 'react';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Table from '../../components/Table';
import styles from './index.module.css';

const Home = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.item1}> <Header /> </div>
            <div className={styles.item2}> <Form /> </div>
            <div className={styles.item3}> <Table /> </div>
            <div className={styles.item4}> <Footer /> </div>
        </div>
    )
}
export default Home;