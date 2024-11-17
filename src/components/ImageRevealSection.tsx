import React from "react";

interface ImageRevealSectionProps {
    isHovered: boolean;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
    bright: string;
    blur: string;
}

const ImageRevealSection: React.FC<ImageRevealSectionProps> = ({ isHovered, setIsHovered, bright, blur }) => {
    const segments = Array.from({ length: 6 });
    const midPoint = Math.floor(segments.length / 2);

    return (
        <div
            className="relative w-full mt-12 md:mt-12 lg:mt-0 max-w-lg h-[28rem] pt-12 mb-10 md:mb-0 lg:mb-0 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={bright}
                alt="Bright image"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-100"}`}
            />
            <img
                src={blur}
                alt="Blurred image"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
            />
            {segments.map((_, index) => {
                const distanceFromCenter = Math.abs(index - midPoint);
                return (
                    <div
                        key={index}
                        className={`absolute w-full transition-all duration-700 ease-in-out ${isHovered ? "scale-x-100" : "scale-x-0"} translate-x-0`}
                        style={{
                            height: `${100 / segments.length}%`,
                            top: `${(index * 100) / segments.length}%`,
                            transitionDelay: `${distanceFromCenter * 100}ms`,
                            transformOrigin: "center",
                        }}
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <div className="absolute inset-0 bg-black/50 opacity-60" />
                            <img
                                src={bright}
                                alt={`Segment ${index + 1}`}
                                className="w-full h-full object-cover brightness-75 blur-sm"
                                style={{
                                    objectPosition: `center ${-index * 100}%`,
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ImageRevealSection;
