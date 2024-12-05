import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {

    const user = await currentUser();
  
  return (
    <UserInfo 
      label="User Details"
      user={user}
    />
  );
}

export default ServerPage;
