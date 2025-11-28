import svgPaths from "./svg-rht1kgtu2r";
import imgImageBackground from "figma:asset/5255cd25c8cd0bc5ec323bd31f633fef995255b2.png";
import imgImageWithFallback from "figma:asset/be7aa6869c0dd7bc0a38db1c7b227423fccc033c.png";
import imgImageWithFallback1 from "figma:asset/5385e2afb4214dd1b470e30c87f785bc04587ad8.png";
import imgImageWithFallback2 from "figma:asset/12e2d6ffb363ec55c2eb40146b38a76287f03c56.png";
import imgImageWithFallback3 from "figma:asset/b055d92b76d7df4cbef22ede4f4dd095183ec601.png";
import imgImageWithFallback4 from "figma:asset/f86879efd93a41800871bacc9062abf35c78c52e.png";
import imgImageWithFallback5 from "figma:asset/b81dff829ad5ddf037e8556600362ad729b3ddff.png";
import imgImageWithFallback6 from "figma:asset/498cda2e361f085c7f221efdd404c72fa00f2f5d.png";
import imgImageWithFallback7 from "figma:asset/41eac115b5a83ebbeea2c1cb67dfc22fa80ea9ac.png";
import imgImageWithFallback8 from "figma:asset/7969a48f101d9f79c73d9e21bc161c8dd8fa5f53.png";
import imgImageWithFallback9 from "figma:asset/88448c58179a5eea9134c407aeaae2f0c7f20d7d.png";
import imgImageWithFallback10 from "figma:asset/aa269c27df4615251dc2852a2ab8eab36c85077b.png";
import imgPrimitiveImg from "figma:asset/ac66e0ad1c62068bfe71b304f7fa03ae057dbbbb.png";
import imgPrimitiveImg1 from "figma:asset/5ccccb0bf7562c35bd34a117febfec3f5b9da1d6.png";

function Section() {
  return <div className="absolute h-[723.556px] left-[1460.44px] top-0 w-0" data-name="Section" />;
}

function ImageBackground() {
  return (
    <div className="absolute h-[723.556px] left-0 top-0 w-[1460.44px]" data-name="Image (Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBackground} />
    </div>
  );
}

