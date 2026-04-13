export function CourseImage() {
  return (
    <div className="h-[280px] overflow-hidden rounded-[var(--radius-lg)]">
      <img
        src="/course-image.png"
        alt="Mastering Modern Web Development course"
        className="h-full w-full object-cover"
      />
    </div>
  )
}