import CustomersDetails from "./customer_details";
import PaymentCustomerSlide from "./payment_customer_slide";
import PaymentDetails from "./payment_details";

const CheckoutDefaultLayout = () => {
    
    return ( 
        <div className="layout_wrapper bg-[#F5F6FA] h-[100%] flex justify-center items-center">
            <div className="h-[100vh] p-[131px]">
            <div className="grid grid-cols-1 h-[100%] mx-[10px] md:mx-0 md:grid-cols-2 gap-4">
                <div className="details_payment_wrapper h-[100%">
                    <div className="payment_slip_wrapper"><PaymentCustomerSlide /></div>
                    <div className="customer_details_wrapper mt-[20px]"><CustomersDetails /></div>
                </div>
                <div className="h-[100%]">
                    <PaymentDetails />
                </div>
            </div>
            </div>

        </div>
     );
}
 
export default CheckoutDefaultLayout;