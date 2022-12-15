import Navbar from "../Components/Navbar";
import Link from 'next/link'
import Footer from "../Components/Footer";

export default () => (
    <div>
        <Navbar />
        <div className="container mx-auto my-auto text-center">
            <h1 className="text-4xl my-auto py-20">OOPPPSSS .. .. ..</h1>
            <h1 className="text-2xl">Your destination page cannot be found</h1>
            <h1 className="text-2xl py-5">Go back to the <Link className="underline text-primary" href='/home'>Home</Link></h1>
            <h1 className="text-2xl py-5 text-secondary">support@stay.id</h1>
        </div>
    </div>
)