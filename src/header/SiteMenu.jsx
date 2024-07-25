import React from "react";
import { Link } from "react-router-dom";

export default function SiteMenu({ siteMenu }) {
  return (
    <div className="flex w-[60%] flex-row justify-between">
      {siteMenu.map((site) => (
        <Link to={site.path}>
          <div
            id={site.menuItem}
            className="text-[#242424] text-sm cursor-pionter hover:text-[#363Ef8]"
          >
            {site.siteMenuName}
          </div>
        </Link>
      ))}
    </div>
  );
}
