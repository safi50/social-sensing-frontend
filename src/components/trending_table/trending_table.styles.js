import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #fdfdff;
`;

export const HeaderRow = styled.tr`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #f0f0f0;
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  font-size: 1.4rem;
  &:first-child {
    font-weight: bold;
  }
`;
export const TrendIcon = styled.img`
  height: 3.5rem;
  border-radius: 100%;
  object-fit: cover;
  background-color: #7aaf01;
  filter: invert(1);
  margin-right: 1rem;
`;
export const TableHeaderCellPrimary = styled.th`
  padding: 1rem;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
export const TableHeaderCellSecondary = styled.th`
  padding: 1rem;
  text-align: right;
  font-size: 1.4rem;
  font-weight: 400;
  color: grey;
`;

export const NewTag = styled.span`
  background-color: #6934f7;
  color: white;
  border-radius: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
`;

export const Percentage = styled.span`
  color: #888;
`;
