import "../styles/components/Sidebar.scss";
import UserIcon from "../assets/UserIcon";

const Sidebar: React.FC = (): JSX.Element => (
    <div className="Sidebar">
        <UserIcon></UserIcon>
    </div>
);

export default Sidebar;