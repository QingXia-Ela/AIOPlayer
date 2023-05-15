import { Badge, BadgeProps } from "@mui/material";
import { styled } from "@mui/material";

const ArkBadge = styled((props: BadgeProps) => <Badge {...props} variant="dot" />)(() => ({
  ".MuiBadge-badge": {
    top: ".04rem",
    backgroundColor: "rgb(255, 104, 1)",
    borderRadius: "0",
    width: ".12rem",
    minWidth: ".12rem",
    height: ".12rem",
    transform: "rotate(-45deg) translate(60%,-60%)",
    boxShadow: "0 0 3px 3px #000",
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: ".20rem",
      height: ".20rem",
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