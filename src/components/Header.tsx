"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react";
  


export default function Header() {
    const[notifications, setNotifications] = useState<any>([
      {
        text: "This Is The Notification",
        date: "02-02-2023",
        read: true
      },
      {
        text: "This Is Another The Notification",
        date: "2025",
        read: false
      }
    ])

    return <div className="grid grid-cols-2 gap-4 p-4 ">
        <CommandDemo />
        <div className="flex items-center justify-end">
        
    <DropdownMenu>
  <DropdownMenuTrigger>
  <Button variant="outline" size="icon">
      <BellIcon className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    {notifications.map((item:any, key:number) => <DropdownMenuItem key ={key} className="p-1 cursor-pointer hover:bg-neutral-50 transition">
      <p>{item.text}</p>
      <p>{item.date}</p>
      <span>{item.read ? "Read" : "Unread"}</span>
      
      </DropdownMenuItem>)}
    
  </DropdownMenuContent>
</DropdownMenu>

        </div>
    </div>
}