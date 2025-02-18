import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Docs/$docsId')({
  component: () => <div>Hello /Docs/$docsId!</div>
})