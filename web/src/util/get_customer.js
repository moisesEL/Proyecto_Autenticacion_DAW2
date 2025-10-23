async function get_customer () {
    let url = 'http://localhost:8080/CRUDBankServerSide/webresources/customer';
    try {
        fetch(url, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
    } catch (err) {
        console.log(err)
    }
}

export default get_customer;