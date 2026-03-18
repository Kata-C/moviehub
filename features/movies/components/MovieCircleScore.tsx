export default function MovieCircleScore({rate}: {rate: number}) {
    const radius = 22;
    const stroke = 2.5;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset = circumference - (rate * 10 / 100) * circumference

    const xText = rate === 10 ? "45%" : "46%"
    const xPercent = rate === 10 ? "70%" : "64%"

    const color = rate >= 7 ? "#22c55e" : rate >= 5 ? "#eae72dff" : "#ef4444"

    
    return (
        <div className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center">
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="#3f3f3fff"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
            />
            <circle
                stroke={color}
                strokeLinecap="round"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                transform={`rotate(-90 ${radius} ${radius})`}
            />
            {/* texto */}
            <text
                x={xText}
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontSize="14"
                fill="white"
                fontWeight="bold"
            >
                {Number(rate * 10).toFixed(0)}
            </text>
            <text
                x={xPercent}
                y="50%"
                fontSize="6"
                fill="white"
            >
                %
            </text>
            </svg>
        </div>
    )
}