import { FunctionComponent } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from "../redux/store";

const UserList: FunctionComponent = () => {

    const userListState = useSelector((state: RootState) => state.userList)

    return (<>
        
    </>);
};