'use client'
import { PageStarter } from "@/Components/PageStarter"
import { useState } from "react"
import { ContentCard } from "@/Components/Cards/ContentCard"

export default function Page() {
    const events = [
        {
            "link": "https://www.example.com/case-studies/successful-marketing-campaign",
            "imageSrc": "/images/marketing.png",
            "userImageSrc": "/images/profile_image.png",
            "username": "Analyst One",
            "userDes": "Marketing Expert",
            "description": "How a Successful Marketing Campaign Increased Brand Awareness",
            "date": "Apr. 10, 2024"
        },
        {
            "link": "https://www.example.com/case-studies/effective-employee-training",
            "imageSrc": "/images/training.png",
            "userImageSrc": "/images/profile_image.png",
            "username": "Analyst Two",
            "userDes": "HR Specialist",
            "description": "Effective Employee Training Programs and Their Impact",
            "date": "May. 22, 2024"
        },
        {
            "link": "https://www.example.com/case-studies/sustainability-initiatives",
            "imageSrc": "/images/sus_cons.jpeg",
            "userImageSrc": "/images/profile_image.png",
            "username": "Analyst Three",
            "userDes": "Sustainability Consultant",
            "description": "Implementing Successful Sustainability Initiatives in Corporations",
            "date": "Jun. 30, 2024"
        }
    ]
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("all");
    const [page, setPage] = useState(0);

    const lastPage = (events.length - 1) / 6;
    const noOfPages = (events.length) / 6;
    const pageArray = Array.from(Array(noOfPages).keys())
    const setPreviousPage = () => {
        if (page === 0) return;
        setPage(page - 1);
    }

    const setNextPage = () => {
        if (page === lastPage) return;
        setPage(page + 1);
    }

    const currPageStyle = "px-3 py-1 bg-blue-500 text-white rounded-md";
    const nonCurrPageStyle = "px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
    return (
        <div className="bg-white space-y-4">
            <PageStarter tit1={"Case Study"} tit2={""} tit1Col={"black"} descColor={"black"} imageSrc={"/images/blogsHeader.jpg"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}></PageStarter>
            <div className="flex w-full items-center justify-center">
                <div className="flex bg-white px-4 items-center w-[70%] space-x-4">
                    <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="bg-[#FFF4E3] border p-2 text-black w-[500px]" placeholder="Search" />
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-[#FFF4E3] border p-2 text-black w-[200px]">
                        <option value="all">All Categories</option>
                        <option value={"technical"}>Technical</option>
                        <option value={"services"}>Services</option>
                    </select>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="bg-white md:w-full w-[80%] py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                    {
                        events.splice(page * 6, (page + 1) * 6).map((event, idx) => {
                            return <ContentCard key={idx} content={event} />
                        })
                    }
                </div>
            </div>

            <div class="flex justify-center items-center space-x-2">
                <button onClick={setPreviousPage} class="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">
                    Previous
                </button>
                {
                    pageArray.map((val, idx) => {
                        return <button key={idx} className={page === val ? currPageStyle : nonCurrPageStyle}>{val + 1}</button>
                    })
                }
                <button onClick={setNextPage} class="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">
                    Next
                </button>
            </div>

        </div>

    )
}