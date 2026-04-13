import {
  CreditCard,
  Calendar,
  Lock,
  User,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<FormFieldIcon, LucideIcon> = {
  card: CreditCard,
  calendar: Calendar,
  lock: Lock,
  user: User,
}

export type FormFieldIcon = "card" | "calendar" | "lock" | "user"

interface FormFieldProps {
  label: string
  icon: FormFieldIcon
  placeholder: string
}

export function FormField({ label, icon, placeholder }: FormFieldProps) {
  const Icon = iconMap[icon]

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-text-primary">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-border-color bg-surface-muted px-4 py-3">
        <Icon size={16} className="shrink-0 text-text-secondary" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-[14px] text-text-primary outline-none"
        />
      </div>
    </div>
  )
}