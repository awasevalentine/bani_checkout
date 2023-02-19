import { AiOutlineShop } from 'react-icons/ai'
import SectionHeader from '../../components/headings';

const PaymentCustomerSlide = () => {
    return ( 
        <div className="flex flex-col align-start w-[100%] sm:w-[480px] h-[274px] bg-[#FFFFFF] gap-[16px]">
            <div className="px-[16px] pt-[24px] pb-[16px] box-border border-b-[0.5px] border-solid border-[#E1E1E1]
            flex flex-row gap-[8px]">
                <div className="rounded-full p-0 gap-[78.75px] isolate w-[37.5px] h-[37.5px] bg-[#F4F3FF] z-0" >
                    <div className=' flex justify-center items-center w-[37.5px] h-[37.5px]'>
                        <AiOutlineShop />
                    </div>
                </div>
                <div className='flex flex-col align-baseline font-[HelveticaNeueCyr] p-0 gap-[8px] w-[100%] sm:w-[394px]'>
                    <SectionHeader text='Billi Design' />
                    <a href='https://bani.africa/billidesign' className='flex items-center text-[#65717C] font-[400] text-[14px] leading-[20px]'>
                        https://bani.africa/billidesign
                    </a>
                    <div className='flex flex-col align-baseline font-[400] text-[14px] leading-[20px] py-[8px] gap-[8px] w-[100%] sm:w-[394px] bg-[#FDFDFD] order-2'>
                        <h2 className='flex items-center text-[#000000] h-[20px] '>
                            Payment description
                        </h2>
                        <p className='w-[90%] sm:w-[381px] text-[#65717C]'>
                        Lorem ipsum dolor sit amet consectetur. Posuere elementum adipiscing a tincidunt in et nisi malesuada. 
                        Tellus nunc nibh tincidunt tristique pellentesque nulla morbi tortor.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row align-baseline pl-[16px] p-0 gap-[12px] h-[24px]'>
                <a href='#'>
                    <img src={require('../../assets/icons/instagram_icon.png')} alt='Instagram Icon' />
                </a>
                <a href='#'>
                    <img src={require('../../assets/icons/whatsapp_icon.png')} alt='Whatsapp Icon' />
                </a>
                <a href='#'>
                    <img src={require('../../assets/icons/facebook_icon.png')} alt='Facebook Icon' />
                </a>
                <a href='#'>
                    <img src={require('../../assets/icons/twitter_icon.png')} alt='Twitter Icon' />
                </a>
            </div>
        </div>
     );
}
 
export default PaymentCustomerSlide;