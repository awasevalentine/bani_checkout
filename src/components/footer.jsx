import {TbLock } from 'react-icons/tb'
const Footer = () => {
    return ( 
        <div className='font-[HelveticaNeueCyr] mt-[24px] mb-[40px] flex justify-center'>
            <div className="flex py-[7px] rounded-[5px] bg-[rgba(255, 255, 255, 0.05)] justify-center items-center flex-col">
            <div className='flex flex-row items-center gap-[12px]'>
            <TbLock className='h-[20px] w-[20px]' />
                <div className='flex items-center'>
                    <h3 className='w-[74px] text-[#000000] font-[550] text-[14px] leading-[18px] flex items-center '> Secured by </h3>
                    <img src={require('../assets/icons/bani_logo.png')} className='pt-[8px] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]' alt="Bani Brand" />
                    <span className='text-[18px] font-[600]' style={{letterSpacing: '-1px'}}>bani</span>
                </div>
            </div>
            <p className='mt-[12px] font-[400] text-[#65717C] text-[14px] leading-[18px]'>
                Do you have any questions, <a href='https://bani.africa/' target='_blank' rel="noreferrer" 
                className=" hover:shadow-xl"
                >
                    visit our website bani.africa</a>
                </p>
            </div>
        </div>
     );
}
 
export default Footer;