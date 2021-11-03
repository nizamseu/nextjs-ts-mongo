import { Button, Layout, Menu} from 'antd';
import Link from 'next/link'
import { DingtalkOutlined  } from '@ant-design/icons';
const { Header} = Layout;

const Navbar = () => {

    return (
        <Layout>  
          <Menu mode="horizontal" >
            <Menu.Item  icon={<DingtalkOutlined />}><Link href='/'><a></a></Link>
             BD Users
            </Menu.Item>
            <Menu.Item ><Link href='/'>Home</Link></Menu.Item>
            <Menu.Item ><Link href='/users'>Users</Link></Menu.Item>
            <Menu.Item ><Link href='/newUser'>Add New User</Link></Menu.Item>
            <Menu.Item ><Link href='/about'>About</Link></Menu.Item>
            <Menu.Item ><Link href='/signin'>Login</Link></Menu.Item>
          </Menu>
      
        </Layout>
    );
};

export default Navbar;