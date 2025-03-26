import Navbar from "../Navbar"
import NewsCard from "./NewsCard"
export default function News(){
    return(
        <>
        <Navbar/>
        <h1 className="text-5xl font-extrabold text-black-700 dark:text-gray-100 text-center">News</h1>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        </>
    )
}