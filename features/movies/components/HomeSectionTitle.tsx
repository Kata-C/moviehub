import FilterBar from "@/components/FilterBar";
import { IFilterBarProps } from "@/types/componentsTypes";

export default function HomeSectionTitle<T extends { label: string }>(props: IFilterBarProps<T> & { title: string }) {
    return <>
        <h1 className="text-black dark:text-white text-2xl font-semibold">Trending</h1>
        <FilterBar
            options={props.options}
            onSelectOption={(option: number) => {
                props.onSelectOption(option)
            }}
            backgroundColor="#10b981"
            textSelectedColor="#e9ebeaff"
            textUnselectedColor="#e9ebeaff"
        />
    </>

}