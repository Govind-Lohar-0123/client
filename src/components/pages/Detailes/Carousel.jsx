import { Box, styled, Button, List, ListItem } from "@mui/material"
import { useEffect } from 'react';
import { carouselImg } from "../partials/data";
import v1 from "../../videos/v1.mp4";
const CarouselComponent = styled(Box)(({ theme }) => ({
    width: "70px",

    "li": {
        widht: "64px !important", height: "64px !important",
        border: "1px solid #f0f0f0",
        padding: 5,
        position: "absolute",

    },
    "li:hover": {
        border: "2px solid  #2874f0",
    },
    "img": {
        display: "block",
        ObjectFit: "contain",
        height: "100%",
        widht: "100%",
        margin: "auto !important"

    },
    "li>div": {
        width: "100%", height: "100%",



    },
    ".carousel-btn  button": {
        display: "block",
        // position: "absolute";
        width: " 100%",
        height: "24px",
        // left: 0;
        textAlign: "center",
        padding: "0px",

        verticalAlign: "middle",
        boxShadow: "0 0 10px -1px rgba(0, 0, 0, .3)",
        backgroundColor: "hsla(0, 0%, 100%, .98) !important",
        cursor: "pointer",
        border: "1px solid #f0f0f0",
        position: "absolute",
        "svg": { transform: "rotate(90deg)" },


    },
    "ul": {
        height: "100%",
        overflow: "hidden",
    },

    "button:first-child": {
        top: 0
    },
    "button:last-child": {
        bottom: 0
    },
    position: "relative"

}))





export default function Carousel({ url, setUrl }) {


    useEffect(() => {

        const slides = document.querySelectorAll(".carousel li");
        slides.forEach((slide, idx) => { slide.style.top = `${idx * 65}px` });
    }, [])

    useEffect(() => {

        const buttons = document.querySelectorAll(".carousel-btn button");
        const slides = document.querySelectorAll(".carousel li");


        buttons.forEach((button, idx) => {
            button.addEventListener("click", (e) => {


                slides.forEach((slide) => {
                    let val = parseInt(slide.style.top);

                    let top = (idx == 0) ? (val + 65) + "px" : (val - 65) + "px";
                    slide.style.top = top;



                })
                if (idx == 1 && slides[slides.length - 1].style.top == "390px") buttons[1].style.display = "none";
                else buttons[1].style.display = "block";
                if (idx == 0 && slides[0].style.top == "0px") buttons[0].style.display = "none";
                else buttons[0].style.display = "block";
            })

        })
    }, [])

    return (<>





        <CarouselComponent className="carousel">
            <List className="text-center" position="relative" >
                {
                    carouselImg.map((img, idx) => {
                        return (
                            <ListItem key={idx} onMouseEnter={() => setUrl({ src: img.url, isImg: true })} >
                                <Box>
                                    <img style={{ width: "70%" }} src={img.url} />
                                </Box>
                            </ListItem>
                        )

                    })
                }
                <ListItem key={1} onMouseEnter={() => setUrl({ src: v1, isImg: false })} >
                    <Box>
                        <video className="d-block w-100 h-100" controls autoPlay loop><source src={v1} className="d-block w-100 h-100" /></video>
                    </Box>
                </ListItem>



                <Box className="carousel-btn">
                    <Button style={{ display: "none" }}><svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" ></path></svg></Button>
                    <Button ><svg width="8" data="down" style={{ transform: "rotate(270deg)" }} height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" ></path></svg></Button>
                </Box >
            </List>

        </CarouselComponent >


    </>)
}