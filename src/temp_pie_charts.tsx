export function RegionalPieCharts() {
  // Data for the pie charts
  const headcountData = [
    { region: 'Americas', value: 53, color: '#0070f2', label: 'Americas 53%' },
    { region: 'EMEA', value: 22, color: '#a5c9f5', label: 'EMEA 22%' },
    { region: 'MEE', value: 9, color: '#b4d97e', label: 'MEE 9%' },
    { region: 'APAC', value: 16, color: '#54d6ce', label: 'APAC 16%' },
  ];

  const costData = [
    { region: 'Americas', value: 60, color: '#0070f2', label: 'Americas 60%' },
    { region: 'EMEA', value: 18, color: '#a5c9f5', label: 'EMEA 18%' },
    { region: 'MEE', value: 5, color: '#b4d97e', label: 'MEE 5%' },
    { region: 'APAC', value: 17, color: '#54d6ce', label: 'APAC 17%' },
  ];

  // Helper function to create pie chart path with label position
  const createPieSlices = (data: typeof headcountData) => {
    let currentAngle = -90; // Start from top
    const radius = 60;
    const centerX = 80;
    const centerY = 80;
    const labelRadius = 40;
    
    return data.map((item) => {
      const sliceAngle = (item.value / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;
      const midAngle = startAngle + sliceAngle / 2;
      
      // Convert to radians
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      const midRad = (midAngle * Math.PI) / 180;
      
      // Calculate arc points
      const x1 = centerX + radius * Math.cos(startRad);
      const y1 = centerY + radius * Math.sin(startRad);
      const x2 = centerX + radius * Math.cos(endRad);
      const y2 = centerY + radius * Math.sin(endRad);
      
      // Calculate label position
      const labelX = centerX + labelRadius * Math.cos(midRad);
      const labelY = centerY + labelRadius * Math.sin(midRad);
      
      const largeArc = sliceAngle > 180 ? 1 : 0;
      
      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');
      
      currentAngle = endAngle;
      
      return { pathData, color: item.color, labelX, labelY, value: item.value };
    });
  };

  const headcountSlices = createPieSlices(headcountData);
  const costSlices = createPieSlices(costData);

  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px] max-w-full">
      <div className="mb-[12px]">
        <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">Marketing Headcount and Cost</p>
        <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">Per Region | Jan 2025 - Present</p>
      </div>

      {/* Pie Charts Container */}
      <div className="flex gap-[24px] justify-around mb-[12px]">
        {/* Headcount Pie Chart */}
        <div className="flex flex-col items-center flex-1">
          <p className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e] mb-[8px]">Headcount</p>
          <div className="relative" style={{ width: '160px', height: '160px' }}>
            <svg viewBox="0 0 160 160" className="w-full h-full">
              {headcountSlices.map((slice, idx) => (
                <g key={idx}>
                  <path
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={slice.labelX}
                    y={slice.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-['72:Bold',sans-serif]"
                    fontSize="13"
                    fill="white"
                  >
                    {slice.value}%
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <div className="mt-[8px] space-y-[4px]">
            {headcountData.map((item) => (
              <div key={item.region} className="flex items-center gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: item.color }} />
                <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Pie Chart */}
        <div className="flex flex-col items-center flex-1">
          <p className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e] mb-[8px]">Cost</p>
          <div className="relative" style={{ width: '160px', height: '160px' }}>
            <svg viewBox="0 0 160 160" className="w-full h-full">
              {costSlices.map((slice, idx) => (
                <g key={idx}>
                  <path
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={slice.labelX}
                    y={slice.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-['72:Bold',sans-serif]"
                    fontSize="13"
                    fill="white"
                  >
                    {slice.value}%
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <div className="mt-[8px] space-y-[4px]">
            {costData.map((item) => (
              <div key={item.region} className="flex items-center gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: item.color }} />
                <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
