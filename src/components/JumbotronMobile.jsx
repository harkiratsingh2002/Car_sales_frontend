import { Grid, Typography } from "@mui/material";
import jumbotronImg from "../assets/images/car-home-bg-3.jpeg";

const JumbotronMobile = () => {
  return (
    <>
      <Grid container
        sx={{
          backgroundImage: `url(${jumbotronImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "75vh", // Adjust height and width as needed
          width: "100vw",
          position: "absolute",
        }}
        justifyContent={'center'} xs={12}
      >
        <Grid xs={10} mt={3}>
          <Typography color={"white"} variant="h5" component={"h1"}>
            Get your Dream Car Today!
          </Typography>
          <Typography mt={1} color={"white"} variant="h6" component={"h2"}>
            Discover Top-Notch New and Pre-Owned Japanese Cars at Unbeatable
            Prices!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default JumbotronMobile;
