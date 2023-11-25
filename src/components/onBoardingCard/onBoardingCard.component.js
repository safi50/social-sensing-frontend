import React from 'react';
import './onBoardingCard.css';
import onboardingImage from '../../assets/onboarding_image@2x.png';
import waleeLogo from '../../assets/walee-logo.png';

const OnboardingCard = ({children}) => {
    return (
        <div className="onboarding-container">
            <div className="left-side">
                <img src={onboardingImage} alt="OnboardingImage" />
            </div>
            <div className="right-side">
                <div className="header">
                    <img src={waleeLogo} alt="walee" className="logo" />
                    <select className="language-selector">
                        <option value="en">ENG</option>
                        <option value="es">ESP</option>
                    </select>
                </div>
                 {/* Child Components Here*/}
                 {children}

            </div>
        </div>
    );
};

export default OnboardingCard;
