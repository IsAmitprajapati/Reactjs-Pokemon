import React from "react"

export default function Search(props){
    return(
        <>
            <div className="flex h-20 w-auto  justify-center items-center">
                <div className="h-12 w-96 rounded-3xl p-4 border-2 flex  items-center absolute 
                z-20  bg-white border focus-within:shadow-5xl  " >
                    <input
                        type="text" 
                        placeholder="Search Pokemon" 
                        className="w-80 h-10  border-1 outline-0 text-lg"
                        onChange={props.search}
                        /> 
                    <i className="fa-solid fa-search"></i>
                </div>
            </div>
        </>
    )
}