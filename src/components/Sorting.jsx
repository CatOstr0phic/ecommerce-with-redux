import React from "react";
import { List, GridView } from "@mui/icons-material";

import styled from "@emotion/styled";


const Hr = styled.hr`
  width: 100%;
  border-bottom: 1px solid lightslategray;
  padding-top: 10px;
  border-top: 0px;
`;

export default function Sorting({
  handleDisplayGrid,
  handleDisplayFlex,
  grid,
  flex,
  display,
}) {
  return (
    <div className="flex gap-3 h-6 text-[80%]">
      <div className="w-[25%] mt-1">
          <h4 className="">Products: 23 000</h4>
          
          <Hr />
      </div>
      <div className="w-full">
        <div className="h-6 flex justify-between">
          <select
            className="px-2 rounded-sm
          text-zinc-500 hover:text-[#007aff]
           cursor-pointer "
            name="sort"
            id="sort"
            value="Sort by"
          >
            <option className="" value="popular" selected>
              Popular
            </option>
            <option value="cheap">Cheap One</option>
            <option value="expensive">Expensive</option>
          </select>
          <div className="text-zinc-500">
            <List
              onClick={handleDisplayFlex}
              sx={{ marginRight: "10px" }}
              color={flex ? "primary" : ""}
            />
            <GridView
              onClick={handleDisplayGrid}
              color={grid ? "primary" : ""}
            />
          </div>
        </div>

        <Hr />
      </div>
    </div>
  );
}
