import {InstallExpo} from '@/pages/components/InstallExpo'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/components/install-expo')({
  component: () => <InstallExpo />
})