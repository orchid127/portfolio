//import { ReactComponent as JavascriptIcon } from '../../assets/icons/javascript.svg';

export default function About () {
    return(
        <section id="about" className="mx-20 my-30 font-[Inter]">
            <div className="">
                <p className="!text-[#FAF5E9] text-[2rem] font-semibold">About me<span className="h-[0.1rem] w-full bg-[#C5B2E7] rounded-full"> t </span></p>
                <div className="!text-[#FAF5E9]">
                    <p>Hello ! My name is Kimberley and I like to program apps and video games that are as cute as they are functional. 
                    My coding started back in middle school, when I was introduced to programming by my father, 
                    and then continued in high school when i started programming my own games in Python.
                    Now, I’m a third-year student in computer science, looking for an apprenticeship to further my skills in web development.</p>
                    <p>Technologies I’ve worked with:</p>

                    <div className="grid grid-cols-4 place-content-center mx-20">
                        <div className="bg-[#823E78] p-2 size-25 rounded-[15px]"></div>
                        <div className="bg-[#823E78] p-2 size-25 rounded-[15px]"></div>
                        <div className="bg-[#823E78] p-2 size-25 rounded-[15px]"></div>
                        <div className="bg-[#823E78] p-2 size-25 rounded-[15px]"></div>
                        <div className="bg-[#823E78] p-2 size-25 rounded-[15px]"></div>
                        <div className="bg-[#823E78] p-2 size-25 rounded-[15px]"></div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}