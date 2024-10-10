import React from 'react';
import Button from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { InfoCard } from '../components/InfoCard';

function Home() {
    return (

        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Добро пожаловать!</h1>
            <Button
                label="Нажми меня"
                onClick={() => alert('Кнопка нажата!')}
                color="blue"
                size="large"
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <ProductCard 
                    title="Наши курсы" 
                    additionalInfo="Зарегистрируйтесь на наши курсы и начните обучение сегодня!" 
                    imageUrl="https://www.chel-edu.ru/pics/uploads/kartinki/DO_07.png" 
                    targetUrl="/courses" 
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <InfoCard 
                    title="О нас" 
                    additionalInfo="Мы самые лучшие продавцы курсов" 
                    imageUrl="https://www.guz.ru/upload/iblock/d0d/d0d3f4d8ca77a99e41e39c3c02d71b08.png" 
                    targetUrl="/about" 
                />
            </div>

        </div>
    );
}

export default Home;
