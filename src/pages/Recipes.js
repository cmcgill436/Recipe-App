import Homepage from "./Homepg";
import { useParams } from "react-router-dom";

export default function Recipes({ data }) {
  console.log(data, "this is params");
  const { name } = useParams();
  return (
    <div>
      <Homepage />
      {Object.entries(data?.meals?.[name] ?? {}).map((e) => {
        return (
          <p>
            {e[0]} : {e[1]}
          </p>
        );
      })}
    </div>
  );
}
