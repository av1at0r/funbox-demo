import cn from "classnames";
import React from "react";
import classes from "./RootLayout.module.scss";

export default function RootLayout({ children, className }) {
  return <div className={cn(classes.root, className)}>{children}</div>;
}
