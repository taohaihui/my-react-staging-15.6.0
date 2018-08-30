/**
 * Created by thh on 2018/6/28.
 */
import reqPromise from '../utils/reqPromise';

export function login(data) {
  return reqPromise({
    url: '/login.do',
    method: 'post',
    data: data
  });
}