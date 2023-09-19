import { ScrollArea } from "@radix-ui/themes"

type SideMainProps = {
    side: React.ReactNode,
    children: React.ReactNode
}

export const SideMain = (props: SideMainProps) => {
    const { side = <></>, children = <></> } = props
    return <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside
            className="fixed top-32 z-30 hidden h-[calc(100vh-5.1rem)] 
                w-full shrink-0 overflow-y-auto 
            border-slate-500 border-r md:sticky md:block ">
            <div>
                {side}
            </div>
        </aside>
        <div
            className="fixed top-32 z-30 
                hidden h-[calc(100vh-5.1rem)] 
                 shrink-0 overflow-y-auto 
                md:sticky md:block ">
            <div>
                {children}
            </div>
        </div>

    </div>
}