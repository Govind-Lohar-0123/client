import { Box, styled, Button, List, ListItem } from "@mui/material"
import { useEffect } from 'react';

const CarouselComponent = styled(Box)(({ theme }) => ({
    width: "70px",

    "li": {
        widht: "64px !important", height: "64px !important",
        border: "1px solid #f0f0f0",
        padding: 5,
        position: "absolute",

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

const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "block"
}))

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Carousel() {

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
            <List className="text-center" position="relative">
                <ListItem>
                    <Box>
                        <img style={{ width: "70%" }} src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70&amp;crop=false" />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box>
                        <img style={{ width: "50%" }} src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/m/y/m6-pro-5g-mzb0eprin-poco-original-imags3e7d2ezqgsr.jpeg?q=70&crop=false" />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box>
                        <img class="_0DkuPH" src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/k/0/4/m6-pro-5g-mzb0eprin-poco-original-imags3e7hpd5t7hq.jpeg?q=70&amp;crop=false" />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box>
                        <img class="_0DkuPH" src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/h/w/-original-imags5yc5hgkscbr.jpeg?q=70&amp;crop=false" />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box>
                        <img class="_0DkuPH" src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/q/l/m6-pro-5g-mzb0eprin-poco-original-imags3e7zrygy3hh.jpeg?q=70&amp;crop=false" />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box>
                        <img class="_0DkuPH" src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/n/6/m6-pro-5g-mzb0eprin-poco-original-imags3e7vqgz7ufv.jpeg?q=70&amp;crop=false" />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box style={{ height: "15%" }}>
                        <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/0/1/m6-pro-5g-mzb0eprin-poco-original-imags3e7ey5mq6gx.jpeg?q=70&amp;crop=false" />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box style={{ height: "15%" }}>
                        <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/k/n/m6-pro-5g-mzb0eprin-poco-original-imags3e7nhhu7zgz.jpeg?q=70&amp;crop=false" />
                    </Box>
                </ListItem>
                <Box className="carousel-btn">
                    <Button style={{display:"none"}}><svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class=""></path></svg></Button>
                    <Button ><svg width="8" data="down" style={{ transform: "rotate(270deg)" }} height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" ></path></svg></Button>
                </Box >
            </List>

        </CarouselComponent >


    </>)
}