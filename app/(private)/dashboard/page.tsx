import StatsCard from '@/components/stats-card'
import { Users, Calendar, DollarSign, Stethoscope } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <StatsCard
        title="Total Doctors"
        description="Active this month"
        value={24}
        icon={<Stethoscope className="w-6 h-6" />}
      />
      <StatsCard
        title="Patients"
        description="Total registered"
        value={842}
        icon={<Users className="w-6 h-6" />}
      />
      <StatsCard
        title="Appointments"
        description="Today’s total"
        value={37}
        icon={<Calendar className="w-6 h-6" />}
      />
      <StatsCard
        title="Earnings"
        description="This month"
        value="$12,480"
        icon={<DollarSign className="w-6 h-6" />}
      />
    </div>
  )
}
