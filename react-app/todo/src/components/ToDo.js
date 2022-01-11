import React, { useState } from "react";

//CustomHook
import useLocalStorage from "../hooks/useLocalStorage";

//Components
import List from "./List";
import Alert from "./Alert";

/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>>=>=>=>>=>=>=>*/

//styled-component
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  padding: 32px;
  width: 42vw;
  margin-top: 140px;
  border-radius: 7px;

  @media screen and (max-width: 992px) {
    width: 70vw;
  }

  @media screen and (max-width: 576px) {
    width: 100vw;
    border-radius: 0;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #063251;
  margin-bottom: 25px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const MyInput = styled.input`
  width: 100%;
  height: 34px;
  border: none;
  outline: none;
  background-color: #f1f5f8;
  border-radius: 5px 0 0 5px;
  padding: 4px 4px 4px 16px;

  &:focus {
    outline: 2px solid darkcyan;
    height: 30px;
    margin-right: 2px;
    caret-color: darkcyan;
  }
`;

const AddButton = styled.button`
  background: #a5d5f8;
  color: #043152;
  border: none;
  height: 34px;
  width: 100px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  font-size: 0.95rem;
  transition: all 0.3s;

  &:hover {
    background-color: #5698c7;
    color: #fff;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ClearButton = styled.button`
  align-self: center;
  background: none;
  border: none;
  color: #e66b6b;
  letter-spacing: 2px;
  margin-top: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: rgb(168, 0, 0);
  }
`;
/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>>=>=>=>*/

const ToDo = () => {
  const [name, setName] = useState("");
  const [list, setList] = useLocalStorage("list", []);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name) {
      showAlert(true, "error", "Please Enter Value");
    } else if (name && isEditing) {
      // const index = list.findIndex((item) => item.id === +editId);
      // list[index].title = name;
      // setList([...list]);

      /************************ رو ش دوم **************************/

      setList(
        list.map((item) => {
          if (item.id === +editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );

      setIsEditing(!isEditing);
      setName("");
      showAlert(true, "success", "Value Change");
    } else {
      showAlert(true, "success", "item added to the list");

      setList([
        ...list,
        {
          id: new Date().getTime(),
          title: name,
        },
      ]);

      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);

    setName(specificItem.title);
    setIsEditing(!isEditing);
    setEditId(id.toString());
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList([...newList]);
    showAlert(true, "error", "Item Removed");
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "error", "Empty List");
  };

  return (
    <Container>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <Heading>ToDo App</Heading>
      <Form onSubmit={submitHandler} autoComplete="off">
        <MyInput
          type="text"
          name="toDo"
          value={name}
          onChange={changeHandler}
          placeholder="Add Item"
        />
        <AddButton type="submit">{isEditing ? "Edit" : "Add"}</AddButton>
      </Form>
      <ListContainer>
        {list.map((item) => (
          <List
            key={item.id}
            list={item}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
        {list.length ? (
          <ClearButton onClick={clearList}>Clear Items</ClearButton>
        ) : (
          ""
        )}
      </ListContainer>
    </Container>
  );
};

export default ToDo;
