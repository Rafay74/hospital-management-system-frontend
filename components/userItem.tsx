import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function UserItem() {
  return (
    <div className="flex items-center justify-start border rounded-[8px] p-2 gap-2">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <p className="text-[16px] font-bold">John Doe</p>
        <p className="text-[16px] text-neutral-500">john@test.com</p>
      </div>
    </div>
  )
}
