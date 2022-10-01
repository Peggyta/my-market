import React from 'react';
import styles from '../components/Loader.module.css';
import loadingGif from '../assets/icons/loading.gif';

const Loader = () => {
    return (
            <div className={styles.container}>
                <img src={loadingGif} alt="loader" />
                <h1>Loading ...</h1>
            </div> 
    );
};

export default Loader;