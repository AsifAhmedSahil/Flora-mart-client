/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom"

function CategoryItem ({name,href,backgroundColor,color}) {
    const style ={
        backgroundColor:backgroundColor,
        color:color,
        borderColor:color,

    }
    return(
        <div>
            <Link to={href} className="rounded-full">
            <div className="uppercase px-6 py-2 text-center rounded-full font-bold mr-8" style={style}>{name}</div>
            </Link>
        </div>
    )
}
function CategoryList () {
    return(
        <div className="flex flex-wrap justify-center items-center gap-8">
            <CategoryItem name="flower" href="/products/flower" backgroundColor="#f0f5c4" color="#000000"/>
            <CategoryItem name="fruit" href="/products/fruit" backgroundColor="#4CCDE4" color="#000000"/>
            <CategoryItem name="bonshai" href="/products/bonshai" backgroundColor="#D8E44C" color="#000000"/>
            <CategoryItem name="bamboo" href="/products/bamboo" backgroundColor="#6AE260" color="#000000"/>
            <CategoryItem name="cactus" href="/products/cactus" backgroundColor="#E29460" color="#000000"/>
            </div>
    )
}

const CategoryWrapper = () => {
  return (
    <div>
        <CategoryList/>
    </div>
  )
}

export default CategoryWrapper