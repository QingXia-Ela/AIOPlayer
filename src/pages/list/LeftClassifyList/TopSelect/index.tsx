import { FunctionComponent } from "react";
import { defaultSort, TopSelectItemKey } from "../constant";
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
  selectOption: typeof defaultSort
}

const ListLeftTopSelect: FunctionComponent<ListLeftTopSelectProps> = ({ onChangeSelect, selectOption: o }) => {
  return (
    <div className={Styles.top_select}>
      <div
        className={Styles.select_wrapper}
      >
        {
          o.map(({ key: k, value: v }) => (
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
