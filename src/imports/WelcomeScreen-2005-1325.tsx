import svgPaths from "./svg-6hpyl19dn";

function Title() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[33px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <p className="font-['72:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Joule</p>
        </div>
      </div>
    </div>
  );
}

function RightButton() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-end pl-0 pr-[16px] py-[10px] relative shrink-0" data-name="Right button">
      <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Fullscreen">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute bottom-0 left-0 right-0 top-[0.06%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3ec0b670} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Overflow menu">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute bottom-[37.5%] left-0 right-0 top-[37.5%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
              <path d={svgPaths.p29461680} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Close (should be minimize)">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[18.86%_18.8%_18.73%_18.8%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p60d100} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PanelHeader() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#5d36ff] h-[56px] items-center justify-center max-h-[56px] min-h-[56px] min-w-[416px] px-0 py-[10px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 to-[#6431fa] w-full" data-name="Panel / Header">
      <Title />
      <RightButton />
    </div>
  );
}

function Intro() {
  return <div className="absolute bg-gradient-to-b from-[#6135fe] inset-0 to-[#a100c2]" data-name="Intro - 6" />;
}

function TextMessage() {
  return (
    <div className="absolute bg-[#f5f6f7] box-border content-stretch flex flex-col gap-[10px] inset-[53.8%_10.86%_10.76%_0.05%] items-center overflow-clip px-[16px] py-[8px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px]" data-name="Text Message">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#32363a] text-[14px] w-[270px]">{`Talk to me naturally. For example, “what are my tasks for today?” `}</p>
    </div>
  );
}

function JouleAnimatedText() {
  return (
    <div className="absolute bottom-[50.63%] content-stretch flex gap-[10px] items-center justify-center left-[-0.13px] top-[11.39%]" data-name="joule animated text">
      <div className="flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-nowrap text-white tracking-[-1px]">
        <p className="leading-[60px] whitespace-pre">How can I</p>
      </div>
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="joule text animation">
        <div className="flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-nowrap text-white tracking-[-1px]">
          <p className="leading-[60px] whitespace-pre">help</p>
        </div>
      </div>
      <div className="flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-nowrap text-white tracking-[-1px]">
        <p className="leading-[60px] whitespace-pre">you?</p>
      </div>
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div className="[grid-area:1_/_1] h-[158px] ml-[16px] mt-[238px] relative w-[339px]" data-name="Welcome message">
      <TextMessage />
      <div className="absolute bottom-[88.92%] flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] left-0 not-italic right-[73.16%] text-[20px] text-nowrap text-white top-[-7.91%]">
        <p className="leading-[30px] whitespace-pre">Hello Gus,</p>
      </div>
      <JouleAnimatedText />
    </div>
  );
}

function WelcomeMessage1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Welcome message">
      <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#5d36ff] from-[6.464%] h-[408px] ml-0 mt-0 overflow-x-clip overflow-y-auto relative to-[#a100c2] to-[93.756%] w-[416px]" data-name="Panel - gradient">
        <div className="absolute bg-[#f7f7f7] inset-0" data-name="BG - white (default)" />
        <Intro />
      </div>
      <WelcomeMessage />
      <div className="[grid-area:1_/_1] ml-[148px] mt-[54px] overflow-clip relative size-[120px]" data-name="Joule-Loop">
        <div className="absolute inset-[30.83%_11.67%_1.67%_20%]" data-name="Diamond">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 81">
            <path clipRule="evenodd" d={svgPaths.p1b500880} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          </svg>
        </div>
        <div className="absolute inset-[16.75%_8.25%_68.75%_77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p34f8d380} fill="var(--fill-0, white)" id="Star 3" />
          </svg>
        </div>
        <div className="absolute bottom-[78.25%] left-[24%] right-[54.25%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
            <path d={svgPaths.p24343580} fill="var(--fill-0, white)" id="Star 2" />
          </svg>
        </div>
        <div className="absolute inset-[21.75%_79%_63.5%_6.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p3a8fa300} fill="var(--fill-0, white)" id="Star 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function JouleMessageBubble() {
  return (
    <div className="bg-[#eff1f2] max-w-[288px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Joule message bubble">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center max-w-inherit overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1d2d3e] text-[14px] text-nowrap whitespace-pre">Get started with Joule</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eff1f2] border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function ButtonQuickReply() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[4px] items-center justify-center ml-0 mt-0 overflow-clip px-[8px] py-[4px] relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_4px_8px_0px_rgba(27,144,255,0.16)]" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">Update Pronouns</p>
    </div>
  );
}

