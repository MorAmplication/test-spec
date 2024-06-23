import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  age?: IntNullableFilter;
};
