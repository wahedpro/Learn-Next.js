import Link from "next/link";

const Navber = () => {
    return (
        <div>
            <nav className="w-[80%] mx-auto">
                <ul className="flex gap-10 justify-center py-5">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/services"><li>Services</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;