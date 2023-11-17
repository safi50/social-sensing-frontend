import React from "react";
import {
  Table,
  TableHeader,
  HeaderRow,
  TableRow,
  TableCell,
  NewTag,
  Percentage,
  TableHeaderCellPrimary,
  TableHeaderCellSecondary,
  TrendIcon,
} from "./trending_table.styles";

const TrendingTable = () => {
  const hashtags = [
    { tag: "#PakvsBan", percentage: "30%", isNew: true },
    { tag: "#PakvsBan", percentage: "30%", isNew: false },
    { tag: "#PakvsBan", percentage: "30%", isNew: false },
    { tag: "#PakvsBan", percentage: "30%", isNew: false },
  ];

  return (
    <Table>
      <TableHeader>
        <HeaderRow>
          <TableHeaderCellPrimary>
            <TrendIcon src="/trend-icon.svg" />
            Trending Hashtags
          </TableHeaderCellPrimary>
          <TableHeaderCellSecondary>Last 24 hours</TableHeaderCellSecondary>
        </HeaderRow>
      </TableHeader>
      <tbody>
        {hashtags.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.tag}</TableCell>
            <TableCell>
              {item.isNew ? (
                <NewTag>New</NewTag>
              ) : (
                <Percentage>{item.percentage}</Percentage>
              )}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TrendingTable;