function QuickRepliesRow() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Quick replies - row">
      <ButtonQuickReply />
    </div>
  );
}

function ButtonQuickReply1() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[4px] items-center justify-center ml-0 mt-0 overflow-clip px-[8px] py-[4px] relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_4px_8px_0px_rgba(27,144,255,0.16)]" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">Request Feedback</p>
    </div>
  );
}

function QuickRepliesRow1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Quick replies - row">
      <ButtonQuickReply1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0">
      <QuickRepliesRow />
      <QuickRepliesRow1 />
    </div>
  );
}

function ButtonQuickReply2() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[4px] items-center justify-center ml-0 mt-0 overflow-clip px-[8px] py-[4px] relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_4px_8px_0px_rgba(27,144,255,0.16)]" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">Give Spot Award</p>
    </div>
  );
}

function QuickRepliesRow2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Quick replies - row">
      <ButtonQuickReply2 />
    </div>
  );
}

function ButtonQuickReply3() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[4px] items-center justify-center ml-0 mt-0 overflow-clip px-[8px] py-[4px] relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_4px_8px_0px_rgba(27,144,255,0.16)]" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">View Worker Profile</p>
    </div>
  );
}

function QuickRepliesRow3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Quick replies - row">
      <ButtonQuickReply3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0">
      <QuickRepliesRow2 />
      <QuickRepliesRow3 />
    </div>
  );
}

function Frame2() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" />;
}

function Content() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center max-w-[1200px] min-w-[416px] overflow-x-clip overflow-y-auto px-0 py-[16px] relative shrink-0" data-name="content">
      <div className="content-stretch flex flex-col gap-[12px] items-start justify-center overflow-clip relative shrink-0 w-[384px]" data-name="Message type / text / Joule">
        <JouleMessageBubble />
      </div>
      <div className="box-border content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[2px] py-[8px] relative shrink-0 w-[385px]" data-name="Quick replies">
        <Frame />
        <Frame1 />
        <Frame2 />
      </div>
    </div>
  );
}

function BodyAutoLayout() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-center min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[416px]" data-name="Body_Auto layout">
      <Content />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-[2px] relative shrink-0">
      <div className="h-[24px] shrink-0 w-[2px]" data-name="Cursor" />
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[7px] pt-[5px] px-0 relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['72:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#556b82] text-[14px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Message Joule...</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[303px]">
      <Frame3 />
      <Text />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[4px] h-[28px] items-center justify-end relative shrink-0 w-[66px]" data-name="Actions">
      <div className="bg-[#0070f2] box-border content-stretch flex gap-[6px] items-center justify-center min-h-[26px] opacity-40 px-[6px] py-0 relative rounded-[24px] shrink-0" data-name="Icon Button">
        <div aria-hidden="true" className="absolute border border-[#0070f2] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[6.25%_6.31%_6.25%_6.25%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p28439e00} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input Field">
      <div aria-hidden="true" className="absolute border-2 border-[#0064d9] border-solid inset-[-2px] pointer-events-none rounded-[10px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_4px_8px_0px_rgba(27,144,255,0.16)]" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end justify-between px-[6px] py-[4px] relative w-full">
          <Frame4 />
          <Actions />
        </div>
      </div>
    </div>
  );
}

export default function WelcomeScreen() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end justify-end relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] size-full" data-name="Welcome screen">
      <PanelHeader />
      <WelcomeMessage1 />
      <BodyAutoLayout />
      <div className="box-border content-stretch flex items-end justify-center min-w-[416px] pb-[12px] pt-[16px] px-[16px] relative shrink-0 w-[416px]" data-name="blinkenlight">
        <InputField />
      </div>
      <div className="box-border content-stretch flex gap-[10px] items-end justify-center max-w-[416px] pb-[16px] pt-[4px] px-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0" data-name="Disclaimer">
        <div className="flex flex-col font-['72:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32363a] text-[11px] text-center w-[386px]">
          <p className="leading-[12px]">Joule uses AI, verify results.</p>
        </div>
      </div>
    </div>
  );
}