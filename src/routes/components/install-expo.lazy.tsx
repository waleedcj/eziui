import {InstallExpo} from '@/components/ui/All-components/Instalation/InstallExpo'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/components/install-expo')({
  component: () => <InstallExpo />
})