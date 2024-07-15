const home = async (req, res) => {
    try {
        res.status(200).send('My first Server');
    } catch (error) {
        console.log(error);
    }
};

const register =async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({message:req.body});
    } catch (error) {
        res.status(400).send('Error');
    }
};
const show=async(req,res)=>{
    try{
        console.log(req.body)
        res.status(400).send('bb')
    }catch(error){
        res.status(400).send('bb')

    }
}

module.exports = { home, register,show   };
