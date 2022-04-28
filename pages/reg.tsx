import { isConstructor } from '@typegoose/typegoose/lib/internal/utils';
import Layout from '../Components/Layout/Layout';
import React from "react";
import Router from 'next/router'

interface MyProps {

}

interface MyState {
    email: string,
    password: string,
    login: string,
    repassword: string,
    passwordDoesNotMatch: boolean
}


export default class Reg extends React.Component<MyProps, MyState> {

    

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            login: '',
            repassword: '',
            passwordDoesNotMatch: false,
        };



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerUser = this.registerUser.bind(this);
    };

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });

    }

    async handleSubmit()  {
        await this.registerUser()
        Router.push('/login')
        console.log('submit')
    }

    registerUser() {
        let fullUrl = 'http://localhost:3000' + '/' + 'auth/signup';
        const params: any = {
            method: 'POST',
            credentials: 'include',
            headers: {
                Authorization: 'bearer',
            },
        };
        params['headers']['content-type'] = 'application/json';
                params['body'] = JSON.stringify(this.state);
                return fetch(fullUrl, params)
                    .then((response) => {
                        return response.json().then((json) => ({ json, response }));
                    }).then(({ json, response }) =>
                        Promise.resolve({
                            success: response.ok ? true : false,
                            response: json
                        })
                    );
                    
        
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} >
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
                                    <div>
                                        <input name="login" onChange={this.handleChange} className="rounded-lg bg-gray-700 mx-20 mt-[100px] w-[500px] h-[45px] block text-white px-4" placeholder='Логин' type="string" required />

                                    </div>

                                    <input name="email" onChange={this.handleChange} className=" rounded-lg bg-gray-700 mx-20 mt-5 h-[45px] w-[500px] block text-white px-4" placeholder='Email' type="email" required />
                                </div>
                                <div>
                                    <input name="password" onChange={this.handleChange} className=" rounded-lg bg-gray-700 mx-20 mt-5 w-[500px] h-[45px] block text-white px-4" placeholder='Пароль' type="password" required />
                                </div>
                                {
                                 this.state.passwordDoesNotMatch? (
                                
                                <div>
                                    <input name="repassword" onChange={this.handleChange} className="rounded-lg bg-gray-700 mx-20 mt-5 w-[500px] h-[45px] block text-red-500 px-4" placeholder='Повторите пароль' type="string" required />

                                </div>
                                 ) : (

                                    <div>
                                    <input name="repassword" onChange={this.handleChange} className="rounded-lg bg-gray-700 mx-20 mt-5 w-[500px] h-[45px] block text-white px-4" placeholder='Повторите пароль' type="string" required />

                                    </div>
                                 )
                                }




                                <label className=" mx-[110px] text-white">
                                    <input className="mt-[80px] mx-2 " type="checkbox" name="remember_me"  />Запомнить меня
                                </label>



                                <div>
                                    <button type="submit" className="bg-green-500 rounded-full w-[500px] h-[50px] mt-[50px] mx-28 text-white">
                                        Регистрация
                                    </button>
                                    

                                </div>

                            </section>


                        </div>

                    </Layout>

                </div>
            </form>

        )
    }
}