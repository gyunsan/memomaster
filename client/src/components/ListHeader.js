import Modal from "./Modal";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";

const ListHeader = ({ getData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const [showModal, setShowModal] = useState(false);


  const signOut = () => {
    console.log("signout")
    removeCookie("Email");
    removeCookie("AuthToken");
    window.location.reload();
  };

  return (
    <div>
      {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData} />}
      <header className="mb-6 flex w-full items-center justify-between mt-8">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-default-900 lg:text-3xl">Dashboard</h1>
          <p className="text-small text-default-400 lg:text-medium">Your personal note-taking app</p>
        </div>
        <Button
          startContent={
            <Icon className="flex-none text-background/60" icon="lucide:plus" width={16} />
          }
          className="bg-foreground text-background" onClick={() => setShowModal(true)}
        >
          Add Note
        </Button>

      </header>
    </div>
  );
};

export default ListHeader;
