export const redirectUrl = async ( req, res )=>{
   try {


       const { shorturl } = req.params;




       const exist = await ShortURL.findOne({shortCode:shorturl });


       if(!exist){
           console.error("Short URL not found");
           return res.status(404).json({ status: "NOT_FOUND", message: "Short URL not found" });
       }


       res.redirect(exist.originalUrl);




   }catch(error){
       console.error("Error in getting user profile", error.message);
       return res.status(500).json({ status: "INTERNAL_SERVER_ERROR", message: "Error in getting user profile" });
   }
}
