"use server"
import ProfileHeader from "@/components/shared/ProfileHeader";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "@/components/shared/ThreadsTab";

async function RightSidebar() {
  // const user = await currentUser();

  // if (!user) return null;

  // const userInfo = await fetchUser(user.id);

  return (
    <section className="rightsidebar custom-scrollbar">
      <h1 className="head-text mb-10">Users</h1>

      {/* <ThreadsTab
        currentUserId={user.id}
        accountId={userInfo.id}
        accountType="User"
      /> */}
    </section>
  );
}

export default RightSidebar;