function Container() {
  return <div className="absolute h-[723.556px] left-0 top-0 w-[1460.44px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[723.556px] left-0 top-0 w-[1460.44px]" data-name="Container">
      <ImageBackground />
      <Container />
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[723.556px] relative shrink-0 w-[120px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[723.556px] w-[120px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[12px]">
        <p className="basis-0 font-['Arimo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#101828] text-[12px]">我</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">休閒風</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[61.278px]" data-name="Container">
      <Text />
      <Text1 />
      <Button />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">M</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.278px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.278px]">
        <Container2 />
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container3 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function ImageErrorLoadingImage() {
  return <div className="absolute left-[51.22px] size-[88px] top-0" data-name="Image (Error loading image)" />;
}

function ImageWithFallback() {
  return (
    <div className="absolute bg-gray-100 h-[88px] left-0 overflow-clip top-0 w-[190.444px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Container5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2191)" id="Icon">
          <path d={svgPaths.pe43ac80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2191">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon2 />
      <Text3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon3 />
      <Text4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1a826200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon4 />
      <Text5 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function FeedPostCard() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-0 w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container4 />
        <Container6 />
        <Container11 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[12px]">
        <p className="basis-0 font-['Arimo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#101828] text-[12px]">我</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">休閒風</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[61.278px]" data-name="Container">
      <Text6 />
      <Text7 />
      <Button2 />
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">M</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.278px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.278px]">
        <Container12 />
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container13 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function ImageErrorLoadingImage1() {
  return <div className="absolute left-[51.22px] size-[88px] top-0" data-name="Image (Error loading image)" />;
}

function ImageWithFallback1() {
  return (
    <div className="absolute bg-gray-100 h-[88px] left-0 overflow-clip top-0 w-[190.444px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
      <Container15 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2191)" id="Icon">
          <path d={svgPaths.pe43ac80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2191">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon8 />
      <Text9 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon9 />
      <Text10 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1a826200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon10 />
      <Text11 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function FeedPostCard1() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-0 w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container14 />
        <Container16 />
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[12px]">
        <p className="basis-0 font-['Arimo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#101828] text-[12px]">我</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">休閒風</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[61.278px]" data-name="Container">
      <Text12 />
      <Text13 />
      <Button4 />
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">M</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text14 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.278px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.278px]">
        <Container22 />
        <PrimitiveSpan2 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container23 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function ImageErrorLoadingImage2() {
  return <div className="absolute left-[51.22px] size-[88px] top-0" data-name="Image (Error loading image)" />;
}

function ImageWithFallback2() {
  return (
    <div className="absolute bg-gray-100 h-[88px] left-0 overflow-clip top-0 w-[190.444px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage2 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Container25 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2191)" id="Icon">
          <path d={svgPaths.pe43ac80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2191">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon14 />
      <Text15 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon15 />
      <Text16 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe03c80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon16 />
      <Text17 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function FeedPostCard2() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-[319.83px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container24 />
        <Container26 />
        <Container31 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[16.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[16.764px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">街頭風</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[66.042px]" data-name="Container">
      <Text18 />
      <Text19 />
      <Button6 />
    </div>
  );
}

function Text20() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text20 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98.042px]">
        <Container32 />
        <PrimitiveSpan3 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container33 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function CarouselContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[238.056px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback3 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent />
      <Container35 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2191)" id="Icon">
          <path d={svgPaths.pe43ac80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2191">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon20 />
      <Text21 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon21 />
      <Text22 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe03c80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon22 />
      <Text23 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function FeedPostCard3() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-[319.83px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container34 />
        <Container36 />
        <Container41 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[16.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[16.764px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">街頭風</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[66.042px]" data-name="Container">
      <Text24 />
      <Text25 />
      <Button8 />
    </div>
  );
}

function Text26() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text26 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98.042px]">
        <Container42 />
        <PrimitiveSpan4 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container43 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function CarouselContent1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[238.056px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback4 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent1 />
      <Container45 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon26 />
      <Text27 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon27 />
      <Text28 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon28 />
      <Text29 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function FeedPostCard4() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-[639.67px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container44 />
        <Container46 />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[16.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[16.764px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">街頭風</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[66.042px]" data-name="Container">
      <Text30 />
      <Text31 />
      <Button10 />
    </div>
  );
}

function Text32() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text32 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98.042px]">
        <Container52 />
        <PrimitiveSpan5 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon30 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container53 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function CarouselContent2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[238.056px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback5 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent2 />
      <Container55 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon32 />
      <Text33 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon33 />
      <Text34 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon34 />
      <Text35 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function FeedPostCard5() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-[639.67px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container54 />
        <Container56 />
        <Container61 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[16.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[16.764px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">街頭風</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[66.042px]" data-name="Container">
      <Text36 />
      <Text37 />
      <Button12 />
    </div>
  );
}

function Text38() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text38 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98.042px]">
        <Container62 />
        <PrimitiveSpan6 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon36 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container63 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function CarouselContent3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[238.056px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback6 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent3 />
      <Container65 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2211)" id="Icon">
          <path d={svgPaths.p3678e180} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2211">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon38 />
      <Text39 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon39 />
      <Text40 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon40 />
      <Text41 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon41 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function FeedPostCard6() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-[959.5px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container64 />
        <Container66 />
        <Container71 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[16.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[16.764px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">街頭風</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[66.042px]" data-name="Container">
      <Text42 />
      <Text43 />
      <Button14 />
    </div>
  );
}

function Text44() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text44 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98.042px]">
        <Container72 />
        <PrimitiveSpan7 />
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon42 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container73 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function CarouselContent4() {
  return (
    <div className="content-stretch flex flex-col h-[238.056px] items-start overflow-clip relative shrink-0 w-full" data-name="CarouselContent">
      <ImageWithFallback7 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col h-[238.056px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent4 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2211)" id="Icon">
          <path d={svgPaths.p3678e180} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2211">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon43 />
      <Text45 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon44 />
      <Text46 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon45 />
      <Text47 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon46 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function FeedPostCard7() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-[959.5px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container74 />
        <Container75 />
        <Container80 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[16.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[16.764px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">街頭風</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[66.042px]" data-name="Container">
      <Text48 />
      <Text49 />
      <Button16 />
    </div>
  );
}

function Text50() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text50 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98.042px]">
        <Container81 />
        <PrimitiveSpan8 />
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon47 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container82 />
          <Button17 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[238.056px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[238.056px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[238.056px] w-[190.444px]" />
    </div>
  );
}

function CarouselContent5() {
  return (
    <div className="absolute content-stretch flex h-[238.056px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback8 />
      <ImageWithFallback9 />
      <ImageWithFallback10 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselPrevious() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselPrevious">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[45px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Previous slide</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[8px] opacity-50 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon48 />
      <CarouselPrevious />
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselNext() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselNext">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[32px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Next slide</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[150.44px] opacity-0 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon49 />
      <CarouselNext />
    </div>
  );
}

function FeedPostCard8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[23px] left-[146.65px] rounded-[2.98262e+07px] top-[203.06px] w-[31.792px]" data-name="FeedPostCard">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[8px] text-[10px] text-white top-[2.89px] w-[16px]">1/3</p>
    </div>
  );
}

function Carousel() {
  return (
    <div className="absolute h-[238.056px] left-0 top-0 w-[190.444px]" data-name="Carousel">
      <CarouselContent5 />
      <Button18 />
      <Button19 />
      <FeedPostCard8 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon50 />
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Carousel />
      <Container84 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2211)" id="Icon">
          <path d={svgPaths.p3678e180} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2211">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon51 />
      <Text51 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon52 />
      <Text52 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon53 />
      <Text53 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon54 />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function FeedPostCard9() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-[1279.33px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container83 />
        <Container85 />
        <Container90 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-[32px] top-[4px] w-[16.764px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text55 />
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.764px]">
        <Text54 />
        <PrimitiveSpan9 />
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon55 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container91 />
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback11() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[238.056px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback12() {
  return (
    <div className="h-[238.056px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[238.056px] w-[190.444px]" />
    </div>
  );
}

function CarouselContent6() {
  return (
    <div className="absolute content-stretch flex h-[238.056px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback11 />
      <ImageWithFallback12 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselPrevious1() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselPrevious">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[45px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Previous slide</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[8px] opacity-50 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon56 />
      <CarouselPrevious1 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselNext1() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselNext">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[32px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Next slide</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[150.44px] opacity-0 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon57 />
      <CarouselNext1 />
    </div>
  );
}

function FeedPostCard10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[23px] left-[146.65px] rounded-[2.98262e+07px] top-[203.06px] w-[31.792px]" data-name="FeedPostCard">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[8px] text-[10px] text-white top-[2.89px] w-[16px]">1/2</p>
    </div>
  );
}

function Carousel1() {
  return (
    <div className="absolute h-[238.056px] left-0 top-0 w-[190.444px]" data-name="Carousel">
      <CarouselContent6 />
      <Button21 />
      <Button22 />
      <FeedPostCard10 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon58 />
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Carousel1 />
      <Container93 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2211)" id="Icon">
          <path d={svgPaths.p3678e180} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2211">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon59 />
      <Text56 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon60 />
      <Text57 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon61 />
      <Text58 />
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon62 />
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Container96 />
      <Container97 />
      <Container98 />
    </div>
  );
}

function FeedPostCard11() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-[1279.33px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container92 />
        <Container94 />
        <Container99 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-[32px] top-[4px] w-[16.764px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan10() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text60 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.764px]">
        <Text59 />
        <PrimitiveSpan10 />
      </div>
    </div>
  );
}

function Icon63() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon63 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container100 />
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback13() {
  return (
    <div className="h-[237.75px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[237.75px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback14() {
  return (
    <div className="h-[285.403px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[285.403px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback15() {
  return (
    <div className="h-[285.667px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback9} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[285.667px] w-[190.444px]" />
    </div>
  );
}

function CarouselContent7() {
  return (
    <div className="absolute content-stretch flex h-[285.667px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback13 />
      <ImageWithFallback14 />
      <ImageWithFallback15 />
    </div>
  );
}

function Icon64() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselPrevious2() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselPrevious">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[45px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Previous slide</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[8px] opacity-50 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon64 />
      <CarouselPrevious2 />
    </div>
  );
}

function Icon65() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselNext2() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselNext">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[32px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Next slide</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[150.44px] opacity-0 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon65 />
      <CarouselNext2 />
    </div>
  );
}

function FeedPostCard12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[23px] left-[146.65px] rounded-[2.98262e+07px] top-[203.06px] w-[31.792px]" data-name="FeedPostCard">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[8px] text-[10px] text-white top-[2.89px] w-[16px]">1/3</p>
    </div>
  );
}

function Carousel2() {
  return (
    <div className="absolute h-[238.056px] left-0 top-0 w-[190.444px]" data-name="Carousel">
      <CarouselContent7 />
      <Button24 />
      <Button25 />
      <FeedPostCard12 />
    </div>
  );
}

function Icon66() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon66 />
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Carousel2 />
      <Container102 />
    </div>
  );
}

function Icon67() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon67 />
      <Text61 />
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon68 />
      <Text62 />
    </div>
  );
}

function Icon69() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon69 />
      <Text63 />
    </div>
  );
}

function Icon70() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon70 />
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <Container105 />
      <Container106 />
      <Container107 />
    </div>
  );
}

function FeedPostCard13() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-[1599.17px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container101 />
        <Container103 />
        <Container108 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-[32px] top-[4px] w-[16.764px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
    </div>
  );
}

function Text65() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan11() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text65 />
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.764px]">
        <Text64 />
        <PrimitiveSpan11 />
      </div>
    </div>
  );
}

