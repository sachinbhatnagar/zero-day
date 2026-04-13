export function Price({
  amount,
  label,
}: {
  amount: string
  label: string
}) {
  return (
    <div className="flex items-end gap-2">
      <span className="font-serif text-[44px] leading-none text-accent">
        {amount}
      </span>
      <span className="mb-1.5 text-[14px] text-text-secondary">{label}</span>
    </div>
  )
}