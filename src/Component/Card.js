import React from "react"

export default function Card(props){
    return(
        <>
            <div className="h-72 w-60 m-8 flex flex-col flex-wrap 
                            justify-evenly items-center shadow-lg
                            hover:shadow-2xl" 
                     
            >               
                <img 
                    src={props.img}
                    className="h-40 w-40 " 
                />
                <h2
                    className="text-black text-2xl h-8 font-medium tracking-wider "
                >
                {props.name}
                </h2>
            </div>
        </>
    )
}