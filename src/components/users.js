import { Outlet } from 'react-router-dom'


const Users = () => {
    return (
        <div className='user_layout'>
            <Outlet/>
        </div>
    )
}

export default Users