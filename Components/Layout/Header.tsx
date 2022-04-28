import Link from 'next/link'


export default function Header() {
    return (






        <header className="flex spaxe-x-0">
            <a href="http://localhost:3000/"><img className="mt-5" src="/gacha-club.png" width="100" /></a>

            <ul className="absolute inset-x-0 top-9 h-[70px] border border-blue-500 mx-[395px] rounded-full flex drop-shadow-2xl" >
                <li className="mt-5 ml-9 text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500">
                    <a href="/start" target="_blank">Играть</a>

                </li>
                <li className="mt-5 ml-9  text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500">
                    <a href="/server" target="_blank">Cервер</a>
                </li>
                <li className="mt-5 ml-9 text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500">
                    <a href="/forum" target="_blank">Форум</a>
                </li>
                <li className="mt-5 ml-9 text-blace drop-shadow-2xl text-lg font-bold hover:text-purple-500">
                    <a href="/buy" target="_blank">Купить Гачи</a>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/login">
                    <button><img className="ml-[1050px] mt-12" src="/log.png" width="50" /></button>
                    </Link>
                </li>

            </ul>
        </header>
    )
}