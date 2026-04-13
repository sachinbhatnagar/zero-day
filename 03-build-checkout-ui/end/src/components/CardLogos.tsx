export function CardLogos() {
  return (
    <div className="flex items-center justify-center gap-3">
      <CardLogo name="VISA" />
      <CardLogo name="MC" />
      <CardLogo name="AMEX" />
    </div>
  )
}

function CardLogo({ name }: { name: string }) {
  return (
    <span className="text-[11px] font-bold tracking-[1.5px] text-text-secondary opacity-50">
      {name}
    </span>
  )
}