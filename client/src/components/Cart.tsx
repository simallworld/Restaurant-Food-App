import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import CheckoutConfirmPage from "./CheckoutConfirmPage"

const Cart = () => {

   const [open, setOpen] = useState<boolean>(false);


  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
         <Button variant="link">Clear All</Button>
      </div>
      <Table>
         <TableHeader>
         <TableRow>
               <TableHead>Items</TableHead>
               <TableHead>Title</TableHead>
               <TableHead>Price</TableHead>
               <TableHead>Quantity</TableHead>
               <TableHead>Total</TableHead>
               <TableHead className="text-right">Remove</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            <TableRow>
               <TableCell>
                  <Avatar>
                     <AvatarImage src="" alt=""/>
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
               </TableCell>
               <TableCell>Biriyani</TableCell>
               <TableCell>₹ 120</TableCell>
               <TableCell>
                  <div className="w-fit flex items-center rounded-full h-6 border border-gray-100 dark:border-gray-800">
                     <Button size={'icon'} variant={"outline"} className="rounded-full bg-gray-200 h-6 w-6"><Minus /></Button>
                     <Button size={'icon'} variant={"outline"} className="bg-transparent border-none font-bold" disabled>1</Button>
                     <Button size={'icon'} variant={"outline"} className="rounded-full bg-orange hover:bg-orange h-6 w-6"><Plus /></Button>
                  </div>
               </TableCell>
               <TableCell>₹ 120</TableCell>
               <TableCell className="text-right">
                  <Button size={'sm'} className="h-6 bg-orange hover:bg-orange">Remove</Button>
               </TableCell>
            </TableRow>
         </TableBody>
         <TableFooter>
            <TableRow className="text-xl">
               <TableCell colSpan={5} className=" font-bold">Total</TableCell>
               <TableCell className="text-right">₹ 120</TableCell>
            </TableRow>
         </TableFooter>
      </Table>
      <div className="flex justify-end my-5">
         <Button onClick={() => setOpen(true)} className="bg-orange hover:bg-orange">Proceed to Checkout</Button>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Cart