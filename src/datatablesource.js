export const userColumns = [
    
    {field: "id", headerName: "ID", width: 70},
    {field: "user", headerName:"User", width:230 , renderCell:(params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar"/>
            {params.row.username}
          </div>
        )
    }},
    {field: "email", headerName: "Email", width: 230},
    {field: "age", headerName: "Age", width: 30},
    {field: "status", headerName: "Status", width: 160, renderCell:(params) => {
        return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        
    }},



]

export const userRows = [
    {
        id: 1,
        username: "Jon Snow",
        img: "https://www.repstatic.it/content/nazionale/img/2022/06/17/084340341-4c486d71-8b70-4148-8c22-66ddeaac4c64.jpg",
        status: "active",
        email:"1snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://www.repstatic.it/content/nazionale/img/2022/06/17/084340341-4c486d71-8b70-4148-8c22-66ddeaac4c64.jpg",
        status: "passive",
        email:"2snow@gmail.com",
        age: 42
    },
    {
        id: 3,
        username: "Cersei Lannister",
        img: "https://upload.wikimedia.org/wikipedia/en/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg",
        status: "pending",
        email:"3snow@gmail.com",
        age: 50
    },
    {
        id: 4,
        username: "Arya Stark",
        img: "https://www.repstatic.it/content/nazionale/img/2022/06/17/084340341-4c486d71-8b70-4148-8c22-66ddeaac4c64.jpg",
        status: "active",
        email:"4snow@gmail.com",
        age: 21
    },
    {
        id: 5,
        username: "Daenerys Targaryen",
        img: "https://www.repstatic.it/content/nazionale/img/2022/06/17/084340341-4c486d71-8b70-4148-8c22-66ddeaac4c64.jpg",
        status: "passive",
        email:"5snow@gmail.com",
        age: 43
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://www.repstatic.it/content/nazionale/img/2022/06/17/084340341-4c486d71-8b70-4148-8c22-66ddeaac4c64.jpg",
        status: "active",
        email:"6snow@gmail.com",
        age: 45
    },
    {
        id: 7,
        username: "Ferrara Clifford",
        img: "https://www.hospitalitynet.org/picture/a_153073430.jpg?t=20210526144050",
        status: "pending",
        email:"7snow@gmail.com",
        age: 44
    },
    {
        id: 8,
        username: "Rossini Frances",
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkHfCg8yPg8xkrL7u-jTDu_cvBtmCH1ZBo3rAKwtb09dQ6IEKY",
        status: "passive",
        email:"8snow@gmail.com",
        age: 22
    },
    {
        id: 9,
        username: "Harvey Roxie",
        img: "https://m.media-amazon.com/images/I/61gTDfeQJgL._AC_UF894,1000_QL80_.jpg",
        status: "active",
        email:"2snow@gmail.com",
        age: 23
    },
]