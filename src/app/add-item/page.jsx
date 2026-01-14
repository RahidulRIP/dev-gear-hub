import AddItemPage from "@/components/AddItem/AddItemPage ";
import React from "react";

export const metadata = {
  title: "Add New Gear | DevGear Hub",
  description:
    "Share your latest tech gear with the community. Fill out the form to add a new item to the DevGear Hub collection.",
  keywords: [
    "Add Item",
    "Tech Gear",
    "DevGear Hub",
    "Sell Tech",
    "Developer Tools",
  ],
  openGraph: {
    title: "Add New Gear | DevGear Hub",
    description: "Contribute to the best collection of developer tech gear.",
    type: "website",
  },
};

const Page = () => {
  return (
    <main>
      <h1 className="sr-only">Add New Tech Gear to DevGear Hub</h1>
      <AddItemPage />
    </main>
  );
};

export default Page;
