import express from 'express';
import Chars from '../schemas/characters.schema.js';


const router = express.Router();

/** 캐릭터 등록 **/
// localhost:4000/
router.post('/chars', async (req, res) => {
  const { name, } = req.body;


  const chars = await Chars.find({ name }).exec();
  if (chars.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: '이미 존재하는 아이디입니다.' });
  }


  const createdChars = await Chars.create({
   
    name
   
  });

  return res.status(201).json({ chars: createdChars });
});

// 캐릭터 조회

router.get('/chars/:charId', async (req,res) =>{
  
    const charId = req.params.charId;

    const character = await Chars.findOne({character_id:charId}).exec();

    if(character)

      return res.status(200).json({

        name: character.name,
        health: character.health,
        power: character.power,

       })

     else
     {
     return res.status(400).json({ errorMessage: '캐릭터가 없습니다' });
     }

});



router.delete('/chars/:charId', async (req,res) =>{
  
  const charId = req.params.charId;
  const character = await Chars.deleteOne({character_id:charId}).exec();

  return res.status(200).json({ message: '삭제되었습니다' });
});








export default router;