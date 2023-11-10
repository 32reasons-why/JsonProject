fetch ('./data.json')
    .then(resp => resp.json())
    .then(data =>{
     const dataList = document.getElementById('data-list');

     // Let's get our items and create a list from data source
     data.forEach(item => {
        const itemList = document.createElement('li');    // document is bbreviation for HTML document
        itemList.innerHTML= `<strong>User  ID: ${item.id}</strong><br>
        <strong>Name:</strong> ${item.name}
        <br><strong>Email:</strong> ${item.email}`
        //console.log(itemList)
        dataList.appendChild(itemList)
     });
    })
    .catch(error=>{
        console.error('Error loading data from data source', error);
    })
