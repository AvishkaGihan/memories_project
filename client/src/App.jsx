import { Container, Grow, Grid } from "@mui/material";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {
  StyledCustomAppBar,
  StyledHeading,
  StyledImage,
} from "./StyledComponents"; // Importing custom components

import memories from "./images/memories.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <StyledCustomAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">
          Memories
        </StyledHeading>
        <StyledImage src={memories} alt="memories" height="60" />
      </StyledCustomAppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
