import { Select } from "./Filters.styled";

export const Filters = ({ onChange }) => {
  return (
    <Select onChange={e => onChange(e.target.value)}>
      <option value="all">Show All</option>
      <option value="follow">Follow</option>
      <option value="followings">Followings</option>
    </Select>
  );
};
