import {
  CentralIcon as CentralIconComponent,
  type CentralIconProps,
} from "@central-icons-react/all";

type IconProps = Pick<CentralIconProps, "name"> &
  Partial<Omit<CentralIconProps, "name">>;

export const CentralIcon = ({ name, ...props }: IconProps) => {
  return (
    <CentralIconComponent
      name={name}
      join="round"
      fill="filled"
      radius="3"
      stroke="2"
      {...props}
    />
  );
};
