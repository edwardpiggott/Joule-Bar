import svgPaths from "./svg-pbq21sr2jt";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.pce83900} fill="var(--fill-0, #5D36FF)" id="Icon_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ThemeMorningHorizonStateRegularActiveTrue() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Theme=Morning Horizon, State=Regular, Active=true">
      <Icon />
    </div>
  );
}

export default function ShellBarIconMorningHorizon() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Shell Bar Icon/Morning Horizon">
      <ThemeMorningHorizonStateRegularActiveTrue />
    </div>
  );
}