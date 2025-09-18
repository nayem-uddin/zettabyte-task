import { FieldValuePair } from "../lib/definitions";
import { montSerrat } from "./fonts";

export default function ModalBodyText(props: FieldValuePair) {
  const { field, value } = props;
  return (
    <p className={`md:leading-9 break-all`}>
      <span className="font-semibold">{field}:</span>
      &nbsp;
      <span className={`${montSerrat.className}`}>{value}</span>
    </p>
  );
}
