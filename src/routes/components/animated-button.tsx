import { createFileRoute } from '@tanstack/react-router'
import { Instalation } from '@/components/ui/All-components/Instalation/Instalation'

export const Route = createFileRoute('/components/animated-button')({
  component: () => < Instalation />,
})