import cn from "classnames";
import React from "react";
import classes from "./RootLayout.module.scss";

export default function RootLayout({
  children,
  rootClassName,
  contentClassName,
}) {
  return (
    <div className={cn(classes.root, rootClassName)}>
      <div className={cn(classes.content, contentClassName)}>{children}</div>
    </div>
  );
}
