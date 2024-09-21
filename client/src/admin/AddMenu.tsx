
import EditMenu from "@/admin/EditMenu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema";
import { Loader2, Plus } from "lucide-react";
import { FormEvent, useState } from "react";

const menus = [
   {
      name: "Biriyani",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, doloribus quo veniam modi vero dolorum ipsa quaerat rerum repellendus quidem consequatur. Quis ut provident odit!",
      price: 120,
      image: "https://tandooroc.com/images/slider/1.jpg"
   },
   {
      name: "Chhole Bhature",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, doloribus quo veniam modi vero dolorum ipsa quaerat rerum repellendus quidem consequatur. Quis ut provident odit!",
      price: 80,
      image: "https://tandooroc.com/images/slider/1.jpg"
   },
]

const AddMenu = () => {
   const [input, setInput] = useState<MenuFormSchema>({
      name: "",
      description: "",
      price: 0,
      image: undefined,
   });
   const [open, setOpen] = useState<boolean>(false);
   const [editOpen, setEditOpen] = useState<boolean>(false);
   const [selectedMenu, setSelectedMenu] = useState<any>();
   const [error, setError] = useState<Partial<MenuFormSchema>>({});
   const loading = false;

   const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target;
      setInput({ ...input, [name]: type === "number" ? Number(value) : value });
   };

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = menuSchema.safeParse(input);
      if (!result.success) {
         const fieldErrors = result.error.formErrors.fieldErrors;
         setError(fieldErrors as Partial<MenuFormSchema>);
         return;
      }

      // API Implementation...
   }
   return (
      <div className="max-w-6xl mx-auto my-10">
         <div className="flex justify-between">
            <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">Available Menus</h1>
            <Dialog open={open} onOpenChange={setOpen}>
               <DialogTrigger>
                  <Button className="bg-orange hover:bg-orange"><Plus />Add Menus</Button>
               </DialogTrigger>
               <DialogContent>
                  <DialogHeader>
                     <DialogTitle>
                        Add a new menu
                     </DialogTitle>
                     <DialogDescription>Create a menu that will make your restaurant stant out from crowd.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={submitHandler} className="space-y-4">
                     <div>
                        <Label>Name</Label>
                        <Input
                           type="text"
                           placeholder="Enter menu name"
                           name="name"
                           value={input.name}
                           onChange={changeEventHandler}
                        />
                        {
                           error && <span className="text-xs font-medium text-red-600">{error.name}</span>
                        }
                     </div>
                     <div>
                        <Label>Description</Label>
                        <Input
                           type="text"
                           placeholder="Enter menu description"
                           name="description"
                           value={input.description}
                           onChange={changeEventHandler}
                        />
                        {
                           error && <span className="text-xs font-medium text-red-600">{error.description}</span>
                        }
                     </div>
                     <div>
                        <Label>Price in (Rupees)</Label>
                        <Input
                           type="number"
                           placeholder="Enter menu price"
                           name="price"
                           value={input.price}
                           onChange={changeEventHandler}
                        />
                        {
                           error && <span className="text-xs font-medium text-red-600">{error.price}</span>
                        }
                     </div>
                     <div>
                        <Label>Upload menu image</Label>
                        <Input
                           type="file"
                           name="image"
                           onChange={(e) => setInput({ ...input, image: e.target.files?.[0] || undefined, })}
                        />
                        {
                           error && <span className="text-xs font-medium text-red-600">{error.image?.name || "Image is required"}</span>
                        }
                     </div>
                     <DialogFooter className="mt-5">
                        {loading ? (<Button disabled className="bg-orange hover:bg-orange w-full mt-5"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>) :
                           (<Button className="bg-orange hover:bg-orange w-full mt-5">Submit</Button>)
                        }
                     </DialogFooter>
                  </form>
               </DialogContent>
            </Dialog>
         </div>
         {/* For menus displays */}

         {
            menus.map((menu: any, idx: number) => (
               <div className="mt-6 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
                     <img className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg" src={menu.image} alt="" />
                     <div className="flex-1">
                        <h1 className="text-lg font-semibold text-gray-800 ">{menu.title}</h1>
                        <p className="text-sm text-gray-600 mt-1">{menu.description}</p>
                        <h2 className="text-md font-semibold mt-2">Price: <span className="text-[#D19254]">₹{menu.price}</span></h2>
                     </div>
                     <Button onClick={() => {
                        setSelectedMenu(menu);
                        setEditOpen(true);
                     }} size={'sm'} className="bg-orange hover:bg-orange mt-2">Edit</Button>
                  </div>
               </div>
            ))
         }
         <EditMenu selectedMenu={selectedMenu} editOpen={editOpen} setEditOpen={setEditOpen} />
      </div>
   )
}

export default AddMenu