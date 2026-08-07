export function PageSkeleton() {
  return (
    <div className="container-page py-24">
      <div className="skeleton mb-4 h-8 w-1/3" />
      <div className="skeleton mb-2 h-4 w-2/3" />
      <div className="skeleton mb-10 h-4 w-1/2" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton h-64 w-full" />
        ))}
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <div className="skeleton mb-4 h-40 w-full" />
      <div className="skeleton mb-2 h-4 w-3/4" />
      <div className="skeleton h-4 w-1/2" />
    </div>
  )
}
