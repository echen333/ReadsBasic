import { BsPerson, BsInbox, BsCompass, BsBell, BsHeart } from 'react-icons/bs'
import store from '../store'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function SideBar({ user }) {

    const LogIn = () => {
        window.open('http://localhost:5000/api/auth/google')
    }

    return (
        <div className="fixed top-0 left-4 flex flex-col h-screen w-40
         border-r-4 border-gray-100 align-middle">
            <Link to ='/'>
                {/* <SideBarIcon icon={<BsInbox size="25"/>} text="Inbox"/> */}
                <SideBarIcon icon={<BsCompass size="25"/>} text="Discover"/>
            </Link>
            {/* <Link to ='/discover'>
                <SideBarIcon icon={<BsCompass size="25"/>}  text="Discover"/>
            </Link>
            <Link to ='/activity'>
                <SideBarIcon icon={<BsBell size="25"/>} text="Activity"/>
            </Link>
            <Link to ='/profile'>
                <SideBarIcon icon={<BsPerson size="25"/>} text="Profile"/>
            </Link> */}
            <Link to ='/liked'>
                <SideBarIcon icon={<BsHeart size="25"/>} text="Liked"/>
            </Link>
            <button className="bg-gray-300" onClick={LogIn}> Log in to Google</button>
            <p>{user && user.email}</p>
        </div>
    )
}

const SideBarIcon = ({ icon, text='asd' }) => (
    <div className="sidebar-icon w-40 hover: cursor-pointer rounded-md ">
        <div className="absolute left-1">
            {icon}
        </div>
        <span className="inline-block right-4">
            {text}
        </span>
    </div>
);


SideBar.propTypes = {
    // user: PropTypes.object.isRequired,
};
  
const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(SideBar);
