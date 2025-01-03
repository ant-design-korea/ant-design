import type { FC } from 'react';
import * as React from 'react';
import type { TableProps } from 'antd';
import { Table } from 'antd';
import { createStyles } from 'antd-style';
import { getDesignToken } from 'antd-token-previewer';
import tokenMeta from 'antd/es/version/token-meta.json';

import ColorChunk from '../ColorChunk';

type TokenTableProps = {
  type: 'seed' | 'map' | 'alias';
  lang: 'ko';
};

export type TokenData = {
  name: string;
  desc: string;
  type: string;
  value: any;
};

const defaultToken = getDesignToken();

const locales = {
  ko: {
    token: '토큰 이름',
    description: '설명',
    type: '타입',
    value: '기본값',
  },
};

const useStyle = createStyles(({ token, css }) => ({
  codeSpan: css`
    margin: 0 1px;
    padding: 0.2em 0.4em;
    font-size: 0.9em;
    background: ${token.siteMarkdownCodeBg};
    border: 1px solid ${token.colorSplit};
    border-radius: ${token.borderRadiusSM}px;
    font-family: monospace;
  `,
}));

export function useColumns(): Exclude<TableProps<TokenData>['columns'], undefined> {
  const locale = locales.ko;
  const { styles } = useStyle();

  return [
    {
      title: locale.token,
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: locale.description,
      key: 'desc',
      dataIndex: 'desc',
    },
    {
      title: locale.type,
      key: 'type',
      dataIndex: 'type',
      render: (_, record) => <span className={styles.codeSpan}>{record.type}</span>,
    },
    {
      title: locale.value,
      key: 'value',
      render: (_, record) => {
        const isColor =
          typeof record.value === 'string' &&
          (record.value.startsWith('#') || record.value.startsWith('rgb'));
        if (isColor) {
          return <ColorChunk value={record.value}>{record.value}</ColorChunk>;
        }
        return typeof record.value !== 'string' ? JSON.stringify(record.value) : record.value;
      },
    },
  ];
}

const TokenTable: FC<TokenTableProps> = ({ type }) => {
  const columns = useColumns();

  const data = React.useMemo<TokenData[]>(
    () =>
      Object.entries(tokenMeta.global)
        .filter(([, meta]) => meta.source === type)
        .map(([token, meta]) => ({
          name: token,
          desc: meta.desc,
          type: meta.type,
          value: defaultToken[token as keyof typeof defaultToken],
        })),
    [type],
  );

  return <Table dataSource={data} columns={columns} pagination={false} bordered />;
};

export default TokenTable;
