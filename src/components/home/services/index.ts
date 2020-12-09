import { apolloQuery } from '@utils/request';

type PayloadType = Record<string, any>;
type ResponseType = Record<string, any>;

function deal(sql: string, payload: PayloadType): Promise<ResponseType> {
  return apolloQuery(sql, payload);
}

// 获取订单分页列表
export function getCustomers(payload: PayloadType): Promise<ResponseType> {
  return deal(
    `mutation example($body: demoCustomerCustomerInfoSearchInputBody) {
      demoCustomerCustomerInfoSearch(body: $body) {
        code
        data {
          content {
            address
            code
            customerTypeId
            id
            name
            phoneNumber
          }
          pageInfo {
            needTotal
            pageNumber
            pageSize
            pages
            total
          }
        }
        message
        status
      }
   }
  `,
    payload,
  );
}

export function addCustomer(payload: PayloadType): Promise<ResponseType> {
  return apolloQuery(
    `mutation example($body: demoCustomerCustomerInfoPostInputBody) {
        demoCustomerCustomerInfoPost(body: $body) {
          code
          data {
            content
          }
          message
          status
        }
      }
    `,
    payload,
  );
}

export function editCustomer(payload: PayloadType): Promise<ResponseType> {
  return apolloQuery(
    `mutation example($body: demoCustomerCustomerInfoUpdatePostInputBody) {
      demoCustomerCustomerInfoUpdatePost(body: $body) {
        code
        data {
          content
        }
        message
        status
      }
    }
    `,
    payload,
  );
}

export function getCustomer(payload: PayloadType): Promise<ResponseType> {
  return apolloQuery(
    `query example($path: demoCustomerCustomerCustomerInfoGetInputPath) {
      demoCustomerCustomerCustomerInfoGet(path: $path) {
        code
        data {
          content {
            address
            code
            customerTypeId
            id
            name
            phoneNumber
          }
        }
        message
        status
      }
    }
    `,
    payload,
  );
}

export function deleteCustomer(payload: PayloadType): Promise<ResponseType> {
  return apolloQuery(
    `mutation example ($body: demoCustomerCustomerInfoDeletePostInputBody) {
      demoCustomerCustomerInfoDeletePost(body: $body) {
        code
        data{
          content
        }
        message
        status
      }
    }
    `,
    payload,
  );
}
