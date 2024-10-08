import { Box, Grid, Link, styled, Typography, List, ListItem } from "@mui/material";



export default function NavList({ items }) {


    return (
        <>



            <Box className=" ">
                <Box className=" text-muted mt-3" style={{ fontSize: "12px" }} >
                    <List className="d-flex align-item-center gap-3 p-0 m-0" style={{ justifyContent: "flex-start" }}>
                        {
                            items.map((text, idx) => {
                                if (idx != Array.length - 1)
                                    return (
                                        <>
                                            <ListItem className="px-0 py-0 w-auto" key={idx}><Link style={{ color: "#878787" }}>{text} </Link></ListItem>
                                            <ListItem className="px-0  py-0 w-auto"><Link style={{ color: "#878787", transform: "rotate(180deg)", }}><svg width="5" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" ></path></svg></Link></ListItem>

                                        </>
                                    )
                                else {
                                    return <ListItem className="px-0 py-0 w-auto" key={idx}><Link style={{ color: "#878787" }}>{text} </Link></ListItem>

                                }

                            })
                        }


                    </List>
                </Box>
            </Box>

        </>)
}