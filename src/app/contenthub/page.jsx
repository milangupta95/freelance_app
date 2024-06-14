'use client'
import { PageStarter } from "@/Components/PageStarter"
import { useState } from "react"
import { ContentCard } from "@/Components/Cards/ContentCard"

export default function Page() {
    const blogs = [
        {
            "imageSrc": "https://example.com/image1.jpg",
            "userImageSrc": "https://example.com/user1.jpg",
            "username": "User One",
            "userDes": "Description for User One",
            "description": "This is a sample description for item one.",
            "date": "2024-06-09"
        },
        {
            "imageSrc": "https://example.com/image2.jpg",
            "userImageSrc": "https://example.com/user2.jpg",
            "username": "User Two",
            "userDes": "Description for User Two",
            "description": "This is a sample description for item two.",
            "date": "2024-06-10"
        },
        {
            "imageSrc": "https://example.com/image3.jpg",
            "userImageSrc": "https://example.com/user3.jpg",
            "username": "User Three",
            "userDes": "Description for User Three",
            "description": "This is a sample description for item three.",
            "date": "2024-06-11"
        },
        {
            "imageSrc": "https://example.com/image4.jpg",
            "userImageSrc": "https://example.com/user4.jpg",
            "username": "User Four",
            "userDes": "Description for User Four",
            "description": "This is a sample description for item four.",
            "date": "2024-06-12"
        },
        {
            "imageSrc": "https://example.com/image5.jpg",
            "userImageSrc": "https://example.com/user5.jpg",
            "username": "User Five",
            "userDes": "Description for User Five",
            "description": "This is a sample description for item five.",
            "date": "2024-06-13"
        },
        {
            "imageSrc": "https://example.com/image6.jpg",
            "userImageSrc": "https://example.com/user6.jpg",
            "username": "User Six",
            "userDes": "Description for User Six",
            "description": "This is a sample description for item six.",
            "date": "2024-06-14"
        },
        {
            "imageSrc": "https://example.com/image7.jpg",
            "userImageSrc": "https://example.com/user7.jpg",
            "username": "User Seven",
            "userDes": "Description for User Seven",
            "description": "This is a sample description for item seven.",
            "date": "2024-06-15"
        },
        {
            "imageSrc": "https://example.com/image8.jpg",
            "userImageSrc": "https://example.com/user8.jpg",
            "username": "User Eight",
            "userDes": "Description for User Eight",
            "description": "This is a sample description for item eight.",
            "date": "2024-06-16"
        },
        {
            "imageSrc": "https://example.com/image9.jpg",
            "userImageSrc": "https://example.com/user9.jpg",
            "username": "User Nine",
            "userDes": "Description for User Nine",
            "description": "This is a sample description for item nine.",
            "date": "2024-06-17"
        },
        {
            "imageSrc": "https://example.com/image10.jpg",
            "userImageSrc": "https://example.com/user10.jpg",
            "username": "User Ten",
            "userDes": "Description for User Ten",
            "description": "This is a sample description for item ten.",
            "date": "2024-06-18"
        }
    ]
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("all");
    const [page, setPage] = useState(0);

    const lastPage = (blogs.length - 1) / 6;

    const setPreviousPage = () => {
        if(page === 0) return;
        setPage(page - 1);
    }

    const setNextPage = () => {
        if(page === lastPage) return;
        setPage(page + 1);
    }

    const currPageStyle = "px-3 py-1 bg-blue-500 text-white rounded-md";
    const nonCurrPageStyle = "px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
    return (
        <div className="bg-white space-y-4">
            <PageStarter tit1={"Blog"} tit2={""} tit1Col={"black"} descColor={"black"} imageSrc={"/images/blogsHeader.jpg"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}></PageStarter>
            <div className="flex p-4 bg-white items-center justify-center space-x-4">
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="bg-[#FFF4E3] border p-2 text-black w-[500px]" placeholder="Search" />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-[#FFF4E3] border p-2 text-black w-[200px]">
                    <option value="all">All Categories</option>
                    <option value={"technical"}>Technical</option>
                    <option value={"services"}>Services</option>
                </select>
            </div>

            <div className="bg-white py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                {
                    blogs.splice(page * 6,(page + 1) * 6).map((blog) => {
                        return <ContentCard date={"12 Jan 2024"} description={"Consectetur adipiscing elit dolore magna aliqua?"} imageSrc={"/images/blog1.jpg"} userImageSrc={"/images/av1.jpg"} username={"Jessica"} userDes={"UI/UX Designer"} />
                    })
                }
            </div>

            <div class="flex justify-center items-center space-x-2">
                <button onClick={setPreviousPage} class="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">
                    Previous
                </button>
                {
                    [1,2].map((val) => {
                        return <button className={page === val - 1 ? currPageStyle : nonCurrPageStyle}>{val}</button>
                    })
                }
                <button onClick={setNextPage} class="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">
                    Next
                </button>
            </div>

        </div>

    )
}