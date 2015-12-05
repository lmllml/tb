'use strict';

import fetch from './utils/fetch';

const HOST = 'http://10.4.241.122:8080';

let Service = {
    login: (misId) => fetch(HOST + `/api/login?misId=${misId}`),
    logout: (misId) => fetch(HOST + `/api/logout`),

    getAccount: () => fetch(HOST + `/api/my/account`),

    getIdeaList: (search, page, size) => fetch(HOST + `/api/idea/list?search=${search}&page=${page}&size=${size}`),
    getIdeaDetail: (id) => fetch(HOST + `/api/idea/${id}`),
    getIdeaCommentList: (id, page, size) => fetch(HOST + `/api/idea/comment/list?ideaId=${id}&page=${page}&size=${size}`),
    getMyRelationIdeas: () => fetch(HOST + `/api/my/idea/myRelationIdeas`),
    getMyIdeas: () => fetch(HOST + `/api/my/idea/list`),
    praiseIdea: (id) => fetch(HOST + `/api/idea/${id}/praise`),
    participateIdea: (id) => fetch(HOST + `/api/idea/${id}/participate`), 
    submitIdea: (time, content, person) => fetch(HOST + `/api/idea/create?time=${time}&content=${content}&targetNum=${person}`),
    submitIdeaComment: (id, text) => fetch(HOST + `/api/idea/comment/create?ideaId=${id}&content=${text}`),

    getActivityList: (search, page, size) => fetch(HOST + `/api/activity/list?search=${search}&page=${page}&size=${size}`),
    getActivityDetail: (id) => fetch(HOST + `/api/activity/${id}`),
    getActivityCommentList: (id, page, size) => fetch(HOST + `/api/activity/comment/list?activityId=${id}&page=${page}&size=${size}`),
    getMyActivityList: () => fetch(HOST + `/api/my/activity/list`),
    praiseActivity: (id) => fetch(HOST + `/api/activity/${id}/praise`),
    participateActivity: (id) => fetch(HOST + `/api/activity/${id}/participate?mobile=`),
    submitActivityComment: (id, text) => fetch(HOST + `/api/activity/comment/create?activityId=${id}&content=${text}`),
    startActivity: (id) => fetch(HOST + `/api/activity/${id}/start`),
    endActivity: (id) => fetch(HOST + `/api/activity/${id}/end`),  
    submitActivity: (id, brief, content, location, startTime, endTime) => {
        return fetch(HOST + `/api/activity/${id}/submit?brief=${brief}&content=${content}&location=${location}&startTime=${startTime}&endTime=${endTime}`)
    }
};

export default Service;