function Icon71() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon71 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container109 />
          <Button26 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback16() {
  return (
    <div className="h-[237.75px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[237.75px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback17() {
  return (
    <div className="h-[285.403px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[285.403px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback18() {
  return (
    <div className="h-[285.667px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback9} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[285.667px] w-[190.444px]" />
    </div>
  );
}

function ImageWithFallback19() {
  return (
    <div className="h-[285.667px] relative shrink-0 w-[190.444px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback10} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[285.667px] w-[190.444px]" />
    </div>
  );
}

function CarouselContent8() {
  return (
    <div className="absolute content-stretch flex h-[285.667px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback16 />
      <ImageWithFallback17 />
      <ImageWithFallback18 />
      <ImageWithFallback19 />
    </div>
  );
}

function Icon72() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselPrevious3() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselPrevious">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[45px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Previous slide</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[8px] opacity-50 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon72 />
      <CarouselPrevious3 />
    </div>
  );
}

function Icon73() {
  return (
    <div className="absolute left-[7.11px] size-[16px] top-[7.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CarouselNext3() {
  return (
    <div className="absolute left-[14.61px] overflow-clip size-px top-[14.61px]" data-name="CarouselNext">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[32px] text-[14px] text-center text-neutral-950 text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">Next slide</p>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-white border-[0.889px] border-[rgba(0,0,0,0.1)] border-solid left-[150.44px] opacity-0 rounded-[2.98262e+07px] size-[32px] top-[103.03px]" data-name="Button">
      <Icon73 />
      <CarouselNext3 />
    </div>
  );
}

function FeedPostCard14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[23px] left-[146.65px] rounded-[2.98262e+07px] top-[203.06px] w-[31.792px]" data-name="FeedPostCard">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[8px] text-[10px] text-white top-[2.89px] w-[16px]">1/4</p>
    </div>
  );
}

