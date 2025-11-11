export default function Projects () {
    return(
        <section id="projects" className="mx-20 my-64 font-[Inter] !text-[#FAF5E9]">
            <div className="">
                <p className="!text-[#FAF5E9] text-[2rem] font-semibold flex items-center gap-4 whitespace-nowrap"><span className="h-2 w-full bg-[#823E78] rounded-full"></span>Projects</p>
                <div className="bg-[#823E78]/30 hover:bg-[#9C80DB]/30 border-2 border-[#823E78] hover:border-[#9C80DB] rounded-[15px] p-3 w-50">
                    <div className="bg-[#823E78] hover:bg-[#9C80DB] rounded-[15px]">
                        <video></video>
                    </div>
                    <div className="mt-[1rem]">
                        <h3>Webther</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam lorem  lectus, fermentum sed scelerisque at, viverra sed nulla. 
                        Pellentesque ac vestibulum nibh. In at justo tincidunt, fermentum velit quis, blandit  lorem. 
                        Sed ut justo mollis, vehicula risus vel, pharetra turpis.  Suspendisse varius molestie tempor.</p>
                        <a href='about:blank'>github repository</a>
                    </div>
                </div>

            </div>
        </section>
    )
}