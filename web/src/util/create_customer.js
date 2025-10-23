async function create_customer (data) {
    let url = 'http://localhost:8080/CRUDBankServerSide/webresources/customer';
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => console.log(response))
    } catch (err) {
        console.log(err)
    }
}

export default create_customer;