import axios from "axios";

export default axios.create({
    baseURL: 'https://mailing.list.clarkmiller.ca/api/'
});