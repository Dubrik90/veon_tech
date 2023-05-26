import React, {FC} from 'react';
import {CaseType} from "../app/data";
import {Table, TableCaseWrapper, TableTitle, Tbody, TdL, TdR} from "./styled";

type TableCaseProps = {
    activeCase: CaseType
}

export const TableCase: FC<TableCaseProps> = ({activeCase}) => {
    return (
        <TableCaseWrapper>
            <TableTitle>
                BRIEF DESCRIPTION OF WEBSITE DEVELOPMENT
            </TableTitle>
            <Table>
                <Tbody>
                    {activeCase.tableData.map((t: any, index) => {
                        return <tr key={index}>
                            <TdL>{t.name}</TdL>
                            <TdR>{t.value}</TdR>
                        </tr>
                    })}
                </Tbody>
            </Table>
        </TableCaseWrapper>
    );
};

