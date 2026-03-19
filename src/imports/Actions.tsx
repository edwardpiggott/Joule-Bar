import svgPaths from "./svg-siq4xmxfxa";
import img1000F717741148QjKlDtFMn8Y4BgRglDopZQu7HjhDFisF2 from "figma:asset/c1537b9926d6a67101214bdce34a670fd3f41d39.png";
import imgImage2 from "figma:asset/64a60670f053f5f6072796a7250d0083ad88e077.png";
import imgAvatar from "figma:asset/d292dd374339b730261f5e0c4639b0449008dfba.png";
import { img1000F717741148QjKlDtFMn8Y4BgRglDopZQu7HjhDFisF1 } from "./svg-e6reg";

function SysHelp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="sys-help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6006_25305)" id="sys-help">
          <path d={svgPaths.p29415600} fill="var(--fill-0, #131E29)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_6006_25305">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <SysHelp />
    </div>
  );
}

function SapCompanionIconButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="SAP Companion Icon Button">
      <IconButton />
    </div>
  );
}

function Feedback() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="feedback">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6006_25296)" id="feedback">
          <g id="Icon">
            <path d={svgPaths.p2c3d2af2} fill="var(--fill-0, #131E29)" />
            <path d={svgPaths.p3b3f5b00} fill="var(--fill-0, #131E29)" />
            <path d={svgPaths.p63bb580} fill="var(--fill-0, #131E29)" />
            <path clipRule="evenodd" d={svgPaths.pb28c500} fill="var(--fill-0, #131E29)" fillRule="evenodd" />
            <path d={svgPaths.p199fa180} fill="var(--fill-0, #131E29)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6006_25296">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Feedback />
    </div>
  );
}

function QualtricsFeedbackIconButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Qualtrics Feedback Icon Button">
      <IconButton1 />
    </div>
  );
}

function Da() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="da">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6042_2542)" id="da">
          <g id="Icon">
            <path d={svgPaths.p3e9c600} fill="var(--fill-0, #131E29)" />
            <path clipRule="evenodd" d={svgPaths.p1a20ed00} fill="var(--fill-0, #131E29)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6042_2542">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Da />
    </div>
  );
}

function JouleIconButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Joule Icon Button">
      <IconButton2 />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bell">
          <path d={svgPaths.p2f6100} fill="var(--fill-0, #131E29)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Bell />
    </div>
  );
}

function NotificationsIconButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Notifications Icon Button">
      <IconButton3 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[31px] relative shrink-0 w-[32px]" data-name="Component 1">
      <div className="absolute inset-[-9.68%_-43.75%_-48.39%_-146.88%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[47px_3px] mask-size-[32px_31px]" data-name="1000_F_717741148_qjKLDtFMn8y4bgRglDopZQu7HjhDFisF 1" style={{ maskImage: `url('${img1000F717741148QjKlDtFMn8Y4BgRglDopZQu7HjhDFisF1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1000F717741148QjKlDtFMn8Y4BgRglDopZQu7HjhDFisF2} />
      </div>
      <div className="absolute inset-[19.35%_9.38%_-9.68%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-6px] mask-size-[32px_31px]" data-name="image 2" style={{ maskImage: `url('${img1000F717741148QjKlDtFMn8Y4BgRglDopZQu7HjhDFisF1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgAvatar} />
      <Component />
    </div>
  );
}

function NavigationApps() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="navigation/apps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/apps">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1a397700} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e48c600} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p30aafc00} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p59ddd00} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3dd58618} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3d728000} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29729c80} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p277ae740} fill="#1D2D3E" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1ca5c380} fill="#1D2D3E" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Inner() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Inner">
      <NavigationApps />
    </div>
  );
}

function ButtonIconOnly() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button/Icon-Only">
      <Inner />
    </div>
  );
}

export default function Actions() {
  return (
    <div className="relative size-full" data-name="Actions">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-end pl-0 pr-[16px] py-0 relative size-full">
          <SapCompanionIconButton />
          <QualtricsFeedbackIconButton />
          <JouleIconButton />
          <NotificationsIconButton />
          <Avatar />
          <ButtonIconOnly />
        </div>
      </div>
    </div>
  );
}