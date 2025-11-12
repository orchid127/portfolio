interface BoxProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function Box (props: BoxProps) {
    return (
        <div className="bg-[#823E78]/30 hover:bg-[#9C80DB]/30 border-2 border-[#823E78] hover:border-[#9C80DB] rounded-[15px] p-3 w-[25rem] flex flex-col h-[35rem]">
            <div className="bg-[#823E78] hover:bg-[#9C80DB] rounded-[15px] w-full h-[18rem] flex justify-center overflow-hidden">
                <img src={props.image} alt="image of project" className="rounded-[15px] object-cover w-full h-full"/>
            </div>
            <div className="mt-[1rem] flex flex-col flex-1">
                <h3 className="mb-2">{props.title}</h3>
                <p className="flex-1 mb-3">{props.description}</p>
                <a href={props.link} className="!no-underline !text-[#C5B2E7] !hover:text-[#9C80DB] !after:content-['_↗'] mt-auto">github repository</a>
            </div>
        </div>
    )
}