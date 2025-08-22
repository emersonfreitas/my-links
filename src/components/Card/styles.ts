import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  border-bottom: 1px solid #ddd;
`;

export const TextHeader = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;

  width: 500px;

  border: 1px solid #ddd;
  border-radius: 8px;

  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;
