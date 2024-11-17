import React, { useState } from "react";
import FactionTextSection from "./FactionTextSection";
import ImageRevealSection from "./ImageRevealSection";
import SliderSection from "./SliderSection";
import brightImg1 from "../assets/main-images/1-cover.png"; // First pair of images
import blurImg1 from "../assets/main-images/1-in.png";

import brightImg2 from "../assets/main-images/2-cover.png"; // Second pair of images
import blurImg2 from "../assets/main-images/2-in.png";

import brightImg3 from "../assets/main-images/3-cover.png"; // Third pair of images
import blurImg3 from "../assets/main-images/3-in.png";

import brightImg4 from "../assets/main-images/4-cover.png"; // Third pair of images
import blurImg4 from "../assets/main-images/4-in.png";

import brightImg5 from "../assets/main-images/5-cover.png"; // Third pair of images
import blurImg5 from "../assets/main-images/5-in.png";

import brightImg6 from "../assets/main-images/6-cover.png"; // Third pair of images
import blurImg6 from "../assets/main-images/6-in.png";

import brightImg7 from "../assets/main-images/7-cover.png"; // Third pair of images
import blurImg7 from "../assets/main-images/7-in.png";

import brightImg8 from "../assets/main-images/8-cover.png"; // Third pair of images
import blurImg8 from "../assets/main-images/8-in.png";

import brightImg9 from "../assets/main-images/9-cover.png"; // Third pair of images
import blurImg9 from "../assets/main-images/9-in.png";

const CenterRevealEffect: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [currentSlider, setCurrentSlider] = useState<number>(1);

    const getSliderImages = (): { bright: string; blur: string } => {
        switch (currentSlider) {
            case 1: return { bright: brightImg1, blur: blurImg1 };
            case 2: return { bright: brightImg2, blur: blurImg2 };
            case 3: return { bright: brightImg3, blur: blurImg3 };
            case 4: return { bright: brightImg4, blur: blurImg4 };
            case 5: return { bright: brightImg5, blur: blurImg5 };
            case 6: return { bright: brightImg6, blur: blurImg6 };
            case 7: return { bright: brightImg7, blur: blurImg7 };
            case 8: return { bright: brightImg8, blur: blurImg8 };
            case 9: return { bright: brightImg9, blur: blurImg9 };
            default: return { bright: brightImg1, blur: blurImg1 };
        }
    };

    const { bright, blur } = getSliderImages();

    return (
        <div className="flex flex-col items-center justify-center w-full lg:h-screen md:h-full h-full bg-gradient-to-t from-[#0a0b0c] via-[#0d1524] to-[#02030a] pt-4 pb-12 space-y-8">
            <div className="flex pb-14 mt-5 justify-center pt-10 md:pt-20 lg:pt-0 flex-wrap md:flex-wrap lg:flex-nowrap w-full items-center space-x-12">
                <FactionTextSection />
                <ImageRevealSection
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    bright={bright}
                    blur={blur}
                />
            </div>
            <SliderSection
                currentSlider={currentSlider}
                setCurrentSlider={setCurrentSlider}
            />
        </div>
    );
};

export default CenterRevealEffect;
