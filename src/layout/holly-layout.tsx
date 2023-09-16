import { WorkFrame } from "@/frame/work-frame"
import { MainNav } from "./main-nav"
import { SideMain } from "@/frame"

export const HollyLayout = ({ children }: { children: React.ReactNode }) => {

    const header = <MainNav />
    const footer = <></>

    return <WorkFrame header={header} footer={footer}>
        <SideMain side={<></>}>
            {children}
        </SideMain>
    </WorkFrame>
}