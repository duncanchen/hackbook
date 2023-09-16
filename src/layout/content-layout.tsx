import { WorkFrame } from "@/frame/work-frame"
import { MainNav } from "./main-nav"
import { SideMain } from "@/frame"
import { CategoryNav } from "@/comps/nav"

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {

    const header = <MainNav />
    const footer = <></>
    return <WorkFrame header={header} footer={footer}>
        <SideMain side={<CategoryNav />}>
            {children}
        </SideMain>
    </WorkFrame>
}