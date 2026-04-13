import { ShieldCheck } from "lucide-react"

export function TrustBadge() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <ShieldCheck size={14} className="text-text-secondary" />
      <span className="text-[12px] text-text-secondary">
        Secure checkout · 30-day refund policy
      </span>
    </div>
  )
}