'use client'

import { Bell, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

import { User } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-4 border-b p-4 px-10">
      <div>Header</div>

      <div className="flex gap-4 r">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-md border hover:bg-gray-100 cursor-pointer">
              <Bell className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-md border hover:bg-gray-100 cursor-pointer">
              <User className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
