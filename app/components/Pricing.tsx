
import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-center text-[#172026] text-2xl font-medium lg:text-[42px]">
        Flexible Plans For You
      </h1>
                                             
      <p className="pt-[16px] pb-[48px] text-center lg:text-[18px]">No hidden fees!</p>

      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
        <div className="w-full rounded-[18px] bg-[#dddddd] p-6 flex flex-col lg:justify-between">
          <div>
          <h3 className="font-medium text-[rgb(67,40,235)] text-[18px] lg:text-2xl">
            Free Trial
          </h3>
          <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
            Perfect for testing the water
          </p>
          <h2 className="pt-4 text-2xl font-medium">
            0$ <span className="text-[#5F7896] lg:text-[32px]">/mo</span>
          </h2>
          <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
            <li className="flex gap-x-2">
              <span>
                <Image src={Check} alt="include" className="gap-x-2 flex items-center" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex gap-x-2">
              <span>
                <Image src={Check} alt="include" className="gap-x-2 flex items-center" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex gap-x-2">
              <span>
                <Image src={Check} alt="include" className="gap-x-2 flex items-center" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>
        </div>
      <button className="mt-[16px] rounded-[14px] py-[14px] text-[#4328EB] px-[90px] bg-[#CCCCCC] font-medium text-2xl">
        Start Trial
      </button>
    </div>

<div className="w-full rounded-[18px] bg-[#4328EB] p-6 flex flex-col">
  <div>
<h3 className="font-medium  text-[18px] lg:text-xl text-white">
  Bussiness
</h3>
<p className="pt-[12px] text-white lg:text-[18px]">
  Perfect for testing the water
</p>
<h2 className="pt-4 text-3xl font-medium text-white">
 $500 <span className="text-white lg:text-[32px]">/mo</span>
</h2>
<ul className="flex flex-col gap-y-2 pt-4 text-white">
  <li className="flex gap-x-2">
    <span>
      <Image src={Check} alt="include" className="gap-x-2 flex items-center text-white" />
    </span>
    Lorem ipsum dolor sit amet
  </li>
  <li className="flex gap-x-2">
    <span>
      <Image src={Check} alt="include" className="gap-x-2 flex items-center text-white" />
    </span>
    Lorem ipsum dolor sit amet
  </li>
  <li className="flex gap-x-2">
    <span>
      <Image src={Check} alt="include" className="gap-x-2 flex items-center text-white" />
    </span>
    Lorem ipsum dolor sit amet
  </li>
  <li className="flex gap-x-2">
    <span>
      <Image src={Check} alt="include" className="gap-x-2 flex items-center" />
    </span>
    Lorem ipsum dolor sit amet
  </li>
  <li className="flex gap-x-2">
    <span>
      <Image src={Check} alt="include" className="gap-x-2 flex items-center" />
    </span>
    Lorem ipsum dolor sit amet
  </li>
</ul>
</div>
<button className="mt-[16px] rounded-[14px] py-[14px] text-[#4328EB]  bg-[#CCCCCC] font-medium text-2xl">
Get Started
</button>
</div>

<div className="w-full rounded-[18px] p-6 flex flex-col bg-[#dddddd] lg:justify-between">
  <div>
<h3 className="font-medium text-[rgb(67,40,235)] text-[18px] lg:text-xl">
  Enterprize
</h3>
<p className="pt-[12px] text-[#36485C] lg:text-[18px]">
  Perfect for big Companies
</p>
<h2 className="pt-4 text-2xl font-medium">
  Custom
</h2>
   <p className="pt-4 text-[16px] text-[#36485C]"> Lorem ipsum dolor sit amet, consectetur   adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

   <p className="pt-2 text-[16px] text-[#36485C]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  
   aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit.</p>
 </div>
<button className="mt-[16px] rounded-[14px] py-[14px] text-[#4328EB]  bg-[#CCCCCC] font-medium text-2xl">
Contact Us
</button>
</div>
</div>
</div>

  );

}