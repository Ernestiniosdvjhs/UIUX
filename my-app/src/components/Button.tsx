import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    color?: 'blue' | 'red' | 'green' | 'yellow'; 
    size?: 'small' | 'medium' | 'large';      
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'blue', size = 'medium' }) => {
    return (
        <button
            className={`btn btn-${color} btn-${size}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
