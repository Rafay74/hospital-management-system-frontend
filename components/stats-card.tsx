import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

interface StatsCardProps {
  title: string
  description: string
  value: string | number
  icon?: React.ReactNode
}

export default function StatsCard({
  title,
  description,
  value,
  icon,
}: StatsCardProps) {
  return (
    <div className=" ">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>{icon}</CardAction>
        </CardHeader>
        <CardContent>
          <p>{value}</p>
        </CardContent>
      </Card>
    </div>
  )
}
