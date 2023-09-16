type WorkLayoutProps = {
    children: React.ReactNode
    footer: React.ReactNode
    header: React.ReactNode
}

export const WorkFrame = ({ children, footer, header }: WorkLayoutProps) => {
    return <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b border-slate-500">
            {header}
        </header>
        <div className="container flex-1">{children}</div>
        <div className="border-t border-slate-500" >{footer}</div>
    </div>


}

