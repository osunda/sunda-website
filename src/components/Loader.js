// src/components/Loader.js
import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    fadeOutLoader();
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        const fadeOutLoader = () => {
            const loaderWrapper = document.getElementById('loader-wrapper');
            loaderWrapper.style.opacity = '0';
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 1000);
        };

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="loader-wrapper">
            <div id="monat-text">Monat.ai</div>
            <div id="status-text">
                Connecting to Web3 <span id="percentage">[{percentage}%]</span>
            </div>
        </div>
    );
};

export default Loader;

