/**
 * @refernece https://dev.to/sobiodarlington/better-error-handling-with-async-await-2e5m
 * @description ### Returns Go / Lua like responses(data, err)
 * when used with await
 *
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.all([req1, req2, req3])
 * - Example response [ [data1, data2, data3], undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.race([req1, req2, req3])
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ data, undefined ]
 * @returns {Promise} [ undefined, Error ]
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function asyncer(promise: Promise<any>): Promise<any> {
  return promise.then((response) => [response, undefined]).catch((error) => Promise.resolve([undefined, error]));
}
