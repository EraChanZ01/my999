import Header from '../Components/Layout/Header'
import Layout from '../Components/Layout/Layout'
import Link from 'next/link'
import React from "react";
import { threadId } from 'worker_threads';
import Router from 'next/router'


   interface MyProps {

}

interface MyState {
    
    password: string,
    email: string,
    
}



export default class Login extends React.Component<MyProps, MyState>  {


    

constructor(props) {
        super(props);
        this.state = {
           
            password: '',
            email: '',
           
        };



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.entranceUser = this.entranceUser.bind(this);
    };


      handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });

    }


     async handleSubmit(){
     await this.entranceUser()
     
     }
     
   entranceUser(){
     const fullUrl = 'http://localhost:3000' + '/' + 'auth/login';
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



  render(){

    return (
        <div className="bg-clip-border border-dashed bg-[url('/fon2.jpg')] bg-no-repeat">

            <Layout>
                <form onSubmit={this.handleSubmit}>
                <div className="flex">

                    <section className="border-gray-800 bg-gray-800 h-[800px] w-[700px] p-4 mx-[280px] my-[200px]">
                        <header className=" border-gray-700  bg-gray-700 h-[100px] w-[700px] mx-[-16px] mt-[-16px] flex">

                            <h1 className=" mt-[34px] mx-[225px] text-white font-bold text-3xl">
                                Личный Кабинет
                            </h1>

                        </header>

                        <div className="1">

                            <input name="email" onChange={this.handleChange} className=" rounded-lg bg-gray-700 mx-20 mt-[200px] h-[45px] w-[500px] block text-white px-4" type="string" placeholder='Логин или Email' required />
                        </div>
                        <div>
                            <input name="password"  onChange={this.handleChange} className=" rounded-lg bg-gray-700 mx-20 mt-5 w-[500px] h-[45px] block text-white px-4" type="password" placeholder='Пароль' required />
                        </div>

                        <label className=" mx-[110px] text-white">
                            <input className="mt-[80px] mx-2 " type="checkbox" name="remember_me"  />Запомнить меня
                        </label>

                           <a className="text-blue-500 mx-20">Забыл пароль?</a>

                        <div>
                            <button  type="submit" className="bg-green-500 rounded-full w-40 h-[50px] mt-[50px] mx-28 text-white">
                                Войти
                            </button>
                            <Link href="/reg">
                            <button className="bg-red-600 rounded-full w-36 h-[50px] mx-10 mt-[50px]  text-white">
                                Регистрация
                            </button>
                            </Link>
                        </div>

                    </section>


                </div>
                </form>
            </Layout>

        </div>


    )}
}