function Carousel3() {
  return (
    <div className="absolute h-[238.056px] left-0 top-0 w-[190.444px]" data-name="Carousel">
      <CarouselContent8 />
      <Button27 />
      <Button28 />
      <FeedPostCard14 />
    </div>
  );
}

function Icon74() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon74 />
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Carousel3 />
      <Container111 />
    </div>
  );
}

function Icon75() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon75 />
      <Text66 />
    </div>
  );
}

function Icon76() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon76 />
      <Text67 />
    </div>
  );
}

function Icon77() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon77 />
      <Text68 />
    </div>
  );
}

function Icon78() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon78 />
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container113 />
      <Container114 />
      <Container115 />
      <Container116 />
    </div>
  );
}

function FeedPostCard15() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-[1599.17px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container110 />
        <Container112 />
        <Container117 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-[32px] top-[4px] w-[16.764px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan12() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text70 />
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.764px]">
        <Text69 />
        <PrimitiveSpan12 />
      </div>
    </div>
  );
}

function Icon79() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon79 />
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container118 />
          <Button29 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback20() {
  return (
    <div className="h-[285.667px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback9} />
    </div>
  );
}

function CarouselContent9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[285.667px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback20 />
    </div>
  );
}

function Icon80() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon80 />
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent9 />
      <Container120 />
    </div>
  );
}

function Icon81() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon81 />
      <Text71 />
    </div>
  );
}

function Icon82() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text72() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon82 />
      <Text72 />
    </div>
  );
}

function Icon83() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text73() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon83 />
      <Text73 />
    </div>
  );
}

function Icon84() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon84 />
    </div>
  );
}

function Container126() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container122 />
      <Container123 />
      <Container124 />
      <Container125 />
    </div>
  );
}

function FeedPostCard16() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-[1919px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container119 />
        <Container121 />
        <Container126 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[16.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[16.764px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[5.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[5.278px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12px]">•</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[36px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px] text-center">街頭風</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15.986px] items-center left-[32px] top-[4px] w-[66.042px]" data-name="Container">
      <Text74 />
      <Text75 />
      <Button30 />
    </div>
  );
}

function Text76() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan13() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text76 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98.042px]">
        <Container127 />
        <PrimitiveSpan13 />
      </div>
    </div>
  );
}

function Icon85() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon85 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container128 />
          <Button31 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback21() {
  return (
    <div className="h-[285.667px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback10} />
    </div>
  );
}

function CarouselContent10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[285.667px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback21 />
    </div>
  );
}

function Icon86() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon86 />
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent10 />
      <Container130 />
    </div>
  );
}

function Icon87() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text77() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon87 />
      <Text77 />
    </div>
  );
}

function Icon88() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text78() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon88 />
      <Text78 />
    </div>
  );
}

function Icon89() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text79() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon89 />
      <Text79 />
    </div>
  );
}

function Icon90() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon90 />
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container132 />
      <Container133 />
      <Container134 />
      <Container135 />
    </div>
  );
}

function FeedPostCard17() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-[1919px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container129 />
        <Container131 />
        <Container136 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-[32px] top-[4px] w-[16.764px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
    </div>
  );
}

function Text81() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan14() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text81 />
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.764px]">
        <Text80 />
        <PrimitiveSpan14 />
      </div>
    </div>
  );
}

function Icon91() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon91 />
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container137 />
          <Button32 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback22() {
  return (
    <div className="h-[237.75px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function CarouselContent11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[237.75px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback22 />
    </div>
  );
}

function Icon92() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon92 />
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent11 />
      <Container139 />
    </div>
  );
}

function Icon93() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text82() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon93 />
      <Text82 />
    </div>
  );
}

function Icon94() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text83() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon94 />
      <Text83 />
    </div>
  );
}

function Icon95() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text84() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon95 />
      <Text84 />
    </div>
  );
}

function Icon96() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon96 />
    </div>
  );
}

function Container145() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Container142 />
      <Container143 />
      <Container144 />
    </div>
  );
}

function FeedPostCard18() {
  return (
    <div className="absolute bg-white h-[311.833px] left-0 rounded-[10px] top-[2238.83px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container138 />
        <Container140 />
        <Container145 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text85() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-[32px] top-[4px] w-[16.764px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#101828] text-[12px] text-nowrap whitespace-pre">kai</p>
    </div>
  );
}

function Text86() {
  return (
    <div className="basis-0 bg-[#ececf0] grow h-[24px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center justify-center relative w-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">K</p>
      </div>
    </div>
  );
}

function PrimitiveSpan15() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[2.98262e+07px] size-[24px] top-0" data-name="Primitive.span">
      <Text86 />
    </div>
  );
}

function Container146() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[48.764px]">
        <Text85 />
        <PrimitiveSpan15 />
      </div>
    </div>
  );
}

function Icon97() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon97 />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-0 relative w-full">
          <Container146 />
          <Button33 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback23() {
  return (
    <div className="h-[285.403px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
    </div>
  );
}

function CarouselContent12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[285.403px] items-start left-0 overflow-clip top-0 w-[190.444px]" data-name="CarouselContent">
      <ImageWithFallback23 />
    </div>
  );
}

