import { ButtonGroup } from "@mui/material";
import { FunctionComponent } from "react";
import Styles from './index.module.scss'

export interface SingleButtonInfo {
  icon: JSX.Element
  renderFunc: () => JSX.Element
}

interface OperationButtonGroupProps {
  ButtonList: JSX.Element[]
}

const OperationButtonGroup: FunctionComponent<OperationButtonGroupProps> = ({ ButtonList }) => {
  return (
    <div className={Styles.operation_button_group}>
      <ButtonGroup variant="text">
        {ButtonList.map((item, index) => (
          item
        ))}
      </ButtonGroup>
    </div>
  );
}

export default OperationButtonGroup;