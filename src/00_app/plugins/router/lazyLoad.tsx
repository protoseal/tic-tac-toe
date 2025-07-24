import { UILoader } from "@05_shared/ui/UILoader"
import { Suspense, lazy } from "react"

export const lazyLoad = (path: string) => {
  const exportName = path.split("/").pop()!

  const LazyComponent = lazy(async () => {
    const module = await import(`../../../01_pages/${path}`)
    return { default: module[exportName] ?? module.default }
  })

  return (
    <Suspense fallback={<UILoader className="h-screen" />}>
      <LazyComponent />
    </Suspense>
  )
}
