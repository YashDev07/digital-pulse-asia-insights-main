
import React, { useRef, useEffect, useState } from 'react';
import { useIntersectionObserverOnce } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface DataPoint {
  x: number;
  y: number;
}

interface LineChartProps {
  data: {
    india: DataPoint[];
    us: DataPoint[];
    sea: DataPoint[];
  };
  width?: number;
  height?: number;
  className?: string;
}

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  width = 600, 
  height = 400,
  className
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, isVisible } = useIntersectionObserverOnce<HTMLDivElement>();
  const [animated, setAnimated] = useState(false);

  const margin = { top: 30, right: 30, bottom: 50, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const allPoints = [...data.india, ...data.us, ...data.sea];
  const xMin = Math.min(...allPoints.map(d => d.x));
  const xMax = Math.max(...allPoints.map(d => d.x));
  const yMin = Math.min(...allPoints.map(d => d.y));
  const yMax = Math.max(...allPoints.map(d => d.y));

  const xScale = (value: number) => {
    return ((value - xMin) / (xMax - xMin)) * innerWidth;
  };

  const yScale = (value: number) => {
    return innerHeight - ((value - yMin) / (yMax - yMin)) * innerHeight;
  };

  const generatePath = (points: DataPoint[]) => {
    if (points.length === 0) return '';
    
    let path = `M ${xScale(points[0].x)} ${yScale(points[0].y)}`;
    
    for (let i = 1; i < points.length; i++) {
      path += ` L ${xScale(points[i].x)} ${yScale(points[i].y)}`;
    }
    
    return path;
  };

  useEffect(() => {
    if (isVisible && !animated) {
      setAnimated(true);
    }
  }, [isVisible, animated]);

  return (
    <div 
      ref={ref} 
      className={cn("chart-container", className)}
    >
      <div className="flex justify-between mb-6">
        <div className="flex items-center text-sm">
          <span className="indicator-dot bg-chart-india"></span>
          <span>India</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="indicator-dot bg-chart-us"></span>
          <span>United States</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="indicator-dot bg-chart-sea"></span>
          <span>Southeast Asia</span>
        </div>
      </div>
      
      <svg 
        ref={svgRef}
        width={width} 
        height={height} 
        className={cn(
          "overflow-visible transition-opacity duration-1000",
          !animated && "opacity-0"
        )}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Grid lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`gridY-${i}`}
              x1={0}
              y1={innerHeight * (i / 4)}
              x2={innerWidth}
              y2={innerHeight * (i / 4)}
              className="chart-grid"
            />
          ))}
          
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`gridX-${i}`}
              x1={innerWidth * (i / 5)}
              y1={0}
              x2={innerWidth * (i / 5)}
              y2={innerHeight}
              className="chart-grid"
            />
          ))}
          
          {/* X-axis */}
          <line
            x1={0}
            y1={innerHeight}
            x2={innerWidth}
            y2={innerHeight}
            stroke="#333"
            strokeWidth={1}
          />
          
          {/* Y-axis */}
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={innerHeight}
            stroke="#333"
            strokeWidth={1}
          />
          
          {/* Lines */}
          <path
            d={generatePath(data.india)}
            className="line-chart"
            stroke="#ff6b6b"
            strokeDasharray={animated ? "none" : "1000"} 
            strokeDashoffset={animated ? "0" : "1000"}
            style={{ 
              transition: "stroke-dashoffset 1.5s ease-in-out", 
            }}
          />
          
          <path
            d={generatePath(data.us)}
            className="line-chart"
            stroke="#48dbfb"
            strokeDasharray={animated ? "none" : "1000"} 
            strokeDashoffset={animated ? "0" : "1000"}
            style={{ 
              transition: "stroke-dashoffset 1.5s ease-in-out",
              transitionDelay: "0.3s"
            }}
          />
          
          <path
            d={generatePath(data.sea)}
            className="line-chart"
            stroke="#1dd1a1"
            strokeDasharray={animated ? "none" : "1000"} 
            strokeDashoffset={animated ? "0" : "1000"}
            style={{ 
              transition: "stroke-dashoffset 1.5s ease-in-out",
              transitionDelay: "0.6s"
            }}
          />
          
          {/* Data points */}
          {animated && (
            <>
              {data.india.map((point, i) => (
                <circle
                  key={`india-${i}`}
                  cx={xScale(point.x)}
                  cy={yScale(point.y)}
                  className="chart-point"
                  fill="#ff6b6b"
                />
              ))}
              
              {data.us.map((point, i) => (
                <circle
                  key={`us-${i}`}
                  cx={xScale(point.x)}
                  cy={yScale(point.y)}
                  className="chart-point"
                  fill="#48dbfb"
                />
              ))}
              
              {data.sea.map((point, i) => (
                <circle
                  key={`sea-${i}`}
                  cx={xScale(point.x)}
                  cy={yScale(point.y)}
                  className="chart-point"
                  fill="#1dd1a1"
                />
              ))}
            </>
          )}
          
          {/* X-axis labels */}
          <text
            x={innerWidth / 2}
            y={innerHeight + 40}
            textAnchor="middle"
            className="text-sm fill-gray-600"
          >
            Quarters (2020-2023)
          </text>
          
          {/* Y-axis label */}
          <text
            x={-innerHeight / 2}
            y={-35}
            textAnchor="middle"
            transform="rotate(-90)"
            className="text-sm fill-gray-600"
          >
            Digital Hiring Trends (% change)
          </text>
        </g>
      </svg>
    </div>
  );
};
