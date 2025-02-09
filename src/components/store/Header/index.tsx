import { Menu } from "./Menu";
import TopBar from "./TopBar";

export default function Header (){
    return (
        <div>
            <TopBar
                msgs={['Free shipping on U.S. orders $25 or more.', 'Free shipping on U.S. orders $25 or more.', 'Free shipping on U.S. orders $25 or more.', 'Free shipping on U.S. orders $25 or more.']}
            />
            <Menu />
        </div>
    )
}