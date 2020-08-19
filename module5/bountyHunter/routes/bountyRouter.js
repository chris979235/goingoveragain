const express= require("express")
const bountyRouter=express.Router()
const { v4: uuidv4 } = require('uuid');

const Bounties=[
  {firstName:'maul', lasName:'darth', living:true, bounty:100,type:'sith', _id: uuidv4()},
  {firstName:'sidious', lasName:'darth', living:true, bounty:100,type:'sith', _id: uuidv4()},
  {firstName:'luke', lasName:'skywalker', living:true, bounty:100,type:'jedi', _id: uuidv4()}
]
//get all
bountyRouter.get('/', (req,res) => {
  res.send(Bounties)
})
//get one
bountyRouter.get('/:bountyid', (req,res) => {
  const bountyID=req.params.bountyid
  const foundBounty=Bounties.find(bounty=>bounty._id===bountyID)
  res.send(foundBounty)
})
//query
bountyRouter.get('/search/type', (req,res) => {
const type=req.query.type
const filteredType=Bounties.filter(bounties=>bounties.type===type)
res.send(filteredType)
})

bountyRouter.post('/', (req,res)=>{
  const newbounty=req.body
  newbounty._id=uuidv4()
  Bounties.push(newbounty)
  res.send('succusfully sent new bounty')
})

bountyRouter.delete('/:bountyid', (req,res) => {
const BountyID=req.params.bountyid
const bountyIndex=Bounties.findIndex(bounty=>bounty._id===BountyID)
Bounties.splice(bountyIndex, 1)
res.send('succusfully deleted bounty')
})

bountyRouter.put('/:bountyid', (req,res)=>{
  const bountyId=req.params.bountyid
  const bountyIndex=Bounties.findIndex(bounty=>bounty._id===bountyId)
  const updatedBounty=Object.assign(Bounties[bountyIndex], req.body)
  res.send(updatedBounty)
})
module.exports=bountyRouter