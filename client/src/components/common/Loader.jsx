import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={styles.container}>
      <ClipLoader color="#000" size={30} speedMultiplier={1} />
    </div>
  );
};

const styles = {
  container: {
    // position: "fixed",
    // inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "4px",
    width: "40px",
    height: "40px",
    margin: "0 auto",
    boxShadow: "0 0 4px gray",
    border: "1px solid gray",
    // zIndex: 9999,
  },
};

export default Loader;
