/**
 * Created by thh on 2018/1/31.
 */
import {isNotEmpty} from './util.js';

/* 中断未完成的请求 */
export default function abortRequest() {
  if(isNotEmpty(window.ajaxList)) {
    for(let key in window.ajaxList) {
      window.ajaxList[key].abort();
    }
  }
}
