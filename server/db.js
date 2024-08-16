const mongoose = require("mongoose"); //import Mongoose

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
} 
//set up Schema and model
const SkillSchema = new mongoose.Schema({
    name:String
  });
  const Skill = mongoose.model("Skill", SkillSchema);
  
async function getSkill() {
  await connect();
  return await Skill.find({}).sort({}); //return array for find all
}
module.exports = {
  getSkill,
};