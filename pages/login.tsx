import Header from '../Components/Layout/Header'
import Layout from '../Components/Layout/Layout'

export default function login() {

    return (
        <div className="bg-clip-border border-dashed bg-[url('/fon2.jpg')] bg-no-repeat">

            <Layout>
                <div className="flex">

                    <section className="border-gray-800 bg-gray-800 h-[800px] w-[700px] p-4 mx-[280px] my-[200px]">
                        <header className=" border-gray-700  bg-gray-700 h-[100px] w-[700px] mx-[-16px] mt-[-16px] flex">

                            <h1 className=" mt-[34px] mx-[225px] text-white font-bold text-3xl">
                                Личный Кабинет
                            </h1>

                        </header>

                        <div className="1">

                            <input className=" rounded-lg bg-gray-700 mx-20 mt-[200px] h-[45px] w-[500px] block text-white px-4" placeholder='Логин или Email' />
                        </div>
                        <div>
                            <input className=" rounded-lg bg-gray-700 mx-20 mt-5 w-[500px] h-[45px] block text-white px-4" placeholder='Пароль' />
                        </div>

                        <label className=" mx-[110px] text-white">
                            <input className="mt-[80px] mx-2 " type="checkbox" name="remember_me" checked="checked" />Запомнить меня
                        </label>

                           <a className="text-blue-500 mx-20">Забыл пароль?</a>

                        <div>
                            <button className="bg-green-500 rounded-full w-40 h-[50px] mt-[50px] mx-28 text-white">
                                Войти
                            </button>
                            <button className="bg-red-600 rounded-full w-36 h-[50px] mx-10 mt-[50px]  text-white">
                                Регистрация
                            </button>
                        </div>

                    </section>


                </div>

            </Layout>

        </div>


    )
}

