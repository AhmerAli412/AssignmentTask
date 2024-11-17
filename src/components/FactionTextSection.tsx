import React from "react";

const FactionTextSection: React.FC = () => {
    return (
        <div className="flex flex-col h-[26rem] text-white max-w-[22rem]">
            <h2 className="text-[2.6rem] font-bold tracking-widest text-gray-900 uppercase">Choose Your</h2>
            <h1 className="text-5xl font-bold tracking-wider text-[#ffffff] uppercase glow">Faction</h1>
            <div>
                <p className="text-gray-300 mt-8 text-[0.95rem]">
                    Agents will be customizable, allowing you to select from among the various factions in the game – will you fight for a global police force seeking to enact a new brand of justice? Or will you battle alongside a secret network of deviants and outcasts?
                </p>
                <p className="text-gray-300 mt-5 mb-8 text-[0.95rem]">
                    Once you acquire your agent, the choice is yours. Pledging your allegiance is no small decision – as your agent accrues Loyalty Points over time, your choices truly matter.
                </p>
            </div>
            <div className="relative w-24 bg-white text-gray-800 font-medium px-4 py-2 shadow-md uppercase tracking-wide text-sm clip-utility">
                Utility
            </div>
        </div>
    );
};

export default FactionTextSection;
