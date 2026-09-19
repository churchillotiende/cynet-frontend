import { Link, LinkProps } from "@tanstack/react-router";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        {...props}
        // Base classes
        className={cn(className)}
        // Classes applied when the route is active
        activeProps={{
          className: cn(className, activeClassName),
        }}
        // Classes applied when the route is loading
        pendingProps={{
          className: cn(className, pendingClassName),
        }}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
