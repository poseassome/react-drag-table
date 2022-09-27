import React from 'react'
import { SortableHandle } from 'react-sortable-hoc'
import styled from 'styled-components'

const RowHandler = SortableHandle(() => <Handle className="handle">|</Handle>);

const TrWrapper = styled.tr`
  background: #fff;
  cursor: default;

  .firstElement {
    display: flex;
    flex-direction: row;
  }

  &.helperContainerClass {
    width: auto;
    border: 1px solid #efefef;
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 3px;

    &:active {
      cursor: grabbing;
    }

    & > td {
      padding: 5px;
      text-align: left;
      width: 200px;
    }
  }
`;

const Handle = styled.div`
  margin-right: 10px;
  padding: 0 5px;
  cursor: grab;
`;


function TableRow({code, sort, groupName, regist}) {
  return (
    <TrWrapper>
      <td>
        {/* <div className="firstElement">
          <RowHandler />
        </div> */}
      </td>
      <td>{code}</td>
      <td>{sort}</td>
      <td>{groupName}</td>
      <td>{regist}</td>
    </TrWrapper>
  );
}

export default TableRow