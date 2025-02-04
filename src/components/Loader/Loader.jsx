import { ColorRing } from "react-loader-spinner";

const Loader = () => (
  <div className="loader-container">
    <ColorRing type="TailSpin" color="#00BFFF" height={100} width={100} />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;
