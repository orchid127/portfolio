interface ButtonProps {
    title: string;
    link: string;
}

export default function Button (props: ButtonProps) {

    // function to control what a button does when clicked
    const whenClicked = () => {
        // if the link property is a section of the page, the button scrolls to it
        if (props.link.startsWith('#')) {
            let section = document.querySelector(props.link);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'})
            }
        }
        // if the link propert is a pdf, the button opens it
        else if (props.link.endsWith('.pdf')) {
            window.open(props.link)
        }
        // if the link is neither of the above, or if there's no link, the button displays an error message
        else {
            console.warn("The link either doesn't exist or isn't in a handled format.")
        }
    }
    return (
        <button onClick={whenClicked}
        className="text-[#C5B2E7] !rounded-4xl bg-[#823e783f] mt-[0.625rem] border-[0.125em] !border-[#823E78] px-3 py-1 hover:bg-[#C5B2E7] hover:text-[#823e78] hover:!border-[#9C80DB]">
        {props.title}</button>
    );
}