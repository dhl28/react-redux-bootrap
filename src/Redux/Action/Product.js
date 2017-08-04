/**
 * Created by admin on 2017/8/4.
 */
import {fetchPosts} from './Util';

export const loadData = (path, postData) => {
    return fetchPosts(path,postData)
}
