import axios from "axios";

export default axios.create({
    baseURL: 'http://mailing.list.clarkmiller.ca/api/'
});