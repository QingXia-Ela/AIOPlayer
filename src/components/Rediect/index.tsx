import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RedirectProps {
  to: string
}

const Redirect: FunctionComponent<RedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  });

  return null;
};

export default Redirect