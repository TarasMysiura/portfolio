import styled from "styled-components";
import { SvgSelector } from "./../../img/icons/SetSelector";

export const SkillListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 20px;

  .name-skill-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  .name-skill-title {
   
  }

  .name-skill-icon {
  }
`;

export const SkillIconStyles = styled.div`
  width: 40px;
`;
