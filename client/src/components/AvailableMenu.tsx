import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"

function AvailableMenu() {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">Available Menu</h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0 ">
        <Card className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden ">
          <img src="https://tandooroc.com/images/slider/1.jpg"
            alt="Menu_img"
            className="w-full object-cover h-40"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Tandoori Biriyani</h2>
            <p className="text-sm text-gray-600 mt-2">You will get tandoori biriyani with extra raita & chatani.</p>
            <h3 className="font-semibold mt-2 text-lg">Price: <span className="text-sm text-[#D19254]">₹120</span></h3>
          </CardContent>
          <CardFooter className="pl-4">
            <Button className="bg-orange w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default AvailableMenu