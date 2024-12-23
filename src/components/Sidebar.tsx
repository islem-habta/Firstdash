"use client";
import React from 'react'; // Import React
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import { User, Mail, CreditCard, Bell, Settings, Shield, FileText } from "lucide-react"; // Import necessary icons

export default function Sidebar() {
    const menulist = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    icon: <Mail />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <CreditCard />,
                    text: "Billing"
                },
                {
                    link: "/",
                    icon: <Bell />,
                    text: "Notifications"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icon: <Settings />,
                    text: "General Settings"
                },
                {
                    link: "/",
                    icon: <Shield />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <FileText />,
                    text: "Logs"
                }
            ]
        }
    ];
    
    return (
        <div className=" fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen ">
            <div>
                <UserItem />
            </div>
            <div className="grow">
                <Command style={{ overflow: "visible"}}>
                    <CommandList style={{ overflow: "visible"}}>
                        {menulist.map((menu: any, key:number) => (
                            
                            
                            
                                <CommandGroup key={key} heading={menu.group}>
                                    {menu.items.map((option: any, optionkey: number) => 
                                        <CommandItem key={optionkey} className='flex gap-2 cursor-pointer'>
                                            {option.icon}
                                            {option.text}
                                        </CommandItem>
                                    )}
                                </CommandGroup>
                                
                            
                        ))}
                    </CommandList>
                </Command>
            </div>
            <div>Settings / Notifications</div>
        </div>
    );
}
