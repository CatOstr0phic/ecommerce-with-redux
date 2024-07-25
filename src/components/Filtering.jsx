import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useStateValue } from "../redux/StateProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Filtering({ rate, category }) {
  const [{ selectedRating }, dispatch] = useStateValue();

  console.log(selectedRating);

  return (
    <>
      <List
        dense
        sx={{
          width: "object-fit",
          maxWidth: "20%",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          fontSize: "80%",
        }}
      >
        <div className="font-bold">Price:</div>

        <div
          style={{
            display: "flex",
            gap: "5px",
            fontSize: "12px",
            width: "object-fit",
            justifyContent: "space-around",
          }}
        >
          <input
            placeholder="from 200$"
            className="p-1 border border-zinc-500 max-w-[40%] cursor-pointer
             focus:border-blue-700 focus:outline-sky-700 rounded-sm"
          />
          <input
            placeholder="to 2300$"
            className="p-1 border border-zinc-500 max-w-[40%] cursor-pointer
             focus:border-blue-700 focus:outline-sky-700 rounded-sm"
          />
        </div>
        <div>
          <span className="font-bold">Category</span>
          {category.map((filter) => (
            <>
              <ListItem disablePadding>
                <Checkbox {...label} size="small" />
                <ul>
                  <li key={filter.id}>{filter.value}</li>
                </ul>
              </ListItem>
            </>
          ))}
          <span className="font-bold">Rating:</span>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
          >
            {rate?.map((filter) => (
              <FormControlLabel
                control={<Radio size={"small"} />}
                onClick={() =>
                  dispatch({ type: "FILTER_RATING", item: filter.rating })
                }
                label={filter.rating}
                id={filter.id}
              />
            ))}
          </RadioGroup>
        </div>
      </List>
    </>
  );
}
