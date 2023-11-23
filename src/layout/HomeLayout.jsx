import {Outlet} from 'react-router-dom'
import Nav from '../shared/Nav';
const HomeLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;