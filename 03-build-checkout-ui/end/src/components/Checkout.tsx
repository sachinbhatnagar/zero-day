import { CourseShowcase } from "./CourseShowcase"
import { PaymentForm } from "./PaymentForm"

export function Checkout() {
  return (
    <div className="flex min-h-screen font-sans">
      <CourseShowcase />
      <PaymentForm />
    </div>
  )
}