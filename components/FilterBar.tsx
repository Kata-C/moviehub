'use client'
import { useState, useRef, useEffect } from "react";

interface IFilterBarProps<T extends string> {
    options: T[];
    selectedOption: number;
    onSelectOption: (option: number) => void;
    backgroundColor?: string;
    textSelectedColor?: string;
    textUnselectedColor?: string;
}

export default function FilterBar<T extends string>({
    options,
    selectedOption,
    onSelectOption,
    backgroundColor = "#10b981",
    textSelectedColor = "#10b981",
    textUnselectedColor = "#10b981"
}: IFilterBarProps<T>) {
    const [bgStyle, setBgStyle] = useState({ width: 0, left: 0});
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const currentButton = buttonRefs.current[selectedOption];
        if (currentButton) {
            setBgStyle({
                width: currentButton.offsetWidth,
                left: currentButton.offsetLeft,
            });
        }
    }, [selectedOption, options]);

    return (
        <div className={`relative flex py-[1px] rounded-full border-2 border-[${backgroundColor}] overflow-hidden`}>
            <div 
                className={`absolute top-0 bottom-0 rounded-full transition-all duration-300 ease-in-out bg-[${backgroundColor}]`}
                style={{
                    width: `${bgStyle.width}px`,
                    transform: `translateX(${bgStyle.left}px)`,
                }}
            />

            {options.map((option, index) => (
                <button
                    key={index}
                    ref={(el) => {
                        buttonRefs.current[index] = el;
                    }}
                    onClick={() => onSelectOption(index)}
                    className={`relative z-10 px-4 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ease-in-out text-[${selectedOption === index ? textSelectedColor : textUnselectedColor}]`}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}