function Icon98() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
            <path d={svgPaths.p15522570} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-0.58px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0.583333 0.583333H10.9632" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p339ccc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col items-start left-[12px] pb-0 pt-[8px] px-[8px] rounded-[2.98262e+07px] size-[30px] top-[196.06px]" data-name="Container">
      <Icon98 />
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-gray-100 h-[238.056px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <CarouselContent12 />
      <Container148 />
    </div>
  );
}

function Icon99() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_170_2214)" id="Icon">
          <path d={svgPaths.p95e9cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_170_2214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text87() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[12px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon99 />
      <Text87 />
    </div>
  );
}

function Icon100() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p33b62380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1a303d00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37036280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p34a51280} id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text88() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[13.917px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[13.917px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[64.46px] top-[8px] w-[33.917px]" data-name="Container">
      <Icon100 />
      <Text88 />
    </div>
  );
}

function Icon101() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14af6540} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text89() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[6.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[6.958px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[116.92px] top-[8px] w-[26.958px]" data-name="Container">
      <Icon101 />
      <Text89 />
    </div>
  );
}

function Icon102() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[162.42px] size-[16px] top-[8px]" data-name="Container">
      <Icon102 />
    </div>
  );
}

function Container154() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Container">
      <Container150 />
      <Container151 />
      <Container152 />
      <Container153 />
    </div>
  );
}

function FeedPostCard19() {
  return (
    <div className="absolute bg-white h-[311.833px] left-[200.22px] rounded-[10px] top-[2238.83px] w-[192.222px]" data-name="FeedPostCard">
      <div className="box-border content-stretch flex flex-col h-[311.833px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[192.222px]">
        <Container147 />
        <Container149 />
        <Container154 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FeedColumnContent() {
  return (
    <div className="h-[2550.67px] relative shrink-0 w-full" data-name="FeedColumnContent">
      <FeedPostCard />
      <FeedPostCard1 />
      <FeedPostCard2 />
      <FeedPostCard3 />
      <FeedPostCard4 />
      <FeedPostCard5 />
      <FeedPostCard6 />
      <FeedPostCard7 />
      <FeedPostCard9 />
      <FeedPostCard11 />
      <FeedPostCard13 />
      <FeedPostCard15 />
      <FeedPostCard16 />
      <FeedPostCard17 />
      <FeedPostCard18 />
      <FeedPostCard19 />
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[608.889px] items-start left-0 overflow-clip pb-0 pl-[8px] pr-[17.778px] pt-[8px] top-[64.89px] w-[418.222px]" data-name="Container">
      <FeedColumnContent />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[70.208px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[70.208px]">
        <p className="absolute font-['Arimo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1d293d] text-[18px] text-nowrap top-[-1.22px] tracking-[-0.45px] whitespace-pre">為你推薦</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="bg-white h-[19.986px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.986px] items-start px-[8px] py-[2px] relative w-[28px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#0f172b] text-[12px] text-center">全</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[19.986px] relative rounded-[8px] shrink-0 w-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.986px] items-start px-[8px] py-[2px] relative w-[28px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#62748e] text-[12px] text-center">男</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[19.986px] relative rounded-[8px] shrink-0 w-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.986px] items-start px-[8px] py-[2px] relative w-[28px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#62748e] text-[12px] text-center">女</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[29.764px] relative rounded-[10px] shrink-0 w-[101.778px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[29.764px] items-center pl-[4.889px] pr-[0.889px] py-[0.889px] relative w-[101.778px]">
        <Button34 />
        <Button35 />
        <Button36 />
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[29.764px] relative shrink-0 w-[183.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[29.764px] items-center relative w-[183.986px]">
        <Heading />
        <Container156 />
      </div>
    </div>
  );
}

function Icon103() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p3b86be00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_12.5%_62.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_62.5%_12.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 14">
            <path d="M0.666667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_37.5%_12.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 14">
            <path d="M0.666667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="relative rounded-[2.98262e+07px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon103 />
      </div>
    </div>
  );
}

function Icon104() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_58.33%_79.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M5.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-[12.5%] right-1/2 top-[79.17%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M6.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_41.67%_70.83%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_12.5%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M6.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_12.5%_20.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M4 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_79.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M5.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[12.5%] right-[66.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M4 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[2.98262e+07px] shrink-0" data-name="SlotClone">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
          <Icon104 />
        </div>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="h-[32px] opacity-0 relative shrink-0 w-[72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[72px]">
        <Button37 />
        <SlotClone />
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex h-[64.889px] items-center justify-between left-0 pb-[0.889px] pt-0 px-[20px] top-0 w-[418.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container157 />
      <Container158 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-[0.889px] border-[rgba(255,255,255,0.4)] border-solid h-[675.556px] left-0 overflow-clip rounded-[24px] top-0 w-[420px]" data-name="Container">
      <Container155 />
      <Container159 />
    </div>
  );
}

function Icon105() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3155f180} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pea6a680} id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TrendingColumnContent() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[7.11px] w-[122px]" data-name="TrendingColumnContent">
      <Icon105 />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[73px] text-[#45556c] text-[14px] text-center text-nowrap top-[-1.11px] translate-x-[-50%] whitespace-pre">查看完整排行榜</p>
    </div>
  );
}

function Icon106() {
  return (
    <div className="absolute left-[348.44px] size-[16px] top-[9.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute bg-white border-[0.889px] border-slate-200 border-solid h-[36px] left-[12px] rounded-[8px] top-[8px] w-[378.222px]" data-name="Button">
      <TrendingColumnContent />
      <Icon106 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Arimo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#90a1b9] text-[12px] tracking-[0.6px] uppercase">推薦達人</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#314158] text-[14px] text-nowrap top-[-1.11px] whitespace-pre">street_style</p>
    </div>
  );
}

function Container162() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#62748e] text-[12px] top-[-1px] w-[74px]">街頭 • 165cm</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.986px] items-start left-[60.89px] top-[10.89px] w-[272.444px]" data-name="Container">
      <Container161 />
      <Container162 />
    </div>
  );
}

