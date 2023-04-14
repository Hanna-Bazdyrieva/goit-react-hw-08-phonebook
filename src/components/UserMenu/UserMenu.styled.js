import styled from 'styled-components';

export const Email = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  margin: 0;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
`;
export const Welcome = styled(Email)`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  margin: 0;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Button = styled.button`
margin-left: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes[0]}px;
  height: 40px;


  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  background-color: ${p => p.theme.colors.delete};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  transform: scale(1);
  transition: transform ${p => p.theme.transitions.ease},
    box-shadow ${p => p.theme.transitions.ease};
  :hover {
    box-shadow: ${p => p.theme.shadows.hover};
  }
  :active {
    transform: scale(0.95);
  }
 `;