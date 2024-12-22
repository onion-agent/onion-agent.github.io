import React from "react";
interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  icon: string;
}

const IconComp: React.ComponentType<IconProps> = (props: IconProps) => {
  const { className, icon, ...rest } = props;
  return (
    <svg className={className} {...rest}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};
IconComp.displayName = "Icon";
const Icon = React.memo(IconComp);
export default Icon;
