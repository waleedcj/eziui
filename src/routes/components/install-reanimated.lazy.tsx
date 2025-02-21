import { createLazyFileRoute } from '@tanstack/react-router'
import { InstallReanimated } from '@/pages/components/InstallReanimated'

export const Route = createLazyFileRoute('/components/install-reanimated')({
  component: () => <InstallReanimated />
})