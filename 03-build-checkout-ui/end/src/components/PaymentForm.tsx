import { ArrowRight } from "lucide-react"
import { FormField } from "./FormField"
import { TrustBadge } from "./TrustBadge"
import { CardLogos } from "./CardLogos"

export function PaymentForm() {
  return (
    <div className="flex flex-1 items-center justify-center bg-surface px-12 py-16">
      <div className="flex w-full max-w-[420px] flex-col gap-8">
        <FormHeader />

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <FormField label="Card number" icon="card" placeholder="1234  5678  9012  3456" />
          <div className="flex gap-4">
            <FormField label="Expiry date" icon="calendar" placeholder="MM / YY" />
            <FormField label="CVC" icon="lock" placeholder="123" />
          </div>
          <FormField label="Name on card" icon="user" placeholder="Full name on card" />
        </form>

        <SubmitButton />

        <TrustBadge />
        <CardLogos />
      </div>
    </div>
  )
}

function FormHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-serif text-[28px] text-text-primary">
        Complete your purchase
      </h2>
      <p className="leading-[1.5] text-[15px] text-text-secondary">
        You're one step away from mastering modern web development.
      </p>
    </div>
  )
}

function SubmitButton() {
  return (
    <button className="flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-accent px-6 py-4 font-bold text-white transition-colors hover:bg-accent-dark">
      <span className="text-[16px]">Enroll now — $79</span>
      <ArrowRight size={18} />
    </button>
  )
}