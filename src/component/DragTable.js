import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { arrayMove, sortableContainer, sortableElement } from 'react-sortable-hoc'
import TableRow from './TableRow';


const SortableCont = sortableContainer(({ children }) => {
  return <tbody>{children}</tbody>;
});
const SortableItem = sortableElement(props => <TableRow {...props} />);

const tempData = [
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '5',
    groupName: '직업재활시설',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '6',
    groupName: '재가/단체',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '7',
    groupName: '기타',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '5',
    groupName: '직업재활시설',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '6',
    groupName: '재가/단체',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '7',
    groupName: '기타',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '5',
    groupName: '직업재활시설',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '6',
    groupName: '재가/단체',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '7',
    groupName: '기타',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '5',
    groupName: '직업재활시설',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '6',
    groupName: '재가/단체',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '7',
    groupName: '기타',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '5',
    groupName: '직업재활시설',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '6',
    groupName: '재가/단체',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '7',
    groupName: '기타',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '5',
    groupName: '직업재활시설',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '6',
    groupName: '재가/단체',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '7',
    groupName: '기타',
    regist: '2022-09-14 11:20',
  },  
  {
    code: '01220901',
    sort: '1',
    groupName: '지방자치단체',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '2',
    groupName: '정부',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '3',
    groupName: '공공기관',
    regist: '2022-09-14 11:20',
  },
  {
    code: '01220901',
    sort: '4',
    groupName: '교육기관',
    regist: '2022-09-14 11:20',
  },
]

const MyTableWrapper = styled.div`
  padding: 10px;

  .fixed_header {
    width: 800px;
    table-layout: fixed;
    border-collapse: collapse;

    & > tbody {
      display: block;
      width: 807px;
      overflow: auto;
      height: 400px;
      cursor: grabbing;
      background: #fff;
    }

    & > thead {
      background: #D9D9D9;
      color: black;

      & > tr {
        display: block;
        //width: 793px;
      }
    }

    & > thead th,
    & > tbody td {
      padding: 5px;
      text-align: left;
      width: 200px;
      border: 1px solid #000;
    }
  }
`;


function DragTable() {

  const [items, setItems] = useState(tempData);

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setItems(oldItems => arrayMove(oldItems, oldIndex, newIndex));
  }, []);

  return (
    <MyTableWrapper>
      <table className="table table-dark fixed_header">
        <thead>
        <tr>
            <th>
              <label htmlFor='checkAll'><span className='blind'>선택</span></label>
            </th>
            <th>코드</th>
            <th>순서</th>
            <th>구분명 (거래처)</th>
            <th>등록일</th>
          </tr>
        </thead>
        <SortableCont
          onSortEnd={onSortEnd}
          axis="y"
          lockAxis="y"
          lockToContainerEdges={true}
          lockOffset={["30%", "50%"]}
          helperClass="helperContainerClass"
          useDragHandle={false}
        >
          {items.map((value, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              code={value.code}
              sort={value.sort}
              groupName={value.groupName}
              regist={value.fourth}
            />
          ))}
        </SortableCont>
      </table>
    </MyTableWrapper>
  )
}

export default DragTable