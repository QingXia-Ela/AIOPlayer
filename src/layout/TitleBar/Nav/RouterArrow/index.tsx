import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Styles from './index.module.scss'
import router from '@/router';

interface RouterArrowProps {

}

const history = createBrowserHistory()

const RouterArrow: FunctionComponent<RouterArrowProps> = () => {
  function forward() {
    history.forward()
  }

  function back() {
    history.back()
  }

  return (
    <>
      <i className={`iconfont icon-24gl-arrowLeft2 ${Styles.iconfont}`} onClick={back}></i>
      <i className={`iconfont icon-24gl-arrowRight2 ${Styles.iconfont}`} onClick={forward}></i>
    </>
  );
}

export default RouterArrow;