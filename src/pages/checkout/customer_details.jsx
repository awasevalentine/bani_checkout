import { useDispatch, useSelector } from "react-redux";
import CountryCallingCode from "../../components/country_code";
import SectionHeader from "../../components/headings";
import { useEffect, useState } from "react";
import { updatePaymentDetails } from "../../redux-features/checkout/checkout.slice";


var initdata = {
    page_amount: 0,
    page_whatsapp_phone: '', 
    email: '', 
    firstName: '', 
    lastName: '',
    additional_request: '', 
}
const CustomersDetails = () => {
    var [paymentDetails, setPaymentDetails ] = useState(initdata)
    var dispatch = useDispatch()
    const {paymentDetails:rxData, isLoading, isError, isSuccess, message } = useSelector((state)=> state.checkout)
    var  initializedAmount = paymentDetails.page_amount



    useEffect(()=>{
        if(rxData){
            setPaymentDetails(rxData)
            initializedAmount = paymentDetails.page_amount
        }
    })


    return ( 
        <div className="flex flex-col justify-items-center pt-[12px] px-[16px] gap-[16px] bg-[#FFFFFF]">
            <SectionHeader text="Customer’s details" />
            <div className="flex flex-col p-0 w-[100%] sm:w-[448px] h-[486px] ">
        {paymentDetails &&
            <form>
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Your phone number<span className="text-red-600">*</span>
                    </h3>
                    <div className="flex flex-row justify-between self-stretch items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <CountryCallingCode />
                        <div>
                            <input type="tel" placeholder="08100492339" name="phoneNumber" className="flex outline-0 flex-row w-[248px] h-[44px] rounded-[8px] border-[0.5px] border-[#E1E1E1]
                             items-center p-[8px] gap-[8px] box-border" value={initializedAmount > 0 ? paymentDetails.page_whatsapp_phone : null } onChange={(e)=> dispatch(updatePaymentDetails({...paymentDetails, page_whatsapp_phone: e.target.value }))} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Your full name<span className="text-red-600">*</span>
                    </h3>
                    <div className="flex flex-row justify-between self-stretch items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <input type="text" placeholder="First Name" name="firstName" className="flex outline-0 flex-row w-[210px] h-[44px] rounded-[8px] border-[0.5px]
                         border-[#E1E1E1] items-center p-[8px] gap-[8px] box-border" value={initializedAmount > 0 ? paymentDetails.firstName : null} onChange={(e)=>dispatch(updatePaymentDetails({...paymentDetails, firstName: e.target.value }))} />
                        <div>
                            <input type="text" placeholder="Last Name" name="lastName" className="flex outline-0 flex-row w-[210px] h-[44px] rounded-[8px] border-[0.5px]
                             border-[#E1E1E1] items-center p-[8px] gap-[8px] box-border" value={initializedAmount > 0 ? paymentDetails.lastName : null} onChange={(e)=>dispatch(updatePaymentDetails({...paymentDetails, lastName: e.target.value }))} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Email address<span className="text-red-600">*</span>
                    </h3>
                    <div className="flex flex-row justify-between self-stretch items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <input type="email" placeholder="e.g rodney@gmail.com" name="email" className="flex outline-0 flex-row w-[447px] h-[44px] rounded-[8px] 
                        border-[0.5px] border-[#E1E1E1] items-center p-[8px] gap-[8px] box-border" value={initializedAmount > 0 ? paymentDetails.email : null} onChange={(e)=>dispatch(updatePaymentDetails({...paymentDetails, email: e.target.value }))} />
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[16px] mt-[16px] self-stretch">
                    <h3 className="text-[#000000] font-[HelveticaNeueCyr] font-[400] text-[14px] leading-[20px">
                        Your message
                    </h3>
                    <div className="flex flex-row justify-between self-stretch items-start p-0 gap-[28px] h-[44px] w-[448px]">
                        <textarea className="border-[0.5px] outline-0 px-[12px] pt-[16px]  self-stretch box-border rounded-[8px] border-solid border-[#E1E1E1]  
                        h-[104px] w-[100%] bg-[#FDFDFD] " name="customerMessage"  placeholder="Write your message here" 
                        value={initializedAmount > 0 ? paymentDetails.additional_request: null} onChange={(e)=>dispatch(updatePaymentDetails({...paymentDetails, additional_request: e.target.value }))}
                        >
                        </textarea>
                    </div>
                </div>
            </form>
        }
            </div>

        </div>
     );
}
 
export default CustomersDetails;