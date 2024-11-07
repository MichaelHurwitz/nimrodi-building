import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams): boolean => {
  const roleLevel = roles.indexOf(role);

  if (roleLevel === -1) {
    return false;
  }

  return activities.some((allowedActivity, index) => 
    allowedActivity === activity && roleLevel >= index
  );
};


export default useIsVerified;
