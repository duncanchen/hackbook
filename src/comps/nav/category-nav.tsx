"use client";
import { Text } from "@radix-ui/themes";
import { useAtom } from "jotai";
import { categoryAtom } from "./category-atom";
import { cn } from "@/lib";

interface NavItem {
    title: string
    category: string
}

const navItems = [
    { title: 'Gists', category: 'gist' },
    { title: 'Prompt', category: 'prompt' },
]

const DisplayNavItem = ({ title, category }: NavItem) => {
    const [selected, setSelected] = useAtom(categoryAtom)
    const cls = cn(["text-primary", "my-2", "py-2", "pr-4", "text-right",
        selected === category ? "font-bold border-r-8 border-primary " : "font-normal cursor-pointer"
    ])
    const handler = () => {
        if (selected !== category) {
            setSelected(category)
        }
    }

    return <div className="flex flex-col justify-end">
        <div className={cls} onClick={handler} >{title}</div>
    </div>
}

export const CategoryNav = () => {
    return <div>
        {navItems.map((item, i) => <DisplayNavItem key={i} {...item} />)}
    </div>
}