function Icon107() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[345.33px] rounded-[2.98262e+07px] size-[32px] top-[12.89px]" data-name="Button">
      <Icon107 />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="relative shrink-0 size-[38.222px]" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[38.222px]" />
    </div>
  );
}

function PrimitiveSpan16() {
  return (
    <div className="absolute left-[8.89px] rounded-[2.98262e+07px] size-[40px] top-[8.89px]" data-name="Primitive.span">
      <div className="box-border content-stretch flex items-start overflow-clip p-[0.889px] relative rounded-[inherit] size-[40px]">
        <PrimitiveImg />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-solid border-white inset-0 pointer-events-none rounded-[2.98262e+07px]" />
    </div>
  );
}

function TrendingUserItem() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[57.778px] relative rounded-[14px] shrink-0 w-full" data-name="TrendingUserItem">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container163 />
      <Button39 />
      <PrimitiveSpan16 />
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#314158] text-[14px] text-nowrap top-[-1.11px] whitespace-pre">fashion_week</p>
    </div>
  );
}

function Container165() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#62748e] text-[12px] top-[-1px] w-[74px]">歐美 • 170cm</p>
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.986px] items-start left-[60.89px] top-[10.89px] w-[272.444px]" data-name="Container">
      <Container164 />
      <Container165 />
    </div>
  );
}

function Icon108() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[345.33px] rounded-[2.98262e+07px] size-[32px] top-[12.89px]" data-name="Button">
      <Icon108 />
    </div>
  );
}

function PrimitiveImg1() {
  return (
    <div className="relative shrink-0 size-[38.222px]" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[38.222px]" />
    </div>
  );
}

function PrimitiveSpan17() {
  return (
    <div className="absolute left-[8.89px] rounded-[2.98262e+07px] size-[40px] top-[8.89px]" data-name="Primitive.span">
      <div className="box-border content-stretch flex items-start overflow-clip p-[0.889px] relative rounded-[inherit] size-[40px]">
        <PrimitiveImg1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-solid border-white inset-0 pointer-events-none rounded-[2.98262e+07px]" />
    </div>
  );
}

function TrendingUserItem1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[57.778px] relative rounded-[14px] shrink-0 w-full" data-name="TrendingUserItem">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container166 />
      <Button40 />
      <PrimitiveSpan17 />
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[155.542px] items-start left-[8px] top-[68px] w-[386.222px]" data-name="Container">
      <Heading1 />
      <TrendingUserItem />
      <TrendingUserItem1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[15.986px] items-start left-0 top-0 w-[386.222px]" data-name="Heading 4">
      <p className="basis-0 font-['Arimo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#90a1b9] text-[12px] tracking-[0.6px] uppercase">熱門品牌</p>
    </div>
  );
}

