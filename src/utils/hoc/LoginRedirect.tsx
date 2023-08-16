import useSelection from "antd/lib/table/hooks/useSelection";
import React, {
  JSXElementConstructor,
  ReactChild,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Redirect } from "react-router-dom";

type ReactNode = ReactElement<any, string | JSXElementConstructor<any>>;

type LoginRedirectProps = {
  children: ReactNode;
};

function LoginRedirect(props: LoginRedirectProps): ReactNode {
  const { children, ...rest } = props;

  const isAuthorized = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthorized
  );

  console.log(isAuthorized);
  

  if (!isAuthorized) {
    return <Redirect to={`/login`} />;
  }

  return children;
}

export default LoginRedirect;
