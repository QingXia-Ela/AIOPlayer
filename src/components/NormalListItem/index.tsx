import { FunctionComponent, DetailedHTMLProps, HTMLAttributes } from "react";
import Styles from './index.module.scss'

interface NormalListItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  invalid?: boolean
  selected?: boolean
  disabled?: boolean
  activeOnClick?: boolean
  /** 默认 0.98 */
  SmallScaleNum?: number
}

const getSpeicalStyle = (props: NormalListItemProps) => {
  const { invalid, selected, activeOnClick, disabled } = props

  let finalStyle = ""

  if (invalid) finalStyle += `${Styles.invalid} `
  if (selected) finalStyle += `${Styles.active} `
  if (activeOnClick) finalStyle += `${Styles.active_on_click} `
  if (disabled) finalStyle += `${Styles.disabled}`

  return finalStyle
}

const NormalListItem: FunctionComponent<NormalListItemProps> = ({ SmallScaleNum, className, ...p }) => (
  <div {...p} className={`${Styles.normal_list_item} ${getSpeicalStyle(p)} ${className ?? ""}`} style={{
    // @ts-expect-error: custom val
    "--normal-list-item-scale": SmallScaleNum ?? 0.98
  }}></div>
)

export default NormalListItem;
