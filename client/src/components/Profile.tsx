import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";
import { Loader2, LocateIcon, Mail, MapPin, MapPinnedIcon, Plus } from "lucide-react";
import React, { FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
   const [profileData, setProfileData] = useState({
      fullname: "",
      email: "",
      address: "",
      city: "",
      country: "",
      profilePicture: "",
   });
   const imageRef = useRef<HTMLInputElement | null>(null);
   const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>("");

   const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            const result = reader.result as string;
            setSelectedProfilePicture(result);
            setProfileData((prevData) => ({
               ...prevData, profilePicture: result
            }))
         };
         reader.readAsDataURL(file);
      }
   }

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setProfileData({ ...profileData, [name]: value });
   }

   const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      //  Update profile API Implementation-----


   }

   const loading = false;

   return (
      <form onSubmit={updateProfileHandler} className="mx-w-7xl md:m-20 mr-5 my-5">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
                  <AvatarImage src={selectedProfilePicture}/>
                  <AvatarFallback>CN</AvatarFallback>
                  <input ref={imageRef} type="file" className="hidden" accept="image/*" onChange={fileChangeHandler} />
                  <div onClick={() => { imageRef.current?.click() }} className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer">
                     <Plus className="text-white w-8 h-8" />
                  </div>
               </Avatar>
               <Input
                  type="text"
                  name="fullname"
                  value={profileData.fullname}
                  onChange={changeHandler}
                  className="font-semibold text-2xl outline-none focus-visible:ring-transparent"
               />
            </div>
         </div>
         <div className="grid md:grid-cols-2 md:ml-20 md:mr-20 md:gap-2 gap-3 mt-10 md:mb-20 mb-10">
            <div className="flex items-center gap-4 rounded-lg p-2 bg-gray-200">
               <Mail className="text-gray-500"/>
               <div className="flex flex-col items-start w-full gap-2">
                  <Label>Email</Label>
                  <input name="email" value={profileData.email} onChange={changeHandler} className="w-full text-gray-600 bg-transparent focus-visible:ring-transparent focus-visible:border-transparent outline-none"/>
               </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg p-2 bg-gray-200">
               <LocateIcon className="text-gray-500"/>
               <div className="flex flex-col items-start w-full gap-2">
                  <Label>Address</Label>
                  <input name="address" value={profileData.address} onChange={changeHandler} className="w-full text-gray-600 bg-transparent focus-visible:ring-transparent focus-visible:border-transparent outline-none"/>
               </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg p-2 bg-gray-200">
               <MapPin className="text-gray-500"/>
               <div className="flex flex-col items-start w-full gap-2">
                  <Label>City</Label>
                  <input name="city" value={profileData.city} onChange={changeHandler} className="w-full text-gray-600 bg-transparent focus-visible:ring-transparent focus-visible:border-transparent outline-none"/>
               </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg p-2 bg-gray-200">
               <MapPinnedIcon className="text-gray-500"/>
               <div className="flex flex-col items-start w-full gap-2">
                  <Label>Country</Label>
                  <input name="country" value={profileData.country} onChange={changeHandler} className="w-full text-gray-600 bg-transparent focus-visible:ring-transparent focus-visible:border-transparent outline-none"/>
               </div>
            </div>
         </div>
         <div>
         {
            loading ? (
               <Button disabled className="bg-orange"><Loader2 className="mr-2 w-4 h-4 animate-spin"/> Please wait</Button>
            ):(
               <Button type="submit" className="bg-orange">Update</Button>
            )
         }
         </div>
      </form>
   );
};

export default Profile;
