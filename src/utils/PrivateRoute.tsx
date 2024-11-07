import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";
import useIsVerified from "../utils/VerifyActivity";
import useBuildingData from "../utils/BuildingDataProvider";

interface IPrivateRoute {
    component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
    const { index } = useParams<{ index: string }>(); 
    const floorIndex = parseInt(index || "0", 10);
    const navigate = useNavigate();

    const floorAccess = useSelector((state: RootState) => state.floorAccess.floorAccess);
    const currentRole = useSelector((state: RootState) => state.role.role);
    const { getFloorByIndex } = useBuildingData();

    const thisFloor = getFloorByIndex(floorIndex);
    const thisFloorActivity = thisFloor?.activity || "";

    const isVerified = useIsVerified({
        activity: thisFloorActivity,
        role: currentRole,
        activities: floorAccess.map((access, idx) => access ? getFloorByIndex(idx)?.activity || "" : "")
    });

    useEffect(() => {
        if (!isVerified || !floorAccess[floorIndex]) {
            navigate("/forbidden");
        }
    }, [isVerified, floorIndex, floorAccess, navigate]);

    return <>{isVerified && floorAccess[floorIndex] ? component : null}</>;
};

export default PrivateRoute;
