import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { restaurantFormSchema } from "@/schema/restaurantSchema";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

const Restaurant = () => {

   const [input, setInput] = useState<restaurantFormSchema>({
      restaurantName: "",
      city: "",
      country: "",
      deliveryTime: 0,
      cuisines: [],
      imageFile: undefined,
   });

   const [errors, setErrors] = useState<Partial<restaurantFormSchema>>({});

   const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target;
      setInput({ ...input, [name]: type === 'number' ? Number(value) : value });
   }

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const result = restaurantFormSchema.safeParse(input);
      if (!result.success) {
         const fieldErrors = result.error.formErrors.fieldErrors;
         setErrors(fieldErrors as Partial<restaurantFormSchema>)
         return;
      }

      // Add restaurant API implementation.

      console.log(input);
   }

   const loading = false;
   const restaurantExist = false;
   return (
      <div className="max-w-6xl mx-auto my-10">
         <div>
            <div>
               <h1 className="font-extrabold text-2xl mb-5">Add Restaurants</h1>
               <form onSubmit={submitHandler}>
                  <div className="md:grid grid-cols-2 gap-5 space-y-2 md:space-y-0">
                     {/* Restaurant Name */}
                     <div>
                        <Label>Restaurant Name</Label>
                        <Input
                           type="text"
                           name="restaurantName"
                           value={input.restaurantName}
                           onChange={changeEventHandler}
                           placeholder="Enter your restaurant"
                        />
                        {errors && <span className="text-sm text-red-600 font-medium">{errors.restaurantName}</span>}
                     </div>
                     <div>
                        <Label>City</Label>
                        <Input
                           type="text"
                           name="city"
                           value={input.city}
                           onChange={changeEventHandler}
                           placeholder="Enter your city name"
                        />
                        {errors && <span className="text-sm text-red-600 font-medium">{errors.city}</span>}
                     </div>
                     <div>
                        <Label>Country</Label>
                        <Input
                           type="text"
                           name="country"
                           value={input.country}
                           onChange={changeEventHandler}
                           placeholder="Enter your country name"
                        />
                        {errors && <span className="text-sm text-red-600 font-medium">{errors.country}</span>}
                     </div>
                     <div>
                        <Label>Estimated Delivery Time</Label>
                        <Input
                           type="number"
                           name="deliveryTime"
                           value={input.deliveryTime}
                           onChange={changeEventHandler}
                           placeholder="Enter your delivery time"
                        />
                        {errors && <span className="text-sm text-red-600 font-medium">{errors.deliveryTime}</span>}
                     </div>
                     <div>
                        <Label>Cuisines</Label>
                        <Input
                           type="text"
                           name="cuisines"
                           value={input.cuisines}
                           onChange={(e) => setInput({ ...input, cuisines: e.target.value.split(",") })}
                           placeholder="e.g. Momos, Biryani, Maggie"
                        />
                        {errors && <span className="text-sm text-red-600 font-medium">{errors.cuisines}</span>}
                     </div>
                     <div>
                        <Label>Upload Restaurant Banner</Label>
                        <Input
                           type="file"
                           onChange={(e) => setInput({...input, imageFile:e.target.files?.[0] || undefined})}
                           name="imageFile"
                           accept="image/*"
                        />
                        {errors && <span className="text-sm text-red-600 font-medium">{errors.imageFile?.name || "Image file is required"}</span>}
                     </div>
                  </div>
                  <div className="mt-5 w-fit">
                     {
                        loading ? (<Button disabled className="bg-orange hover:bg-orange"><Loader2 className="mr-2 w-4 h-4 animate-spin" />Please wait</Button>) :
                           (<Button className="bg-orange hover:bg-orange">{restaurantExist ? 'Update Your Restaurant' : 'Add Your Restaurant'}</Button>)
                     }
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Restaurant