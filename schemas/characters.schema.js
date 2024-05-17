import mongoose from 'mongoose';


const charSchema = new mongoose.Schema({


    character_id: {
      type: Number, 
    
      unique: true, 
    },
    name: {
      type: String, 
      required: true, 
      unique: true, 
    },
    health: {
      type: Number, 
      default: 500
    },
    power: {
      type: Number, 
      default: 100
    },
  
  });
  
  let count = 1;
  charSchema.statics.counter = async function(){

    return count++;


  }

  charSchema.pre('save', async function(next){

      if(this.isNew)
        {
          this.character_id = await Chars.counter();
        } 
        
        
           next();
        

  })

  const Chars  = mongoose.model('Chars', charSchema);
  export default Chars;