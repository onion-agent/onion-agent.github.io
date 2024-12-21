import React from "react";
interface IconProps {
  className?: string;
  icon: string;
}

const IconComp: React.ComponentType<IconProps> = (props: IconProps) => {
  const { className, icon } = props;
  return (
    <svg className={className}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};
IconComp.displayName = "Icon";
const Icon = React.memo(IconComp);
export default Icon;
