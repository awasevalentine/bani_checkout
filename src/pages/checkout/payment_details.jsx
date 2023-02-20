import { useEffect, useState } from "react";
import SectionHeader from "../../components/headings";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { updatePaymentDetails } from "../../redux-features/checkout/checkout.slice";


var initdata = {
    page_amount: 0,
    page_whatsapp_phone: '', 
    email: '', 
    firstName: '', 
    lastName: '',
    additional_request: '', 
}
const PaymentDetails = () => {
    var [count, setCount ] = useState(1)
    const [paymentDetails, setPaymentDetails ] = useState(initdata)
    const dispatch = useDispatch()
    const {paymentDetails:rxData, isLoading, isError, isSuccess, message } = useSelector((state)=> state.checkout)
    var initializedAmount = paymentDetails.page_amount



    useEffect(()=>{
        if(rxData){
            setPaymentDetails(rxData)
            initializedAmount = paymentDetails.page_amount
        }
    })

    const makePayment = () =>{
        console.log("Datassss: ", paymentDetails)
        window.BaniPopUp({
        amount: paymentDetails.page_amount, //The amount the customer wants to pay
        phoneNumber: paymentDetails.page_whatsapp_phone, //The mobile number of the customer in int format i.e +2348173709000
        email: paymentDetails.email, //The email of the customer
        firstName: paymentDetails.firstName, //The first name of the customer
        lastName: paymentDetails.lastName, //The last name of the customer
        merchantKey: process.env.REACT_APP_API_KEY, //The merchant Bani public key
        metadata: paymentDetails.additional_request, //Custom JSON object passed by the merchant. This is optional
        merchantRef: '', //Custom payment reference passed by the merchant. This is optional
        onClose: (response) => {
            console.log("ONCLOSE DATA",response)
        },
        callback: function (response) {
            let message = 'Payment complete! Reference: ' + response?.reference
            console.log(message, response)
        }
    })
    }

    const amountDisplay = () => {
        if(initializedAmount > 0){
            return `(${paymentDetails.page_amount})`
        }else{
            return ' '
        }
    }


    return ( 
        <div className="font-[HelveticaNeueCyr] flex flex-col h-[338px] py-[24px] px-[16px] gap-[32px] bg-[#FFFFFF]">
            <SectionHeader text='Payment for product ' />
            {paymentDetails &&
            <form>
            <div className="flex flex-row justify-between items-center p-0 gap-[8px] w-[100%] h-[40px]">
            <label className="w-[53px] font-[400] leading-[20px] text-[#000000]">Quantity</label>
            <div className="flex-row p-0 gap-[8px] inline-flex">
                <div onClick={()=> count  !==1 ? setCount(count--) : setCount(1)} className="minus_wrapper cursor-pointer flex items-center justify-center h-[40px] w-[40px] isolate rounded-full bg-[#5444F2]">
                <AiOutlineMinus className="text-[#FFFFFF] text-[25px]" />
                </div>
                    <input type="tel" value={count} className="text-center outline-0 font-[400] text-[16px] leading-[22px] 
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
                    <input type="tel"  class="w-[90%] h-[42px] ml-[50px] outline-0 items-center font-[400] text-[14px] leading-[20px] flex p-[8px] text-[#000000] text-right"
                    value={initializedAmount > 0 ? paymentDetails.page_amount : null} onChange={(e)=> dispatch(updatePaymentDetails({...paymentDetails, page_amount: e.target.value }))}
                    />
                </div>
                <button type="button" onClick={()=> makePayment()}  className="transition ease-in-out delay-100 hover:-translate-y-[2px] duration-300   flex gap-[16px] justify-center hover:shadow-xl leading-[18px] text-[#FFFFFF] font-[500] text-[14px]
                 bg-[#5444F2] hover:bg-indigo-900 rounded-[8px]  items-center w-[100%] h-[44px] mt-[31px] mb-[24px] py-[13px]">Pay {amountDisplay()} </button>
            </div>
            </form>
        }
        </div>
     );
}
 
export default PaymentDetails;