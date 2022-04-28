import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between">
            <Link href="/">
                <div >
                    <img className="cursor-pointer" src="/gacha-club.png" width="100" />
                </div>
            </Link>     

            <div className="flex flex-row py-4 px-4 items-center justify-evenly w-2/3 border-2 border-blue-700 rounded-full  font-bold" >
                <Link href="/start">
                    <div className="text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500 cursor-pointer">
                        Играть
                    </div>
                </Link>
                <Link href="/server">
                    <div className=" text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500 cursor-pointer">
                        Cервер
                    </div>
                </Link>
                <Link href="/forum">
                    <div className="text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500 cursor-pointer">
                        Форум
                    </div>
                </Link>
                <Link href="/buy">
                    <div className="text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500 cursor-pointer">
                        Купить Гачи
                    </div>
                </Link>
            </div>
            <Link href="/login">
                <div className = "cursor-pointer  border-2 rounded-full border-blue-700 p-3 flex items-center">
                    <img  alt="" src="/log.png" width="40" />
                </div>
            </Link>  
        </header>
    )
}