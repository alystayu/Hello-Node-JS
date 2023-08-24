const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

// wajib digunakan ketika dipergunakan untuk frontend
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// ini adalah API / end-point
app.get("/aleen", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode,
        data: {
            nama: 'Alen',
            kelas: 'XI RPL 1',
            organisasi: {
                OSIS: 'Ketua',
                PMR: 'Wakil'
            },
            nama1: 'Alea',
            kelas1: 'XI RPL 2'
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.get('/profil/:name/:age', (req,res) => {

    console.log(req)

    let name = req.params.name
    let age = req.params.age
    let address = req.body.alamat

    let response = {
        nama: name,
        umur: age,
        alamat: address
    }

    res.json(response)
})

app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    res.json(response)
})

console.log('tes');
app.listen(8000, ()=> {
    console.log("server run on port 8000");
})