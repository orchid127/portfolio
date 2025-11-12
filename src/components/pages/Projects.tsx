import Box from "../Box.tsx"


export default function Projects () {

    return(
        <section id="projects" className="mx-20  font-[Inter] !text-[#FAF5E9]">
            <div className="">
                <p className="!text-[#FAF5E9] text-[2rem] font-semibold flex items-center gap-4 whitespace-nowrap"><span className="h-2 w-full bg-[#823E78] rounded-full"></span>Projects</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Box title="Webther" description="Webther is a simple yet aesthetically pleasing desktop app, where the user can type the same of a city and get the current temperature of said city. Built with the framework Electron."
                    image="/webther.png" link="https://github.com/orchid127/webther"/>
                    <Box title="Media Player" description="A basic C++ app that allows the user to select an mp3 file and play it." image="/media-player.png" link="about:blank"/>
                </div>
            </div>
        </section>
    )
}