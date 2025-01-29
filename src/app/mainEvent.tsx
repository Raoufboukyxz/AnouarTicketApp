import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
export default function MainEvent() {

return (
    <div  className="flex justify-between  items-center w-11/12 h-20 mx-auto ">
         <h1 className="text-2xl  text-white font-bold"> Ticketack</h1>
        <Input className="w-96 bg-white focus-visible:ring-0 focus:ring-0" placeholder="serch for something f" />
        <Popover>
            <PopoverTrigger asChild>        
                <Button className="w-28" variant="outline">Ville</Button>
            </PopoverTrigger>
            <PopoverContent  side="bottom">
                <div className="w-40 h-96 border bg-white overflow-scroll ml-12 rounded-md">
                    <ul className="">
                    <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li><li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li><li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li><li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li><li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>
                      <li className="h-8 font-bold cursor-pointer flex items-center justify-center hover:bg-black hover:text-white"><span>ALGER</span></li>



                    </ul>
                
                
                </div>
                </PopoverContent>
        </Popover>


    </div>
)


}