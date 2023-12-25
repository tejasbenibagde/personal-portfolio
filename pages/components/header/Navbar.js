import Link from "next/link"

function Navbar() {

    const navItems = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Work",
            href: "/Work"
        },
        {
            title: "About",
            href: "/About"
        },
        {
            title: "Contact",
            href: "/Contact"
        },

    ]


    return (
        <div>
            {

                navItems.map((data, index) => {
                    const { title, href } = data;

                    return <Link
                        key={index}
                        href={href}
                    >
                        {title}
                    </Link>

                })

            }
        </div>
    )
}

export default Navbar