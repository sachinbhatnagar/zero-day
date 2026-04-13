import { CircleCheck } from "lucide-react"
import { CourseImage } from "./CourseImage"
import { Price } from "./Price"

const features = [
  "40+ hours of hands-on video lessons",
  "Build 12 real-world portfolio projects",
  "Lifetime access + community support",
]

export function CourseShowcase() {
  return (
    <div className="flex w-[860px] shrink-0 flex-col gap-6 bg-ink p-16">
      <CourseImage />

      <div className="flex flex-col gap-6">
        <span className="text-[11px] font-bold tracking-[2.5px] text-accent">
          FEATURED COURSE
        </span>

        <h1 className="font-serif text-[38px] leading-[1.15] text-warm-white">
          Mastering Modern Web Development
        </h1>

        <div className="flex items-center gap-2">
          <span className="text-[13px] text-text-secondary">by</span>
          <span className="text-[13px] font-semibold text-warm-white">
            Sarah Chen
          </span>
        </div>

        <div className="h-1 w-10 bg-accent" />

        <ul className="flex flex-col gap-4">
          {features.map((text) => (
            <li key={text} className="flex items-center gap-2">
              <CircleCheck size={16} className="shrink-0 text-accent" />
              <span className="text-[14px] text-warm-white">{text}</span>
            </li>
          ))}
        </ul>

        <Price amount="$79" label="one-time" />
      </div>

      <div className="mt-auto">
        <span className="font-serif text-[18px] text-warm-white opacity-40">
          LearnPro
        </span>
      </div>
    </div>
  )
}