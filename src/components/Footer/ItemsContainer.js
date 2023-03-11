import Item from "./Item";
import {UseCases, Industries, Research, Company} from "./Menus";

const ItemsContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 ml-20 sm:px-8 px-5 py-16">
            <Item Links={UseCases} title="USE CASES"/>
            <Item Links={Industries} title="INDUSTRIES"/>
            <Item Links={Company} title="COMPANY"/>
            <Item Links={Research} title="RESEARCH"/>
        </div>
    )
}

export default ItemsContainer;