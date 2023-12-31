// StyledComponents.js
import { styled } from "@mui/system";
import { Card, CardMedia, Typography, CardActions } from "@mui/material";

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
});

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

export const OverlayTypography = styled(Typography)({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
});

export const Overlay2Typography = styled(Typography)({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
});

export const DetailsTypography = styled(Typography)({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

export const TitleTypography = styled(Typography)({
  padding: "0 16px",
});

export const StyledCardActions = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});
