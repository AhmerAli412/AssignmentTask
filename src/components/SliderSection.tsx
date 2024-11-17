import React from "react";

import factionOneLogo from '../assets/logos/1.svg';
import factionOneLogo2 from '../assets/logos/2.svg';
import factionOneLogo3 from '../assets/logos/3.svg';
import factionOneLogo4 from '../assets/logos/4.svg';
import factionOneLogo5 from '../assets/logos/5.svg';
import factionOneLogo6 from '../assets/logos/6.svg';
import factionOneLogo7 from '../assets/logos/7.svg';
import factionOneLogo8 from '../assets/logos/8.svg';
import factionOneLogo9 from '../assets/logos/9.svg';

interface Faction {
    id: number;
    title: string;
    description: string;
    logo: string;
}

interface SliderSectionProps {
    currentSlider: number;
    setCurrentSlider: React.Dispatch<React.SetStateAction<number>>;
}

const SliderSection: React.FC<SliderSectionProps> = ({ currentSlider, setCurrentSlider }) => {
    const slides: Faction[] = [
        { id: 1, title: "Faction 1", description: "A global peacekeeping for public good", logo: factionOneLogo },
        { id: 2, title: "Faction 2", description: "Join the forces of innovation and power", logo: factionOneLogo2 },
        { id: 3, title: "Faction 3", description: "Stealth and precision above all", logo: factionOneLogo3 },
        { id: 4, title: "Faction 4", description: "Pioneers in tech and strategy", logo: factionOneLogo4 },
        { id: 5, title: "Faction 5", description: "Battle-tested warriors of truth", logo: factionOneLogo5 },
        { id: 6, title: "Faction 6", description: "Guardians of light and justice", logo: factionOneLogo6 },
        { id: 7, title: "Faction 7", description: "Masters of the unseen", logo: factionOneLogo7 },
        { id: 8, title: "Faction 8", description: "Champions of unity and resilience", logo: factionOneLogo8 },
        { id: 9, title: "Faction 9", description: "Defenders of the free world", logo: factionOneLogo9 },
    ];

    const handleCardClick = (sliderId: number) => setCurrentSlider(sliderId);

    return (
        <div className="w-full h-48 overflow-x-auto overflow-y-hidden bg-[#0a0b0c]">
            <div className="flex flex-nowrap">
                {slides.map((faction) => (
                    <div
                        key={faction.id}
                        className="w-[250px] sm:w-[250px] flex-shrink-0 border border-[#292b2c] py-6 px-6 cursor-pointer group hover:bg-[#111213] transition-all duration-300 ease-in-out hover:scale-110 hover:z-10 relative"
                        onClick={() => handleCardClick(faction.id)}
                    >
                        <p className="text-sm text-gray-400 group-hover:text-white transition-colors mb-1">{faction.title}</p>
                        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{faction.description}</p>
                        <div className="text-2xl flex mt-2 justify-center text-center text-gray-400 group-hover:text-white transition-colors pb-4">
                            <img src={faction.logo} alt={faction.title} className="w-20 h-20" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderSection;
