import { Form, Input, InputNumber, Button, Space } from 'antd';
import axios from "axios";
import Swal from 'sweetalert2'
import { FormInstance } from 'antd/es/form';
import { createRef } from 'react';
import { useForm } from 'antd/es/form/Form';

const AlertMessage =()=>{
  Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    })
}

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
 
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const newUser = () => {
 

  
    const onFinish = async(values:any) => {
                 await axios.post('/api/adduser', values)
                  .then(res => {
                    console.log(res);
                    if(res?.data?.insertedId){
                      AlertMessage()
                      
                  }
                  })
          
        console.log(values);
      };

 
    

    return (
        <div>
            
            <h1 style={{textAlign:'center'}}>Add a new User</h1>
            <Space  direction="horizontal" align="center" style={{width: '100%',justifyContent: 'center'}}> 
                <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
            {
                required: true,
            },
            ]}
        >
            <Input style={{width:'350px'}} />
        </Form.Item>
        <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
            {
                type: 'email',
            },
            ]}
        >
            <Input style={{width:'350px'}} />
        </Form.Item>
        <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[
            {
                type: 'number',
                min: 0,
                max: 99,
            },
            ]}
        >
            <InputNumber style={{width:'350px'}} />
        </Form.Item>
        
       
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button style={{width:'350px'}} type="primary" htmlType="submit">
            Add Now
            </Button>
           
        </Form.Item>
        </Form>
            </Space>
        </div>
    );
};

export default newUser;