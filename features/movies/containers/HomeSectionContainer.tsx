import { ContainerProps } from "@/types/componentsTypes";

export function HomeSectionContainer(props: ContainerProps) {
    return (
            <div className="w-full bg-white dark:bg-sky-950"
                style={{backgroundColor: props.backgroundColor ? props.backgroundColor : ""}}
            >
                <div className="h-15 w-[85%] mx-auto self-center flex items-end justify-start gap-8">
                    {props.titleSection}
                </div>
                <div className="w-[92%] mx-auto self-center px-10 flex gap-5 overflow-x-auto overflow-y-hidden pb-10 pt-5">
                    {props.children}
                </div>
            </div>
        )
}