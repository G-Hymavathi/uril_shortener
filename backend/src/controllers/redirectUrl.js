export const redirectUrl = async ( req, res )=>{
   try {


      const { shorturl } = req.params;
    console.log("Redirect request received for:", shorturl);

    if (!shorturl) {
      return res.status(400).json({ status: "BAD_REQUEST", message: "Missing short URL" });
    }

    const exist = await ShortURL.findOne({ shortCode: shorturl });
    console.log("Database lookup result:", exist);

    if (!exist) {
      return res.status(404).json({ status: "NOT_FOUND", message: "Short URL not found" });
    }


       return res.redirect(exist.originalUrl);




   }catch(error){
       console.error("Error in getting user profile", error.message);
       return res.status(500).json({ status: "INTERNAL_SERVER_ERROR", message: "Error in getting user profile" });
   }
}
