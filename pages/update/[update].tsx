import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Space } from 'antd';
import Swal from 'sweetalert2'


const updateAlert =()=>{
    Swal.fire({
        icon: 'success',
        title: 'Updated',
        text: 'Successfully Updated',
        showConfirmButton: false,
        timer: 1500

    }) 
}

  
const Update: NextPage = () => {
    const [update,setUpdate] =useState<any>({});
    const router =useRouter();
    const id =router.query.update;
    
   
    useEffect(() => {
       
        axios.get(`/api/find/?id=${id}`)
            .then(res => {
              setUpdate(res.data);
                
            });
    
    }, [id]);

    if(update.length<1){
        return<h1>Loading...</h1>
    }
  

    const handleChange =(e:any)=>{
        const updateData= {...update,[e.target.name]:e.target.value};
        setUpdate(updateData)
}

const handleUpdate =(e:any)=>{
    
    axios.put(`/api/update/?id=${id}`,update)
    .then(res=>{
        if(res.data.modifiedCount>0){
            updateAlert();
            router.push('/')
        }
        
        
    })
    
    e.preventDefault()
   
}  

console.log(update);


    return (
        <div>
            {id&&id}
            <h1 style={{textAlign:'center'}}>Add a new User</h1>
            <Space  direction="horizontal" align="center" style={{width: '100%',justifyContent: 'center'}}> 
               
            <form onSubmit={handleUpdate}>
                <label>Name: </label><br />
                <input onChange={handleChange} type="text" name="name" id="" value={update.name} /> <br />
                <label>Age: </label><br />
                <input onChange={handleChange} type="text" name="age" id=""  value={update.age} /><br />
                <label>Email: </label><br />
                <input onChange={handleChange} type="text" name="email" id=""  value={update.email} /><br />
                <input type="submit" value="Update" />
            </form>
            </Space>
        </div>
    );
};

export default Update;