import { Badge, BadgeProps } from "@mui/material";
import { styled } from "@mui/material";

const ArkBadge = styled((props: BadgeProps) => <Badge {...props} variant="dot" />)(() => ({
  ".MuiBadge-badge": {
    top: "0.1250rem",
    backgroundColor: "rgb(255, 104, 1)",
    borderRadius: "0",
    width: "0.3750rem",
    minWidth: "0.3750rem",
    height: "0.3750rem",
    transform: "rotate(-45deg) translate(60%,-60%)",
    boxShadow: "0 0 5px 5px #000",
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "0.6250rem",
      height: "0.6250rem",
      border: "2px solid rgb(255, 104, 1)",
      transform: "translate(-28%,-28%)",
      animation: "blink 2.4s ease-in-out infinite"
    }
  },
  "@keyframes blink": {
    "0%": {
      opacity: "0"
    },
    "50%": {
      opacity: "1"
    },
    "100%": {
      opacity: "0"
    }
  }
}))

export {
  ArkBadge
}