import SectionHeader from "../../components/headings";
import {BsSearch } from 'react-icons/bs'

const CustomersDetails = () => {
    return ( 
        <div className="flex flex-col justify-items-center h-[100%] pt-[12px] px-[16px] pb-[24px] gap-[16px] bg-[#FFFFFF]">
            <SectionHeader text="Customer’s details" />
            <div className="flex flex-col p-0 w-[100%] sm:w-[448px] h-[100%] order-1">
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Your phone number<span className="text-red-600">*</span>
                    </h3>
                    <div className="flex flex-row justify-between self-stretch order-1 items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <select name="countryCode" className="flex box-border flex-row rounded-[8px] border-[#E1E1E1] border-[0.5px] border-solid gap-[34px] w-[175px] justify-items-center py-[8px] pr-[16px] pl-[8px]">
                            <option value="val" >
                                Val 
                            </option>
                        </select>
                        <div>
                            <input type="tel" placeholder="08100492339" name="phone" className="flex flex-row w-[248px] h-[44px] rounded-[8px] order-1 border-[0.5px] border-[#E1E1E1] items-center p-[8px] gap-[8px] box-border" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Your full name<span className="text-red-600">*</span>
                    </h3>
                    <div className="flex flex-row justify-between self-stretch order-1 items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <input type="text" placeholder="First Name" name="firstname" className="flex flex-row w-[210px] h-[44px] rounded-[8px] order-1 border-[0.5px] border-[#E1E1E1] items-center p-[8px] gap-[8px] box-border" />
                        <div>
                            <input type="text" placeholder="Last Name" name="lastname" className="flex flex-row w-[210px] h-[44px] rounded-[8px] order-1 border-[0.5px] border-[#E1E1E1] items-center p-[8px] gap-[8px] box-border" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Email address<span className="text-red-600">*</span>
                    </h3>
                    <div className="flex flex-row justify-between self-stretch order-1 items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <input type="email" placeholder="e.g rodney@gmail.com" name="email" className="flex flex-row w-[447px] h-[44px] rounded-[8px] order-1 border-[0.5px] border-[#E1E1E1] items-center p-[8px] gap-[8px] box-border" />
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Your message
                    </h3>
                    <div className="flex flex-row justify-between self-stretch order-1 items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <textarea className="border-[0.5px] order-1 self-stretch box-border rounded-[8px] border-solid border-[#E1E1E1]  h-[104px] w-[100%] bg-[#FDFDFD] " name="customerMessage"  placeholder="Write your message here">
                        </textarea>
                    </div>
                </div>
            </div>
            {/* <div>
            <span>me</span>
            <label class="relative block">
            <span class="rounded-sm absolute inset-y-0 left-0 w-[40px] bg-blue-500 flex items-center pl-2">
                <BsSearch />
            </span>
            <input class="placeholder:italic pl-[50px] placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
            </label>
            </div> */}
        </div>
     );
}
 
export default CustomersDetails;