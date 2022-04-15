# PP - Wonder

by : Edwin Satya Yudistira

### How to Access

- git clone : https://github.com/edwinsatya/PP-Wonder
- npm install
- npm run start

### Api

Iam using randomuser api for develop this project

- https://randomuser.me/api/

  #### List Query Api

  - `page=1` for pagination
  - `results=10` for total data per page
  - `pageSize=10` for total data per page
  - `keyword="test"` for searching

  ##### All query run well in network, but from documentation randomuserapi , no have query like (`-pageSize`, `-keyword`)

  #### For total page i give default value 10, because from response randomuserapi in Object Info no have key totalPage

### Feature

- Sort by date (`ASC` or `DESC`)

### Styling

- Material UI : https://mui.com/material-ui/getting-started/installation/

### Deployment

- Deploy in vercel : https://pp-wonder.vercel.app/
