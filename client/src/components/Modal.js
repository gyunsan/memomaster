import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";

const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const editMode = mode === "edit" ? true : false


  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    content: editMode ? task.content : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? "" : new Date(),
  });

  // Create a new todo 
  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (response.status === 200) {
        console.log("Worked!");
        setShowModal(false);
        getData();
      }

    } catch (err) {
      console.error(err);
    }
  };

  // Edit a todo 
  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        console.log("Worked!");
        setShowModal(false);
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));

    console.log(data);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-content-container">

          <div class="flex justify-between ...">
            <h3 className="text-3xl font-thin">  Lets {mode} your note</h3>
            <div>          <Button color="default" onClick={() => setShowModal(false)}
            >         Close     <Icon icon="oui:cross" width={16} />
            </Button></div>
          </div>

        </div>


        <form className="mt-4">
          <textarea
            required
            maxLength={255}
            placeholder="Write about whatever is on your mind..."
            name="content"
            value={data.content}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md"
            rows="4"
            cols="50"

          />
          <br />

          <input className={mode} type="submit" onClick={editMode ? editData : postData} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
