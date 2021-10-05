import React, { FC, FormEvent, useEffect, useState } from 'react';
//Example 3
type userFetch = {
     userId: number,
     id: number,
     title : string,
     body: string
}
const Users:React.FC<{}> = (props):JSX.Element  => {

    const[fetchUserName, setFetchUserName] = useState<userFetch[]>();
    const[id, setId] = useState<number | string>();
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(json => setFetchUserName(json))
    },[]);

    const myChange = (e:FormEvent<HTMLInputElement>):void =>{
        setId(e.currentTarget.value);
    }

    const mySumit = ():void =>{
        if(id != undefined){
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => response.json())
            .then((json) => setFetchUserName(json));
        }else{

            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => setFetchUserName(json));
        }
    }   
    return(
        <>
          <h1>User Component </h1>    
          <input type="text"  onChange={myChange} value={id} />   
          <button type="submit" onClick={mySumit}>Filter</button>         
            <table>
                <tbody> 
                    <tr>
                        <td>UserId</td>
                        <td>Id</td>
                        <td>Title</td>
                        <td>body</td>
                    </tr>
                {
                    fetchUserName && fetchUserName.length > 0 &&
                    fetchUserName.map((item)=>
                    <tr key={item.id}><td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    </tr>
                    )
                }
                </tbody> 
            </table>
        </>
    ); 
}

export default Users;

//Example 2
/* type userDetails={
    id:number,
    name:string,
    type:string,
    elearning:number,
}
const Users:React.FC<{}> = (props):JSX.Element  => {
    const[userName, setUserName] = useState<userDetails[]>([{id:1,name:'tester',type:'internal',elearning:0}]);
    const ChangeName = ():void =>{
       
        setUserName([...userName,{id:userName.length+1,name:'tester2',type:'internal',elearning:100}])
    }
    return(
        <>
          <h1>User Component </h1>          
          <table className="tableStyle">
             {userName.map(e => <tr key={e.id}><td>{e.id}</td><td>{e.name}</td><td>{e.type}</td><td>{e.elearning}</td></tr>)}
             </table>
          <button onClick={ChangeName}>click</button>
        </>
    ); 
}
export default Users; */

/* Example 1
type usersPorps = {
    name?:string,
    age?:number,
}

const Users:React.FC<usersPorps> = (props):JSX.Element  => {
    const[userName, setUserName] = useState<string>('tester1');
    const ChangeName = ():void =>{
        setUserName("tester3");

    }
    return(
        <>
          <h1>User Component </h1>
          <h1>{userName}</h1>
          <button onClick={ChangeName}>click</button>
        </>
    ); 
}
export default Users; */