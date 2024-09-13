import { Link, useParams } from "react-router-dom"
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Globe, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import CardImg from "@/assets/hero_pizza.png"

const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          {/* Search Input Field */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={searchQuery}
              placeholder="Search by restaurants & cuisins"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-orange">Search</Button>
          </div>
          {/* Searched items display here */}

          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
              <h1 className="font-medium text-lg">Only (2) search results found</h1>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {
                  ["Biriyani", "Momos", "Samosha", "Burger", "PizZa"].map((selectedFilter: string, idx: number) => (
                    <div key={idx} className="relative inline-flex items-center max-w-full">
                      <Badge className="text-[#D19254] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap" variant={"outline"}>{selectedFilter}</Badge>
                      <X
                        size={16}
                        className="absolute hover:cursor-pointer text-[#c18448] right-1" />
                    </div>
                  ))
                }
              </div>
            </div>
            {/* Restaurant Cards */}

            <div className="grid md:grid-cols-3 gap-4">
              {
                [1,2,3].map((item:number, idx:number) => (
              <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <AspectRatio ratio={16 / 6}>
                    <img className="w-full h-full object-cover" src={CardImg} alt="" />
                  </AspectRatio>
                  <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-1 py-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">PizZa Hunt</h1>
                  <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={16} />
                    <p className="text-sm">
                        City:{" "}
                        <span className="font-medium">Noida</span>
                    </p>
                  </div>
                  <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                    <Globe size={16} />
                    <p className="text-sm">
                        Country:{" "}
                        <span className="font-medium">India</span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {
                    ["Biryani", "Momos", "PizZa", "Samosha"].map((cuisine: string, idx: number) => (
                      <Badge key={idx} className="font-medium px-2 py-1 rounded-full shadow-sm">{cuisine}</Badge>
                    ))
                  }
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t dark:border-t-gray-700 border-t-gray-100  text-white flex justify-end">
                  <Link to={`/restaurant/${123}`}>
                  <Button className="bg-orange font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-200">View Menus</Button>
                  </Link>
                </CardFooter>
              </Card>
                ))
              }
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SearchPage