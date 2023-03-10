
const express = require('express');

const router = express.Router()

const usuarios = require('./usuarios');


router.use(express.json());

//testes
const users =[
    {id: 1, nome: 'jeff', email: 'jj@gmail'},
    {id: 2, nome: 'bruna',email: 'brubru@gmail'}
]






router.get('/' , async(req,res)=>{
    
    const users = await usuarios.findAll()
    
    res.send(users)
}) 


router.get('/:id' ,async(req,res)=>{
    const useId = req.params.id
    
    const user = await usuarios.findByPk(useId)
    
    
    res.send(user)
})
router.get('/emails' ,async(req,res)=>{
    const user = await usuarios.findAll()
    res.send(user)
})

router.put('/:id' ,(req,res)=>{
    res.send(`put id ${json.stingfy(req.body)}`)
})

router.post('/',async(req,res)=>{
    // res.send(` ${json.stingfy(req.body)}`)
    let novoUsuario = req.body;
    novoUsuario= await usuarios.create(req.body)
    res.send({message: 'usuário cadastrado!', user:novoUsuario})
})
router.delete('/:id' ,(req,res)=>{
    res.send(`put id ${req.params.id}`)
})



module.exports=router;