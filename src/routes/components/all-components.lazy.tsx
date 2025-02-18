import { createLazyFileRoute } from '@tanstack/react-router'
import { PreviewComponents } from "@/components/ui/All-components";

export const Route = createLazyFileRoute('/components/all-components')({
    component: () => <PreviewComponents />,
})