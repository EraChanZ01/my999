import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-16 bg-purple-600">
            <div className="font-bold text-md text-white max-w-5xl mx-auto">
                <div className=" mt-4 flex flex-row justify-between">
                    <Link  href="/">
                        <div className="cursor-pointer hover:text-blue-400 ">Пользовательские соглашения</div>
                    </Link>
                    <Link href="/">
                        <div  className="cursor-pointer hover:text-blue-400 ">Политика защиты персональной информации</div>
                    </Link>
                    <Link href="/">
                        <div  className="cursor-pointer hover:text-blue-400 ">GACHI5RP.COM</div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}