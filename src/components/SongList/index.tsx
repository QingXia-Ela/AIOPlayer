import WhiteZebraScrollbars from '@/components/WhiteZebraScrollbars';
import { useMemo, useState, forwardRef, useImperativeHandle } from 'react';
import findParentNode from '@/utils/DOM/findParentNode';
import NormalListItem from '../NormalListItem';
import BlackMenu from '@rebuildMui/Menu/BlackMenu';

interface ContextMenuProps {
  provider?: (p: {
    handleClose: () => void
  }) => JSX.Element
}

interface SongListProps<T = any> {
  /** 必须包含 id 键值对，否则影响到渲染 */
  data: T[]
  /** 元素需要填充整个div */
  renderFunc: (item: T) => JSX.Element
  virtualLimit?: number
  onContextMenu?: (item: T) => void
  contextMenu?: ContextMenuProps
}

export interface SongListMethods {
  handleClose: () => void
}

const NormalListItemStyle = {
  transition: "transform .3s",
  width: "98.2%",
  containIntrinsicHeight: "3.3125rem"
}

const SongList = forwardRef<SongListMethods, SongListProps>(({ data, contextMenu, renderFunc, virtualLimit = 200, onContextMenu, ...p }, ref) => {
  const [contextMenuPos, setContextMenuPos] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const res = findParentNode((event.target as HTMLDivElement), (e) => {
      if (e.hasAttribute('data-listitem-flag')) return true
      return false
    })

    if (!res) return

    setContextMenuPos(
      contextMenuPos === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        } : null,
    );

    onContextMenu && onContextMenu(data[parseInt(res.dataset.itemIndex!)])
  };


  const handleClose = () => {
    setContextMenuPos(null);
  };

  useImperativeHandle(ref, () => ({
    handleClose
  }))

  const ItemsNode = useMemo(() => {
    return data.map(
      (d: typeof data[0], i) => (
        <NormalListItem style={NormalListItemStyle} SmallScaleNum={0.99} key={d.id} data-item-index={i} data-listitem-flag>
          {renderFunc(d)}
        </NormalListItem>
      )
    )
  }, [data])

  return (
    <div className="w100 h100"
      onContextMenuCapture={handleContextMenu}
    >
      <div id='BottomListContextMenuWrapper'></div>
      <WhiteZebraScrollbars
        marginBarHeightLimit={0.8}
        ScrollbarDegNum={0.48}
        VirtuosoOptions={
          data.length >= virtualLimit ? {
            VirtuosoProps: {
              data,
              components: {
                Item: (p) => <NormalListItem {...p} data-item-index={p['data-index']} style={NormalListItemStyle} SmallScaleNum={0.99} data-listitem-flag />
              },
              itemContent: (i, d) => (renderFunc(d))
            }
          } : undefined
        }
      >
        {
          data.length < virtualLimit ? ItemsNode : null
        }
      </WhiteZebraScrollbars>
      {
        contextMenu ? <BlackMenu
          open={contextMenuPos !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenuPos !== null
              ? { top: contextMenuPos.mouseY, left: contextMenuPos.mouseX }
              : undefined
          }
          // prevent context menu change dom cause page choked in app
          container={document.querySelector(`#BottomListContextMenuWrapper`)}
        >
          {contextMenu.provider && <contextMenu.provider handleClose={handleClose} />}
        </BlackMenu> : null
      }
    </div>
  );
})

export default SongList;
