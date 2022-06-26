import { FaInbox, FaRegCompass} from 'react-icons/fa'
import { AiOutlineBell } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

const SideBar = () => {

    return (
        <div>
            
        </div>
        // <div className="fixed top-0 left-0 flex flex-col h-screen w-16 bg-green-200 border-r-2 border-blue-600">
            // { <SideBarIcon icon={<FaInbox size="35"/>} />
            // <SideBarIcon icon={<FaRegCompass size="35"/>} />
            // <SideBarIcon icon={<AiOutlineBell size="35"/>} />
            // <SideBarIcon icon={<BsPerson size="35"/>} /> }
        // </div>
    )
}

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default SideBar