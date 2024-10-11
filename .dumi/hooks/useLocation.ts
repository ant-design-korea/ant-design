import * as React from 'react';
import { useLocation as useDumiLocation } from 'dumi';

function clearPath(path: string) {
  return path.replace(/\/$/, '');
}

export default function useLocation() {
  const location = useDumiLocation();
  const { search } = location;

  const getLink = React.useCallback(
    (path: string, hash?: string | { ko: string }) => {
      let pathname = clearPath(path);

      if (search) {
        pathname = `${pathname}${search}`;
      }

      if (hash) {
        let hashStr: string;
        if (typeof hash === 'object') {
          hashStr = hash.ko;
        } else {
          hashStr = hash;
        }

        pathname = `${pathname}#${hashStr}`;
      }

      return pathname;
    },
    [search],
  );

  return {
    ...location,
    pathname: clearPath(location.pathname),
    getLink,
  };
}
