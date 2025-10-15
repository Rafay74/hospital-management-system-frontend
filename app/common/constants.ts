import {
  Users,
  LayoutDashboard,
  ClipboardClock,
  ChartBarBig,
} from 'lucide-react'

export const menuList = [
  {
    group: 'General',
    items: [
      {
        link: '/dashboard',
        icon: LayoutDashboard,
        text: 'Dashboard',
      },
      {
        link: '/doctors',
        icon: Users,
        text: 'Doctors',
      },
      {
        link: '/appointments',
        icon: ClipboardClock,
        text: 'Appointments',
      },
      {
        link: '/analytics',
        icon: ChartBarBig,
        text: 'Analytics',
      },
    ],
  },
]
