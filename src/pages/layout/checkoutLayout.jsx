import PaymentCustomerSlide from "./payment_customer_slide";

const CheckoutDefaultLayout = () => {
    
    return ( 
        <div className="layout_wrapper bg-[#F5F6FA] h-[100%] flex justify-center items-center">
            <div className="">
            <div class="grid grid-cols-1 mx-[10px] md:mx-0 md:grid-cols-2 gap-4">
                <PaymentCustomerSlide />
                {/* <div className="h-[200px] bg-yellow-600">

                </div> */}
            </div>
            </div>

        </div>
     );
}
 
export default CheckoutDefaultLayout;