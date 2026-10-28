const baseurl = "https://fakestoreapi.com";

export const postAPICall = async (payload) => {
    try{
        const url = baseurl + "/products";

    const option = {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(payload)
    }

    const response = await fetch(url,option)
    const responseData = await response.json()
    return responseData
    }

    catch(error){
        console.log("Error=====>", error)
    }
}