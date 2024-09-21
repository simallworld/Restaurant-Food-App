import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema"
import { Loader2 } from "lucide-react"
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"


const EditMenu = ({ selectedMenu, editOpen, setEditOpen }: { selectedMenu: MenuFormSchema, editOpen: boolean, setEditOpen: Dispatch<SetStateAction<boolean>>; }) => {
   const [input, setInput] = useState<any>({
      name: "",
      description: "",
      price: 0,
      image: undefined,
   });

   const [error, setError] = useState<Partial<MenuFormSchema>>({});
   const loading = false;
   const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target
      setInput({ ...input, [name]: type === 'number' ? Number(value) : value });
   };

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = menuSchema.safeParse(input);
      if (!result.success) {
         const fieldErrors = result.error.formErrors.fieldErrors;
         setError(fieldErrors as Partial<MenuFormSchema>);
         return;
      }
      console.log(input)

      // API Implementation...
   };

   useEffect(() => {
      setInput({
         name: selectedMenu?.name || "",
         description: selectedMenu?.description || "",
         price: selectedMenu?.price || 0,
         image: undefined,
      });
   }, [selectedMenu]);
   return (
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Edit Menu</DialogTitle>
               <DialogDescription>
                  Update your menu to keep your offering fresh and exciting!
               </DialogDescription>
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
                     error && <span className="text-xs font-medium text-red-600">{error.image?.name}</span>
                  }
               </div>
               <DialogFooter>
                  {loading ? (<Button className="bg-orange hover:bg-orange w-full mt-5"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>) :
                     (<Button className="bg-orange hover:bg-orange w-full mt-5">Submit</Button>)
                  }
               </DialogFooter>
            </form>
         </DialogContent>
      </Dialog>
   );
};

export default EditMenu