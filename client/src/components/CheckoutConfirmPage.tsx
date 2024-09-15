import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { Dialog, DialogContent, DialogFooter } from "./ui/dialog"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const CheckoutConfirmPage = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {

   const [input, setInput] = useState({
      name: "",
      email: "",
      contact: "",
      address: "",
      city: "",
      country: "",
   });
   const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };
   const checkoutHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // API Implementation
      console.log(input)
   }
   return (
      <Dialog open={open} onOpenChange={setOpen} >
         <DialogContent>
            <DialogTitle className="text-xl font-bold">Review Your Order</DialogTitle>
            <DialogDescription className="text-xs">Double-check your delivery details and ensure everything is in order. When you are ready, hit confirm button to finalize your order</DialogDescription>
            <form onSubmit={checkoutHandler} className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0">
               <div>
                  <Label>Full Name</Label>
                  <Input
                     type="text"
                     name="name"
                     value={input.name}
                     onChange={changeEventHandler}
                  />
               </div>
               <div>
                  <Label>Email</Label>
                  <Input
                     type="email"
                     name="email"
                     value={input.email}
                     onChange={changeEventHandler}
                  />
               </div>
               <div>
                  <Label>Contact</Label>
                  <Input
                     type="text"
                     name="contact"
                     value={input.contact}
                     onChange={changeEventHandler}
                  />
               </div>
               <div>
                  <Label>Address</Label>
                  <Input
                     type="text"
                     name="address"
                     value={input.address}
                     onChange={changeEventHandler}
                  />
               </div>
               <div>
                  <Label>City</Label>
                  <Input
                     type="text"
                     name="city"
                     value={input.city}
                     onChange={changeEventHandler}
                  />
               </div>
               <div>
                  <Label>Country</Label>
                  <Input
                     type="text"
                     name="country"
                     value={input.country}
                     onChange={changeEventHandler}
                  />
               </div>
               <DialogFooter className="col-span-2 pt-5">
                  <Button className="bg-orange hover:bg-orange">Continue to payment</Button>
               </DialogFooter> 
            </form>
         </DialogContent>
      </Dialog >
   )
}

export default CheckoutConfirmPage