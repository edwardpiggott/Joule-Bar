import svgPaths from "./svg-0b73em4nnl";

function Avatar() {
  return (
    <div className="bg-[#eae5ff] box-border content-stretch flex gap-[10px] items-center justify-center max-h-[48px] max-w-[48px] p-[15px] relative rounded-[12px] shrink-0" data-name="Avatar">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Icon">
            <g id="Icon_2">
              <path d={svgPaths.p34106400} fill="var(--fill-0, #1D2D3E)" />
              <path clipRule="evenodd" d={svgPaths.p3ccea780} fill="var(--fill-0, #1D2D3E)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#eae5ff] box-border content-stretch flex gap-[10px] items-center justify-center max-h-[48px] max-w-[48px] p-[15px] relative rounded-[12px] shrink-0" data-name="Avatar">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon />
    </div>
  );
}

export default function WorkZone() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative size-full" data-name="Work Zone">
      <Avatar />
      <Avatar1 />
      <div className="flex flex-col font-['72:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ba066c] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Joule: sap-icon://da</p>
      </div>
    </div>
  );
}