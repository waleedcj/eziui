import { createFileRoute } from '@tanstack/react-router'
import { Instalation } from '@/pages/components/Instalation'

export const Route = createFileRoute('/components/animated-button')({
  component: () => < Instalation />,
})