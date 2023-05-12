import { createRef, forwardRef, FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import Styles from './index.module.scss'
import WhiteZebraScrollbars from '@/components/WhiteZebraScrollbars';
import SingleItem from './SingleItem';
import NormalListItem from '@/components/NormalListItem';
import BlackMenu from '@rebuildMui/Menu/BlackMenu';
import BlackMenuItem from '@rebuildMui/MenuItem/BlackMenuItem';
import { Collapse, Divider } from '@mui/material';
import findParentNode from '@/utils/DOM/findParentNode';
import SongList, { SongListMethods } from '@/components/SongList';

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

  const SongListRef = createRef<SongListMethods>()

  const handleContextMenu = useCallback((item: typeof items[0]) => {
    console.log(item);

  }, [])

  return (
    <>
      <div className={Styles.bottom_list}
      >
        <SongList
          ref={SongListRef}
          data={items}
          renderFunc={(d) => {
            return <SingleItem name={"Operation Pyrite"} author={"塞壬唱片-MSR"} album={"危机合约"} time={"01:14"} tags={d.tags} />
          }}
          contextMenu={{
            provider({ handleClose }) {
              return <>
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
              </>
            },
          }}
          onContextMenu={handleContextMenu}
        />
      </div>
    </>
  );
}

export default RightBottomList;