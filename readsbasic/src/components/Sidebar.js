import { BsPerson, BsInbox, BsCompass, BsBell } from 'react-icons/bs'

const SideBar = () => {

    return (
        <div className="fixed top-0 left-4 flex flex-col h-screen w-40
         border-r-4 border-gray-100">
            <SideBarIcon icon={<BsInbox size="35"/>} text="Inbox"/>
            <SideBarIcon icon={<BsCompass size="35"/>}  text="Discover"/>
            <SideBarIcon icon={<BsBell size="35"/>} text="Activity"/>
            <SideBarIcon icon={<BsPerson size="35"/>} text="Profile"/>
        </div>
    )
}

const SideBarIcon = ({ icon, text='asd' }) => (
    <div className="sidebar-icon w-30 hover: cursor-pointer rounded-md">
        {icon}

        <span>
            {text}
        </span>
    </div>
);

export default SideBar