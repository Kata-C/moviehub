'use client'
import { useState, useRef, useEffect } from "react";

interface IFilterBarProps<T> {
    options: T[];
    selectedOption: number;
    onSelectOption: (option: number) => void;
    backgroundColor?: string;
    textSelectedColor?: string;
    textUnselectedColor?: string;
}

export default function FilterBar<T extends { label: string }>({
    options,
    selectedOption,
    onSelectOption,
    backgroundColor = "#10b981",
    textSelectedColor = "#092f3dff",
    textUnselectedColor = "#e9ebeaff"
}: IFilterBarProps<T>) {
    const [bgStyle, setBgStyle] = useState({ width: 0, left: 0});
    const [localSelected, setLocalSelected] = useState(selectedOption);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const currentButton = buttonRefs.current[localSelected];
        if (currentButton) {
            setBgStyle({
                width: currentButton.offsetWidth,
                left: currentButton.offsetLeft,
            });
        }
    }, [localSelected, options]);

    return (
        <div 
            className="relative flex py-[1px] rounded-full border-2 overflow-hidden"
            style={{ borderColor: backgroundColor }}
        >
            <div 
                className="absolute top-0 bottom-0 rounded-full transition-all duration-300 ease-in-out"
                style={{
                    backgroundColor: backgroundColor,
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
                    onClick={() => {
                        setLocalSelected(index);
                        onSelectOption(index)
                    }}
                    className="relative z-10 px-4 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ease-in-out font-semibold"
                    style={{
                        color: localSelected === index ? textSelectedColor : textUnselectedColor
                    }}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}