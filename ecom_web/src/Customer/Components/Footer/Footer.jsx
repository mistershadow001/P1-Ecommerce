import { Typography } from "@mui/material";


function Footer(){
    return(
        <div className="bg-black text-white h-40px w-full text-center " container >
            <div>
                <Typography className="pb-5" variant="h6"> @ Leo Clothing pvtl </Typography>
                <button className="pb-5 cursor-pointer"> About</button>

            </div>
        </div>
    );
}

export default Footer;