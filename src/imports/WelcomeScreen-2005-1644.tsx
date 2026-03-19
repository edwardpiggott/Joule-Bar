import svgPaths from "./svg-1ugjmt58ol";

export default function WelcomeScreen() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end justify-end relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] w-[416px] h-[600px]" data-name="Welcome screen">
      <div className="self-stretch box-border content-stretch flex-col flex-nowrap flex gap-[16px] items-start justify-start shrink-0 relative p-[24px]" data-name="Actions">
        <div className="self-stretch box-border content-stretch flex-col flex-nowrap flex items-start justify-start shrink-0 relative" data-name="Header">
          <div className="self-stretch shrink-0 basis-auto relative overflow-hidden" data-name="How can I help you?">
            <p className="box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start m-0 p-0">
              <span className="text-[#1d2d3e] box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start">How can I help you?</span>
            </p>
          </div>
        </div>
        <div className="self-stretch box-border content-stretch flex-col flex-nowrap flex gap-[16px] items-start justify-start shrink-0 relative" data-name="Action Buttons">
          <div className="self-stretch box-border content-stretch flex-row flex-nowrap flex gap-[12px] items-center justify-start shrink-0 relative" data-name="Action 1">
            <svg className="shrink-0 relative overflow-visible" style={{}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.path1} fill="#1D2D3E" fillRule="evenodd" />
            </svg>
            <div className="flex-1 self-stretch shrink-0 basis-0 relative overflow-hidden" data-name="Update Pronouns">
              <p className="box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start m-0 p-0">
                <span className="text-[#1d2d3e] box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start">Update Pronouns</span>
              </p>
            </div>
          </div>
          <div className="self-stretch box-border content-stretch flex-row flex-nowrap flex gap-[12px] items-center justify-start shrink-0 relative" data-name="Action 2">
            <svg className="shrink-0 relative overflow-visible" style={{}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.path2} fill="#1D2D3E" />
            </svg>
            <div className="flex-1 self-stretch shrink-0 basis-0 relative overflow-hidden" data-name="Request Feedback">
              <p className="box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start m-0 p-0">
                <span className="text-[#1d2d3e] box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start">Request Feedback</span>
              </p>
            </div>
          </div>
          <div className="self-stretch box-border content-stretch flex-row flex-nowrap flex gap-[12px] items-center justify-start shrink-0 relative" data-name="Action 3">
            <svg className="shrink-0 relative overflow-visible" style={{}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.path3} fill="#1D2D3E" />
            </svg>
            <div className="flex-1 self-stretch shrink-0 basis-0 relative overflow-hidden" data-name="Give Spot Award">
              <p className="box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start m-0 p-0">
                <span className="text-[#1d2d3e] box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start">Give Spot Award</span>
              </p>
            </div>
          </div>
          <div className="self-stretch box-border content-stretch flex-row flex-nowrap flex gap-[12px] items-center justify-start shrink-0 relative" data-name="Action 4">
            <svg className="shrink-0 relative overflow-visible" style={{}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.path4} fill="#1D2D3E" />
            </svg>
            <div className="flex-1 self-stretch shrink-0 basis-0 relative overflow-hidden" data-name="View Worker Profile">
              <p className="box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start m-0 p-0">
                <span className="text-[#1d2d3e] box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start">View Worker Profile</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch box-border content-stretch flex-col flex-nowrap flex gap-[16px] items-start justify-start shrink-0 relative p-[24px] pt-0" data-name="Text input">
        <div className="self-stretch box-border content-stretch flex-col flex-nowrap flex gap-[8px] items-start justify-start shrink-0 relative p-[12px] pr-[8px] rounded-[8px] bg-[#f5f6f7] overflow-hidden" data-name="Input">
          <div className="self-stretch box-border content-stretch flex-row flex-nowrap flex gap-[8px] items-start justify-start shrink-0 relative" data-name="Text and Icon">
            <div className="flex-1 shrink-0 basis-0 relative overflow-hidden" data-name="Ask me anything...">
              <p className="box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start m-0 p-0">
                <span className="text-[#5b738b] box-border content-stretch relative flex-nowrap flex-col flex items-start justify-start">Ask me anything...</span>
              </p>
            </div>
            <svg className="shrink-0 relative overflow-visible" style={{}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={svgPaths.path5} fill="#5B738B" />
              <path d={svgPaths.path6} fill="#5B738B" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
