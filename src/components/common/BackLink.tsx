import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";

interface BackLinkProps {
  pathTo: string;
}

export const BackLink = ({ pathTo }: BackLinkProps) => {
  return (
    <BackLinkLayout>
      <Link to={pathTo}>
        <CustomArrowBackIcon />
      </Link>
    </BackLinkLayout>
  );
};

const BackLinkLayout = styled.div`
  position: absolute;

  left: 0px;
  top: 5px;
`;

const CustomArrowBackIcon = styled(ArrowBackIcon)`
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    opacity: 0.8;
  }
`;
