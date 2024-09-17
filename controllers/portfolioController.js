const sendEmailController = (req, res) => {
    try {
        return res.status(200).send({
            success:true,
            message:"successful",
            
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"send email api error",
            error
        })
        
    }
}

module.exports = {sendEmailController}