import Button from "../Button.tsx"

export default function Home () {
    return(
        <section id="home" className="scroll-mt-48 mx-20 my-68 font-[Inter] !text-[#FAF5E9]">
            <div className="">
                <p className="text-[4rem]/20 sm:text-[6rem]/25 font-bold mb-0">Hi, I'm <span className="text-[#C5B2E7]">Kimberley</span>!</p>
                <p className="text-[1.2rem] mt-2">I'm a computer science student, looking for an apprenticeship in web development.</p>
                <Button title="Get to know me!" link="#about"/>
            </div>
        </section>
    )
}