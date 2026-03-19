import { Clock, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

interface TimerWidgetProps {
  isRunning: boolean;
  time: number;
  onNotebookClick?: () => void;
}

export function TimerWidget({ isRunning, time, onNotebookClick }: TimerWidgetProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 lg:bottom-8 xl:bottom-10 left-6 lg:left-8 xl:left-10 z-50">
        <div className="bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-xl shadow-[0px_32px_64px_rgba(91,115,139,0.24)] p-4 lg:p-5 xl:p-6 flex items-center gap-4 lg:gap-5 xl:gap-6">
          {/* Timer Section */}
          <div className="flex items-center gap-3 lg:gap-4 pr-4 lg:pr-5 xl:pr-6 border-r border-white/20">
            <Clock className={`w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 ${isRunning ? 'text-white' : 'text-white/70'}`} />
            <div className="flex flex-col">
              <span className="text-xs lg:text-[13px] xl:text-[14px] text-white/90">Time Elapsed</span>
              <span className="font-mono text-white text-[14px] lg:text-[16px] xl:text-[18px]">{formatTime(time)}</span>
            </div>
          </div>

          {/* Notebook Button with Tooltip */}
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <button
                onClick={onNotebookClick}
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center justify-center group relative"
              >
                <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                <span className="absolute -top-1 -right-1 w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 bg-amber-500 rounded-full animate-pulse" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-white border border-[#d9e0e6] shadow-lg">
              <div className="flex flex-col gap-1 p-1 lg:p-1.5 xl:p-2">
                <span className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[12px] lg:text-[13px] xl:text-[14px]">📝 Notebook</span>
                <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px]">
                  Click to record compensation data
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
