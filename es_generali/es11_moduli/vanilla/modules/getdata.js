import buildTable from "./buildtable";

const getData = async (isLoaded) => {

    let path = 'https://reqres.in/api/users'
    
    try {
        const response = await axios.get(path, {
        headers: {
            'x-api-key': 'reqres-free-v1',
        }
        });
        console.log('DATA:', response.data);
        buildTable(response.data);
        isLoaded = false;
    }
    catch(error)
    {
        console.log("error: " + error);
        isLoaded = false;
    }
}

export default getData;