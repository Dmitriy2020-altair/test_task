import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 20px;
  background-color: ${({ bg }) => bg || '#63d6f5'};
  color: ${({ color }) => color || '#333'};
  transition: 0.2s linear;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  &:active {
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #f59595;
  }
`