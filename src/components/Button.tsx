export default function Button () {
    return (
        <button onClick={() => document.getElementById('about')?.scroll} className="text-[#C5B2E7] !rounded-4xl bg-[#823e783f] mt-[0.625rem] border !border-[#823E78] px-3 py-1 hover:bg-[#C5B2E7] hover:text-[#823e78] hover:!border-[#9C80DB]">Get to know me!</button>
    );
}