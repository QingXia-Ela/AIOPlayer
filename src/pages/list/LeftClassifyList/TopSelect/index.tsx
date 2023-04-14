import { FunctionComponent } from "react";
import { defaultSort, TopSelectItemKey } from "../constant";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Styles from './index.module.scss'

/**
 * deperate drag
 * 
<DragDropContext
  onDragEnd={(e) => console.log(e)}
>
  <Droppable droppableId="LeftClassifyListTopSelect" direction="horizontal">
    {(p) => (
      <div
        className={Styles.select_wrapper}
        ref={p.innerRef}
        {...p.droppableProps}
      >
        {
          o.map(([k, v], i) => (
            <Draggable
              draggableId={k}
              index={i}
              key={k}
            >
              {
                (p) => (
                  <div
                    className={`${Styles.select_item}`}
                    ref={p.innerRef}
                    key={k}
                    {...p.draggableProps}
                    {...p.dragHandleProps}
                    draggable
                  >
                    {v}
                  </div>
                )
              }
            </Draggable>
          ))
        }
        {p.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>
 */

interface ListLeftTopSelectProps {
  onChangeSelect?: (e: TopSelectItemKey) => void
}

/** cross platform */
const getTopSelectOption = (): Array<[TopSelectItemKey, string]> => {
  return JSON.parse(localStorage.getItem("LIST_TOP_SELECT_KEY") ?? JSON.stringify(defaultSort))
}

const ListLeftTopSelect: FunctionComponent<ListLeftTopSelectProps> = ({ onChangeSelect }) => {
  const o = getTopSelectOption()
  return (
    <div className={Styles.top_select}>
      <div
        className={Styles.select_wrapper}
      >
        {
          o.map(([k, v]) => (
            <div
              className={`${Styles.select_item}`}
              key={k}
              onClick={() => onChangeSelect && onChangeSelect(k)}
            >
              {v}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ListLeftTopSelect;
