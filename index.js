const  express = require('express')
const cors = require('cors')
const route  = require('./router/route')
const app = express()

//REST API HTTP VERBS
//GET => Mengambil nilai
//POST => Menambah data
//PUT => EDIT data
//DELETE=> Menghapus data
//localhost/siswa.php?id=111&nama=111, getSiswa
//PERANCANGAN END POINT
const port = 4000

app.use(cors())
app.use(express.json())
app.use('/siswa',route)

app.listen(port,()=>{
    console.log(`Server berjalan pada port ${port}`)
})