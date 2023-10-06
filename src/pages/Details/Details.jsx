import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const Details = () => {
    const {id} = useParams();
    return (
        <div>
            {/* <h2>This is details page</h2> */}
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <h2>This is details page</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Details;