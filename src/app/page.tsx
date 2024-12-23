import General from "@/components/Cards/General";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Calendrer from "@/components/Calender";
import Lines from "@/components/Cards/Lines";
import Tabl from "@/components/Cards/Table";


Button

export default function Home() {
  return (
   <div className="grid gap-[32px]">
    <div className="grid grid-cols-2 gap-[32px]">
    <General />
    <div className="grid gap-[32px]">
      <Calendrer />
      <Calendrer />

    </div>

    </div>
    <div className="grid grid-cols-3 gap-[32px] h-[300px] overflow-hidden">
     <Lines />
     <Card className="p-[32px] overflow-y-scroll"><Tabl /></Card>
     <Card className="p-[32px] overflow-y-scroll">hi</Card>
     
    </div>
    

   </div>
  );
}
