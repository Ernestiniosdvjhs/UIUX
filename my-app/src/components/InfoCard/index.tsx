import React from 'react';
import styles from './info.module.css';

interface InfoCardProps {
    title: string; 
    imageUrl: string; 
    additionalInfo: string; 
    targetUrl: string; 
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, imageUrl, additionalInfo, targetUrl }) => {
    return (
        <a href={targetUrl} className={styles.productCard} style={{ textDecoration: 'none' }}>

            <a className={styles.productCard1} style={{ textDecoration: 'none' }}>
                <div className={styles.textContainer}>
                    <div className={styles.titleBlock}>
                        <h3 className={styles.courseTitle}>{title}</h3>
                    </div>
                    <div className={styles.additionalInfoBlock}>
                        {additionalInfo} 
                    </div>
                </div>
            </a>

            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="Картинка курса" className={styles.productImage} />
            </div>
        </a>
    );
};
