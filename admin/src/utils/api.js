import axios from "axios";

export const Fetchdata = async (url, token) => {
    try {
        const { data } = await axios.get("http://localhost:2000" + url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

export const PostData = async (url, formdata, token) => {
    const res = await axios.post("http://localhost:2000" + url, formdata, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res;
}
export const Editdata = async (url, updateddata) => {
    const { res } = await axios.put("http://localhost:2000" + url, updateddata);
}

export const DeleteCat = async (url) => {
    const { res } = await axios.delete("http://localhost:2000" + url);
    return res;
}