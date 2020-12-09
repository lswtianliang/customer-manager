import { PaginationType } from '../types';

//转换查询接口所需参数格式
export function combineCondition(searchKey: string, pagination: PaginationType) {
  const body = {
    sort: {
      orders: [
        {
          direction: 'DESC',
          property: 'id',
        },
      ],
    },
    params: {
      name: searchKey,
    },
    pageInfo: {
      needTotal: true,
      pageSize: pagination.pageSize,
      pageNumber: pagination.current,
    },
  };
  return { body };
}
