import { useEffect, useState } from "react";
import { countryCodeBaseUrl } from "../api_calls/call_url";

const CountryCallingCode = () => {
const [countries, setCountries ] = useState([])
const [countryImage, setCountryImage ] = useState()

    useEffect(()=>{
        const data = async()=>{
            await countryCodeBaseUrl.get().then((res)=>{
            setCountries(res.data)
            setCountryImage(res.data[0].flags.png)

         })
        }
        data()
    },[]);

    const callingCodeChangeHandler = (e) =>{
        countries.find((res)=>{
            if(res.callingCodes[0] === e){
                setCountryImage(res.flags.png)
            }
            
        })
    }

    const capitalize = (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        }


    return ( 
        <div class="relative flex box-border flex-row rounded-[8px] border-[#E1E1E1] border-[0.5px] border-solid 
            gap-[8px] w-[175px] items-center py-[8px] pr-[16px] pl-[8px]">
                {<img src={countryImage} className="h-[20px] rounded-full w-[22px] border-solid border-[0.5px] border-[#E1E1E1] " alt="Flags" />}
            <select className="outline-0" onChange={(e)=> callingCodeChangeHandler(e.target.value)}>
                {
                    countries.map((res, index)=>{
                        return (
                        <option  key={index} value={res.callingCodes}>{capitalize(res.alpha3Code.toLowerCase())} {`(+${res.callingCodes})`}</option>
                        )
                    })
                }
            </select>
        </div>
     );
}
 
export default CountryCallingCode;