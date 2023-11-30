import React from 'react'
import styles from './LoadinModal.module.css'

function LoadingModal() {
    return (
        <div className={styles.loadingContainerModal}>
           <span className={styles.loaderModal}></span>
        </div>
    )
}

export default LoadingModal