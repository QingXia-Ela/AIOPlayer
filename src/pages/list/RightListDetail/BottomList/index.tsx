import { createRef, forwardRef, FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import Styles from './index.module.scss'
import WhiteZebraScrollbars from '@/components/WhiteZebraScrollbars';
import SingleItem from './SingleItem';
import NormalListItem from '@/components/NormalListItem';
import BlackMenu from '@rebuildMui/Menu/BlackMenu';
import BlackMenuItem from '@rebuildMui/MenuItem/BlackMenuItem';
import { Collapse, Divider } from '@mui/material';
import findParentNode from '@/utils/DOM/findParentNode';

interface RightBottomListProps {

}

const getSimdata = (cnt: number) => {
  return new Array(cnt).fill(0).map((v, i) => ({
    id: i + "",
    name: "冉冉升起，直播新星",
    artistes: ["塞壬唱片-MSR"],
    type: "siren",
    tags: [{
      content: "NeteaseMusic",
      color: "#ff4b4b"
    }, {
      content: "QQMusic",
      color: "#1ece9b"
    }]
  }))
}

const NormalListItemStyle = {
  transition: "transform .3s",
  width: "98.2%",
}

const items = getSimdata(100)

const MyDivider: FunctionComponent<{ children?: string }> = ({ children = "" }) => <Divider
  sx={{
    borderColor: "#ffffff88",
    width: "80%",
    margin: ".04rem auto",
    fontSize: ".06rem",
    "&::before, &::after": {
      borderColor: "#ffffff88",
    }
  }}>{children}</Divider>

const RightBottomList: FunctionComponent<RightBottomListProps> = () => {

  // const [items, setItems] = useState(data)

  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const ListWrapper = createRef<HTMLDivElement>()

  useEffect(() => {
    console.log("list rerender");

  })

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const res = findParentNode(event.target, (e) => {
      if (e.hasAttribute("data-listitem-flag")) return true
      return false
    })

    if (!res) return

    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
        null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const ItemsNode = useMemo(() => {
    return items.map(
      (d) => (
        <NormalListItem style={NormalListItemStyle} SmallScaleNum={0.99} key={d.id} data-listitem-flag>
          <SingleItem name={"Operation Pyrite"} author={"塞壬唱片-MSR"} album={"危机合约"} time={"01:14"} tags={d.tags} />
        </NormalListItem>
      )
    )
  }, [items])

  return (
    <>
      <div className={Styles.bottom_list}
        onContextMenuCapture={handleContextMenu}
        ref={ListWrapper}
      >
        <div id='BottomListContextMenuWrapper'></div>
        <WhiteZebraScrollbars
          marginBarHeightLimit={0.8}
          ScrollbarDegNum={0.48}
          VirtuosoOptions={
            items.length >= 200 ? {
              VirtuosoProps: {
                data: items,
                components: {
                  Item: (p) => <NormalListItem {...p} style={NormalListItemStyle} SmallScaleNum={0.99} />
                },
                itemContent: (i, d) => (<SingleItem key={d.id} name={"Operation Pyrite"} author={"塞壬唱片-MSR"} album={"危机合约"} time={"01:14"} tags={d.tags} />)
              }
            } : undefined
          }
        >
          {
            items.length < 200 ? ItemsNode : null
          }
        </WhiteZebraScrollbars>
      </div>
      <BlackMenu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        // prevent context menu change dom cause page choked in app
        container={document.querySelector(`#BottomListContextMenuWrapper`)}
      >
        <BlackMenuItem onClick={handleClose}>播放</BlackMenuItem>
        <BlackMenuItem onClick={handleClose}>下一首播放</BlackMenuItem>
        <BlackMenuItem onClick={handleClose}>添加到播放列表</BlackMenuItem>
        <MyDivider />
        <BlackMenuItem onClick={handleClose}>显示专辑</BlackMenuItem>
        <BlackMenuItem onClick={handleClose}>删除</BlackMenuItem>
        <MyDivider />
        <BlackMenuItem onClick={handleClose}>显示信息</BlackMenuItem>
        <BlackMenuItem onClick={handleClose}>编辑信息</BlackMenuItem>
        <MyDivider />
        <BlackMenuItem onClick={handleClose}>下载歌曲</BlackMenuItem>
      </BlackMenu>
    </>
  );
}

export default RightBottomList;