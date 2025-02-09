import Link from "next/link";
import FaceIcon from "../_Micro/Icons/FaceBook";
import Instagram from "../_Micro/Icons/Instagram";
import XIcon from "../_Micro/Icons/X";
import Youtubeicon from "../_Micro/Icons/Youtube";
import { FormNews } from "./Form.tsx";

export default function Footer (){
    return (
        <div>
            <div className="w-full h-20"></div>
            <div className="border border-t-d-black border-b-d-black">
                <div className="w-full max-w-5xl mx-auto py-10">
                    <div className="flex gap-10">
                        <div className="p-2 flex flex-col gap-4">
                            <p>Catalog</p>
                            <div className="flex flex-col">
                                <Link href={'#'}>Payday Deals</Link>
                                <Link href={'#'}>Best Seller</Link>
                                <Link href={'#'}>Bottom</Link>
                                <Link href={'#'}>Top</Link>
                                <Link href={'#'}>Bags</Link>
                                <Link href={'#'}>Accessories</Link>
                            </div>
                        </div>
                        <div className="p-2 flex flex-col gap-4">
                            <p>Customer Info</p>
                            <div className="flex flex-col">
                                <Link href={'#'}>About Us</Link>
                                <Link href={'#'}>Stockist</Link>
                                <Link href={'#'}>Lifestyle</Link>
                                <Link href={'#'}>FAQS</Link>
                                <Link href={'#'}>Contact</Link>
                                <Link href={'#'}>For Business</Link>
                            </div>
                        </div>
                        <div className="p-2 flex flex-col gap-4">
                            <p>Legal Pages</p>
                            <div className="flex flex-col">
                                <Link href={'#'}>Deliveries & Returns</Link>
                                <Link href={'#'}>Term & Conditions</Link>
                                <Link href={'#'}>Refund Policy</Link>
                                <Link href={'#'}>Privacy Policy</Link>
                            </div>
                        </div>
                        <div className="p-2 flex-1">
                            <p>Sign Up For Updates</p>
                            <FormNews />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5">
                <div className="w-full max-w-5xl mx-auto py-5 flex justify-between">
                        <div className="p-2">© Gemash V2 2023 all right reserved.</div>
                        <div className="flex p-2 gap-7">
                            <Link href={'#'}>
                                <FaceIcon />
                            </Link>
                            <Link href={'#'}>
                                <XIcon />
                            </Link>
                            <Link href={'#'}>
                                <Instagram />
                            </Link>
                            <Link href={'#'}>
                                <Youtubeicon />
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}