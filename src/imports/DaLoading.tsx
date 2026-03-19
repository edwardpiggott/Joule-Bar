import imgDaEntityGif from "figma:asset/ef3dc8666bd4afb8e49f631d4aa423722c41e3f2.png";

function Intro() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[#5d36ff] from-[7.576%] h-[816px] left-1/2 to-[#a100c2] translate-x-[-50%] w-[416px]" data-name="Intro - 6" />;
}

export default function DaLoading() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_16px_32px_0px_rgba(91,115,139,0.16)] size-full" data-name="DA loading">
      <div className="absolute bg-gradient-to-b from-[#5d36ff] from-[6.464%] inset-0 overflow-x-clip overflow-y-auto to-[#a100c2] to-[93.756%]" data-name="DA">
        <div className="absolute bg-[#f7f7f7] inset-0" data-name="BG - white (default)" />
        <Intro />
      </div>
      <div className="absolute left-0 size-[416px] top-[200px]" data-name="DA entity - gif">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDaEntityGif} />
      </div>
    </div>
  );
}