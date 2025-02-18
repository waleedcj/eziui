import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Docs/')({
  component: () => <div>Hello /Docs/!</div>
})