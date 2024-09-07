import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const loading = false;
const VerifyEmail = () => {
  
   const [otp, setOtp] = useState<string[]>(["","","","","",""]);
   const inputRef = useRef<any>([]);

   const handleChange = (index:number, value:string) => {
      if(/^[a-zA-Z0-9]$/.test(value) || value == ""){
         const newOtp = [...otp];
         newOtp[index] = value;
         setOtp(newOtp);
      }

      // Move to the next Input Field when a digit entered;

      if(value != "" && index < 5){
         inputRef.current[index+1].focus();
      }
   }

   // Move back to the previous Input Field when a Backspace key entered;

   const handleKeyDown = (index:number, e:React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Backspace' && !otp[index] && index > 0)
         inputRef.current[index-1].focus();
      }

   return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
         <div className="text-center">
            <h1 className="font-extrabold text-2xl mb-3">Verify your email</h1>
            <p className="font-sm text-gray-600">Enter the six digits code sent to your email</p>
         </div>
         <form action="">
            <div className="flex flex-row justify-between mb-8 gap-4">
               {
                  otp.map((letter:string, idx:number) => (
                     <Input
                     key={idx}
                     ref={(element) => (inputRef.current[idx] = element)}
                     type="text"
                     maxLength={1}
                     value={letter}
                     onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(idx, e.target.value)}
                     onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(idx, e)}
                     className="md:w-12 md:h-12 w-8 h-8 p-1 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     />
                  ))
               }
            </div>
            {            
            loading ? (<Button disabled className="bg-orange hover:bg-hoverOrange w-full"><Loader2 className="mr-2 w-4 h-4 animate-spin"/> Please wait</Button>) : 
            (<Button className="bg-orange hover:bg-hoverOrange w-full">Verify</Button>)
            }
         </form>
      </div>
    </div>
  )
}

export default VerifyEmail