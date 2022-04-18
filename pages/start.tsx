import Header from '../Components/Layout/Header'
import Layout from '../Components/Layout/Layout'
import * as React from 'react';

export interface IStartProps {
    text: string,

}

export interface IStartState {

}

export default class Start extends React.Component<IStartProps, IStartState> {
   
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
     }
     
     fetch() {
        let fullUrl = 'http://localhost:3000' + '/' + 'api/users/all';

        const params: any = {
            method:'GET',
            credentials: 'include',
            headers: {
                Authorization: 'bearer ',
            },
        };
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
    
    async componentDidMount() {
      const data = await this.fetch();
      console.log(data);
    }

 public render (){

 
    return (
        <div>

            <Layout>









            </Layout>

        </div>


    )
}
}