import { BsPerson, BsInbox, BsCompass, BsBell } from 'react-icons/bs'

const SideBar = () => {

    const LogIn = () => {
        window.open('http://localhost:5000/api/auth/google')
    }

    return (
        <div className="fixed top-0 left-4 flex flex-col h-screen w-40
         border-r-4 border-gray-100">
            <SideBarIcon icon={<BsInbox size="30"/>} text="Inbox"/>
            <SideBarIcon icon={<BsCompass size="30"/>}  text="Discover"/>
            <SideBarIcon icon={<BsBell size="30"/>} text="Activity"/>
            <SideBarIcon icon={<BsPerson size="30"/>} text="Profile"/>
            <button className="bg-gray-300" onClick={LogIn}> Log in to Google</button>
        </div>
    )
}

const SideBarIcon = ({ icon, text='asd' }) => (
    <div className="sidebar-icon w-40 hover: cursor-pointer rounded-md">
        <div className="inline-block ">
            {icon}
        </div>
        <span className="inline-block">
            {text}
        </span>
    </div>
);

export default SideBar