import axios from 'axios'

const instance = axios.create({
})

// Creates instance that sets auth token before request is being sent
instance.interceptors.request.use(async config =>{
    config.headers = {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
    return config;
})

export default {

    /**
     * Returns all videos
     * @returns {Promise<AxiosResponse<any>>}
     */
    getVideos(){
        return instance.get('/api/videos')
    },

    /**
     * Get video data
     * @param {string} id
     * @returns {Promise<AxiosResponse<any>>}
     */
    getVideo(id){
        return instance.get('/api/videos/'+id)
    },

    /**
     * Deletes video from database
     * @param {number} id
     * @returns {AxiosInstance}
     */
    deleteVideo(id){
        return instance.delete('/api/videos/'+id)
    },

    /**
     * Modifys video data
     * @param {number} id
     */
    modifyVideo(id, videoTitle, videoDescription, videoLink){
        return instance.patch('/api/videos/'+id, {
            videoTitle: videoTitle,
            videoDescription: videoDescription,
            videoLink: videoLink
        })
    },

    /**
     * Attempts to login user
     * @param {string} username
     * @param {string} password
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(credentials){
        return instance.post('/api/user/login', credentials)
    },

    /**
     * Checks user
     * @returns {Promise<AxiosResponse<any>>}
     */
    checkUser(config){
        return instance.post('/api/user/check', {}, config)
    },

    /**
     * @param oldIndex
     * @param newIndex
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeVideoSequence(oldIndex, newIndex){
        return instance.post('/api/videos/'+oldIndex+'/to/'+newIndex)
    },

    /**
     * Uploads new video
     */
    addVideo(data){
        return instance.post('/api/videos', data)
    }

}
