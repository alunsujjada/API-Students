const conn = require('../config/connection')

exports.getSiswa = async(req,res) =>{
    let result = []
    try{
        let sql = `select * from tbl_siswa`
        conn.query(sql,(err,data)=>{
            if(err) throw err
            res.json({
                status:true,
                msg : 'Successfull',
                result : data
            })
        })
    }
    catch(err){
        return res.json(
            {
                status:false,
                msg : 'Failed load data'
            }
        )
    }
}

exports.insertSiswa = async(req,res) =>{
    
    try{

        let nama = req.query.nama
        let umur =  req.query.umur
        let alamat = req.query.alamat

        let sql = `insert into tbl_siswa (nama,umur,alamat) values(?,?,?)`
        let values = [nama,umur,alamat]
        conn.query(sql,values,(err,data)=>{
            if(err) throw err
            if(data.affectedRows > 0)
            res.json({
                status:true,
                msg : 'Successfull Insert'
            })
        })
    }
    catch(err){
        return res.json(
            {
                status:false,
                msg : 'Failed load data'
            }
        )
    }
}

exports.updateSiswa = async(req,res) =>{
    
    try{
        let id = req.params.id
        let nama = req.query.nama
        let umur =  req.query.umur
        let alamat = req.query.alamat

        let sql = `update tbl_siswa set nama=?,umur=?,alamat=? where id=?`
        let values = [nama,umur,alamat,id]
        conn.query(sql,values,(err,data)=>{
            if(err) throw err
            if(data.affectedRows > 0)
            res.json({
                status:true,
                msg : 'Successfull Updated'
            })
        })
    }
    catch(err){
        return res.json(
            {
                status:false,
                msg : 'Failed load data'
            }
        )
    }
}
//module.exports = getSiswa