function Text90() {
  return (
    <div className="bg-[#1d293d] relative rounded-[10px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#314158] text-[16px] text-nowrap top-[-1.22px] whitespace-pre">UNIQLO</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.806px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center relative w-[98.806px]">
        <Text90 />
        <Text91 />
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[30.028px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[30.028px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] text-nowrap whitespace-pre">12.5k</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] box-border content-stretch flex h-[49.778px] items-center justify-between left-0 px-[12.889px] py-[0.889px] rounded-[14px] top-[27.99px] w-[386.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container168 />
      <Text92 />
    </div>
  );
}

function Text93() {
  return (
    <div className="bg-[#1d293d] relative rounded-[10px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.667px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[23.667px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#314158] text-[16px] text-nowrap top-[-1.22px] whitespace-pre">GU</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center relative w-[59.667px]">
        <Text93 />
        <Text94 />
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[23.069px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[23.069px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] text-nowrap whitespace-pre">8.2k</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] box-border content-stretch flex h-[49.778px] items-center justify-between left-0 px-[12.889px] py-[0.889px] rounded-[14px] top-[89.76px] w-[386.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container170 />
      <Text95 />
    </div>
  );
}

function Text96() {
  return (
    <div className="bg-[#1d293d] relative rounded-[10px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Text97() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#314158] text-[16px] text-nowrap top-[-1.22px] whitespace-pre">Nike</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.222px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center relative w-[70.222px]">
        <Text96 />
        <Text97 />
      </div>
    </div>
  );
}

function Text98() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[23.069px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[23.069px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] text-nowrap whitespace-pre">6.7k</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] box-border content-stretch flex h-[49.778px] items-center justify-between left-0 px-[12.889px] py-[0.889px] rounded-[14px] top-[151.54px] w-[386.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container172 />
      <Text98 />
    </div>
  );
}

function Text99() {
  return (
    <div className="bg-slate-200 relative rounded-[10px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Text100() {
  return (
    <div className="h-[24px] relative shrink-0 w-[33.292px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[33.292px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#314158] text-[16px] text-nowrap top-[-1.22px] whitespace-pre">Zara</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center relative w-[69.292px]">
        <Text99 />
        <Text100 />
      </div>
    </div>
  );
}

function Text101() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[23.069px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[23.069px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] text-nowrap whitespace-pre">5.3k</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] box-border content-stretch flex h-[49.778px] items-center justify-between left-0 px-[12.889px] py-[0.889px] rounded-[14px] top-[213.32px] w-[386.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container174 />
      <Text101 />
    </div>
  );
}

function Text102() {
  return (
    <div className="bg-slate-200 relative rounded-[10px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Text103() {
  return (
    <div className="h-[24px] relative shrink-0 w-[51.583px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[51.583px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#314158] text-[16px] text-nowrap top-[-1.22px] whitespace-pre">Adidas</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.583px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center relative w-[87.583px]">
        <Text102 />
        <Text103 />
      </div>
    </div>
  );
}

function Text104() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[23.069px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[23.069px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] text-nowrap whitespace-pre">4.1k</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] box-border content-stretch flex h-[49.778px] items-center justify-between left-0 px-[12.889px] py-[0.889px] rounded-[14px] top-[275.1px] w-[386.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container176 />
      <Text104 />
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute h-[324.875px] left-[8px] top-[247.54px] w-[386.222px]" data-name="Container">
      <Heading2 />
      <Container169 />
      <Container171 />
      <Container173 />
      <Container175 />
      <Container177 />
    </div>
  );
}

function TrendingColumnContent1() {
  return (
    <div className="h-[580.417px] relative shrink-0 w-full" data-name="TrendingColumnContent">
      <Button38 />
      <Container167 />
      <Container178 />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col h-[608.889px] items-start left-0 overflow-clip pb-0 pt-[8px] px-[8px] top-[64.89px] w-[418.222px]" data-name="Container">
      <TrendingColumnContent1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[70.208px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[70.208px]">
        <p className="absolute font-['Arimo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1d293d] text-[18px] text-nowrap top-[-1.22px] tracking-[-0.45px] whitespace-pre">熱門趨勢</p>
      </div>
    </div>
  );
}

function Icon109() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_58.33%_79.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M5.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-[12.5%] right-1/2 top-[79.17%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M6.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_41.67%_70.83%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_12.5%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M6.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_12.5%_20.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M4 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_79.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M5.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[12.5%] right-[66.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M4 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="opacity-0 relative rounded-[2.98262e+07px] shrink-0 size-[32px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon109 />
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex h-[64.889px] items-center justify-between left-0 pb-[0.889px] pt-0 px-[20px] top-0 w-[418.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Heading3 />
      <SlotClone1 />
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] border-[0.889px] border-[rgba(255,255,255,0.4)] border-solid h-[675.556px] left-[444px] overflow-clip rounded-[24px] top-0 w-[420px]" data-name="Container">
      <Container179 />
      <Container180 />
    </div>
  );
}

function Icon110() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M6.66667 16H25.3333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 6.66667V25.3333" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] box-border content-stretch flex items-center justify-center left-[906px] p-[1.778px] rounded-[2.98262e+07px] size-[64px] top-[305.78px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border-[1.778px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[2.98262e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon110 />
    </div>
  );
}

function Container182() {
  return (
    <div className="h-[675.556px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <Container160 />
      <Container181 />
      <SlotClone2 />
    </div>
  );
}

function HomePage() {
  return (
    <div className="bg-[rgba(131,66,66,0)] h-[723.556px] relative shrink-0 w-full" data-name="HomePage">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[723.556px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container182 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[723.556px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[723.556px] items-start overflow-clip relative rounded-[inherit] w-full">
        <HomePage />
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute content-stretch flex h-[723.556px] items-start left-0 top-0 w-[1460.44px]" data-name="Container">
      <Navigation />
      <MainContent />
    </div>
  );
}

function AppContent() {
  return (
    <div className="absolute bg-[rgba(36,99,162,0.45)] h-[723.556px] left-0 overflow-clip shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1460.44px]" data-name="AppContent">
      <Section />
      <Container1 />
      <Container183 />
    </div>
  );
}

function Icon111() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p260aa300} id="Vector_2" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[-1.78px] rounded-[2.98262e+07px] size-[48px] top-0" data-name="Button">
      <Icon111 />
    </div>
  );
}

function Icon112() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_170_3329)" id="Icon">
          <path d={svgPaths.p3f389e00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_170_3329">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-1.78px] rounded-[2.98262e+07px] size-[48px] top-[64px]" data-name="Button">
      <Icon112 />
    </div>
  );
}

function Icon113() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button43() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-1.78px] rounded-[2.98262e+07px] size-[48px] top-[128px]" data-name="Button">
      <Icon113 />
    </div>
  );
}

function Container184() {
  return (
    <div className="h-[176px] relative shrink-0 w-[44.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[176px] relative w-[44.444px]">
        <Button41 />
        <Button42 />
        <Button43 />
      </div>
    </div>
  );
}

