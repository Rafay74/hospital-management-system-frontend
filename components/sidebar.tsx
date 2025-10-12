'use client'
import { Command, CommandGroup, CommandItem, CommandList } from './ui/command'
import { menuList } from '@/app/common/constants'
import UserItem from './userItem'

export default function Sidebar() {
  return (
    <div className=" fixed min-h-screen w-[300px] min-w-[300px] border-r p-4 flex flex-col gap-2  ">
      <div>
        <UserItem />
      </div>

      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu, index: number) => {
              return (
                <CommandGroup key={index} heading={menu.group}>
                  {menu.items.map((item, index: number) => {
                    return (
                      <CommandItem
                        key={index}
                        className="flex gap-2 cursor-pointer"
                      >
                        <>
                          {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                          {item.text}
                        </>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              )
            })}
          </CommandList>
        </Command>
      </div>
    </div>
  )
}
