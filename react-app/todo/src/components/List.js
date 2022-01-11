import React from "react";

//Icons
import { FaEdit, FaTrash } from "react-icons/fa";

/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>>=>=>=>>=>=>=>*/

//styled-component
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s;
  padding: 0 16px;
  border-radius: 4px;
  height: 37px;
  margin-bottom: 10px;

  &:hover {
    background-color: #f1f5f8;
  }
`;

const Item = styled.p`
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #063251;
  font-size: 0.95rem;
`;

const EditIcon = styled.button`
  background: none;
  border: none;
  font-size: 0.7rem;
  color: #5bdc66;
  cursor: pointer;

  &:hover {
    color: #0caa19;
  }
`;

const TrashIcon = styled.button`
  background: none;
  border: none;
  font-size: 0.7rem;
  color: #e06161;
  cursor: pointer;

  &:hover {
    color: #c33333;
  }
`;
/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>>=>=>=>>=>=>=>*/

const List = ({ list, editItem, deleteItem }) => {
  return (
    <Container>
      <Item>{list.title}</Item>
      <div>
        <EditIcon onClick={() => editItem(list.id)}>
          <FaEdit />
        </EditIcon>
        <TrashIcon onClick={() => deleteItem(list.id)}>
          <FaTrash />
        </TrashIcon>
      </div>
    </Container>
  );
};

export default List;
