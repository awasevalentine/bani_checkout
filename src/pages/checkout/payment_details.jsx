import { useState } from "react";
import SectionHeader from "../../components/headings";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const PaymentDetails = () => {
    var [count, setCount ] = useState(1)


    return ( 
        <div className="font-[HelveticaNeueCyr] flex flex-col py-[24px] px-[16px] gap-[32px] h-[338px] bg-[#FFFFFF]">
            <SectionHeader text='Payment for product ' />
            <div className="flex flex-row justify-between items-center p-0 gap-[8px] w-[100%] h-[40px]">
            <label className="w-[53px] font-[400] leading-[20px] text-[#000000]">Quantity</label>
            <div className="flex-row p-0 gap-[8px] inline-flex">
                <div onClick={()=> count  !==1 ? setCount(count--) : setCount(1)} className="minus_wrapper cursor-pointer flex items-center justify-center h-[40px] w-[40px] isolate rounded-full bg-[#5444F2]">
                <AiOutlineMinus className="text-[#FFFFFF] text-[25px]" />
                </div>
                    <input type="tel" value={count} className="text-center font-[400] text-[16px] leading-[22px] 
                    text-[#c1c1c1 flex justify-center border-solid rounded-[8px] border-[0.5px] border-[#E1E1E1] w-[50px] h-[38px] items-center py-[8px] px-0" 
                    onChange={(e)=> setCount(e.target.value)}
                    />
                <div onClick={()=> setCount(count++)} className="plus_wrapper cursor-pointer flex items-center justify-center h-[40px] w-[40px] isolate rounded-full bg-[#5444F2]">
                    <AiOutlinePlus className="text-[#FFFFFF] text-[25px]"/>
                </div>
            </div>
            </div>
            <div className="flex flex-col p-0 gap-[16px] h-[88px] ">
                <label className="font-[400] leading-[20px] text-[14px] text-[#000000]">Total</label>
                <div class="relative flex w-[100%] h-[44px] border-[#E1E1E1] rounded-[8px] border-[0.5px] border-solid">
                    <span class="absolute flex font-[400] text-[#000000] text-[16px] leading-[22px] justify-center w-[52px] h-[44px] items-center p-[8px] bg-[#ECEBF4] rounded-l-[8px]">
                        NGN
                    </span>
                    <input type="tel"  class="w-[90%] h-[42px] ml-[50px] items-center font-[400] text-[14px] leading-[20px] flex p-[8px] text-[#000000] text-right" />
                </div>
                <button className="flex gap-[16px] justify-center leading-[18px] text-[#FFFFFF] font-[500] text-[14px] bg-[#5444F2] rounded-[8px]  items-center w-[100%] h-[44px] mt-[31px] mb-[24px] py-[13px]">Pay</button>
            </div>
        </div>
     );
}
 
export default PaymentDetails;