function Icon114() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 10H13.3333" id="Vector_2" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V13.3333" id="Vector_3" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button44() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[14px] shrink-0 size-[44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1d293d] border-[0.889px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.889px] relative size-[44px]">
        <Icon114 />
      </div>
    </div>
  );
}

function Icon115() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31151780} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p10d73800} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button45() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-1.78px] rounded-[2.98262e+07px] size-[48px] top-0" data-name="Button">
      <Icon115 />
    </div>
  );
}

function Icon116() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pc3ae900} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button46() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-1.78px] rounded-[2.98262e+07px] size-[48px] top-[64px]" data-name="Button">
      <Icon116 />
    </div>
  );
}

function Icon117() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd604c00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button47() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-1.78px] rounded-[2.98262e+07px] size-[48px] top-[128px]" data-name="Button">
      <Icon117 />
    </div>
  );
}

function Icon118() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button48() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-1.78px] rounded-[2.98262e+07px] size-[48px] top-[192px]" data-name="Button">
      <Icon118 />
    </div>
  );
}

function Container185() {
  return (
    <div className="h-[256px] relative shrink-0 w-[44.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[256px] relative w-[44.444px]">
        <Button45 />
        <Button46 />
        <Button47 />
        <Button48 />
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[373.778px] items-center left-0 overflow-clip top-[104px] w-[70.222px]" data-name="Container">
      <Container184 />
      <Button44 />
      <Container185 />
    </div>
  );
}

function Icon119() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_170_3298)" id="Icon">
          <path d={svgPaths.p20d10600} fill="var(--fill-0, #F0B100)" id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <g id="Vector_2">
            <path d="M10 1.66667V3.33333Z" fill="var(--fill-0, #F0B100)" />
            <path d="M10 1.66667V3.33333" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
          <g id="Vector_3">
            <path d="M10 16.6667V18.3333Z" fill="var(--fill-0, #F0B100)" />
            <path d="M10 16.6667V18.3333" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p1edf3800} fill="var(--fill-0, #F0B100)" />
            <path d={svgPaths.p2561cd80} stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p37ecf580} fill="var(--fill-0, #F0B100)" />
            <path d={svgPaths.p13560080} stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
          <g id="Vector_6">
            <path d="M1.66667 10H3.33333Z" fill="var(--fill-0, #F0B100)" />
            <path d="M1.66667 10H3.33333" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
          <g id="Vector_7">
            <path d="M16.6667 10H18.3333Z" fill="var(--fill-0, #F0B100)" />
            <path d="M16.6667 10H18.3333" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
          <g id="Vector_8">
            <path d={svgPaths.p34285b80} fill="var(--fill-0, #F0B100)" />
            <path d={svgPaths.p1804e640} stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
          <g id="Vector_9">
            <path d={svgPaths.p2efac780} fill="var(--fill-0, #F0B100)" />
            <path d={svgPaths.p18688e80} stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_170_3298">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button49() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-[0.889px] rounded-[2.98262e+07px] size-[40px] top-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-slate-200 border-solid inset-0 pointer-events-none rounded-[2.98262e+07px] shadow-[0px_10px_15px_-3px_rgba(240,177,0,0.2),0px_4px_6px_-4px_rgba(240,177,0,0.2)]" />
      <Icon119 />
    </div>
  );
}

function Icon120() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
            <path d={svgPaths.p6680d80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M10.8333 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 17">
            <path d={svgPaths.p297e5680} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[2px] pb-0 pt-[8px] px-[8px] size-[36px] top-[72px]" data-name="Button">
      <Icon120 />
    </div>
  );
}

function Text105() {
  return (
    <div className="relative rounded-[2.98262e+07px] shrink-0 size-[36.444px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36.444px]">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">ME</p>
      </div>
    </div>
  );
}

function PrimitiveSpan18() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[2.98262e+07px] size-[40px] top-[124px]" data-name="Primitive.span">
      <div className="box-border content-stretch flex items-start overflow-clip p-[1.778px] relative rounded-[inherit] size-[40px]">
        <Text105 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.778px] border-solid border-white inset-0 pointer-events-none rounded-[2.98262e+07px] shadow-[0px_0px_0px_1px_#f1f5f9,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute h-[164px] left-[15.11px] top-[477.78px] w-[40px]" data-name="Container">
      <Button49 />
      <Button50 />
      <PrimitiveSpan18 />
    </div>
  );
}

function Container188() {
  return <div className="bg-[#1d293d] rounded-[6px] size-[6.788px]" data-name="Container" />;
}

function Icon121() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_170_3291)" id="Icon">
          <path d={svgPaths.pd604c00} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_170_3291">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute left-[23.11px] size-[24px] top-[40px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-[3.81px] size-[9.6px] top-[8.61px]" style={{ "--transform-inner-width": "6.765625", "--transform-inner-height": "6.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <Container188 />
        </div>
      </div>
      <Icon121 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-[0.889px] border-[rgba(255,255,255,0.6)] border-solid h-[675.556px] left-[24px] rounded-[2.98262e+07px] top-[24px] w-[72px]" data-name="Navigation">
      <Container186 />
      <Container187 />
      <Container189 />
    </div>
  );
}

export default function DesktopAppDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop App Design">
      <AppContent />
      <Navigation1 />
    </div>
  );
}