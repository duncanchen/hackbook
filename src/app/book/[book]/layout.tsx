import { HollyLayout } from "@/layout/holly-layout"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <HollyLayout>
            {children}</HollyLayout>
    )
}