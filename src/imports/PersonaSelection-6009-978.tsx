import svgPaths from "./svg-5x2pm02ar6";
import imgCc7De09AE5A04Cc384Bd1813958Ec3C01 from "figma:asset/68b8e4d496e72a0052d439f7d3ade3e1771c07b5.png";
import imgJadaProfilePic1 from "figma:asset/e7596a9aeed84f7bf35f607453098dedbb52fca7.png";
import imgImage2 from "figma:asset/64a60670f053f5f6072796a7250d0083ad88e077.png";
import imgPersonaSelection from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Frame() {
  return (
    <div className="absolute h-[1078px] left-0 top-[2px] w-[1920px]">
      <div className="absolute h-[1080px] left-0 top-[-3px] w-[1926px]" data-name="CC7DE09A-E5A0-4CC3-84BD-1813958EC3C0 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCc7De09AE5A04Cc384Bd1813958Ec3C01} />
      </div>
    </div>
  );
}

function Intro() {
  return <div className="absolute bg-gradient-to-b from-[#6135fe] inset-0 to-[#a100c2]" data-name="Intro - 6" />;
}

function PanelGradient() {
  return (
    <div className="absolute bg-gradient-to-b from-[#5d36ff] from-[6.464%] h-[619px] left-px overflow-x-clip overflow-y-auto rounded-[60px] to-[#a100c2] to-[93.756%] top-0 w-[472px]" data-name="Panel - gradient">
      <div className="absolute bg-[#f7f7f7] inset-0" data-name="BG - white (default)" />
      <Intro />
    </div>
  );
}

function SparklingIconAnimated() {
  return (
    <div className="absolute h-[120px] left-[calc(50%+146.5px)] top-[206px] translate-x-[-50%] w-[130px]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 120">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.pe771100} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p2a0e6300} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.p3e255c00} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p1a15beb0} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function SparklingIconAnimated1() {
  return (
    <div className="absolute left-[calc(50%-185.5px)] size-[102px] top-[107px] translate-x-[-50%]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 102">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.pc2c5480} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p1df7d880} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.pfe7c180} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p30f8c100} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[101.75px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[203.5px]">Jada Baker</p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[487px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[118px] px-[12.056px] py-[3.014px] rounded-[7.55px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.55px]" />
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[101.75px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[203.5px]">Manager</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[414px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[118px] px-[12.056px] py-[3.014px] rounded-[7.55px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.55px]" />
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <PanelGradient />
      <SparklingIconAnimated />
      <SparklingIconAnimated1 />
      <div className="absolute h-[405px] left-[3px] rounded-[60px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[219px] w-[466px]" data-name="Jada profile pic  1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
          <img alt="" className="absolute h-full left-[-6.88%] max-w-none top-0 w-[112.69%]" src={imgJadaProfilePic1} />
        </div>
      </div>
      <Title />
      <Title1 />
    </div>
  );
}

function PersonaJada() {
  return (
    <div className="absolute h-[619px] left-[349px] top-[338px] w-[473px]" data-name="Persona_Jada">
      <Group4 />
    </div>
  );
}

function Intro1() {
  return <div className="absolute bg-gradient-to-b from-[#6135fe] inset-0 to-[#a100c2]" data-name="Intro - 6" />;
}

function PanelGradient1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#5d36ff] from-[6.464%] h-[672px] left-0 overflow-x-clip overflow-y-auto to-[#a100c2] to-[93.756%] top-[-1px] w-[513px]" data-name="Panel - gradient">
      <div className="absolute bg-[#f7f7f7] inset-0" data-name="BG - white (default)" />
      <Intro1 />
    </div>
  );
}

function SparklingIconAnimated2() {
  return (
    <div className="absolute h-[74px] left-[calc(50%+180px)] top-[167px] translate-x-[-50%] w-[80px]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 74">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.p22912180} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p308a0800} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.p1ee3e400} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p1ef20500} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[125px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[250px]">Gus Revesz</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[486px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[117px] px-[12.056px] py-[3.014px] rounded-[7.554px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.554px]" />
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[101.75px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[203.5px]">Employee</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[413px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[117px] px-[12.056px] py-[3.014px] rounded-[7.554px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.554px]" />
      <Group3 />
    </div>
  );
}

function SparklingIconAnimated3() {
  return (
    <div className="absolute inset-[-8.41%_71.61%_78.16%_-11.23%]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 187">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.p277e0980} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p110c2f00} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.p18438040} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p11473af0} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function PersonaGus() {
  return (
    <div className="absolute bg-white inset-[31.39%_18.54%_11.39%_56.88%] overflow-clip rounded-[50px]" data-name="Persona_Gus">
      <PanelGradient1 />
      <SparklingIconAnimated2 />
      <Title2 />
      <Title3 />
      <div className="absolute h-[415px] left-[-19px] top-[217px] w-[493px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <SparklingIconAnimated3 />
    </div>
  );
}

export default function PersonaSelection() {
  return (
    <div className="relative size-full" data-name="Persona selection">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-60 pointer-events-none size-full" src={imgPersonaSelection} />
      <Frame />
      <p className="absolute font-['72:Light',sans-serif] h-[58px] leading-[22px] left-[calc(50%+3px)] not-italic text-[#0057d2] text-[40px] text-center top-[117px] tracking-[20px] translate-x-[-50%] w-[1920px]">JOULE EXPERIENCE</p>
      <p className="absolute font-['72:Bold',sans-serif] h-[58px] leading-[22px] left-1/2 not-italic text-[#0057d2] text-[90px] text-center top-[210px] translate-x-[-50%] w-[1920px]">Choose your persona</p>
      <PersonaJada />
      <PersonaGus />
    </div>
  );
}